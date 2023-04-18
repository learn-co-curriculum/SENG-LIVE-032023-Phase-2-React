import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {

  const renderListings = listings.map( listing => 
      <ListingCard 
        key = { listing.id }
        listing = { listing }
        // {...listing }
        deleteListing = { deleteListing }
      />
    )

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        { renderListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
