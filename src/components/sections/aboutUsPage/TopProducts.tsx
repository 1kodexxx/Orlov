import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProductCard } from "@/components/shop/";
import type { Product } from "@/data/products";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

interface TopProductsProps {
  products: Product[];
}

const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  const topProducts = products.slice(0, 12);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full min-h-auto sm:min-h-screen flex flex-col items-center justify-center bg-background py-12 sm:py-16 px-2 sm:px-4">
      <div className="w-full max-w-screen-xl flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          Коллекции премиальных чехлов
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 text-center">
          Оцените изысканный дизайн и превосходное качество наших топовых
          моделей. Элитные чехлы для тех, кто выбирает стиль и надёжность.
        </motion.p>

        <div className="relative w-full flex items-center">
          {/* Навигационные стрелки */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-primary hover:scale-110 transition">
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-primary hover:scale-110 transition">
            <FaChevronRight size={20} />
          </button>

          <div className="w-full px-2 sm:px-4">
            {isMobile ? (
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={5000}
                grabCursor={true}
                breakpoints={{
                  0: { slidesPerView: 1.2, spaceBetween: 16 },
                  480: { slidesPerView: 1.5, spaceBetween: 20 },
                }}>
                {topProducts.map((product, i) => (
                  <SwiperSlide
                    key={`${product.slug}-${i}`}
                    className="h-auto cursor-pointer select-none">
                    <ProductCard {...product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={5000}
                grabCursor={true}
                breakpoints={{
                  768: { slidesPerView: 3, spaceBetween: 24 },
                  1024: { slidesPerView: 5, spaceBetween: 24 },
                  1280: { slidesPerView: 6, spaceBetween: 24 },
                }}>
                {topProducts.map((product, i) => (
                  <SwiperSlide
                    key={`${product.slug}-${i}`}
                    className="h-auto cursor-pointer select-none">
                    <ProductCard {...product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
