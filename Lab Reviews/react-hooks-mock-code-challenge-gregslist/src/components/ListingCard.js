import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {

  const [ isFavorited, setIsFavorited ] = useState( false )

  const { id, description, image, location } = listing

  function toggleFavorite () {
    setIsFavorited( !isFavorited )
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        { isFavorited ? (
          <button 
            onClick = { toggleFavorite }
            className="emoji-button favorite active"
          >★</button>
        ) : (
          <button 
            onClick = { toggleFavorite }
            className="emoji-button favorite"
          >☆</button>
        )}
        <strong>{ description }</strong>
        <span> · { location }</span>
        <button
          onClick = { () => deleteListing( id ) }
          className="emoji-button delete"
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
