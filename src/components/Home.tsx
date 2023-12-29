import React from "react";
import Section from "./Section";
// import profileImage from "../../assets/images/profile.jpg";

import background from "../../site/content/background.json";
console.log(background);

export default function Home() {
  return (
    <>
      {/* <img src={profileImage} alt="profile image" height="300" /> */}
      <Section title="Background">
        <p>
          My main research focus is the development of assessment tools and
          understanding of Developmental Coordination Disorder (DCD) in children
          and adults.
        </p>
        <p>
          I gained my first degree in Psychology and Physical Education at the
          University College of North Wales (UCNW) Bangor and PhD in Child
          Development at the Institute of Education, University of London. I
          then worked as a Research Fellow on various projects at the
          Hammersmith Hospital, Imperial College London, University College
          London and at the University of Oxford before joining Oxford Brookes
          University in 2004.{" "}
          <a href="https://www.brookes.ac.uk/profiles/staff/anna-barnett">
            I am currently a Professor in Psychology
          </a>{" "}
          and teach on our undergraduate and postgraduate Psychology programmes.
        </p>
        <p>
          My general area of research is the development of motor control and
          coordination in children and young adults. Within this area I pursue
          two different strands of research. The first has very practical
          applications, involving the development of assessment tools. This
          includes the DASH-2 and Movement ABC-3 Test and Checklist. I’m also
          involved in the delivery of interventions to teach motor skills. In
          particular I help run a ‘Learn to Ride a Bike’ course in Oxford for
          children with motor difficulties.
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
          Most recently I have been working with colleagues to develop an
          assessment tool to evaluate handwriting legibility (the Handwriting
          Legibility Scale, or HLS) and compositional quality in writing (the
          Writing Quality Scale, or WQS).
        </p>
      </Section>
    </>
  );
}
