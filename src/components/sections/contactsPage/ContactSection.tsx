import React from "react";
import { motion } from "framer-motion";
import { FaVk, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import type { Variants } from "framer-motion";

// Контейнер для всей секции
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

// Анимация для каждой основной группы
const groupVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Контейнер для правого столбца
const contactColumnVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Анимация для каждой карточки справа
const contactItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Анимация для текста + кнопки (появляются последними)
const finalFormPartVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-background pt-4 md:pt-8 lg:pt-0 pb-12 px-4 flex items-center justify-center overflow-y-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-[1245px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start md:items-center">
        {/* Левая колонка — Форма */}
        <div className="md:col-span-2 space-y-6">
          {/* Группа 1: Заголовок */}
          <motion.h2
            variants={groupVariants}
            className="text-3xl sm:text-4xl font-bold text-primary text-center md:text-left">
            Свяжитесь с нами
          </motion.h2>

          {/* Группа 2: Описание */}
          <motion.p
            variants={groupVariants}
            className="text-text-secondary text-center md:text-left">
            Наша команда всегда готова помочь Вам 24/7. Если у Вас есть вопросы
            о продукции, заказах или сотрудничестве&nbsp;– свяжитесь с нами
            любым удобным способом! Мы гарантируем оперативность и внимательное
            отношение к деталям. Ценим доверие клиентов к нашей компании и
            предлагаем форматы общения для достижения совместного результата.
          </motion.p>

          {/* Группа 3: Поля формы */}
          <motion.form variants={groupVariants} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Ваше имя", "Ваша фамилия"].map((label, idx) => (
                <div key={idx}>
                  <label className="block mb-2 text-sm font-medium text-text-secondary">
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={label}
                    className="w-full border border-[#e5d870] p-3 rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-[#e5d870]"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block mb-2 text-sm font-medium text-text-secondary">
                  Ваш email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full border border-[#e5d870] p-3 rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-[#e5d870]"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-text-secondary">
                  Ваш телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-[#e5d870] p-3 rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-[#e5d870]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-text-secondary">
                Ваше сообщение
              </label>
              <textarea
                placeholder="Введите сообщение..."
                className="w-full h-16 border border-[#e5d870] p-3 rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-[#e5d870]"
                rows={6}
                required
              />
            </div>
          </motion.form>

          {/* Группа 4: Текст + кнопка — последняя анимация */}
          <motion.div
            variants={finalFormPartVariants}
            className="space-y-4 flex flex-col items-start">
            <p className="text-xs text-text-secondary">
              Отправляя эту форму, вы соглашаетесь с{" "}
              <a className="text-primary hover:underline cursor-pointer">
                Условиями обслуживания
              </a>{" "}
              и{" "}
              <a className="text-primary hover:underline cursor-pointer">
                Политикой конфиденциальности
              </a>
              .
            </p>

            <button
              type="submit"
              className="bg-primary text-background py-3 px-6 rounded-lg transition-colors duration-200">
              Отправить сообщение
            </button>
          </motion.div>
        </div>

        {/* Группа 5: Контактная информация */}
        <motion.div variants={groupVariants}>
          <motion.div variants={contactColumnVariants} className="space-y-8">
            <motion.div variants={contactItemVariants}>
              <h4 className="font-semibold text-primary mb-2">
                Информация о компании:
              </h4>
              <p className="text-[#ccc]">Orlov Brand</p>
            </motion.div>

            <motion.div variants={contactItemVariants}>
              <h4 className="font-semibold text-primary mb-2">Адрес:</h4>
              <p className="text-[#ccc]">
                Россия, г. Москва, <br />
                ул. Мнёвники, дом 5
              </p>
              <p className="text-[#ccc]">Почтовый индекс: 123308</p>
            </motion.div>

            <motion.div variants={contactItemVariants}>
              <h4 className="font-semibold text-primary mb-2">
                Позвоните нам:
              </h4>
              <p className="text-[#ccc] mb-1">Мы всегда готовы помочь вам.</p>
              <a
                href="tel:+7-911-332-29-17"
                className="text-primary hover:underline">
                +7 (911) 332-29-17
              </a>
            </motion.div>

            <motion.div variants={contactItemVariants}>
              <h4 className="font-semibold text-primary mb-2">
                Почта для связи:
              </h4>
              <a
                href="mailto:orlov_brand_777@vk.com"
                className="text-[#ccc] hover:underline">
                orlov_brand_777@vk.com
              </a>
            </motion.div>

            <motion.div variants={contactItemVariants}>
              <h4 className="font-semibold text-primary mb-2">Соцсети:</h4>
              <div className="flex items-center gap-4 text-gold text-2xl">
                <a
                  href="https://vk.com/orlov_brand_rus777"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VK"
                  className="text-[#ccc] hover:text-white transition">
                  <FaVk />
                </a>
                <a
                  href="https://t.me/ORLOV_brand777"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="text-[#ccc] hover:text-white transition">
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://wa.me/89210428777"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-[#ccc] hover:text-white transition">
                  <FaWhatsapp />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
