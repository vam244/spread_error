import React from "react";
import Todoitem from "./Todoitem";

function Todo({todos,ondelete}) {
  
  return (
    <div>
        
        {todos.map((todo)=>{
        return <Todoitem key={todo.id} todo={todo} ondelete={ondelete}/>})}
 
    </div>
  )
}



export default Todo
