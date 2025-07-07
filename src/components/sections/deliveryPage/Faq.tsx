import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "Сколько дней идёт посылка по России?",
    a: "Стандартная доставка по РФ занимает 3–7 рабочих дней, в зависимости от удалённости региона.",
  },
  {
    q: "Какие есть способы оплаты при получении?",
    a: "Наложенный платёж, карта курьеру или возможность частичной предоплаты онлайн.",
  },
  {
    q: "Можно ли изменить адрес после оформления?",
    a: "Да, в течение 2 часов после заказа — напишите нам в чат или по e-mail.",
  },
];

const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 px-6 max-w-[1260px] mx-auto bg-background-paper rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Часто задаваемые вопросы
      </h2>
      <ul className="space-y-4">
        {faqs.map((item, i) => (
          <li key={i} className="border-b border-secondary pb-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center text-left">
              <span className="font-semibold text-text-primary">{item.q}</span>
              <FiChevronDown
                className={`transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && <p className="mt-2 text-text-secondary">{item.a}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
