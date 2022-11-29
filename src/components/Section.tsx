import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section>
      <div className="section-container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
