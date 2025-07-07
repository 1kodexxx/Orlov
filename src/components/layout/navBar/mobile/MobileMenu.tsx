// src/components/layout/navBar/MobileMenu.tsx

import { NavLink } from "react-router-dom";
import { FaSearchDollar, FaUserTie } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { CartDropdown } from "../cartDropdown/";
import { SearchDropdown } from "../searchDropdown";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/useCart";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "О нас", path: "/about-us" },
  { label: "Каталог", path: "/catalog" },
  { label: "Доставка", path: "/delivery" },
  { label: "Контакты", path: "/contacts" },
  { label: "Отзывы", path: "/reviews" },
];

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenu: React.FC<Props> = ({ isOpen, toggle }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [animateBadge, setAnimateBadge] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  const prevTotalItemsRef = useRef<number>(0);
  const mobileCartRef = useRef<HTMLDivElement>(null);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleGoToCart = () => {
    setIsCartOpen(false);
    toggle();
  };

  // закрываем выпадашки по клику вне
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        mobileCartRef.current &&
        !mobileCartRef.current.contains(e.target as Node)
      ) {
        setIsCartOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // анимация бейджа и цены
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: 2000, opacity: 1 }}
          exit={{ maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden bg-background overflow-visible border-t border-gray-700">
          <div className="px-6 py-4 space-y-4">
            {navItems.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `block text-sm transition ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-text-secondary hover:text-primary"
                  }`
                }>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex justify-around py-4 text-primary text-2xl relative">
            <FaSearchDollar
              onClick={() => {
                setIsSearchOpen((p) => !p);
                setIsCartOpen(false);
              }}
              className="cursor-pointer hover:scale-110 transition"
            />

            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => {
                setIsCartOpen((p) => !p);
                setIsSearchOpen(false);
              }}>
              <BiShoppingBag className="text-2xl" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key="mobile-badge"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: animateBadge ? 1.15 : 1,
                      opacity: 1,
                    }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 16,
                    }}
                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs min-w-[16px] h-[16px] flex items-center justify-center rounded-full px-[4px]">
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.span
                animate={animatePrice ? { scale: 1.1 } : { scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 16,
                }}
                className="ml-1 text-sm font-medium text-[#CCCCCC]">
                {totalPrice} ₽
              </motion.span>
            </div>

            <div className="relative flex items-center">
              <FaUserTie className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                ref={mobileCartRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-4 pb-4">
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
                className="px-4 pb-4 relative z-50">
                <SearchDropdown
                  onClose={() => setIsSearchOpen(false)}
                  onToggleMenu={toggle}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
