import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items, addToCart }) {

  const [ selectedCategory, setSelectedCategory ] = useState( "All" )
  // console.log( selectedCategory )
  
  function changeCategory ( event ) {
    setSelectedCategory( event.target.value )
  }

  // const filteredItems = items.filter( item => {
  //   if ( selectedCategory === 'All' )
  //     return true
  //   else 
  //     return item.category === selectedCategory
  // })

  const filteredItems = items.filter( item => item.category === selectedCategory || selectedCategory === 'All' )

  const renderItems = filteredItems.map((item) => (
          <Item key={item.id} {...item} addToCart={ addToCart }/>
        ))
  // console.log( filteredItems )

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={ changeCategory }  name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        { renderItems }
      </ul>
    </div>
  );
}

export default ShoppingList;
