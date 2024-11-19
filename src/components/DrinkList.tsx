interface DrinkProps {
  name: string;
}

function Drink({ name }: DrinkProps) {
  let kind: string = "leaf";
  let size: string = "15–70 mg/cup";
  let age: string = "4,000+ years";

  if (name !== "tea") {
    kind = "bean";
    size = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{kind}</dd>
        <dt>Caffeine content</dt>
        <dd>{size}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
