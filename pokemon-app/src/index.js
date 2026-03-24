import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </Provider>
);