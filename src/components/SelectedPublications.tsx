import React from "react";
import Section from "./Section";
import Reference from "./Reference";

export default function SelectedPublications() {
  return (
    <Section title="Selected Publications">
      <h3>Journal articles</h3>
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
        <li>
          <p>
            <Reference doi={"https://doi.org/10.1177/03080226221097314"}>
              Nightingale R, Sumner E, Prunty M, Barnett AL, 'Handwriting and
              typing: Occupational therapy practice when supporting adolescents
              with handwriting difficulties' British Journal of Occupational
              Therapy 85 (11) (2022) 891-899. ISSN: 0308-0226 eISSN: 1477-6006
            </Reference>
          </p>
        </li>
        <li>
          <p>
            <Reference doi={"https://doi.org/10.1016/j.ridd.2017.11.013"}>
              Barnett, A.L., Prunty, M. & Rosenblum, S. (2017). Development of
              the Handwriting Legibility Scale (HLS): a preliminary examination
              of Reliability and Validity. Research in Developmental
              Disabilities, 72, 240-247.
            </Reference>
          </p>
        </li>
      </ul>
      <h3>Books/test manuals</h3>
      <ul>
        <li>
          <p>
            Barnett, A.L., Stuart, N. & Vanzan, S. (2021) UK adaptation of the
            Intelligence and Development Scales - 2nd Edition (IDS-2). Test
            Development and Interpretation Manual. Hogrefe Ltd. Oxford.
          </p>
        </li>
        <li>
          <p>
            Barnett, A.L., Stuart, N. & Vanzan, S. (2021) UK adaptation of the
            Intelligence and Development Scales - 2nd Edition (IDS-2).
            Administration and Scoring Manual. Hogrefe Ltd. Oxford.
          </p>
        </li>
        <li>
          <p>
            Barnett, A.L. & Hill, E.L. (2019). Understanding motor behaviour in
            Developmental Coordination Disorder. Current issues in Developmental
            Psychology Series. Oxford: Routledge.
          </p>
        </li>
        <li>
          <p>
            Barnett, A., Henderson, S.E., Scheib, B. & Schulz, J. (2010). The
            Detailed Assessment of Speed of Handwriting 17+ (DASH 17+). London:
            Pearson Assessment.
          </p>
        </li>
        <li>
          <p>
            Barnett, A., Henderson, S.E., Scheib, B. & Schulz, J. (2007). The
            Detailed Assessment of Speed of Handwriting (DASH). London: Harcourt
            Assessment.
          </p>
        </li>
        <li>
          <p>
            Henderson, S.E., Sugden, D.A. & Barnett, A.L. (2007). Movement
            Assessment Battery for Children-2. Second Edition (Movement ABC-2).
            Examiner’s manual. London: Harcourt Assessment. 978 0 749136 08 6l.
          </p>
        </li>
      </ul>
    </Section>
  );
}
