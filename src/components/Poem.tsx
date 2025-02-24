import { poem } from "../data.ts";
import { Fragment } from "react";

export default function Poem() {
  return (
    <article>
      <h1>Poem</h1>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p>{line}</p>
          {index !== poem.lines.length - 1 && <hr />}
        </Fragment>
      ))}
    </article>
  );
}
