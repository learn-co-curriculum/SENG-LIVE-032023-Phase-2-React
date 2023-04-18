import React from "react";

function Search({ changeListingSearch, listingSearch, listingSearchSubmit }) {

  function handleSubmit(e) {
    e.preventDefault();
    listingSearchSubmit()
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ listingSearch }
        onChange={ changeListingSearch }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
