import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="link-container">
      <NavLink to="/current-projects">Current Projects</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/selected-publications">Selected Publications</NavLink>
    </div>
  );
}
