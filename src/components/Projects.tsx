import React from "react";
import Section from "./Section";

const assessmentTools = [
  {
    title: "DASH - 2nd Edition.",
    description:
      "Funded by Pearson, a project is underway to develop a revised version of DASH/DASH17+. This new edition will cover the age range 8-25 years. It is due to be published in late 2023.",
  },
  {
    title: "Movement ABC – 3rd Edition.",
    description:
      "Funded by Pearson, a project is underway to develop a revised version of the Movement ABC Test and Checklist. This new edition will cover the age range 3-25 years. It is due to be published in late 2023.",
  },
  {
    title: "Handwriting Legibility Scale (HLS).",
    description:
      "The HLS was originally designed to assess handwriting in children aged 9- 14 years. We are currently examining its application in the handwriting of older children (aged 14-16 years) and in young adults aged 17-25 years. The HLS has also been translated into other languages including Italian, Dutch and Hebrew.",
  },
  {
    title: "Writing Quality Scale (WQS).",
    description:
      "We have recently developed this scale to be used with the ‘free writing’ script from the DASH17+. It offers a quick and practical way to assess the compositional quality of writing, particularly useful for specialist assessors in Higher Education. This project has been funded by Oxford Brookes University.",
  },
  {
    title: "Assessment of typing speed.",
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
