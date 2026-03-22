import PokemonModal from "./PokemonModal";
import React, { useState } from "react";
import { useGetCardsQuery } from "../features/api/pokemonApi";
import PokemonCard from "./PokemonCard";

function PokemonList() {

const [search, setSearch] = useState("");
const [type, setType] = useState("");

const [selectedCard, setSelectedCard] = useState(null);

const { data, isLoading, error } = useGetCardsQuery(
  type ? `${search} type:${type}` : search
);

return (

<div>

<div className="controls">

<input
type="text"
placeholder="🔍 Search Pokémon..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

<select onChange={(e)=>setType(e.target.value)}>

<option value="">All Types</option>
<option value="Fire">🔥 Fire</option>
<option value="Water">💧 Water</option>
<option value="Grass">🌿 Grass</option>
<option value="Electric">⚡ Electric</option>
<option value="Psychic">🧠 Psychic</option>

</select>

</div>

{isLoading && <h2 className="status">Loading...</h2>}
{error && <h2 className="status">Error loading data</h2>}

<div className="grid">

{data?.data?.map((card) => (
<div onClick={() => setSelectedCard(card)}>
  <PokemonCard key={card.id} card={card} />
</div>
))}
{selectedCard && (
  <PokemonModal
    card={selectedCard}
    onClose={() => setSelectedCard(null)}
  />
)}  
</div>

</div>

);

}

export default PokemonList;