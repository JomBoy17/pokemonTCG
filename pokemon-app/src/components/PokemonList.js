import React, { useState, useEffect } from "react";
import { useGetCardsQuery } from "../features/api/pokemonApi";

// ❌ STOP doing this (it creates the circular loop):
// import { PokemonCard, PokemonModal, SkeletonCard } from "./"; 

// ✅ DO THIS instead (direct paths):
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";
import SkeletonCard from "./SkeletonCard";

function PokemonList() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 500);
    return () => clearTimeout(t);
  }, [search]);

  // API CALL
  const { data, isLoading, isFetching, error } = useGetCardsQuery({
    search: debounced,
    type,
    page,
  });

  return (
    <div>
      {/* 🔍 SEARCH & FILTER */}
      <div className="controls">
        <input
          placeholder="🔍 Search Pokémon..."
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
          <option value="Fire">🔥 Fire</option>
          <option value="Water">💧 Water</option>
          <option value="Grass">🌿 Grass</option>
        </select>
      </div>

      {/* ❌ ERROR STATE */}
      {error && <h2 className="status">❌ Error loading data</h2>}

      {/* 😢 EMPTY STATE */}
      {!isLoading && !isFetching && data?.data?.length === 0 && (
        <h2 className="status">😢 No Pokémon found</h2>
      )}

      {/* 🟦 GRID */}
      <div className="grid">
        {isLoading || isFetching ? (
          // Show 8 skeletons while loading or fetching new page
          Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          data?.data?.map((card) => (
            <div key={card.id} onClick={() => setSelectedCard(card)}>
              <PokemonCard card={card} />
            </div>
          ))
        )}
      </div>

      {/* 🔥 PAGINATION */}
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1 || isFetching}
        >
          ⬅ Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isFetching}
        >
          Next ➡
        </button>
      </div>

      {/* 🪟 MODAL */}
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