import React, { useState, useEffect } from "react";
import { useGetCardsQuery } from "../features/api/pokemonApi";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";
import Loader from "./Loader";

function PokemonList() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 500);
    return () => clearTimeout(t);
  }, [search]);

  const { data, isLoading, error } = useGetCardsQuery({
    
    search: debounced,
    type,
    page,
  });
  

  return (
    <div>
      <div className="controls">
        <input
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Types</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
        </select>
      </div>

      {isLoading && <Loader />}
      {error && <h2>Error loading data</h2>}

      {!isLoading && data?.data?.length === 0 && (
  <h2 className="status">😢 No Pokémon found</h2>
)}

      <div className="grid">
  {data?.data?.map((card) => (
    <div key={card.id} onClick={() => setSelectedCard(card)}>
      <PokemonCard card={card} />
    </div>
  ))}
</div>

{/* PAGINATION TOP */}
<div className="pagination top">
  <button onClick={() => setPage(page - 1)} disabled={page === 1}>
    ⬅ Previous
  </button>

  <span>Page {page}</span>

  <button onClick={() => setPage(page + 1)}>
    Next ➡
  </button>
</div>

      {selectedCard && (
        <PokemonModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}

export default PokemonList;