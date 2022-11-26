import React, { CSSProperties, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section>
      <div className="section-container">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
