import CTAButtons from "../../../components/CTAButtons";
import { COPY, type Lang } from "../../../lib/content";

export default function ServicesPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";
  const t = COPY[lang];

  return (
    <main>
      <section className="hero">
        <h1>{t.servicesTitle}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Ниже — базовый список услуг. Точные цены и длительность можно заполнить позже."
            : "Below is the core list of services. Exact prices and duration can be added later."}
        </p>
        <div className="card" style={{ marginTop: 18 }}>
          <ul className="list">
            {t.servicesItems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: 16 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>
    </main>
  );
}
