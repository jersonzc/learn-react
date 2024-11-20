import { poem } from "../data.ts";
import { Fragment } from "react";

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {
        if (index === poem.lines.length - 1) {
          return (
            <Fragment key={index}>
              <p key={index}>{line}</p>
            </Fragment>
          );
        }
        return (
          <Fragment key={index}>
            <p>{line}</p>
            <hr />
          </Fragment>
        );
      })}
    </article>
  );
}
