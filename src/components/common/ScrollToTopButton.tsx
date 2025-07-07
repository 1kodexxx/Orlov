import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 w-full z-50 flex justify-end px-4">
          <div className="max-w-[1245px] w-full flex justify-end mx-auto">
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-full border-2 border-primary bg-[#181818] hover:scale-110 transition-transform duration-300 shadow-xl relative overflow-hidden"
              aria-label="Наверх">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <FiArrowUp size={24} className="text-gold" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
