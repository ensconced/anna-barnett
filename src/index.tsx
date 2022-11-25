import "./styles/reset.css";
import React from "react";
import { createRoot } from "react-dom/client";

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
      <h1>Prof Anna Barnett</h1>
      <section>
        <h2>Background</h2>
        <p>
          I gained my first degree in Psychology and Physical Education at the
          University College of North Wales (UCNW) Bangor and PhD in Child
          Development at the Institute of Education, University of London. I
          then worked as a Research Fellow on various projects at the
          Hammersmith Hospital, Imperial College London, University College
          London and at the University of Oxford before joining Oxford Brookes
          University in 2004. I am currently Professor in Psychology and teach
          on undergraduate and postgraduate Psychology programmes. My general
          area of research is the development of motor control and coordination
          in children and young adults. Within this area I pursue two different
          strands of research. The first has very practical applications,
          involving the development of assessment tools. This includes the DASH,
          DASH17+ and Movement ABC-2. I’m also involved in the delivery of
          interventions to teach motor skills. In particular I help run a ‘Learn
          to Ride a Bike’ course in Oxford for children with motor difficulties.
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
      </section>
      <section>
        <h2>Current Projects</h2>
        <p>
          Assessment tools: Various projects are underway to develop a range of
          assessment tools to be used by Education and Allied Health
          Professionals DASH - 2nd Edition Movement ABC – 3rd Edition
          Handwriting Legibility Scale (HLS) Writing Quality Scale (WQS)
          Assessment of typing speed
        </p>
      </section>
      <section>
        <h2>Other Projects</h2>
        <p>
          ‘Writing in the Digital Age' Funded by: Royal College of Occupational
          Therapists (RCOT) PI: Mellissa Prunty, Brunel University London, CI:
          Anna L. Barnett, Oxford Brookes University; Emma Sumner, University
          College London. Nightingale R, Sumner E, Prunty M, Barnett AL,
          'Handwriting and typing: Occupational therapy practice when supporting
          adolescents with handwriting difficulties' British Journal of
          Occupational Therapy 85 (11) (2022) 891-899. ISSN: 0308-0226 eISSN:
          1477-6006 ‘The Genetics of Motor Coordination’ Funded by: The Waterloo
          Foundation. PI: Hayley Mountford; CI: Anna L. Barnett; Dianne Newbury,
          Oxford Brookes University.
        </p>
      </section>
      <section>
        <h2> Resources </h2>
        <p>
          [https://www.brookes.ac.uk/phpd/research/resources/] Websites:
          Movement Matters Website Freely available assessment tools:
          Handwriting Legibility Scale (HLS) [For this one - HLS - I want to ask
          people to complete a form with some detail about who is requesting the
          download (e.g email address, purpose of use) ]
        </p>
      </section>
      <section>
        <h2> Assessment instruments for purchase </h2>
        <p>
          : DASH DASH17+ Intelligence and Development Scales - 2nd Edition
          (IDS-2) Movement ABC-2 Selected publications Mountford HS, Hill A,
          Barnett AL, Newbury DF (2021) 'Genome Wide Association Study of Motor
          Coordination' Frontiers in Human Neuroscience 15 ISSN: 1662-5161
          eISSN: 1662-5161
        </p>
      </section>
    </>
  );
}

const root = createRoot(getElementById("root"));
root.render(<App />);
