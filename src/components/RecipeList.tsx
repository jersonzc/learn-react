import { recipes } from "../data.js";
import { Fragment } from "react";

interface RecipeProps {
  id: string;
  name: string;
  ingredients: string[];
}

function Recipe({ id, name, ingredients }: RecipeProps) {
  return (
    <Fragment key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
