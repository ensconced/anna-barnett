import "./styles/reset.css";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import Home from "./components/Home";
import ErrorPage from "./components/Error";
import Section from "./components/Section";
import Markdown from "react-markdown";
import sectionsMarkdown from "./sections";

function getElementById(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (element === null) {
    throw new Error(`failed to find element with id ${id}`);
  }
  return element;
}

console.log(sectionsMarkdown);

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
      ...sectionsMarkdown.sections.map(({ title, markdown }) => {
        return {
          path: `/${title}`,
          element: (
            <Section title={title}>
              <Markdown
                components={{
                  a(props) {
                    return (
                      <a
                        {...props}
                        target="_blank"
                        download={
                          props.href?.startsWith("/media") ? true : false
                        }
                      />
                    );
                  },
                }}
              >
                {markdown}
              </Markdown>
            </Section>
          ),
        };
      }),
    ],
  },
]);

const root = createRoot(getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
