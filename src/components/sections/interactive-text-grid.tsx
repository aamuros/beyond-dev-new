"use client";

import { useEffect, useRef } from "react";

type TrailPoint = {
  x: number;
  y: number;
};

export default function InteractiveTextGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;

    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = 150;
    const rows = 56;
    const ambientSequence = ["-", ":", "+", "*", "#"];

    const trail: TrailPoint[] = [];
    const maxTrailLength = 8;

    let animationFrameId = 0;
    let resizeFrameId = 0;
    let width = 0;
    let height = 0;
    let isVisible = true;

    const resizeCanvas = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const scheduleResize = () => {
      cancelAnimationFrame(resizeFrameId);
      resizeFrameId = requestAnimationFrame(resizeCanvas);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      trail.unshift({ x, y });

      if (trail.length > maxTrailLength) {
        trail.pop();
      }
    };

    const render = (time: number) => {
      if (!isVisible) return;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const usableWidth = width * 0.9;
      const spacingX = usableWidth / cols;
      const spacingY = spacingX * 1.6;
      const totalWidth = cols * spacingX;
      const totalHeight = rows * spacingY;
      const halfWidth = totalWidth / 2;
      const halfHeight = totalHeight / 2;
      const startX = centerX - halfWidth;
      const startY = centerY - halfHeight;
      const baseFontSize = spacingX * 1.5;

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < cols; i += 1) {
        for (let j = 0; j < rows; j += 1) {
          const x = startX + i * spacingX;
          const y = startY + j * spacingY;
          const dx = x - centerX;
          const dy = y - centerY;
          const nx = dx / halfWidth;
          const ny = dy / halfHeight;
          const bulgeStrengthX = 0.03;
          const bulgeStrengthY = 0.08;
          const distortX = 1 + bulgeStrengthX * Math.cos((ny * Math.PI) / 2);
          const distortY = 1 + bulgeStrengthY * Math.cos((nx * Math.PI) / 2);
          const finalX = centerX + dx * distortX;
          const finalY = centerY + dy * distortY;
          const edgeDistance = Math.max(Math.abs(nx), Math.abs(ny));
          const fontScale = Math.max(0.4, 1 - edgeDistance * 0.25);

          ctx.font = `${baseFontSize * fontScale}px monospace`;

          let charToDraw = "-";
          let charOpacityIndex = 0;
          const noise =
            Math.sin(i * 0.08 + time * 0.0002) +
            Math.cos(j * 0.1 + time * 0.00015) +
            Math.sin((i - j) * 0.04 - time * 0.00025);

          if (noise > 1.2) {
            const normalized = (noise - 1.2) / 1.5;
            const index = Math.min(4, Math.floor(normalized * 5));

            charToDraw = ambientSequence[index];
            charOpacityIndex = index;
          }

          for (let t = 0; t < trail.length; t += 1) {
            const tx = trail[t].x;
            const ty = trail[t].y;
            const distX = Math.abs(finalX - tx);
            const distY = Math.abs(finalY - ty);

            if (distY < spacingY * 1.5 && distX < 60) {
              charToDraw = "%";
              charOpacityIndex = 5;
              break;
            }
          }

          const opacity = 0.15 + charOpacityIndex * 0.14;

          ctx.fillStyle = `rgba(170, 170, 170, ${opacity})`;
          ctx.fillText(charToDraw, finalX, finalY);
        }
      }

      if (trail.length > 0) {
        trail.pop();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const startAnimation = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    const stopAnimation = () => {
      cancelAnimationFrame(animationFrameId);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(scheduleResize);
    resizeObserver.observe(parent);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      {
        threshold: 0.05,
      },
    );

    intersectionObserver.observe(parent);

    window.addEventListener("resize", scheduleResize);
    window.addEventListener("mousemove", handleMouseMove);

    startAnimation();

    return () => {
      stopAnimation();
      cancelAnimationFrame(resizeFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", scheduleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 block h-full w-full bg-black"
      aria-hidden="true"
    />
  );
}
