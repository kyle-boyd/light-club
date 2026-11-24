import Link from "next/link";
import { brand, footer, masthead } from "@/content/site";
import { config } from "@/lib/config";
import styles from "./SiteChrome.module.css";

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" className={`${styles.wordmark} ${tone === "dark" ? styles.wordmarkDark : ""}`}>
      <span className={styles.wordmarkText}>{brand.name}</span>
      <span className={styles.wordmarkTm} aria-hidden="true">
        ™?
      </span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footerInner}`}>
        <p className={styles.footerBrand}>
          {brand.name}. <span>{brand.footerJoke}</span>
        </p>
        <nav aria-label="Footer">
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/privacy">{footer.privacy}</Link>
            </li>
            <li>
              <a href={`mailto:${config.contactEmail}`}>{footer.contact}</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

/**
 * Full-width zine masthead. SVG textLength stretches the name to exactly fill
 * the measure at any screen width, the way a cover nameplate does.
 */
export function Masthead({ kicker }: { kicker?: string }) {
  return (
    <div className={styles.masthead}>
      <Link href="/" className={styles.mastLink} aria-label={`${brand.name} home`}>
        <svg viewBox="0 0 1000 168" className={styles.mastSvg} aria-hidden="true">
          <text
            x="0"
            y="156"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className={styles.mastText}
          >
            {brand.name.toUpperCase()}
          </text>
        </svg>
      </Link>
      <div className={styles.mastRule}>
        <ul className={styles.issue}>
          {masthead.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        {kicker ? <p className={styles.mastKicker}>{kicker}</p> : null}
      </div>
    </div>
  );
}
