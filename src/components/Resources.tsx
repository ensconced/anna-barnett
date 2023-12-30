import React from "react";
import Section from "./Section";
import Reference from "./Reference";
import pdfDownloadURL from "../../assets/downloads/Handwriting Legibility Scale (HLS) RIDD 2018.pdf";

const selectedPublications = import.meta.glob(
  "../../site/content/selected-publications/*.json",
  { eager: true }
) as Record<
  string,
  {
    title: string;
    sections: Array<{ content: string; doi?: string }>;
  }
>;

export default function Resources() {
  return (
    <Section title="Resources">
      <h3>Freely Available assessment tools</h3>
      <ul>
        <li>
          <a href={pdfDownloadURL} download>
            Handwriting Legibility Scale
          </a>
          <p>
            Also see publication:{" "}
            <Reference doi="https://doi.org/10.1016/j.ridd.2017.11.013">
              Barnett, A.L., Prunty, M. & Rosenblum, S. (2018). Development of
              the Handwriting Legibility Scale (HLS): a preliminary examination
              of Reliability and Validity.{" "}
              <em>Research in Developmental Disabilities</em>, 72, 240-247.
            </Reference>
            <br />
            Administration Guide in preparation.
          </p>
          <p>
            <a href="https://doi.org/10.1111/1467-8578.12464" target="_blank">
              Writing Quality Scale
            </a>
          </p>
          <Reference doi="https://doi.org/10.1111/1467-8578.12464">
            Stuart, N. & Barnett, A.L. (2023 in press). The Writing Quality
            Scale (WQS): A new tool to identify writing difficulties in
            students. <em>British Journal of Special Education</em>.
          </Reference>
          <br />
          Administration Guide in preparation.
        </li>
      </ul>
      <h3>Assessment instruments for purchase</h3>
      <ul>
        <li>
          <a
            href="https://www.pearsonclinical.co.uk/store/ukassessments/en/Store/Professional-Assessments/Motor-Sensory/Movement-Assessment-Battery-for-Children-%7C-Third-Edition/p/P100057001.html"
            target="_blank"
          >
            Movement ABC-3
          </a>
          <p>
            The Movement Assessment Battery for Children - 3rd Edition (Movement
            ABC-3; Henderson & Barnett, 2023) includes a standardised test of
            general motor competence (for 3-25 years) and a checklist for (3-25
            years).
          </p>
        </li>
        <li>
          <a
            href="https://www.pearsonclinical.co.uk/store/ukassessments/en/Store/Professional-Assessments/Academic-Learning/Detailed-Assessment-of-Speed-of-Handwriting%2C-Second-Edition/p/P100057002.html"
            target="_blank"
          >
            DASH-2
          </a>
          <p>
            The Detailed Assessment of the Speed of Handwriting (DASH-2;
            Barnett, Henderson, & Scheib, 2024) includes a range of writing
            tasks to assess handwriting speed for 8-25 year-olds.
          </p>
        </li>
        <li>
          <a
            href="https://www.hogrefe.com/uk/shop/intelligence-and-development-scales-2nd-edition-ids-2.html#1+1"
            target="_blank"
          >
            Intelligence and Development Scales for Children and Adolescents -
            2nd Edition (IDS-2)
          </a>
          <p>
            The IDS-2 is a general developmental assessment that includes tests
            of Intelligence, Executive Functions, Psychomotor skills,
            Social-Emotional skills, Scholastic skills, and Motivation and
            Attitude. Originally developed in German by Alexander Grob and
            Priska Hagmann-von Arx, the UK adaptation was undertaken by Anna L.
            Barnett, Nichola Stuart and Serena Vanzan and published in 2021.
          </p>
        </li>
      </ul>
    </Section>
  );
}
