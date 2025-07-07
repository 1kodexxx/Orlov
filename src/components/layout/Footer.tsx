import { Link } from "react-router-dom";
import { FaVk, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gold py-8">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">
          {/* Левая часть */}
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold text-gold mb-2">Orlov Brand</h2>
            <p className="text-sm text-white/80">
              © 2025 Orlov Brand. Все права защищены.
            </p>
          </div>

          {/* Центральные ссылки в столбик */}
          <div className="flex flex-col gap-2 text-gold text-sm items-start">
            <Link to="/" className="hover:underline">
              Главная
            </Link>
            <Link to="/about-us" className="hover:underline">
              О нас
            </Link>
            <Link to="/catalog" className="hover:underline">
              Каталог
            </Link>
            <Link to="/delivery" className="hover:underline">
              Доставка
            </Link>
            <Link to="/contacts" className="hover:underline">
              Контакты
            </Link>
            <Link to="/reviews" className="hover:underline">
              Отзывы
            </Link>
          </div>

          {/* Соцсети */}
          <div className="flex items-center gap-4 text-gold text-2xl">
            <a
              href="https://vk.com/orlov_brand_rus777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
              className="hover:text-white transition">
              <FaVk />
            </a>
            <a
              href="https://t.me/ORLOV_brand777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-white transition">
              <FaTelegramPlane />
            </a>
            <a
              href="https://wa.me/89210428777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Нижний слоган */}
      <div className="mt-8 text-center text-sm text-gold/80">
        Orlov — Роскошь. Статус. Качество.
      </div>
    </footer>
  );
};

export default Footer;
