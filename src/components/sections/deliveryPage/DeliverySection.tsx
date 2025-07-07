import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FiShield,
  FiActivity,
  FiAnchor,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiShield />,
    title: "Шаг 1",
    text: "Выберите изысканный чехол из премиальной коллекции.",
  },
  {
    icon: <FiActivity />,
    title: "Шаг 2",
    text: "Укажите модель телефона и цвет.",
  },
  {
    icon: <FiAnchor />,
    title: "Шаг 3",
    text: "Оформите заказ через безопасную форму оплаты.",
  },
  {
    icon: <FiUser />,
    title: "Шаг 4",
    text: "Мы упакуем и отправим ваш заказ.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Готово",
    text: "Наслаждайтесь качеством и стилем.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DeliverySection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-background-default text-text-primary py-16 px-4 max-w-[1279px] mx-auto space-y-10">
      {/* Вводное описание */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center mx-auto max-w-2xl">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-4 text-primary">
          Доставка элитных чехлов — просто&nbsp;и&nbsp;надёжно
        </motion.h2>
        <motion.p variants={itemVariants} className="text-text-secondary">
          Мы ценим ваше время и хотим, чтобы процесс заказа был прозрачным и
          удобным. От&nbsp;выбора до&nbsp;получения&nbsp;— всего несколько
          простых шагов, после которых вы быстро получите свой аксессуар в
          идеальном состоянии.
        </motion.p>
      </motion.div>

      {/* Шаги */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative flex flex-col items-center p-6 bg-background-paper rounded-xl shadow-lg text-center hover:scale-[1.03] transition-transform">
            <div className="w-16 h-16 flex items-center justify-center bg-secondary rounded-full mb-4">
              <span className="text-3xl text-primary">{step.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {step.title}
            </h3>
            <p className="text-text-secondary">{step.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DeliverySection;
