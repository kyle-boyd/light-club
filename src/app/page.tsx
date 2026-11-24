import { commitment, cta, friday, hero, network, problem } from "@/content/site";
import { Masthead, SiteFooter } from "@/components/SiteChrome";
import { OverlappingCrews, CrossedPyramid } from "@/components/Diagrams";
import { Ransom } from "@/components/Ransom";
import { StencilBand } from "@/components/StencilBand";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={`poster-paper ${styles.hero}`}>
        <div className={`wrap ${styles.heroTop}`}>
          <Masthead kicker={hero.kicker} />
        </div>

        <div className={`wrap ${styles.heroHead}`}>
          <Ransom text={hero.ransom} className={styles.heroRansom} salt={3} />
          <h1 className={styles.heroHeadline}>
            {hero.headline.map((line, i) => (
              <span key={line} className={i === hero.accentLine ? styles.heroAccent : undefined}>
                {i === hero.accentLine ? <span>{line}</span> : line}
              </span>
            ))}
          </h1>
        </div>

        <StencilBand words={hero.band} />

        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroMain}>
            <p className={`stamp ${styles.heroStamp}`}>{hero.stamp}</p>
            <p className={styles.heroBody}>{hero.body}</p>
            <div className={styles.heroCtas}>
              <a className="btn" href="#invited">
                {hero.primaryCta} <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="#the-deal">
                {hero.secondaryCta} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className={`taped ${styles.notice}`} aria-label="Notice">
            <p className={styles.noticeTitle}>{hero.notice.title}</p>
            {hero.notice.lines.map((l) => (
              <p key={l} className={styles.noticeLine}>
                {l}
              </p>
            ))}
            <p className={styles.noticeSign}>{hero.notice.signoff}</p>
          </aside>
        </div>
      </header>

      <main id="main">
        <section className={`torn-top poster-paper ${styles.problem}`} aria-labelledby="problem-h">
          <div className="wrap">
            <p className="label">{problem.label}</p>
            <h2 id="problem-h" className={styles.problemHeadline}>
              {problem.headline}
            </h2>
            <ol className={styles.moments}>
              {problem.moments.map((m) => (
                <li key={m.time}>
                  <span className={styles.momentTime}>{m.time}</span>
                  <span className={styles.momentText}>{m.text}</span>
                </li>
              ))}
            </ol>
            <p className={styles.problemCloser}>{problem.closer}</p>
          </div>
        </section>

        <section id="the-deal" className={`torn-top ${styles.deal}`} aria-labelledby="deal-h">
          <div className="wrap">
            <p className="label">{commitment.label}</p>
            <h2 id="deal-h" className={styles.dealHeadline}>
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

        <section className={`torn-top ${styles.friday}`} aria-labelledby="friday-h">
          <div className={`wrap ${styles.fridayGrid}`}>
            <div>
              <p className="label">{friday.label}</p>
              <h2 id="friday-h" className={styles.fridayHeadline}>
                {friday.headline}
              </h2>
              <ol className={styles.fridaySteps}>
                {friday.steps.map((s) => (
                  <li key={s.title}>
                    <strong>{s.title}</strong> {s.text}
                  </li>
                ))}
              </ol>
              <p className={`stamp ${styles.noGrades}`}>{friday.noGrades}</p>
            </div>

            <figure className={styles.textCard}>
              <div className={`taped ${styles.textPaper}`}>
                <p className={styles.textTitle}>{friday.messageTitle}</p>
                {friday.message.map((para) => (
                  <p key={para} className={styles.textPara}>
                    {para}
                  </p>
                ))}
              </div>
              <figcaption className={styles.textCaption}>{friday.messageCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className={`torn-top on-ink ${styles.network}`} aria-labelledby="network-h">
          <div className="wrap">
            <p className="label">{network.label}</p>
            <h2 id="network-h" className={styles.networkHeadline}>
              {network.headline.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
            <div className={styles.networkGrid}>
              <div>
                <p className={styles.networkBody}>{network.body}</p>
                <ul className={styles.rules}>
                  {network.rules.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.diagrams}>
                <figure className={styles.diagramSmall}>
                  <CrossedPyramid />
                  <figcaption>{network.diagram.sounds}</figcaption>
                </figure>
                <figure className={styles.diagramBig}>
                  <OverlappingCrews />
                  <figcaption>{network.diagram.is}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="invited" className={`torn-top poster-paper ${styles.cta}`} aria-label={cta.headline}>
          <div className={`wrap ${styles.ctaGrid}`}>
            <div>
              <h2 className={styles.ctaHeadline}>{cta.headline}</h2>
              <p className={styles.ctaBody}>{cta.body}</p>
            </div>
            <div className={styles.noLink}>
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
