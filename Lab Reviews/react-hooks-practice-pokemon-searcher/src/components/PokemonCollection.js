import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, flipPokemonCard, flippedPokemonCards }) {

  const renderPokemonCards = pokemon.map( singlePokemon =>
    <PokemonCard 
      key = { singlePokemon.id }
      singlePokemon = { singlePokemon }
      flipPokemonCard = { flipPokemonCard }
      flippedPokemonCards = { flippedPokemonCards }
    />)


  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      { renderPokemonCards }
    </Card.Group>
  );
}

export default PokemonCollection;
