import React from "react";
import Section from "./Section";

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
      <h3>Assessment tools</h3>
      <p>
        In collaboration with colleagues, I have various projects underway to
        develop a range of assessment tools to be used by Education and Allied
        Health Professionals.
      </p>
      <ul>
        {assessmentTools.map(({ title, description }) => (
          <li style={{ listStyle: "disc" }} key={title}>
            <em>{title}</em>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <h3>Handwriting and typing</h3>
      <p>
        ‘Writing in the Digital Age' Funded by: Royal College of Occupational
        Therapists (RCOT)
        <br />
        PI: Mellissa Prunty, Brunel University London, CI: Anna L. Barnett,
        Oxford Brookes University; Emma Sumner, University College London.
      </p>
      <h3>The genetics of motor coordination</h3>
      <p>
        ‘The Genetics of Motor Coordination’ Funded by: The Waterloo Foundation.
        <br />
        PI: Hayley Mountford; CI: Anna L. Barnett; Dianne Newbury, Oxford
        Brookes University.
      </p>
      <h3>Intervention approaches</h3>
      <p>
        'Co-production of an Occupational Therapy parent/Carer group education
        programme'. Funded by: Royal College of Occupational Therapists
        Specialist Section for Children, Young People and Families Research
        Award.
        <br />
        PI: Teresa Joyce, CI: Anna L. Barnett, A.L. (2022) £10,345.13.
      </p>
    </Section>
  );
}
