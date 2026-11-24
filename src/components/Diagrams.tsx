/**
 * Hand-drawn-looking line diagrams for the network section. The wobble is
 * computed (not random), so the drawing is identical on every render.
 */

/** A slightly lumpy circle that overshoots where the pen started, like a marker loop. */
function wobblyLoop(cx: number, cy: number, r: number, seed: number): string {
  const steps = 72;
  const start = seed * 1.7;
  const sweep = Math.PI * 2 + 0.35; // overshoot past the start point
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = start + (sweep * i) / steps;
    const k = 1 + 0.035 * Math.sin(3 * t + seed) + 0.02 * Math.sin(5 * t + seed * 2.3) + 0.012 * (i / steps);
    pts.push(`${(cx + r * k * Math.cos(t)).toFixed(1)} ${(cy + r * k * 0.94 * Math.sin(t)).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

/** A small person: head + shoulders. */
function Person({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="0" cy="-7" r="6" />
      <path d="M-11 11 C -11 1, -6 -1, 0 -1 C 6 -1, 11 1, 11 11 Z" />
    </g>
  );
}

export function CrossedPyramid() {
  return (
    <svg viewBox="0 0 160 140" role="img" aria-label="A pyramid, crossed out in red">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M81 15 L145 121 L15 123 Z" />
        <path d="M55 57 L107 56 M35 90 L126 91" />
      </g>
      <g fill="none" stroke="var(--red)" strokeWidth="11" strokeLinecap="round">
        <path d="M22 22 C 60 55, 100 95, 138 126" />
        <path d="M137 18 C 100 55, 62 92, 24 127" />
      </g>
    </svg>
  );
}

const crews = [
  { cx: 120, cy: 112, r: 76 },
  { cx: 232, cy: 96, r: 70 },
  { cx: 182, cy: 206, r: 74 },
  { cx: 300, cy: 200, r: 66 },
];

const people: Array<[number, number]> = [
  [82, 92], [100, 148], [138, 62],
  [180, 108], [170, 160],
  [255, 64], [274, 116],
  [140, 236], [205, 256],
  [244, 196],
  [338, 178], [318, 236],
];

export function OverlappingCrews() {
  return (
    <svg
      viewBox="30 20 360 280"
      role="img"
      aria-label="Overlapping hand-drawn circles of people. Some people sit where two circles overlap, belonging to both crews."
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
        {crews.map((c, i) => (
          <path key={i} d={wobblyLoop(c.cx, c.cy, c.r, i + 1)} />
        ))}
      </g>
      <g fill="currentColor">
        {people.map(([x, y], i) => (
          <Person key={i} x={x} y={y} />
        ))}
      </g>
    </svg>
  );
}
