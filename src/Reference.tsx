import React, { ReactNode } from "react";

interface Props {
  doi: string;
  children: ReactNode;
}

export default function Reference({ children, doi }: Props) {
  return (
    <>
      <span>{children}</span>{" "}
      <span>
        <a href={doi} target="_blank">
          [doi]
        </a>
      </span>
    </>
  );
}
