export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 200"
      className={className}
    >
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "104px",
          fontWeight: 800,
          fill: "currentColor",
          letterSpacing: "-0.05em",
        }}
      >
        beyond
        <tspan>.dev</tspan>
      </text>
    </svg>
  );
}
