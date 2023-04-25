import React from "react";

function SearchBar({ sortBy, changeSort, changeFilter }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="None"
          name="sort"
          checked={ sortBy === 'None' }
          onChange={ changeSort }
        />
        None
      </label>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={ sortBy === "Alphabetically" }
          onChange={ changeSort }
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={ sortBy === 'Price' }
          onChange={ changeSort }
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={ changeFilter }>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
