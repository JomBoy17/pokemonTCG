import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./components/PokemonList";
import "./App.css";
import { useState } from "react";

function App() {

const [dark, setDark] = useState(false);

return (
<div className={dark ? "app dark" : "app"}>

<div className="topbar">
  <h1>🃏 Pokémon TCG</h1>

  <button onClick={()=>setDark(!dark)} className="toggle">
    {dark ? "🌙 Dark" : "☀ Light"}
  </button>
</div>

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cards" element={<PokemonList />} />
  </Routes>
</BrowserRouter>

</div>
);

}

export default App;