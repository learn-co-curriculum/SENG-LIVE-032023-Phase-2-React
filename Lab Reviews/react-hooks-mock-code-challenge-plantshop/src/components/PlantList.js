import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, markPlantOutOfStock, plantsOutOfStock }) {

  const renderPlantCards = plants.map( plant =>
    <PlantCard 
      key = { plant.id }
      plant = { plant }
      markPlantOutOfStock = { markPlantOutOfStock }
      plantsOutOfStock = { plantsOutOfStock }
    />)

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      { renderPlantCards }
    </ul>
  );
}

export default PlantList;
