interface DrinkProps {
  name: DrinkName;
}

type DrinkName = "tea" | "coffee";

interface DrinkData {
  part: string;
  caffeine: string;
  age: string;
}

const drinks: Record<DrinkName, DrinkData> = {
  tea: {
    part: "leaf",
    caffeine: "15–70 mg/cup",
    age: "4,000+ years",
  },
  coffee: {
    part: "bean",
    caffeine: "80–185 mg/cup",
    age: "1,000+ years",
  },
};

function Drink({ name }: DrinkProps) {
  const info = drinks[name];

  return (
    <section>
      <h2>{name}</h2>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <h1>DrinkList</h1>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
