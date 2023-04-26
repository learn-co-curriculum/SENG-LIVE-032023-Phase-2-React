import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ singlePokemon, flipPokemonCard, flippedPokemonCards }) {

  const { id, name, hp, sprites } = singlePokemon
  const frontImage = sprites.front
  const backImage = sprites.back

  return (
    <Card onClick = { () => flipPokemonCard( singlePokemon ) }>
      <div>
        <div className="image">
          <img src = { flippedPokemonCards.includes( id ) ? backImage : frontImage } alt = { name } />
        </div>
        <div className="content">
          <div className="header">{ name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp }
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
