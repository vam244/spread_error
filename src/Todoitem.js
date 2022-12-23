import React from 'react'

function Todoitem({todo,ondelete}) {
 
  return (
<div className="card" id='id' style={{width:"18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.desc}</p> 
    <button className="btn btn-primary" onClick={()=>{ondelete(todo)}}>delete</button>
  </div>
</div>
  )
}
export default Todoitem
