// src/utils/categories.ts

// Мапа «Русский → English slug»
export const categoryLabelToSlug: Record<string, string> = {
  "Все категории": "",
  Мужчинам: "men",
  Женщинам: "women",
  Патриотам: "patriots",
  "Гос.служащим": "government",
  "Для бизнеса": "business",
  Премиум: "premium",
  "Культурный код": "cultural",
  "Имперский стиль": "imperial",
  Православие: "orthodoxy",
  История: "history",
  СССР: "ussr",
};

// Инвертированная мапа «slug → Русский»
export const categorySlugToLabel: Record<string, string> = Object.entries(
  categoryLabelToSlug
).reduce((acc, [label, slug]) => {
  if (slug) {
    acc[slug] = label;
  }
  return acc;
}, {} as Record<string, string>);
