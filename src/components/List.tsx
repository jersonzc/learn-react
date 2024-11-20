import { people } from "../data.ts";
import { getImageUrl } from "../utils.ts";
import { Person } from "../Person.ts";

interface ListSectionProps {
  title: string;
  people: Person[];
}

function ListSection({ title, people }: ListSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {people.map((person: Person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function List() {
  const chemists: Person[] = [];
  const everyoneElse: Person[] = [];

  people.forEach((person) => {
    if (person.profession === "chemist") {
      chemists.push(person);
    } else {
      everyoneElse.push(person);
    }
  });

  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title={"Chemists"} people={chemists} />
      <ListSection title={"Everyone Else"} people={everyoneElse} />
    </article>
  );
}
