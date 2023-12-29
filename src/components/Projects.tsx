import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

const currentProjects = import.meta.glob(
  "../../site/content/current-projects/*.json",
  { eager: true }
) as Record<
  string,
  {
    title: string;
    description?: string;
    bullet?: boolean;
    sections: Array<{ title?: string; content: string }>;
  }
>;

const assessmentTools = [
  {
    title: "Assessment of typing skill.",
    description:
      "We are currently developing a tool for the assessment of typing speed and typing skills for young adults aged 17-25 years. This will complement the DASH to allow for a direct comparison to be made between the two modes of writing: handwriting and typing.",
  },
];

export default function Projects() {
  return (
    <Section title="Current Projects">
      {Object.values(currentProjects).map((project) => {
        const { title, sections, description, bullet } = project;
        return (
          <React.Fragment key={title}>
            <h3>{title}</h3>
            {description && <Markdown>{description}</Markdown>}
            {bullet ? (
              <ul>
                {assessmentTools.map(({ title, description }) => (
                  <li style={{ listStyle: "disc" }} key={title}>
                    <em>{title}</em>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              sections.map(({ content }, idx) => (
                <Markdown key={idx}>{content}</Markdown>
              ))
            )}
          </React.Fragment>
        );
      })}
    </Section>
  );
}
