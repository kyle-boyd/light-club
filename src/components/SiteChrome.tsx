import Link from "next/link";
import { brand, footer, nav, ticker } from "@/content/site";
import { config } from "@/lib/config";
import styles from "./SiteChrome.module.css";

export function SiteHeader() {
  // Repeat the ticker so it fills very wide screens; it doesn't move.
  const strip = [...ticker, ...ticker, ...ticker];
  return (
    <header className={styles.header}>
      <div className={styles.ticker} aria-hidden="true">
        {strip.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <div className={styles.bar}>
        <Link href="/" className={styles.wordmark} aria-label={`${brand.name} home`}>
          <span className={styles.wordmarkBox} aria-hidden="true">
            {brand.name.split(" ").map((w, i) => (
              <span key={w} className={i === 0 ? styles.wmInvert : styles.wmPlain}>
                {w}
              </span>
            ))}
          </span>
        </Link>
        <nav aria-label="Main" className={styles.nav}>
          <ul>
            {nav.map((n, i) => (
              <li key={n.href}>
                <a href={n.href} className={i === nav.length - 1 ? styles.navInvert : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footerInner}`}>
        <p className={styles.footerBrand}>
          {brand.name}. <span>{brand.footerJoke}</span>
        </p>
        <ul className={styles.footerLinks}>
          <li>
            <Link href="/privacy">{footer.privacy}</Link>
          </li>
          <li>
            <a href={`mailto:${config.contactEmail}`}>{footer.contact}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
