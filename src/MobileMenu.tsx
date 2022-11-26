import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <NavLinks />
    </div>
  );
}
