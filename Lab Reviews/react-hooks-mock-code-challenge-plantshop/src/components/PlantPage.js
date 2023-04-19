import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const baseUrl = `http://localhost:6001/`
const plantsUrl = baseUrl + 'plants/'


function PlantPage() {

  const [ plants, setPlants ] = useState( [] )

  const [ plantsOutOfStock, setPlantsOutOfStock ] = useState( [] )

  const [ searchPlants, setSearchPlants ] = useState( '' )

  useEffect( fetchPlants, [] )

  function fetchPlants () {
    fetch( plantsUrl )
    .then( r => r.json() )
    .then( setPlants )
  }

  function newPlantFormSubmit ( event, newPlant ) {
    event.preventDefault()
    
    const postRequest = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accepts': 'application/json'
      },
      body: JSON.stringify( newPlant )
    }

    fetch( plantsUrl, postRequest )
    .then( r => r.json() )
    .then( newPlantData => setPlants( [...plants, newPlantData ] ) )
  }

  function markPlantOutOfStock ( id ) {
    setPlantsOutOfStock( [...plantsOutOfStock, id ] )
  }

  function changeSearchPlants ( event ) {
    setSearchPlants( event.target.value )
  }

  const filteredPlants = plants.filter( plant => plant.name.toLowerCase().includes( searchPlants.toLowerCase() ) )

  return (
    <main>
      <NewPlantForm
        newPlantFormSubmit = { newPlantFormSubmit }
      />
      <Search
        searchPlants = { searchPlants }
        changeSearchPlants = { changeSearchPlants }
      />
      <PlantList
        plants = { filteredPlants }
        markPlantOutOfStock = { markPlantOutOfStock }
        plantsOutOfStock = { plantsOutOfStock }
      />
    </main>
  );
}

export default PlantPage;
