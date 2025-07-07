import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../common";

interface PromoSectionProps {
  title: React.ReactNode;
  description: string;
  buttonInitialText: string;
  buttonHoverText: string;
  buttonLink: string;
  imageUrl1: string;
  imageUrl2: string;
  backgroundColor?: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({
  title,
  description,
  buttonInitialText,
  buttonHoverText,
  buttonLink,
  imageUrl1,
  imageUrl2,
  backgroundColor = "bg-primary",
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen flex flex-col md:flex-row items-center bg-background">
      <div className="max-w-screen-xl mx-auto px-4 py-8 w-full flex flex-col md:flex-row gap-4 items-stretch">
        {/* Блок с изображениями */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 w-full">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            alt="Promo 1"
            src={imageUrl1}
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            alt="Promo 2"
            src={imageUrl2}
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
        </div>

        {/* Блок с текстом */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className={`${backgroundColor} p-8 md:p-12 lg:px-16 lg:py-24 flex items-center justify-center w-full`}>
          <div className="mx-auto max-w-xl text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-background">
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="text-base sm:text-lg leading-relaxed mt-4 text-background/90"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
              className="mt-4 md:mt-8 flex justify-center">
              <Button
                initialText={buttonInitialText}
                hoverText={buttonHoverText}
                to={buttonLink}
                variant="dark"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PromoSection;
