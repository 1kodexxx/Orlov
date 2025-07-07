import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Logo } from "./";
import { DesktopMenu, DesktopMenuButtons } from "./desktop";
import { MobileMenu, HamburgerButton } from "./mobile";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-background shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between relative">
        <Logo onCloseMobile={() => setMobileMenuOpen(false)} />

        <DesktopMenu />

        <DesktopMenuButtons />

        <HamburgerButton isOpen={mobileMenuOpen} toggle={toggleMenu} />
      </div>

      <MobileMenu isOpen={mobileMenuOpen} toggle={toggleMenu} />
    </header>
  );
};

export default NavBar;
