export type PriceLang = "ru" | "en";

export type PriceItem = {
  id: string;
  title: { ru: string; en: string };
  price: { ru: string; en: string };
  /** Short description for hover / quick scan */
  description: { ru: string; en: string };
  /** Which price-board image to show when user clicks the item */
  image: "board-1" | "board-2";
};

export const PRICE_BOARDS: Record<
  "board-1" | "board-2",
  { src: string; alt: { ru: string; en: string } }
> = {
  "board-1": {
    src: "/prices/price-board-1.jpeg",
    alt: {
      ru: "Прайс (часть 1) — маникюр / коррекция",
      en: "Price list (part 1) — manicure / correction",
    },
  },
  "board-2": {
    src: "/prices/price-board-2.jpeg",
    alt: {
      ru: "Прайс (часть 2) — наращивание / педикюр",
      en: "Price list (part 2) — extensions / pedicure",
    },
  },
};

export const PRICE_NOTE = {
  ru: "Цены до 3-й длины. Если длиннее — +200₽ за каждую дополнительную длину.",
  en: "Prices are for length up to #3. Longer length: +200₽ for each extra level.",
} as const;

export const PRICE_DISCLAIMER = {
  ru: "Внимание: я эстетист, не подолог. Не устанавливаю титановые нити, не работаю со сложными случаями (вросшие ногти, стержневые мозоли и т.п.), ногти на ногах не наращиваю.",
  en: "Note: I am an эстетист (aesthetic specialist), not a podiatrist. I do not provide complex medical foot procedures.",
} as const;

export const PRICES: PriceItem[] = [
  {
    id: "manicure-no-cover",
    title: { ru: "Маникюр без покрытия", en: "Manicure (no polish)" },
    price: { ru: "2000₽", en: "2000₽" },
    description: {
      ru: "Снятие, маникюр, опил, шлифовка, рекомендации, масло + крем.",
      en: "Removal, manicure, shaping, polishing, recommendations, oil + cream.",
    },
    image: "board-1",
  },
  {
    id: "manicure-gel-light",
    title: { ru: "Маникюр с покрытием + лёгкий дизайн / коррекция", en: "Manicure + gel (light design)" },
    price: { ru: "3000₽", en: "3000₽" },
    description: {
      ru: "Укрепление гелем, достраивание углов/параллелей, ремонт 1 ногтя, гель‑лак/лёгкий дизайн/френч.",
      en: "Gel strengthening, shape correction, 1-nail repair, gel polish / light design / French.",
    },
    image: "board-1",
  },
  {
    id: "manicure-gel-hard",
    title: { ru: "Коррекция + сложный дизайн / маникюр с покрытием", en: "Correction + complex design" },
    price: { ru: "3500₽", en: "3500₽" },
    description: {
      ru: "Как выше, но со сложным дизайном (гель‑лак, сложный дизайн, френч).",
      en: "Same as above, but with complex design (gel polish + complex design / French).",
    },
    image: "board-1",
  },
  {
    id: "extensions-light",
    title: { ru: "Наращивание / перенаращивание + лёгкий дизайн", en: "Extensions (light design)" },
    price: { ru: "3500₽", en: "3500₽" },
    description: {
      ru: "Наращивание 2–10 ногтей (гель, нижние формы), выравнивание, гель‑лак/лёгкий дизайн/френч.",
      en: "Extensions 2–10 nails (gel), leveling, gel polish / light design / French.",
    },
    image: "board-2",
  },
  {
    id: "extensions-hard",
    title: { ru: "Наращивание / перенаращивание + сложный дизайн", en: "Extensions (complex design)" },
    price: { ru: "4000₽", en: "4000₽" },
    description: {
      ru: "Наращивание 2–10 ногтей (гель, нижние формы) + сложный дизайн.",
      en: "Extensions 2–10 nails (gel) + complex design.",
    },
    image: "board-2",
  },
  {
    id: "pedicure",
    title: { ru: "Педикюр", en: "Pedicure" },
    price: { ru: "3000₽", en: "3000₽" },
    description: {
      ru: "Обработка пальчиков, покрытие гель‑лак, обработка стоп, рекомендации, крем + масло.",
      en: "Toes care, gel polish, feet care, recommendations, cream + oil.",
    },
    image: "board-2",
  },
  {
    id: "hyperkeratosis",
    title: { ru: "Зачистка гиперкератоза", en: "Hyperkeratosis cleanup" },
    price: { ru: "500₽", en: "500₽" },
    description: {
      ru: "Удаление избыточного ороговения/утолщения верхнего слоя кожи (при необходимости).",
      en: "Cleanup of excessive thickened skin layer (when needed).",
    },
    image: "board-2",
  },
];
