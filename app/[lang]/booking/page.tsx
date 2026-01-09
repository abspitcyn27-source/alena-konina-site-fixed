import CTAButtons from "../../../components/CTAButtons";
import { CONTACTS, type Lang } from "../../../lib/content";

export default function BookingPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";

  return (
    <main>
      <section className="hero">
        <h1>{lang === "ru" ? "Запись" : "Booking"}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Самый быстрый способ — написать в Telegram или WhatsApp. Отвечу и предложу свободные окна."
            : "The fastest way is to message via Telegram or WhatsApp. I’ll reply with available slots."}
        </p>

        <div className="grid twoCol" style={{ marginTop: 18 }}>
          <div className="card">
            <h2>{lang === "ru" ? "Как записаться" : "How to book"}</h2>
            <ol className="list" style={{ listStyle: "decimal", paddingLeft: 18 }}>
              <li>{lang === "ru" ? "Напишите удобным способом" : "Message via your preferred channel"}</li>
              <li>{lang === "ru" ? "Выберите услугу и время" : "Choose service and time"}</li>
              <li>{lang === "ru" ? "Получите подтверждение" : "Get confirmation"}</li>
            </ol>
          </div>
          <div className="card">
            <h2>{lang === "ru" ? "Локация" : "Location"}</h2>
            <p>{lang === "ru" ? CONTACTS.locationRu : CONTACTS.locationEn}</p>
            <p className="muted" style={{ marginTop: 8 }}>
              {lang === "ru"
                ? "Точный адрес и проход — после подтверждения записи."
                : "Exact address and directions are shared after confirmation."}
            </p>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>
    </main>
  );
}
