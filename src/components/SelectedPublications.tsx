import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

const selectedPublications = import.meta.glob(
  "../../site/content/selected-publications/*.json",
  { eager: true }
) as Record<
  string,
  {
    title: string;
    sections: Array<{ content: string; doi?: string }>;
  }
>;

export default function SelectedPublications() {
  return (
    <Section title="Selected Publications">
      {Object.values(selectedPublications).map(({ title, sections }, idx) => {
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
      })}
    </Section>
  );
}
