import React from "react";
import Section from "./Section";
import Reference from "./Reference";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
