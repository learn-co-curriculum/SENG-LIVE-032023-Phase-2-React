import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const baseUrl = 'http://localhost:3001/'
const pokemonUrl = baseUrl + 'pokemon/'

function PokemonPage() {

  const [ pokemon, setPokemon ] = useState( [] )


  const [ flippedPokemonCards, setFlippedPokemonCards ] = useState( [] )

  const [ searchPokemon, setSearchPokemon ] = useState( '' )

  function fetchPokemon () {
    fetch( pokemonUrl )
    .then( r => r.json() )
    .then( pokemonData => setPokemon( pokemonData ) )
  }

  useEffect( fetchPokemon, [] )

  function changeSearchPokemon ( event ) {
    setSearchPokemon( event.target.value )
  }

  const filteredPokemon = pokemon.filter( singlePokemon => singlePokemon.name.toLowerCase().includes( searchPokemon.toLowerCase() ) )

  function flipPokemonCard ( pokemon ) {
    if ( flippedPokemonCards.includes( pokemon.id ) ) {
      const removeFlippedPokemon = flippedPokemonCards.filter( id => id !== pokemon.id )
      setFlippedPokemonCards( removeFlippedPokemon )
    } 
    else 
      setFlippedPokemonCards( [...flippedPokemonCards, pokemon.id ] )
  }

  function addNewPokemon ( newPokemon ) {
    setPokemon( [...pokemon, newPokemon ] )
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        pokemonUrl = { pokemonUrl }
        addNewPokemon = { addNewPokemon }
      />
      <br />
      <Search
        searchPokemon = { searchPokemon }
        changeSearchPokemon = { changeSearchPokemon }
      />
      <br />
      <PokemonCollection
        pokemon = { filteredPokemon }
        flipPokemonCard = { flipPokemonCard }
        flippedPokemonCards = { flippedPokemonCards }
      />
    </Container>
  );
}

export default PokemonPage;
