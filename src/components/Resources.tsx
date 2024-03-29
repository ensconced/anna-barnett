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
      content: string;
      "link-text"?: string;
      "link-url"?: string;
      "file-download"?: string;
      "file-download-text"?: string;
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
                ({
                  content,
                  "link-text": linkText,
                  "link-url": linkUrl,
                  "file-download": fileDownload,
                  "file-download-text": fileDownloadText,
                }) => {
                  return (
                    <li key={idx}>
                      {linkText && linkUrl && (
                        <a href={linkUrl} target="_blank">
                          {linkText}
                        </a>
                      )}
                      {fileDownload && fileDownloadText && (
                        <a href={fileDownload} download>
                          {fileDownloadText}
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
