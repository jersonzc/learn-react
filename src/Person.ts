import React from "react";

export interface Person {
  name: string;
  profession: string;
  awards: string[];
  discover: string;
  imageId: string;
  theme?: React.CSSProperties;
}
