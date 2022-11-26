import "./styles/reset.css";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./Home";
import ErrorPage from "./Error";
import Projects from "./Projects";
import Resources from "./Resources";
import SelectedPublications from "./SelectedPublications";

function getElementById(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (element === null) {
    throw new Error(`failed to find element with id ${id}`);
  }
  return element;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/selected-publications",
        element: <SelectedPublications />,
      },
    ],
  },
]);

const root = createRoot(getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
