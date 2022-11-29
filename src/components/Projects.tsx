import React from "react";
import Section from "./Section";
import Reference from "./Reference";

export default function Projects() {
  return (
    <>
      <Section title="Current Projects">
        <p>
          Assessment tools: Various projects are underway to develop a range of
          assessment tools to be used by Education and Allied Health
          Professionals
        </p>
        <ul>
          <li>DASH - 2nd Edition</li>
          <li>Movement ABC – 3rd Edition</li>
          <li>Handwriting Legibility Scale (HLS)</li>
          <li>Writing Quality Scale (WQS)</li>
          <li>Assessment of typing speed</li>
        </ul>
      </Section>
      <Section title="Handwriting and typing">
        <p>
          ‘Writing in the Digital Age' Funded by: Royal College of Occupational
          Therapists (RCOT) PI: Mellissa Prunty, Brunel University London, CI:
          Anna L. Barnett, Oxford Brookes University; Emma Sumner, University
          College London.
        </p>
        <p>
          <Reference doi={"https://doi.org/10.1177/03080226221097314"}>
            Nightingale R, Sumner E, Prunty M, Barnett AL, 'Handwriting and
            typing: Occupational therapy practice when supporting adolescents
            with handwriting difficulties' British Journal of Occupational
            Therapy 85 (11) (2022) 891-899. ISSN: 0308-0226 eISSN: 1477-6006
          </Reference>
        </p>
      </Section>
      <Section title="The genetics of motor coordination">
        <p>
          ‘The Genetics of Motor Coordination’ Funded by: The Waterloo
          Foundation. PI: Hayley Mountford; CI: Anna L. Barnett; Dianne Newbury,
          Oxford Brookes University.
        </p>
      </Section>
    </>
  );
}
