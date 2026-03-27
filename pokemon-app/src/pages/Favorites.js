import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
// ✅ Import from the components folder (barrel)
import { PokemonCard } from "../components"; 

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h1>⭐ Favorite Cards</h1>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2 className="status">No favorites yet 😢</h2>
          <p>Go back to the home page and click the star on your favorite Pokémon!</p>
        </div>
      ) : (
        <div className="grid">
          {favorites.map((card) => (
            <PokemonCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;