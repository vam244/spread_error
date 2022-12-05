import React, { useState } from 'react';
import Nav from './Nav';
import Todo from './Todo'
import Addtodo from './Addtodo'


export default function App() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [todos, settodos] = useState([])
  
  return (
    <div>
    <Nav/>
    <Addtodo title={title} desc={desc} settitle={settitle} setdesc={setdesc} settodos={settodos} Todos={todos} />
    <Todo todos={todos}/>
    </div>
  )
}
