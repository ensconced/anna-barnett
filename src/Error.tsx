import React from "react";
import Section from "./Section";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Section title="Error">
      <p>Page not found.</p>
      <NavLink to="/">Home</NavLink>
    </Section>
  );
}
