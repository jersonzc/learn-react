import { getImageUrl } from "../utils.js";
import { Person } from "../Person.ts";
import Card from "./Card.tsx";

const SIZE_LIMIT = 90;

interface AvatarProps {
  person: Person;
  size: number;
}

function Avatar({ person, size }: AvatarProps) {
  const imageSize = size < SIZE_LIMIT ? "s" : "b";

  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

interface ProfileProps {
  person: Person;
}

export default function Profile({ person }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <Avatar person={person} size={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discover}
        </li>
      </ul>
      <div>
        <Card>
          <h2>Photo</h2>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </Card>
        <Card>
          <h2>About</h2>
          <p>
            Aklilu Lemma was a distinguished Ethiopian scientist who discovered
            a natural treatment to schistosomiasis.
          </p>
        </Card>
      </div>
    </section>
  );
}
