import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const Home = React.lazy(() => import("./pages/Home"));
const CharacterDetail = React.lazy(() => import("./pages/CharacterDetail"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen w-full text-xl text-gray-500">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<CharacterDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
