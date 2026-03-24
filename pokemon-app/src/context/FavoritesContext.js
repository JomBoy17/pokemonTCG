import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

const [favorites, setFavorites] = useState([]);

const addFavorite = (card) => {
  if (!favorites.find(f => f.id === card.id)) {
    setFavorites([...favorites, card]);
  }
};

const removeFavorite = (id) => {
  setFavorites(favorites.filter(f => f.id !== id));
};

return (
<FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
  {children}
</FavoritesContext.Provider>
);

};