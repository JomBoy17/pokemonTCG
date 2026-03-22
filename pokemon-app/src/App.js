import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {

const [darkMode, setDarkMode] = useState(false);

return (
<div className={darkMode ? "app dark" : "app"}>

<h1 className="title">🃏 Pokémon TCG Explorer</h1>

<p className="subtitle">
Search and explore Pokémon trading cards
</p>

<div className="toggle-container">

<span>☀️</span>

<label className="switch">
<input
type="checkbox"
onChange={() => setDarkMode(!darkMode)}
/>
<span className="slider"></span>
</label>

<span>🌙</span>

</div>

<PokemonList />

<footer className="footer">
© 2026 Jomari Nicoli Colesio
</footer>

</div>
);

}

export default App;