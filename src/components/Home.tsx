import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";
import backgroundMarkdown from "../../site/sections/Background.md?raw";

export default function Home() {
  return (
    <Section title="Background">
      <Markdown
        components={{
          a(props) {
            return <a {...props} target="_blank" />;
          },
        }}
      >
        {backgroundMarkdown}
      </Markdown>
    </Section>
  );
}
