import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

import currentProjectsMarkdown from "../../site/content/current-projects.md?raw";

export default function Projects() {
  return (
    <Section title="Current Projects">
      <Markdown>{currentProjectsMarkdown}</Markdown>
    </Section>
  );
}
