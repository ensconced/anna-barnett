import "./styles/reset.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Section from "./Section";
import Reference from "./Reference";

function getElementById(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (element === null) {
    throw new Error(`failed to find element with id ${id}`);
  }
  return element;
}

function App() {
  return (
    <>
      <Section title="Prof Anna Barnett">
        <p>
          I gained my first degree in Psychology and Physical Education at the
          University College of North Wales (UCNW) Bangor and PhD in Child
          Development at the Institute of Education, University of London. I
          then worked as a Research Fellow on various projects at the
          Hammersmith Hospital, Imperial College London, University College
          London and at the University of Oxford before joining Oxford Brookes
          University in 2004. I am currently Professor in Psychology and teach
          on undergraduate and postgraduate Psychology programmes.
        </p>
        <p>
          My general area of research is the development of motor control and
          coordination in children and young adults. Within this area I pursue
          two different strands of research. The first has very practical
          applications, involving the development of assessment tools. This
          includes the DASH, DASH17+ and Movement ABC-2. I’m also involved in
          the delivery of interventions to teach motor skills. In particular I
          help run a ‘Learn to Ride a Bike’ course in Oxford for children with
          motor difficulties.
        </p>
        <p>
          The second strand of my research focuses on various aspects of
          Developmental Coordination Disorder (DCD) - including diagnosis and
          assessment in children and adults with this condition and exploration
          of the genetic contribution to motor difficulties. I also have a
          special interest in the teaching and learning of handwriting and
          typing skill, as an important component of the broader skill of
          writing. My work in this area includes surveys of policy and practice
          in primary and secondary schools and examinations of handwriting in
          individuals with developmental disorders such as DCD and dyslexia.
        </p>
      </Section>
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
      <Section title="Other Projects">
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
        <p>
          ‘The Genetics of Motor Coordination’ Funded by: The Waterloo
          Foundation. PI: Hayley Mountford; CI: Anna L. Barnett; Dianne Newbury,
          Oxford Brookes University.
        </p>
      </Section>
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
            <a
              href="https://www.brookes.ac.uk/phpd/research/resources/handwriting-legibility-scale/"
              target="_blank"
            >
              Handwriting Legibility Scale
            </a>
          </li>
        </ul>
        <h3>Assessment instruments for purchase</h3>
        <ul>
          <li>
            <a
              href="http://www.pearsonclinical.co.uk/AlliedHealth/PaediatricAssessments/PerceptualFineMotorDevelopment/DetailedAssessmentofSpeedofHandwriting(DASH)/DetailedAssessmentofSpeedofHandwriting(DASH).aspx"
              target="_blank"
            >
              DASH
            </a>
          </li>
          <li>
            <a
              href="http://www.pearsonclinical.co.uk/AlliedHealth/PaediatricAssessments/PerceptualFineMotorDevelopment/DetailedAssessmentofSpeedofHandwriting/DetailedAssessmentofSpeedofHandwriting.aspx"
              target="_blank"
            >
              DASH17+
            </a>
          </li>
          <li>
            <a
              href="https://www.brookes.ac.uk/about-brookes/news/-whole-child--intelligence-and-development-assessment-tool-developed-with-oxford-brookes-experts/"
              target="_blank"
            >
              Intelligence and Development Scales - 2nd Edition (IDS-2)
            </a>
          </li>
          <li>
            <a
              href="http://www.pearsonclinical.co.uk/Psychology/ChildCognitionNeuropsychologyandLanguage/ChildPerceptionandVisuomotorAbilities/MABC-2/MovementAssessmentBatteryforChildren-SecondEdition(MovementABC-2).aspx"
              target="_blank"
            >
              Movement ABC-2
            </a>
          </li>
        </ul>
      </Section>
      <Section title="Selected Publications">
        <ul>
          <li>
            <p>
              <Reference doi="https://doi.org/10.3389/fnhum.2021.669902">
                Mountford HS, Hill A, Barnett AL, Newbury DF (2021) 'Genome Wide
                Association Study of Motor Coordination' Frontiers in Human
                Neuroscience 15 ISSN: 1662-5161 eISSN: 1662-5161
              </Reference>
            </p>
          </li>
        </ul>
      </Section>
    </>
  );
}

const root = createRoot(getElementById("root"));
root.render(<App />);
