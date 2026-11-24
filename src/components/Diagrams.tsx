/**
 * Hand-drawn-feeling SVG diagrams for the network section. The "rough" filter
 * wobbles strokes so they read as marker-on-paper rather than vector-perfect.
 */

export function RoughFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <filter id="rough">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
        <feDisplacementMap in="SourceGraphic" scale="4" />
      </filter>
      {/* Ink bleed for big type: fine-grained edge wobble, like a cheap print run. */}
      <filter id="ink" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="3" result="t" />
        <feDisplacementMap in="SourceGraphic" in2="t" scale="2.2" />
      </filter>
    </svg>
  );
}

export function CrossedPyramid() {
  return (
    <svg viewBox="0 0 160 140" role="img" aria-label="A pyramid, crossed out">
      <g filter="url(#rough)" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M80 14 L146 122 L14 122 Z" />
        <path d="M54 56 H106 M34 90 H126" />
      </g>
      <g filter="url(#rough)" stroke="currentColor" strokeWidth="10" strokeLinecap="round">
        <path d="M18 18 L142 130" />
        <path d="M142 18 L18 130" />
      </g>
    </svg>
  );
}

// Each crew is a circle; dots are people. Dots in overlaps belong to two crews.
const crews = [
  { cx: 120, cy: 110, r: 78 },
  { cx: 230, cy: 95, r: 72 },
  { cx: 180, cy: 205, r: 76 },
  { cx: 300, cy: 200, r: 68 },
];

const people: Array<[number, number, boolean]> = [
  [80, 80, false], [95, 140, false], [70, 115, false], [130, 55, false],
  [178, 92, true], [168, 150, true],
  [250, 55, false], [270, 110, false], [235, 140, true],
  [150, 250, false], [130, 200, false], [205, 255, false],
  [250, 190, true], [265, 235, true],
  [335, 170, false], [345, 225, false], [300, 260, false],
];

export function OverlappingCrews() {
  return (
    <svg
      viewBox="30 20 360 280"
      role="img"
      aria-label="Overlapping circles of people. Some people belong to two crews."
    >
      <g filter="url(#rough)" fill="none" stroke="currentColor" strokeWidth="3">
        {crews.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
        ))}
      </g>
      <g filter="url(#rough)">
        {people.map(([x, y, shared], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={shared ? 9 : 7}
            fill={shared ? "none" : "currentColor"}
            stroke={shared ? "currentColor" : "none"}
            strokeWidth={3}
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Stencil "no phones" mark: a paper disc, a phone cut out of it, a slash.
 * The ring has bridges (gaps) the way a real cut stencil would.
 */
export function NoPhoneMark({ className, label }: { className?: string; label?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <g filter="url(#rough)">
        <circle cx="50" cy="50" r="46" fill="var(--paper)" />
        {/* stencil bridges */}
        <g stroke="var(--band-bg, var(--ink))" strokeWidth="3">
          <path d="M50 2 V10 M50 90 V98 M2 50 H10 M90 50 H98" />
        </g>
        <rect x="35" y="22" width="30" height="56" rx="5" fill="var(--ink)" />
        <rect x="39" y="29" width="22" height="38" fill="var(--paper)" />
        <circle cx="50" cy="72" r="2.6" fill="var(--paper)" />
        <path d="M20 80 L80 20" stroke="var(--band-bg, var(--ink))" strokeWidth="14" strokeLinecap="butt" />
        <path d="M20 80 L80 20" stroke="var(--paper)" strokeWidth="4" strokeLinecap="butt" />
      </g>
    </svg>
  );
}
