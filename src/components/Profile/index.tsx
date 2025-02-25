import { getImageUrl } from "../../utils.ts";
import { Person } from "../../Person.ts";
import './index.css'
import { ReactElement, useState } from "react";

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
    <Panel>
      <Header person={person} />
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
    </Panel>
  );
}

interface PanelProps {
  children: ReactElement[];
}

function Panel({ children }: PanelProps) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? 'Collapse' : 'Expand'}
      </button>
      {open && children}
    </section>
  );
}

interface HeaderProps {
  person: Person;
}

function Header({person}: HeaderProps) {
  return <h2>{person.name}</h2>;
}
