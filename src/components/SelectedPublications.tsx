import React from "react";
import Section from "./Section";
import Reference from "./Reference";

// const selectedPublications = import.meta.glob(
//   "../../site/content/selected-publications/*.json",
//   { eager: true }
// ) as Record<
//   string,
//   {
//     title: string;
//     description?: string;
//     bullet?: boolean;
//     sections: Array<{ title?: string; content: string }>;
//   }
// >;

export default function SelectedPublications() {
  return (
    <Section title="Selected Publications">
      <h3>Journal articles</h3>
      <ul>
        <li>
          <p>
            <Reference doi={"https://doi.org/10.1016/j.ridd.2017.11.013"}>
              Barnett, A.L., Prunty, M. & Rosenblum, S. (2018). Development of
              the Handwriting Legibility Scale (HLS): a preliminary examination
              of Reliability and Validity.{" "}
              <em>Research in Developmental Disabilities</em>, 72, 240-247.
            </Reference>
          </p>
        </li>
        <li>
          <p>
            <Reference doi="https://doi.org/10.3389/fnhum.2021.669902">
              Mountford, H.S., Hill, A., Barnett, A.L., Newbury, D.F. (2021)
              'Genome Wide Association Study of Motor Coordination'.{" "}
              <em>Frontiers in Human Neuroscience</em>, 15 ISSN: 1662-5161
              eISSN: 1662-5161
            </Reference>
          </p>
        </li>
        <li>
          <p>
            <Reference doi={"https://doi.org/10.1177/03080226221097314"}>
              Nightingale, R., Sumner, E., Prunty, M., Barnett, A.L. (2022)
              'Handwriting and typing: Occupational therapy practice when
              supporting adolescents with handwriting difficulties'.{" "}
              <em>British Journal of Occupational Therapy</em>, 85 (11) 891-899.
              ISSN: 0308-0226 eISSN: 1477-6006
            </Reference>
          </p>
        </li>
      </ul>
      <h3>Books/test manuals</h3>
      <ul>
        <li>
          <p>
            Henderson, S.E., & Barnett, A.L. (2023). Movement Assessment Battery
            for Children - 3rd Edition (Movement ABC-3). Test manual. Pearson.
          </p>
        </li>
        <li>
          <p>
            Henderson, S.E., & Barnett, A.L. (2023). Movement Assessment Battery
            for Children - 3rd Edition (Movement ABC-3). Checklist manual.
            Pearson.
          </p>
        </li>
        <li>
          <p>
            Barnett, A., Henderson, S.E., & Scheib, B. (2024). The Detailed
            Assessment of the Speed of Handwriting - 2nd Edition (DASH-2).
            Pearson.
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
            Barnett, A., Henderson, S.E., Scheib, B. & Schulz, J. (2010). The
            Detailed Assessment of Speed of Handwriting 17+ (DASH 17+). London:
            Pearson Assessment.
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
            Henderson, S.E., Sugden, D.A. & Barnett, A.L. (2007). Movement
            Assessment Battery for Children-2. Second Edition (Movement ABC-2).
            Examiner’s manual. London: Harcourt Assessment. 978 0 749136 08 6l.
          </p>
        </li>
      </ul>
    </Section>
  );
}
