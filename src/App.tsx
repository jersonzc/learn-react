import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Gallery.tsx";
import Bio from "./components/Bio.tsx";
import TodoList from "./components/TodoList.tsx";

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
      <h2>TodoList</h2>
      <TodoList />
    </>
  );
}

export default App;
