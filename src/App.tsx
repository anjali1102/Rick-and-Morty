import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
