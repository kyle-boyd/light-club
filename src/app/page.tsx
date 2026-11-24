import { commitment, cta, friday, hero, network, problem } from "@/content/site";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { OverlappingCrews, CrossedPyramid } from "@/components/Diagrams";
import styles from "./page.module.css";
import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

// Checked at build time: the hero only gets a second column once the drawing exists.
const hasIllustration = existsSync(path.join(process.cwd(), "public", hero.illustration.src));

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-h">
          <div className={`wrap ${styles.heroGrid} ${hasIllustration ? styles.heroWithArt : ""}`}>
            <div>
              <h1 id="hero-h" className={styles.heroHeadline}>
                {hero.headline}
              </h1>
              <p className={styles.heroBody}>{hero.body}</p>
              <p className={styles.heroScheme}>{hero.stamp}</p>
              <div className={styles.heroCtas}>
                <a className="btn" href="#invited">
                  {hero.primaryCta} <span aria-hidden="true">→</span>
                </a>
                <a className="btn btn--ghost" href="#the-deal">
                  {hero.secondaryCta}
                </a>
              </div>
            </div>

            {hasIllustration ? (
              <figure className={styles.illustration}>
                <Image
                  src={hero.illustration.src}
                  alt={hero.illustration.alt}
                  width={1200}
                  height={1200}
                  priority
                  sizes="(min-width: 900px) 40vw, 100vw"
                />
              </figure>
            ) : null}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="problem-h">
          <div className="wrap">
            <p className="label">{problem.label}</p>
            <h2 id="problem-h" className={styles.h2}>
              {problem.headline}
            </h2>
            <ol className={styles.moments}>
              {problem.moments.map((m) => (
                <li key={m.time}>
                  <span className={styles.momentTime}>{m.time}</span>
                  <span>{m.text}</span>
                </li>
              ))}
            </ol>
            <p className={styles.closer}>{problem.closer}</p>
          </div>
        </section>

        <section id="the-deal" className={`on-ink ${styles.section} ${styles.deal}`} aria-labelledby="deal-h">
          <div className="wrap">
            <p className="label">{commitment.label}</p>
            <h2 id="deal-h" className={styles.h2}>
              {commitment.headline}
            </h2>
            <ol className={styles.dealItems}>
              {commitment.items.map((item) => (
                <li key={item.n}>
                  <span className={styles.dealNum} aria-hidden="true">
                    {item.n}
                  </span>
                  <div>
                    <h3 className={styles.dealTitle}>{item.title}</h3>
                    <p className={styles.dealNote}>{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.dealFine}>{commitment.fine}</p>
          </div>
        </section>

        <section id="fridays" className={styles.section} aria-labelledby="friday-h">
          <div className={`wrap ${styles.twoCol}`}>
            <div>
              <p className="label">{friday.label}</p>
              <h2 id="friday-h" className={styles.h2}>
                {friday.headline}
              </h2>
              <ol className={styles.steps}>
                {friday.steps.map((s) => (
                  <li key={s.title}>
                    <strong>{s.title}</strong> {s.text}
                  </li>
                ))}
              </ol>
              <p className={styles.invertLine}>{friday.noGrades}</p>
            </div>

            <figure className={styles.textCard}>
              <div className="box">
                <p className={styles.textTitle}>{friday.messageTitle}</p>
                {friday.message.map((para) => (
                  <p key={para} className={styles.textPara}>
                    {para}
                  </p>
                ))}
              </div>
              <figcaption className={styles.caption}>{friday.messageCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section id="network" className={styles.section} aria-labelledby="network-h">
          <div className="wrap">
            <p className="label">{network.label}</p>
            <h2 id="network-h" className={styles.h2}>
              {network.headline}
            </h2>
            <div className={styles.twoCol}>
              <div>
                <p className={styles.lede}>{network.body}</p>
                <ul className={styles.rules}>
                  {network.rules.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.diagrams}>
                <figure>
                  <CrossedPyramid />
                  <figcaption className={styles.caption}>{network.diagram.sounds}</figcaption>
                </figure>
                <figure>
                  <OverlappingCrews />
                  <figcaption className={styles.caption}>{network.diagram.is}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="invited" className={styles.section} aria-labelledby="cta-h">
          <div className={`wrap ${styles.twoCol}`}>
            <div>
              <p className="label">{cta.label}</p>
              <h2 id="cta-h" className={styles.ctaHeadline}>
                {cta.headline}
              </h2>
              <p className={styles.lede}>{cta.body}</p>
            </div>
            <div className={`box ${styles.noLink}`}>
              <h3 className={styles.noLinkTitle}>{cta.noLinkTitle}</h3>
              <p>{cta.noLinkBody}</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
