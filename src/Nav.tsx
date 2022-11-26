import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <section>
      <nav>
        <h1>
          <NavLink to="/">Prof Anna Barnett</NavLink>
        </h1>
        <div className="link-container">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/selected-publications">Selected Publications</NavLink>
        </div>
      </nav>
    </section>
  );
}
