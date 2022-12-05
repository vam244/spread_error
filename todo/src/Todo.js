import React from "react";
import Todoitem from "./Todoitem";

function Todo(props) {
  
  return (
    <div>
        {
          props.todos.map((todo)=>(<Todoitem key={todo.id} title={todo.title} desc={todo.desc}/>))
        }
    </div>
  )
}



export default Todo
