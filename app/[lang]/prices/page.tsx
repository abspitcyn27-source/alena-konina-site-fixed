import CTAButtons from "../../../components/CTAButtons";
import PriceGrid from "../../../components/PriceGrid";
import { type Lang } from "../../../lib/content";

export default function PricesPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";

  return (
    <main>
      <section className="hero">
        <h1>{lang === "ru" ? "Прайс" : "Pricing"}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Наведи на услугу, чтобы увидеть описание. Нажми — откроется фото прайса (как в сторис/посте)."
            : "Hover an item to see details. Click to open the price-board photo (like an Instagram story/post)."}
        </p>

        <PriceGrid lang={lang} />

        <div style={{ marginTop: 16 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>
    </main>
  );
}
