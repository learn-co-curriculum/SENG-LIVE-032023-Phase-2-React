import React from "react";

function CategoryFilter( props ) {


  const renderCategories = props.categories.map( category => 
    <button 
      key={category} 
      onClick={ ()=> props.changeSelectedCategory( category ) }
    >{ category }</button>
  )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      { renderCategories }
    </div>
  );
}

export default CategoryFilter;
