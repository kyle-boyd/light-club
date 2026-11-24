import { NoPhoneMark } from "./Diagrams";
import styles from "./StencilBand.module.css";

/** A crooked black band slapped across the page: repeated slogans + marks. */
export function StencilBand({ words }: { words: string[] }) {
  const items = [...words, ...words];
  return (
    <div className={styles.band} aria-hidden="true">
      <div className={styles.track}>
        {items.map((w, i) => (
          <span key={i} className={styles.item}>
            <NoPhoneMark className={styles.mark} />
            <span className={styles.word}>{w}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
