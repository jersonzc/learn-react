import { people } from "../data.ts";
import { getImageUrl } from "../utils.ts";
import { Person } from "../Person.ts";

function generateList(title: string, people: Person[]) {
  const items = people.map((person: Person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <div>
      <h2>{title}</h2>
      <ul>{items}</ul>
    </div>
  );
}

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const others = people.filter((person) => person.profession !== "chemist");

  const chemistsList = generateList("Chemists", chemists);

  const othersList = generateList("Everyone Else", others);

  return (
    <article>
      <h1>Scientists</h1>
      {chemistsList}
      {othersList}
    </article>
  );
}
