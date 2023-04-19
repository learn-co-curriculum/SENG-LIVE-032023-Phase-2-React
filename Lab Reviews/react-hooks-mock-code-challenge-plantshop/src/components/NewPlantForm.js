import React, { useState } from "react";

function NewPlantForm({ newPlantFormSubmit }) {

  const [ formName, setFormName ] = useState( '' )
  const [ formImage, setFormImage ] = useState( '' )
  const [ formPrice, setFormPrice ] = useState( '' )

  function changeFormName ( event ) {
    setFormName( event.target.value )
  }

  function changeFormImage ( event ) {
    setFormImage( event.target.value )
  }

  function changeFormPrice ( event ) {
    setFormPrice( event.target.value )
  }

  const newPlant = {
    name: formName,
    image: formImage,
    price: parseInt( formPrice )
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ ( event ) => newPlantFormSubmit( event, newPlant ) }>
        
        <input 
          type="text" 
          name="name" 
          value = { formName }
          onChange = { changeFormName }
          placeholder="Plant name" 
        />
        
        <input 
          type="text" 
          name="image" 
          value = { formImage }
          onChange = { changeFormImage }
          placeholder="Image URL"
        />
        
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          value = { formPrice }
          onChange = { changeFormPrice }
          placeholder="Price"
        />
        
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
