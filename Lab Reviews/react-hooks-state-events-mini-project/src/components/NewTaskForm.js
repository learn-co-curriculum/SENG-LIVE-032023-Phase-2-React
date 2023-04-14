import React, { useState } from "react";

function NewTaskForm( props ) {

  const removeAllFromCategories = props.categories.filter( category => category !== 'All' )

  const renderCategoryOptions = removeAllFromCategories.map( category =>  
    <option
      key = { category } 
      value = { category }
    >{ category }</option>
  )

  const [ formCategory, setFormCategory ] = useState( removeAllFromCategories[0] )
  const [ formText, setFormText ] = useState( '' )

  const changeFormCategory = event => setFormCategory( event.target.value )

  const changeFormText = event => setFormText( event.target.value )

  const submitNewTask = event => {
    event.preventDefault()

    const newTask = {
      text: formText,
      category: formCategory
    }

    props.addNewTask( newTask )

    setFormText( '' )
    setFormCategory( removeAllFromCategories[0] )
  }

  return (
    <form className="new-task-form" onSubmit={ submitNewTask }>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value = { formText } 
          onChange = { changeFormText } 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={ formCategory } 
          onChange = { changeFormCategory }
        >
          {/* render <option> elements for each category here */}
          { renderCategoryOptions }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
