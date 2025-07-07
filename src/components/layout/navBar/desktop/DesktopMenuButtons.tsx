// src/components/desktopMenuButtons/DesktopMenuButtons.tsx

import { FaUserTie, FaSearchDollar } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/useCart";
import CartDropdown from "../cartDropdown/CartDropdown";
import SearchDropdown from "../searchDropdown/SearchDropdown";

const DesktopMenuButtons: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [animateBadge, setAnimateBadge] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  const prevTotalItemsRef = useRef<number>(0);
  const desktopCartRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
    setIsCartOpen(false);
  };

  const handleGoToCart = () => {
    setIsCartOpen(false);
    setIsSearchOpen(false);
    navigate("/cart");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopCartRef.current &&
        !desktopCartRef.current.contains(event.target as Node)
      ) {
        setIsCartOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const prev = prevTotalItemsRef.current;
    if (totalItems > prev) {
      setAnimateBadge(true);
      setAnimatePrice(true);
      setTimeout(() => setAnimateBadge(false), 300);
      setTimeout(() => setAnimatePrice(false), 300);
    }
    prevTotalItemsRef.current = totalItems;
  }, [totalItems]);

  return (
    <div className="hidden lg:flex gap-4 items-center text-primary text-lg md:text-xl relative">
      <div
        className="relative flex items-center cursor-pointer"
        onClick={handleSearchClick}>
        <FaSearchDollar className="hover:scale-110 transition" />
      </div>

      <div
        className="relative flex items-center cursor-pointer"
        onClick={() => {
          setIsCartOpen((prev) => !prev);
          setIsSearchOpen(false);
        }}>
        <div className="relative">
          <BiShoppingBag className="text-2xl" />
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                key="badge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: animateBadge ? 1.15 : 1,
                  opacity: 1,
                }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 250, damping: 16 }}
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs min-w-[16px] h-[16px] flex items-center justify-center rounded-full px-[4px]">
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <motion.span
          animate={animatePrice ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 16 }}
          className="ml-2 text-base font-medium text-[#CCCCCC]">
          {totalPrice} ₽
        </motion.span>
      </div>

      <div className="relative flex items-center">
        <FaUserTie className="cursor-pointer hover:scale-110 transition" />
      </div>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            ref={desktopCartRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 z-50">
            <CartDropdown
              onClose={() => setIsCartOpen(false)}
              onGoToCart={handleGoToCart}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 top-12 z-50">
            <SearchDropdown
              onClose={() => setIsSearchOpen(false)}
              onToggleMenu={() => setIsSearchOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopMenuButtons;
