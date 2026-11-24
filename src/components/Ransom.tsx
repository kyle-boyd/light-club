import styles from "./Ransom.module.css";

/**
 * Ransom-note lettering: each letter gets its own face, case, tilt and
 * baseline, like letters cut from different magazines. The variation is
 * deterministic (based on letter position), so server and client markup match.
 * Screen readers get the plain text, not the individual letters.
 */

const VARIANTS = [styles.v0, styles.v1, styles.v2, styles.v3, styles.v4, styles.v5];
const TILTS = [-3, 2, -1, 3, -2, 1, 2, -2, 1];
const SHIFTS = [0, -0.03, 0.025, -0.015, 0.04, -0.04, 0.01];

function pick<T>(arr: T[], i: number, salt: number): T {
  // Small integer hash so neighbouring letters don't move in lockstep.
  const h = ((i + 1) * 2654435761 + salt * 40503) >>> 0;
  return arr[h % arr.length];
}

export function Ransom({
  text,
  as: Tag = "p",
  className,
  salt = 0,
}: {
  text: string;
  as?: "p" | "span" | "h1" | "h2";
  className?: string;
  salt?: number;
}) {
  let index = 0;
  const words = text.split(" ");
  return (
    <Tag className={`${styles.ransom} ${className ?? ""}`}>
      <span className="visually-hidden">{text}</span>
      {words.map((word, wi) => (
        <span key={wi} className={styles.word} aria-hidden="true">
          {[...word].map((ch) => {
            const i = index++;
            return (
              <span
                key={i}
                className={`${styles.ch} ${pick(VARIANTS, i, salt)}`}
                style={{
                  rotate: `${pick(TILTS, i, salt + 1)}deg`,
                  translate: `0 ${pick(SHIFTS, i, salt + 2)}em`,
                }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
