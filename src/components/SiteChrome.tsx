import Link from "next/link";
import { brand, footer } from "@/content/site";
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
