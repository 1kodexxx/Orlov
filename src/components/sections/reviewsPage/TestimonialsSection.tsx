import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/reviews";
import type { Variants } from "framer-motion";

// Контейнер для всей секции: появляется сразу при монтировании
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Контейнер для преимуществ: поочерёдное появление
const featuresContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Анимация одного преимущества
const featureItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Анимация отзывов: поочерёдное с небольшой задержкой
const testimonialContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const testimonialItem: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TestimonialsSection: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-background py-16 px-4 flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}>
      {/* Заголовок */}
      <div className="w-full max-w-[1245px] mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          Почему выбирают нас?
        </motion.h2>
        <motion.p
          className="text-text-secondary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}>
          Узнайте, почему выбор Orlov Brand — лучшее решение для вас.
        </motion.p>
      </div>

      {/* Блок преимуществ */}
      <motion.div
        className="w-full max-w-[1244px] grid gap-6 sm:grid-cols-3 mb-12"
        variants={featuresContainer}
        initial="hidden"
        animate="visible">
        {[
          {
            icon: "🚚",
            title: "Отслеживание заказов в реальном времени",
            description:
              "Узнайте, когда прибудет ваша покупка, или запланируйте доставку.",
            links: [
              { label: "Отследить заказ →", href: "#" },
              { label: "Запланировать доставку →", href: "#" },
            ],
          },
          {
            icon: "🛍️",
            title: "Ваш личный маркетплейс",
            description:
              "Получайте бонусы за каждую покупку и доступ к эксклюзивным предложениям.",
            links: [
              { label: "Подать заявку →", href: "#" },
              { label: "Управлять покупками →", href: "#" },
            ],
          },
          {
            icon: "🎧",
            title: "Премиальная поддержка",
            description:
              "Многоуровневая поддержка клиентов по всем вопросам и заказам.",
            contacts: ["📞 +7 (495) 123-45-67", "📧 support@orlovbrand.ru"],
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-background-paper rounded-2xl shadow p-6 text-center flex flex-col items-center"
            variants={featureItem}>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-text-secondary mb-2">{feature.description}</p>
            {feature.links?.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-primary underline hover:no-underline mb-1 block">
                {link.label}
              </a>
            ))}
            {feature.contacts?.map((contact, i) => (
              <p key={i} className="text-text-secondary mb-1">
                {contact}
              </p>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Список отзывов */}
      <motion.div
        className="w-full max-w-[1244px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto"
        variants={testimonialContainer}
        initial="hidden"
        animate="visible">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-background-paper rounded-2xl shadow p-6 flex flex-col justify-between"
            variants={testimonialItem}>
            <p className="mb-4 text-gray-300">“{t.text}”</p>
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-text-secondary">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
