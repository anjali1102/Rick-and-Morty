import "./App.css";
import Filter from "./component/filter/Filter";
import CharacterList from "./pages/CharacterList";

function App() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">Rick and Morty</a>
      </div>
      <div className="flex justify-center m-8">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered text-center"
        />
      </div>
      <div className="flex gap-12">
        <Filter />
        <CharacterList />
      </div>
    </div>
  );
}

export default App;
