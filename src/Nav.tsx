import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useWindowDimensions from "./hooks/useWindowDimensions";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const windowDimensions = useWindowDimensions();

  const useMobileNav = windowDimensions.width < 800;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  if (useMobileNav) {
    return (
      <section>
        <nav className={mobileMenuOpen ? "open" : ""}>
          <h1>
            <NavLink to="/">Prof Anna Barnett</NavLink>
          </h1>
          <MenuIcon open={mobileMenuOpen} onChange={setMobileMenuOpen} />
          {mobileMenuOpen && <MobileMenu />}
        </nav>
      </section>
    );
  }

  return (
    <section>
      <nav>
        <h1>
          <NavLink to="/">Prof Anna Barnett</NavLink>
        </h1>
        <NavLinks />
      </nav>
    </section>
  );
}
