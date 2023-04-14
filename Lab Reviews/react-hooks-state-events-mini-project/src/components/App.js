import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
function App() {

  const [ tasks, setTasks ] = useState( TASKS )
  const [ categories, setCategories ] = useState( CATEGORIES )

  const [ selectedCategory, setSelectedCategory ] = useState( 'All' )

  const changeSelectedCategory = newCategory => setSelectedCategory( newCategory )

  const deleteTask = ( deleteIndex ) => {
    const removeTaskFromList = tasks.filter( ( task, index ) => index !== deleteIndex )
    
    setTasks( removeTaskFromList )
  }

  const filterTasks = tasks.filter( task => task.category === selectedCategory || selectedCategory === 'All' )

  const addNewTask = newTask => setTasks( [...tasks, newTask ] )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories = { categories }
        changeSelectedCategory = { changeSelectedCategory }
      />
      <NewTaskForm 
        categories = { categories } 
        addNewTask = { addNewTask }
      />
      <TaskList 
        tasks = { filterTasks } 
        deleteTask = { deleteTask }
      />
    </div>
  );
}

export default App;
