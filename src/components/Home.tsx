import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";
import sectionsMarkdown from "../sections";

export default function Home() {
  return (
    <Section title={sectionsMarkdown.homepage.title}>
      <Markdown
        components={{
          a(props) {
            return <a {...props} target="_blank" />;
          },
        }}
      >
        {sectionsMarkdown.homepage.markdown}
      </Markdown>
    </Section>
  );
}
