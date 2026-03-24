import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function PokemonCard({ card }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFav = favorites.find((f) => f.id === card.id);

  return (
    <div className="card">
                <h3>{card.name}</h3>
        <p>🔥 HP: {card.hp || "N/A"}</p>
        <p>⚡ {card.types?.join(", ")}</p>
        
      <img src={card.images?.small} alt={card.name} />

      <h3>{card.name}</h3>

      <p>HP: {card.hp || "N/A"}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          isFav ? removeFavorite(card.id) : addFavorite(card);
        }}
      >
        {isFav ? "💔 Remove" : "⭐ Favorite"}
      </button>
    </div>
  );
}

export default PokemonCard;