import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

import selectedPublications from "../../site/content/selected-publications.json";

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
        {selectedPublications.content}
      </Markdown>
    </Section>
  );
}
