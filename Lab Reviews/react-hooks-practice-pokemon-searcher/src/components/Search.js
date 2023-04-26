import React from "react";

function Search({ searchPokemon, changeSearchPokemon }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value = { searchPokemon }
          onChange = { changeSearchPokemon }
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
