import React from "react";

function PlantCard({ plant, markPlantOutOfStock, plantsOutOfStock }) {

  const { name, price, id, image } = plant

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      { 
        !plantsOutOfStock.includes( id ) 
        ? (
        <button 
          className="primary"
          onClick = { () => markPlantOutOfStock( id ) }
        >In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
