import { getImageUrl } from "../utils.js";
import { Person } from "../Person.ts";

interface AvatarProps {
  person: Person;
  size: number;
}

function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
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
    </section>
  );
}
