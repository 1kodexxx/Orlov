const Marquee = () => {
  const items = [
    "🔥 Новинки поступили! 🔥",
    "🎉 Скидки до 50%! Только сегодня. 🎉",
    "🚚 Бесплатная доставка от 5000₽. 🚚",
    "💌 Подписывайтесь на наши новости! 💌",
    "✨ Эксклюзивные предложения каждый день! ✨",
    "🎁 Подарки при каждом заказе! 🎁",
    "💎 Премиальные коллекции уже в продаже! 💎",
    "⚡ Быстрая обработка и отправка заказов! ⚡",
    "🎯 Гарантия качества на все товары! 🎯",
  ];

  const content = [...items, ...items];

  return (
    <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden bg-black/60 z-20 flex items-center">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="flex w-max whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite", // Плавная скорость
        }}>
        {content.map((text, index) => (
          <span key={index} className="text-white mx-8 relative top-[-2px]">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
