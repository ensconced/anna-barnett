import React from "react";
import Section from "./Section";
import Markdown from "react-markdown";

import resourcesMarkdown from "../../site/content/resources.md?raw";

export default function Resources() {
  return (
    <Section title="Resources">
      <Markdown
        components={{
          a(props) {
            return (
              <a
                {...props}
                target="_blank"
                download={props.href?.startsWith("/media") ? true : false}
              />
            );
          },
        }}
      >
        {resourcesMarkdown}
      </Markdown>
    </Section>
  );
}
