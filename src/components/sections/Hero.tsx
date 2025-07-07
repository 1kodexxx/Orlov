import { motion } from "framer-motion";
import heroImage from "@/assets/logo.svg";
import { Button, Marquee } from "../common";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-x-hidden flex flex-col"
      style={{ minHeight: "calc(100vh - 3rem)" }}>
      {/* Анимация бегущей строки */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/7YH33dGx/background.webp')",
        }}>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex-1 flex items-center w-full pb-12">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full">
          {/* Левая часть */}
          <div className="flex-1 text-white text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
              Добро пожаловать <br /> в Orlov Brand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 text-center md:text-left">
              Премиальный бренд аксессуаров "ORLOV" создаст для&nbsp;Вас
              уникальный образ. Авторский вид и эксклюзивный дизайн подчеркнут
              статус обладателя. Наш онлайн-бутик представляет ассортимент для
              настоящих чемпионов по&nbsp;жизни!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm md:text-base font-semibold not-italic mt-2 text-center md:text-left">
              "Когда знаешь, что доверяешь ЛУЧШЕМУ!"
              <br />
              <span className="text-xs md:text-sm font-light">
                © IVAN ORLOV
              </span>
            </motion.p>

            {/* Кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col md:flex-row gap-4 w-full max-w-xs md:max-w-none mx-auto md:mx-0 md:justify-start justify-center items-center text-center md:text-left">
              <div className="w-full md:w-auto">
                <Button
                  initialText="Перейти в каталог 💎"
                  hoverText="Поехали! 🚀"
                  to="/catalog"
                />
              </div>
            </motion.div>
          </div>

          {/* Правая часть */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex items-center justify-center mb-8 md:mb-0">
            <img
              src={heroImage}
              alt="Orlov Hero"
              className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[720px] rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Бегущая строка */}
      <Marquee />
    </section>
  );
};

export default Hero;
