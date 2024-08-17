import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

const resources = import.meta.glob("../../site/content/resources/*.json", {
  eager: true,
}) as Record<
  string,
  {
    title: string;
    sections: Array<{
      title: string;
      content: string;
      link?: { text?: string; url: string };
      "download-link"?: { text?: string; file: string };
    }>;
  }
>;

export default function Resources() {
  return (
    <Section title="Resources">
      {Object.values(resources).map(({ title, sections }, idx) => {
        return (
          <React.Fragment>
            <h3>{title}</h3>
            <ul>
              {sections.map(
                ({ content, link, "download-link": downloadLink }) => {
                  return (
                    <li key={idx}>
                      {link && (
                        <a href={link.url} target="_blank">
                          {link.text ?? link.url}
                        </a>
                      )}
                      {downloadLink && (
                        <a href={downloadLink.file} download>
                          {downloadLink.text ?? downloadLink.file}
                        </a>
                      )}
                      <Markdown
                        components={{
                          a(props) {
                            return <a {...props} target="_blank" />;
                          },
                        }}
                      >
                        {content}
                      </Markdown>
                    </li>
                  );
                }
              )}
            </ul>
          </React.Fragment>
        );
      })}
    </Section>
  );
}
