import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./components/PokemonList";
import Favorites from "./pages/Favorites";
import "./App.css";
import { useState } from "react";
// 1. IMPORT YOUR PROVIDER HERE (adjust path if needed)
import { FavoritesProvider } from "./context/FavoritesContext"; 

function App() {
  const [dark, setDark] = useState(false);

  return (
    // 2. WRAP EVERYTHING IN THE PROVIDER
    <FavoritesProvider> 
      <BrowserRouter>
        <div className={dark ? "app dark" : "app"}>
          
          {/* 🔥 TOP NAVBAR */}
          <div className="topbar">
            <h1>🃏 Pokémon TCG</h1>
            <div className="nav-links">
              <Link to="/" className="nav-btn">🏠 Home</Link>
              <Link to="/cards" className="nav-btn">🃏 Cards</Link>
              <Link to="/favorites" className="nav-btn fav">
                ⭐ Favorites
              </Link>
              <button 
                onClick={() => setDark(!dark)} 
                className="toggle"
              >
                {dark ? "🌙 Dark" : "☀ Light"}
              </button>
            </div>
          </div>

          {/* 🔥 ROUTES */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<PokemonList />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;