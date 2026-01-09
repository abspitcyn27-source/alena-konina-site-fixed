import CTAButtons from "../../components/CTAButtons";
import { COPY, type Lang } from "../../lib/content";

export default function LangHome({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";
  const t = COPY[lang];

  return (
    <main>
      <section className="hero">
        <h1>{t.heroTitle}</h1>
        <p><strong>{t.heroSubtitle}</strong></p>
        <p>{t.heroText}</p>
        <CTAButtons lang={lang} />
        <div className="smallNote">
          {lang === "ru"
            ? "Можно добавить портфолио, отзывы и точные цены позже — каркас уже готов."
            : "Portfolio, reviews and exact pricing can be added later — the scaffold is ready."}
        </div>
      </section>

      <section className="grid twoCol">
        <div className="card">
          <h2>{t.whyTitle}</h2>
          <ul className="list">
            {t.whyItems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>{t.servicesTitle}</h2>
          <ul className="list">
            {t.servicesItems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
        </div>

        <div className="card">
          <h2>{t.academyTitle}</h2>
          <p>{t.academyText}</p>
          <div style={{ marginTop: 12 }}>
            <CTAButtons lang={lang} />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>{t.footerLeft}</div>
        <div>{t.footerRight}</div>
      </footer>
    </main>
  );
}
