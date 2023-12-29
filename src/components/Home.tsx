import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";
import background from "../../site/content/background.json";

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
        {background.content}
      </Markdown>
    </Section>
  );
}
