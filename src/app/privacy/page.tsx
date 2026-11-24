import type { Metadata } from "next";
import { SiteFooter, Wordmark } from "@/components/SiteChrome";
import { brand } from "@/content/site";
import { config } from "@/lib/config";
import styles from "../prose.module.css";

export const metadata: Metadata = { title: `Privacy · ${brand.name}` };

export default function PrivacyPage() {
  return (
    <>
      <header className={styles.top}>
        <div className="wrap">
          <Wordmark tone="dark" />
        </div>
      </header>
      <main id="main" className={`wrap ${styles.prose}`}>
        <h1>Privacy</h1>
        <p className={styles.lede}>Short version: we collect almost nothing, and we don&apos;t sell or share it.</p>

        <h2>What we collect</h2>
        <ul>
          <li>The name you give us.</li>
          <li>Your email address.</li>
          <li>When you accepted the commitment.</li>
          <li>Which invitation you used, and so who invited you and which crew you joined.</li>
        </ul>

        <h2>Why</h2>
        <p>
          To send you a confirmation email and your five invitation links, to keep each link from being used
          twice, and to keep crews to six people.
        </p>

        <h2>What we don&apos;t do</h2>
        <ul>
          <li>No tracking of your phone, screen time, or check-ins. Those stay in your group text.</li>
          <li>No newsletters, reminders, or marketing emails.</li>
          <li>No public member list. Nobody can look you up here.</li>
          <li>No selling or sharing your information.</li>
        </ul>

        <h2>Changes and deletion</h2>
        <p>
          Want your details corrected or deleted? Email <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>{" "}
          and a human will sort it out.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
