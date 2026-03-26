import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import PokemonCard from "../components/PokemonCard";

function Favorites() {

const { favorites } = useContext(FavoritesContext);

return (

<div className="favorites-page">

<h1>⭐ Favorite Cards</h1>

{favorites.length === 0 ? (
  <h2 className="empty">No favorites yet 😢</h2>
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