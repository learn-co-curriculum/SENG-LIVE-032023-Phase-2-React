import React from "react";

function Item({ name, category, inCart, addToCart, id }) {

  const itemClass = inCart ? "in-cart" : ""

  const itemButtonText = inCart ? "Remove From Cart" : 'Add to Cart'

  const itemButtonColor = inCart ? 'remove' : 'add'

  // let itemButtonColor
  // if ( inCart )
  //   itemButtonColor = 'remove'
  // else itemButtonColor = 'add'

  return (
    <li className={ itemClass }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ () => addToCart( id ) } className={ itemButtonColor }>{ itemButtonText }</button>
    </li>
  );
}

export default Item;
