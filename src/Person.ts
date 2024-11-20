import React from "react";

export interface Person {
  id: number;
  name: string;
  profession: string;
  awards?: string[];
  discover?: string;
  accomplishment?: string;
  imageId: string;
  theme?: React.CSSProperties;
}
