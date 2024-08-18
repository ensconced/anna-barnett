import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";
import selectedPublications from "../../site/content/selected-publications.md?raw";

export default function SelectedPublications() {
  return (
    <Section title="Selected Publications">
      <Markdown
        components={{
          a(props) {
            return <a {...props} target="_blank" />;
          },
        }}
      >
        {selectedPublications}
      </Markdown>
      {/* {Object.values(selectedPublications).map(({ title, content }, idx) => {
        return (
          <React.Fragment key={idx}>
            <h3>{title}</h3>
            <ul>
              {sections.map(({ content, doi }, idx) => {
                return (
                  <li key={idx} style={{ paddingBottom: "1rem" }}>
                    <Markdown
                      components={{
                        p(props) {
                          return <p style={{ display: "inline" }} {...props} />;
                        },
                      }}
                    >
                      {content}
                    </Markdown>
                    {doi && (
                      <span>
                        {" "}
                        <a href={doi} target="_blank">
                          [doi]
                        </a>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })} */}
    </Section>
  );
}
