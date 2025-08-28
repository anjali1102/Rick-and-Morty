import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "retro");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "retro" : "dark");
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <a className="btn btn-ghost text-xl pointer">Rick and Morty</a>
        <button className="cursor-pointer" onClick={toggleTheme}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
