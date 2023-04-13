import React from "react";
import Task from "./Task";

function TaskList( props ) {

  let tasks = props.tasks
  // let { tasks } = props

  console.log( props )
  
  const renderTasks = tasks.map( ( task, index ) =>
    <Task 
      key = { index } 
      task = { task }
      index = { index }
      deleteTask = { props.deleteTask } 
    /> 
  )

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      { renderTasks }
    </div>
  );
}

export default TaskList;
