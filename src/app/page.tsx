import { commitment, cta, friday, hero, network, problem } from "@/content/site";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { OverlappingCrews, CrossedPyramid } from "@/components/Diagrams";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-h">
          <div className="wrap">
            <h1 id="hero-h" className={styles.heroHeadline}>
              {hero.headline.map((line, i) => (
                <span key={line} className={styles.heroLine}>
                  {i === hero.headline.length - 1 ? <span className={styles.accent}>{line}</span> : line}{" "}
                </span>
              ))}
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
        </section>

        <section className={styles.section} aria-labelledby="problem-h">
          <div className="wrap">
            <p className="label">{problem.label}</p>
            <h2 id="problem-h" className={`${styles.h2} ${styles.h2Long}`}>
              {problem.headline}
            </h2>
            <div className={styles.prose}>
              {problem.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <p className={styles.closer}>{problem.closer}</p>
          </div>
        </section>

        <section id="the-deal" className={`on-ink ${styles.section} ${styles.deal}`} aria-label={commitment.name}>
          <div className="wrap">
            <p className={styles.dealLead}>{commitment.paragraphs[0]}</p>
            <div className={styles.prose}>
              {commitment.paragraphs.slice(1).map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <p className={styles.closer}>{commitment.closer}</p>
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
              <div className={`box ${styles.slip}`}>
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
                <figure className={styles.diagramSmall}>
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
                {cta.headline.split(" ").slice(0, -1).join(" ")}{" "}
                {cta.headline.split(" ").slice(-1)}
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
