import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const initialState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

function PokemonForm({ pokemonUrl, addNewPokemon }) {

  const [ formData, setFormData ] = useState( initialState )

  function changeFormData ( event ) {
    // const { name, value } = event.target
    const name = event.target.name
    const value = event.target.value
    const updateFormData = {...formData, [ name ]: value }
    setFormData( updateFormData )
  }

  function submitNewPokemon( event ) {
    event.preventDefault()

    const newPokemon = {
      name: formData.name,
      hp: parseInt( formData.hp ),
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    
    const postRequest = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify( newPokemon )
    }
    
    fetch( pokemonUrl, postRequest )
    .then( r => r.json() )
    .then( newPokemonData => {
      addNewPokemon( newPokemonData )
      setFormData( initialState )
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit = { submitNewPokemon }
      >
        <Form.Group widths="equal">
          
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value = { formData.name }
            onChange = { changeFormData } 
          />
          
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp"
            type='number' 
            name="hp"  
            value = { formData.hp }
            onChange = { changeFormData }
          />
          
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = { formData. frontUrl }
            onChange = { changeFormData }
          />
          
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = { formData.backUrl }
            onChange = { changeFormData }
          />

        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
