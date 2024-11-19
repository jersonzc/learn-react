import { Person } from "../Person.ts";
import { getImageUrl } from "../utils.ts";

const person: Person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "b",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
