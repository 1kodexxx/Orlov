// src/components/layout/navBar/GallerySection.tsx

import { motion } from "framer-motion";
import React from "react";

interface GallerySectionProps {
  title: string;
  description: string;
  images?: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title,
  description,
  images = [],
}) => {
  if (images.length < 6) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-background py-8 md:py-16 px-4">
        <p className="text-primary text-lg">Галерея загружается...</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-background py-8 md:py-16 px-4">
      <div className="w-full max-w-[1245px] mx-auto flex flex-col gap-8">
        <div className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 text-center">
            {description}
          </motion.p>
        </div>

        {/* Desktop version - полная галерея */}
        <div className="hidden md:flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-full md:w-1/2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`p-1 md:p-2 ${index === 2 ? "w-full" : "w-1/2"}`}>
                <img
                  src={`${images[index]}?v=${index}`}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover object-center block rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap w-full md:w-1/2">
            {[3, 4, 5].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + (index - 3) * 0.2 }}
                className={`p-1 md:p-2 ${index === 3 ? "w-full" : "w-1/2"}`}>
                <img
                  src={`${images[index]}?v=${index}`}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover object-center block rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile version - только три изображения */}
        <div className="flex md:hidden flex-wrap -m-1">
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="w-1/2 p-1">
              <img
                src={`${images[index]}?v=${index}`}
                alt={`Галерея ${index + 1}`}
                className="w-full h-full object-cover object-center block rounded-lg max-h-[160px]"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full p-1">
            <img
              src={`${images[3]}?v=3`}
              alt="Галерея 4"
              className="w-full h-full object-cover object-center block rounded-lg max-h-[300px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
