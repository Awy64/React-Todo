import React from 'react';
import "./Todo.css";



const Todo = props => {
  const handleClick = e => {
    props.toggleTodoCompleted(props.todo.id);
  };

  return(
    <div
      onClick={handleClick}
      className={`todo${props.todo.completed ? " completed" : ""}`}
      >
    <p>{props.todo.task}</p>
    </div>
  )
}




export default Todo;