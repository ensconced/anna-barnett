import React from "react";
import Section from "./Section";
import Reference from "./Reference";
import pdfDownloadURL from "../../assets/downloads/Handwriting Legibility Scale (HLS) RIDD 2018.pdf";

export default function Resources() {
  return (
    <Section title="Resources">
      <h3>Websites</h3>
      <ul>
        <li>
          <a href="http://www.movementmattersuk.org/" target="_blank">
            Movement Matters
          </a>
        </li>
      </ul>
      <h3>Freely Available assessment tools</h3>
      <ul>
        <li>
          <a href={pdfDownloadURL} download>
            Handwriting Legibility Scale
          </a>
          <p>
            Also see publication:{" "}
            <Reference doi="https://doi.org/10.1016/j.ridd.2017.11.013">
              Barnett, A.L., Prunty, M. & Rosenblum, S. (2017). Development of
              the Handwriting Legibility Scale (HLS): a preliminary examination
              of Reliability and Validity.{" "}
              <em>Research in Developmental Disabilities</em>, 72, 240-247.
            </Reference>
          </p>
          <p>Administration Guide in preparation.</p>
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
          <p>Administration Guide in preparation.</p>
        </li>
      </ul>
      <h3>Assessment instruments for purchase</h3>
      <ul>
        <li>
          <a
            href="http://www.pearsonclinical.co.uk/Psychology/ChildCognitionNeuropsychologyandLanguage/ChildPerceptionandVisuomotorAbilities/MABC-2/MovementAssessmentBatteryforChildren-SecondEdition(MovementABC-2).aspx"
            target="_blank"
          >
            Movement ABC-2
          </a>
          <p>
            The Movement Assessment Battery for Children - 2nd Edition (Movement
            ABC-2; Henderson, Sugden & Barnett, 2007) includes a standardised
            test of general motor competence (for 3-16 years) and a checklist
            for (5-12 years). Production of a 3rd edition is underway and due to
            be published in late 2023.
          </p>
        </li>
        <li>
          <a
            href="http://www.pearsonclinical.co.uk/AlliedHealth/PaediatricAssessments/PerceptualFineMotorDevelopment/DetailedAssessmentofSpeedofHandwriting(DASH)/DetailedAssessmentofSpeedofHandwriting(DASH).aspx"
            target="_blank"
          >
            DASH
          </a>
          <p>
            The Detailed Assessment of Speed of Handwriting (DASH; Barnett,
            Henderson, Scheib & Schulz, 2007) includes a range of writing tasks
            to assess handwriting speed for 9-16 year-olds.
          </p>
        </li>
        <li>
          <a
            href="https://www.pearsonclinical.co.uk/store/ukassessments/en/Store/Professional-Assessments/Motor-Sensory/Detailed-Assessment-of-Speed-of-Handwriting/p/P100009280.html"
            target="_blank"
          >
            DASH17+
          </a>
          <p>
            The Detailed Assessment of Speed of Handwriting 17+ (DASH17+;
            Barnett, Henderson, Scheib & Schulz, 2010) is an extension of the
            DASH for those aged 17-25 years. Production of a 2nd edition of
            DASH/DASH17+ is underway and due to be published in late 2023.
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
