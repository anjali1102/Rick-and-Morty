// import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <a className="btn btn-ghost text-xl pointer">Rick and Morty</a>
        <button className="pointer">
          <Sun />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
