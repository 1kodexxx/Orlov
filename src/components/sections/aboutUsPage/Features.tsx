import type { FC } from "react";
import { motion } from "framer-motion";
import { FaCrown, FaHandshake, FaGem } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nbspShort } from "@/utils/nbspShort";

interface Feature {
  id: number;
  icon: React.ReactElement;
  title: string[];
  description: string[];
  link: { to: string; text: string };
}

const FEATURES: Feature[] = [
  {
    id: 1,
    icon: <FaCrown className="text-4xl text-primary-contrast" />,
    title: ["Премиальное", "качество"],
    description: [
      "Отборные материалы, тщательная ручная работа и строгий контроль качества — основа наших изделий.",
      "Мы дарим нашим клиентам к каждому заказу целый ряд преимуществ: элитарная упаковка, престижное наполнение и авторский подарок — решение ORLOV для Вас.",
    ],
    link: { to: "/catalog", text: "Смотреть каталог →" },
  },
  {
    id: 2,
    icon: <FaHandshake className="text-4xl text-primary-contrast" />,
    title: ["Индивидуальный", "подход"],
    description: [
      "Мы понимаем, что каждый клиент уникален. Именно поэтому мы разрабатываем решения, полностью соответствующие вашим пожеланиям.",
      "Компания ORLOV знает и ценит своих клиентов. Для нас главное — ваше уважение и доверие!",
    ],
    link: { to: "/catalog", text: "Смотреть каталог →" },
  },
  {
    id: 3,
    icon: <FaGem className="text-4xl text-primary-contrast" />,
    title: ["Стиль", "и эксклюзив"],
    description: [
      "Каждый аксессуар от ORLOV — это отражение статуса и уверенности.",
      "Мы создаем предметы искусства для наших клиентов, постоянно увеличивая ассортимент товаров.",
      "С нами вы знаете, что доверяете лучшему!",
    ],
    link: { to: "/catalog", text: "Смотреть каталог →" },
  },
];

const Features: FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-16 px-4 text-text-secondary">
    <div className="mx-auto max-w-screen-xl px-0 sm:px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
        Преимущества Orlov Brand
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12 mx-auto max-w-2xl text-center text-lg text-text-secondary">
        {nbspShort(
          "Элитные чехлы для телефонов Orlov — это не просто защита, это статус, премиум и стиль, который подчеркивает ваш уникальный вкус."
        )}
      </motion.p>

      <div className="flex flex-col md:flex-row md:space-x-8 gap-y-12 md:gap-y-0 items-stretch">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
            className="
              flex-1 flex flex-col justify-between items-center text-center
              p-8
            ">
            <div className="rounded-full bg-primary p-6 mb-6">{f.icon}</div>

            <h3 className="text-xl font-semibold text-primary mb-6">
              {f.title.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <div className="prose prose-invert max-w-none space-y-4 mb-6">
              {f.description.map((para, idx) => (
                <p key={idx}>{nbspShort(para)}</p>
              ))}
            </div>

            <Link
              to={f.link.to}
              className="mt-auto text-primary hover:underline">
              {f.link.text}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Features;
