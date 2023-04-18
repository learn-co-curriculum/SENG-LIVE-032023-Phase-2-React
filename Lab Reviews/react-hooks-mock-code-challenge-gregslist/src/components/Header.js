import React from "react";
import Search from "./Search";

function Header({ changeListingSearch, listingSearch, listingSearchSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        listingSearch = { listingSearch }
        changeListingSearch = { changeListingSearch }
        listingSearchSubmit = { listingSearchSubmit }
      />
    </header>
  );
}

export default Header;
