import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Pokémon TCG Explorer</h1>
      <button onClick={() => navigate("/cards")}>
        Enter App
      </button>
    </div>
  );
}

export default Home;