import React from "react";
import { motion } from "framer-motion";
import { Button } from "../common";

interface InfoSectionProps {
  title: string;
  description: string; // строка с тегами <br/> для ручного переноса
  imageUrl: string;
  reverse?: boolean;
  backgroundColor?: string;
  initialButtonText?: string;
  hoverButtonText?: string;
  buttonLink?: string;
}

const Teaser: React.FC<InfoSectionProps> = ({
  title,
  description,
  imageUrl,
  reverse = false,
  backgroundColor = "bg-background",
  initialButtonText,
  hoverButtonText,
  buttonLink,
}) => {
  return (
    <section
      className={`${backgroundColor} text-white py-12 min-h-[80vh] md:min-h-[calc(100vh-3rem)] flex items-center`}>
      <div className="max-w-screen-xl mx-auto px-4 w-full">
        {/* Десктоп версия */}
        <div className="hidden sm:flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full">
          {/* Левая часть */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`flex-1 text-white text-left space-y-6 ${
              reverse ? "md:order-2" : "md:order-1"
            }`}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-left">
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg leading-relaxed max-w-lg mx-0 text-left"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {initialButtonText && hoverButtonText && buttonLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-row gap-4 w-full md:justify-start items-center text-left">
                <div className="w-auto">
                  <Button
                    initialText={initialButtonText}
                    hoverText={hoverButtonText}
                    to={buttonLink}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Правая часть */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex-1 flex items-center justify-center mb-8 md:mb-0 ${
              reverse ? "md:order-1" : "md:order-2"
            }`}>
            <img
              src={imageUrl}
              alt="image"
              className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[720px] rounded-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Мобильная версия */}
        {/* Мобильная версия */}
        <div className="sm:hidden flex flex-col items-center justify-center gap-8 w-full">
          {/* Картинка без внутренних отступов */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full">
            <img
              src={imageUrl}
              alt="image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>

          {/* Текст и кнопка внутри сетки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white text-center space-y-6 w-full px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold">
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed w-full text-center"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {initialButtonText && hoverButtonText && buttonLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 w-full justify-center items-center text-center">
                <div className="w-full">
                  <Button
                    initialText={initialButtonText}
                    hoverText={hoverButtonText}
                    to={buttonLink}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Teaser;
