import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

import currentProjects from "../../site/content/current-projects.json";

export default function Projects() {
  return (
    <Section title="Current Projects">
      <Markdown>{currentProjects.content}</Markdown>
    </Section>
  );
}
