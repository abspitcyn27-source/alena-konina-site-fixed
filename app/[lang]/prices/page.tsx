import CTAButtons from "../../../components/CTAButtons";
import { type Lang } from "../../../lib/content";

export default function PricesPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";

  return (
    <main>
      <section className="hero">
        <h1>{lang === "ru" ? "Прайс" : "Pricing"}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Прайс можно заполнить точными цифрами позже. Сейчас — каркас страницы."
            : "You can add exact prices later. This is the page scaffold."}
        </p>

        <div className="grid twoCol" style={{ marginTop: 18 }}>
          <div className="card">
            <h2>{lang === "ru" ? "Маникюр" : "Manicure"}</h2>
            <ul className="list">
              <li>{lang === "ru" ? "Маникюр + покрытие — от …" : "Manicure + gel — from …"}</li>
              <li>{lang === "ru" ? "Укрепление — от …" : "Strengthening — from …"}</li>
            </ul>
          </div>
          <div className="card">
            <h2>{lang === "ru" ? "Педикюр" : "Pedicure"}</h2>
            <ul className="list">
              <li>{lang === "ru" ? "Педикюр — от …" : "Pedicure — from …"}</li>
              <li>{lang === "ru" ? "Снятие/коррекция — от …" : "Removal/correction — from …"}</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>
    </main>
  );
}
