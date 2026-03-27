import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (card) => {
    setFavorites((prev) => [...prev, card]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};