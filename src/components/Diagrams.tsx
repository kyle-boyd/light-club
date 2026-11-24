/**
 * Plain line drawings for the network section. People are drawn as "x"
 * marks; the ones sitting in an overlap belong to two crews.
 */

export function CrossedPyramid() {
  return (
    <svg viewBox="0 0 160 140" role="img" aria-label="A pyramid, crossed out">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M80 14 L146 122 L14 122 Z" />
        <path d="M54 56 H106 M34 90 H126" />
      </g>
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="square">
        <path d="M20 20 L140 128" />
        <path d="M140 20 L20 128" />
      </g>
    </svg>
  );
}

const crews = [
  { cx: 120, cy: 110, r: 78 },
  { cx: 230, cy: 95, r: 72 },
  { cx: 180, cy: 205, r: 76 },
  { cx: 300, cy: 200, r: 68 },
];

const people: Array<[number, number]> = [
  [80, 85], [95, 145], [68, 118], [130, 52],
  [178, 98], [165, 152],
  [252, 58], [272, 112], [236, 142],
  [150, 252], [130, 205], [205, 258],
  [251, 192], [265, 238],
  [335, 172], [345, 225], [300, 262],
];

export function OverlappingCrews() {
  return (
    <svg
      viewBox="30 20 360 280"
      role="img"
      aria-label="Overlapping circles of people. Some people belong to two crews."
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.5">
        {crews.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
        ))}
      </g>
      <g
        fill="currentColor"
        fontFamily="var(--font-body)"
        fontWeight="700"
        fontSize="22"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {people.map(([x, y], i) => (
          <text key={i} x={x} y={y}>
            x
          </text>
        ))}
      </g>
    </svg>
  );
}
