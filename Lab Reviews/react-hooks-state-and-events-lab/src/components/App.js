import React, { useState, useEffect } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [ items, setItems ] = useState( [] )

  useEffect( ()=> {
    const addInCartToItems = itemData.map( item => { return {...item, inCart: false } } )
    setItems( addInCartToItems )
  }, [] )

  function addToCart ( id ) {
    let updateInCart = items.map( item => item.id === id ? {...item, inCart: !item.inCart } : item )
    setItems( updateInCart )
  }

  // replace 'false' with a state variable that can be toggled between true and false
  const [ isDark, setIsDark ] = useState( false )

  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

  const darkModeBtnText = isDark ? "Light Mode" : "Dark Mode" 

  function toggleDarkMode () {
    setIsDark( !isDark )
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ toggleDarkMode }>{ darkModeBtnText }</button>
      </header>
      <ShoppingList items={ items } addToCart = { addToCart } />
    </div>
  );
}

export default App;
