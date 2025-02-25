import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Gallery.tsx";
import Bio from "./components/Bio.tsx";
import PackingList from "./components/PackingList.tsx";
import DrinkList from "./components/DrinkList.tsx";
import List from "./components/List.tsx";
import RecipeList from "./components/RecipeList.tsx";
import Poem from "./components/Poem.tsx";
import Clock from "./components/Clock";

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
      <Bio />
      <PackingList />
      <DrinkList />
      <List />
      <RecipeList />
      <Poem />
      <Clock time={new Date()}/>
    </>
  );
}

export default App;
