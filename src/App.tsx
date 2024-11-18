import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Gallery.tsx";
import Profile from "./components/Profile.tsx";
import Bio from "./components/Bio.tsx";

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
      <h2>Profile</h2>
      <Profile />
      <h2>Bio</h2>
      <Bio />
    </>
  );
}

export default App;