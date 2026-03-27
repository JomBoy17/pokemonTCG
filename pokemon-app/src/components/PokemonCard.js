import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const PokemonCard = ({ card }) => {
  // We bring in the functions from context
  const { favorites, removeFavorite, addFavorite } = useContext(FavoritesContext);

  // Check if THIS specific card is in the favorites list
  const isFav = favorites.some((f) => f.id === card.id);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevents the card click/modal from opening
    if (isFav) {
      removeFavorite(card.id);
    } else {
      addFavorite(card);
    }
  };

  return (
    <div className="card-container">
      <div className="card-inner">
        {/* Front of Card */}
        <div className="card front">
          <button 
            className={`fav-btn ${isFav ? "active" : ""}`} 
            onClick={toggleFavorite}
          >
            {isFav ? "⭐" : "☆"}
          </button>
          <img src={card.images?.small} alt={card.name} />
          <h3>{card.name}</h3>
        </div>

        {/* Back of Card */}
        <div className="card back">
          <h3>{card.name}</h3>
          <p>HP: {card.hp}</p>
          <p>Types: {card.types?.join(", ")}</p>
          <button className="remove-btn" onClick={toggleFavorite}>
            {isFav ? "Remove from Favs" : "Add to Favs"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;