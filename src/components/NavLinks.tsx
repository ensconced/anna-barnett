import React from "react";
import { NavLink } from "react-router-dom";
import sectionsMarkdown from "../sections";

export default function NavLinks() {
  return (
    <div className="link-container">
      {sectionsMarkdown.map(({ title, link }) => {
        return (
          <NavLink key={title} to={link}>
            {title}
          </NavLink>
        );
      })}
    </div>
  );
}
