import React from 'react'
function Addtodo({title,desc,settitle,setdesc,settodos,todos}) {
  const create_todo=(event)=>{
    event.preventDefault()
  settodos(prevstate=>{
    console.log(prevstate.length+1)
    return [...prevstate,{id:prevstate.length+1,title:title,desc:desc}]
  })
    setdesc("")
    settitle("")
    
   
}

  const ontitlechange=(event)=>{
    settitle(event.target.value)
    
  }
  const ondeschange=(event)=>{
    setdesc(event.target.value)
  }
  
  return (
    <div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">add title</label>
  <input type="text" className="form-control" value={title} onChange={ontitlechange} id="exampleFormControlInput1" placeholder="type here"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">add note</label>
  <input type="text" className="form-control" value={desc} onChange={ondeschange} id="exampleFormControlInput1" placeholder="type here"/>
  <button className='btn btn-primary'onClick={create_todo} >add</button>
</div>

    </div>
  )
  }

export default Addtodo
