import React from "react";
import Section from "./Section";
import Reference from "./Reference";

export default function SelectedPublications() {
  return (
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
  );
}
