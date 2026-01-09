"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Lang } from "../lib/content";
import { PRICE_BOARDS, PRICES, PRICE_DISCLAIMER, PRICE_NOTE, type PriceItem } from "../lib/prices";

function clampText(s: string, max = 150) {
  const t = s.trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).trimEnd() + "…";
}

export default function PriceGrid({ lang }: { lang: Lang }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const items = PRICES;
  const openItem: PriceItem | null = useMemo(() => {
    if (!openId) return null;
    return items.find((x) => x.id === openId) ?? null;
  }, [openId, items]);

  const board = openItem ? PRICE_BOARDS[openItem.image] : null;

  return (
    <>
      <div className="priceGrid">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="priceCard"
            onClick={() => setOpenId(item.id)}
            aria-label={lang === "ru" ? `Открыть фото прайса: ${item.title.ru}` : `Open price photo: ${item.title.en}`}
          >
            <div className="priceTop">
              <h3 className="priceTitle">{lang === "ru" ? item.title.ru : item.title.en}</h3>
              <div className="priceValue">{lang === "ru" ? item.price.ru : item.price.en}</div>
            </div>

            <div className="priceHint">
              {lang === "ru" ? "Наведи для описания · Нажми для фото" : "Hover for details · Click for photo"}
            </div>

            {/* Hover bubble */}
            <div className="priceTooltip" aria-hidden="true">
              {clampText(lang === "ru" ? item.description.ru : item.description.en, 220)}
            </div>
          </button>
        ))}
      </div>

      <p className="smallNote">{lang === "ru" ? PRICE_NOTE.ru : PRICE_NOTE.en}</p>
      <p className="smallNote">{lang === "ru" ? PRICE_DISCLAIMER.ru : PRICE_DISCLAIMER.en}</p>

      {/* Lightbox */}
      {openItem && board && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpenId(null)}>
          <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
            <div className="lightboxHeader">
              <div>
                <div className="lightboxTitle">{lang === "ru" ? openItem.title.ru : openItem.title.en}</div>
                <div className="lightboxSub">{lang === "ru" ? openItem.price.ru : openItem.price.en}</div>
              </div>
              <button className="lightboxClose" type="button" onClick={() => setOpenId(null)} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="lightboxBody">
              <div className="lightboxText">
                {lang === "ru" ? openItem.description.ru : openItem.description.en}
              </div>

              <a className="pill" href={board.src} target="_blank" rel="noreferrer">
                {lang === "ru" ? "Открыть фото" : "Open photo"}
              </a>

              <div className="lightboxImageWrap">
                <Image
                  src={board.src}
                  alt={lang === "ru" ? board.alt.ru : board.alt.en}
                  width={900}
                  height={1600}
                  className="lightboxImage"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
