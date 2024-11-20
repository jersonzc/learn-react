import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Gallery.tsx";
import Bio from "./components/Bio.tsx";
import PackingList from "./components/PackingList.tsx";
import DrinkList from "./components/DrinkList.tsx";
import List from "./components/List.tsx";
import RecipeList from "./components/RecipeList.tsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Gallery />
      <h2>Bio</h2>
      <Bio />
      <h2>PackingList</h2>
      <PackingList />
      <h2>DrinkList</h2>
      <DrinkList />
      <h2>List</h2>
      <List />
      <h2>RecipeList</h2>
      <RecipeList />
    </>
  );
}

export default App;
