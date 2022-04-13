import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/shared/Header";

import Anime from "./pages/anime";
import Home from "./pages/home";
import Search from "./pages/search";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
