import { ReactElement } from "react";

interface CardProps {
  children: ReactElement[];
}

export default function Card({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
}
