import { ReactElement } from "react";

interface CardProps {
  title: string;
  children: ReactElement;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
