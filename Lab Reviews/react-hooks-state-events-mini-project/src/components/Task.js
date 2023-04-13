import React from "react";

function Task( props ) {

  // let text = props.task.text
  // let category = props.task.category

  const { text, category } = props.task
  
  return (
    <div className="task">
      <div className="label">{ category }</div>
      <div className="text">{ text }</div>
      <button className="delete" onClick={ () => props.deleteTask( props.index ) }>X</button>
    </div>
  );
}

export default Task;
