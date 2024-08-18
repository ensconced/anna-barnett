import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

import selectedPublicationsMarkdown from "../../site/content/selected-publications?raw";

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
        {selectedPublicationsMarkdown}
      </Markdown>
    </Section>
  );
}
