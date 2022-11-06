import "./styles/reset.css";
import React from "react";
import { createRoot } from "react-dom/client";

function getElementById(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (element === null) {
    throw new Error(`failed to find element with id ${id}`);
  }
  return element;
}

function App() {
  return <h1>Professor Anna Barnett</h1>;
}

const root = createRoot(getElementById("root"));
root.render(<App />);
