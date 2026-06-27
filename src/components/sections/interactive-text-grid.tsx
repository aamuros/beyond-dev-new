"use client";

import { useEffect, useRef } from "react";

type TrailPoint = {
  x: number;
  y: number;
  time: number;
};

export default function InteractiveTextGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;

    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = 135;
    const rows = 65;
    const ambientSequence = ["-", ":", "+", "*", "#"];

    const trail: TrailPoint[] = [];
    const mouse = { x: -1000, y: -1000 };
    const lastMouse = { x: -1000, y: -1000 };
    let hasMouse = false;

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

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      hasMouse = true;
    };

    const render = (time: number) => {
      if (!isVisible) return;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const usableWidth = width * 0.9;
      const spacingX = usableWidth / cols;
      const spacingY = spacingX * 1.18;
      const totalWidth = (cols-1) * spacingX;
      const totalHeight = (rows-1) * spacingY;
      const halfWidth = totalWidth / 2;
      const halfHeight = totalHeight / 2;
      const startX = centerX - halfWidth;
      const startY = centerY - halfHeight;
      const baseFontSize = spacingX * 1.7;

      if (hasMouse && (mouse.x !== lastMouse.x || mouse.y !== lastMouse.y)) {
        trail.unshift({
          x: mouse.x,
          y: mouse.y,
          time,
        });

        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
      }

      while (trail.length > 0 && time - trail[trail.length - 1].time > 1000) {
        trail.pop();
      }

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
          const bulgeStrengthX = 0.07;
          const bulgeStrengthY = 0.11;
          const distortX = 1 + bulgeStrengthX * Math.cos((ny * Math.PI) / 2);
          const distortY = 1 + bulgeStrengthY * Math.cos((nx * Math.PI) / 2);
          const finalX = centerX + dx * distortX;
          const finalY = centerY + dy * distortY;
          const fontScale = 1;

          ctx.font = `${baseFontSize * fontScale}px monospace`;

          let charToDraw = "-";
          let charOpacityIndex = 0;
          const chunkMask = Math.sin(i * 0.11) + Math.cos(j * 0.08 + i * 0.03);
          const cellHash = Math.abs(Math.sin(i * 12.9898 + j * 78.233));
          const isAmbientEligible = chunkMask > 0.75 || cellHash > 0.94;

          if (isAmbientEligible) {
            const noise =
              Math.sin(i * 0.08 + time * 0.0002) +
              Math.cos(j * 0.1 + time * 0.00015) +
              Math.sin((i - j) * 0.04 - time * 0.00025);

            if (noise > 1.2) {
              const normalized = (noise - 1.2) / 1.5;
              const index = Math.min(3, Math.floor(normalized * 4));

              charToDraw = ambientSequence[index];
              charOpacityIndex = index;
            }

            const worm =
              Math.sin(i * 0.2 - time * 0.0003) *
              Math.cos(j * 0.2 + time * 0.0002);

            if (worm > 0.4) {
              const normalized = (worm - 0.4) / 0.6;
              const wormIndex = Math.max(1, Math.min(3, Math.floor(normalized * 4)));

              if (wormIndex > charOpacityIndex) {
                charOpacityIndex = wormIndex;
                charToDraw = ambientSequence[wormIndex];
              }
            }
          }

          let hitAge = -1;

          // Dynamic Reach for the Chunky Hover Trail
          const verticalReach = spacingY * (0.8 + cellHash * 1.7);

          // Reduced horizontal reach:
          // Instead of hardcoded 40-90px, this now scales with the actual grid spacing.
          // This creates a tighter trail around roughly 3-6 columns total.
          const horizontalReach = spacingX * (1.5 + cellHash * 1.5);

          for (let t = 0; t < trail.length; t += 1) {
            const pt = trail[t];

            const distX = Math.abs(finalX - pt.x);
            const distY = Math.abs(finalY - pt.y);

            if (distX < horizontalReach && distY < verticalReach) {
              hitAge = time - pt.time;
              break;
            }
          }

          if (hitAge !== -1) {
            if (hitAge < 500) {
              charToDraw = "%";
              charOpacityIndex = 5;
            } else {
              const fadeProgress = (hitAge - 500) / 500;

              charToDraw = "#";
              charOpacityIndex = Math.max(0, Math.floor((1 - fadeProgress) * 4));
            }
          }

          const opacity = 0.23 + charOpacityIndex * 0.14;

          ctx.fillStyle = `rgba(80, 80, 80, ${opacity})`;

          // Typographic centering correction.
          // Some monospace glyphs are not visually centered even with textBaseline = "middle".
          let yNudge = 0;

          if (charToDraw === "*") {
            // Asterisk usually sits too high, so push it down.
            yNudge = baseFontSize * fontScale * 0.18;
          } else if (charToDraw === "+") {
            // Plus can sit slightly high depending on the browser/font.
            yNudge = baseFontSize * fontScale * 0.04;
          } else if (charToDraw === "-") {
            // Dash can sit slightly low, so lift it very slightly.
            yNudge = baseFontSize * fontScale * -0.02;
          }

          ctx.fillText(charToDraw, finalX, finalY + yNudge);
        }
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
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    startAnimation();

    return () => {
      stopAnimation();
      cancelAnimationFrame(resizeFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", scheduleResize);
      window.removeEventListener("pointermove", handlePointerMove);
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
