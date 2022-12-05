import React from 'react'

function Todoitem({title,desc}) {
  return (
 
<div className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p> 
    <button className="btn btn-primary">delete</button>
  </div>
</div>
  )
}
export default Todoitem
