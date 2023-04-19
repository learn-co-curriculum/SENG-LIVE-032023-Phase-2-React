import React from "react";

function Search({ searchPlants, changeSearchPlants }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value = { searchPlants }
        placeholder="Type a name to search..."
        onChange={ ( event ) => changeSearchPlants( event ) }
      />
    </div>
  );
}

export default Search;
