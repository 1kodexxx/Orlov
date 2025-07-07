import { NavLink, useLocation } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "О нас", path: "/about-us" },
  { label: "Каталог", path: "/catalog" },
  { label: "Доставка", path: "/delivery" },
  { label: "Контакты", path: "/contacts" },
  { label: "Отзывы", path: "/reviews" },
];

const DesktopMenu: React.FC = () => {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const recalc = () => {
      const idx = navItems.findIndex((item) =>
        pathname === "/"
          ? item.path === "/"
          : pathname.startsWith(item.path) && item.path !== "/"
      );

      const cu = containerRef.current?.getBoundingClientRect();
      const it = itemRefs.current[idx]?.getBoundingClientRect();

      if (idx !== -1 && cu && it) {
        setUnderline({ left: it.left - cu.left, width: it.width });
        setActiveIndex(idx);
      } else {
        setActiveIndex(null);
      }
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [pathname]);

  return (
    <ul
      ref={containerRef}
      className="hidden lg:flex inset-x-0 justify-center gap-4 md:gap-6 relative">
      {navItems.map(({ label, path }, i) => (
        <li
          key={path}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="relative">
          <NavLink
            to={path}
            className={({ isActive }) =>
              `text-xs md:text-base font-normal transition-colors duration-200 ${
                isActive || (pathname.startsWith(path) && path !== "/")
                  ? "text-primary"
                  : "text-text-secondary hover:text-primary"
              }`
            }>
            {label}
          </NavLink>
        </li>
      ))}

      {activeIndex !== null && (
        <motion.div
          className="absolute bottom-0 h-[1.2px] bg-primary"
          initial={false}
          animate={{ left: underline.left, width: underline.width }}
          style={{ left: underline.left, width: underline.width }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </ul>
  );
};

export default DesktopMenu;
