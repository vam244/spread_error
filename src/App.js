import React, { useState,useEffect } from 'react';
import Nav from './Nav';
 import Todo from './Todo'
import Addtodo from './Addtodo'



export default function App() {
   let initodo
   let ini_todo=()=>{
    if(localStorage.getItem("todos")===null){
     return []
     }
     else {
      return JSON.parse(localStorage.getItem('todos'))
     }
   }
  initodo=ini_todo()
    let [title, settitle] = useState("")
    let [desc, setdesc] = useState("")
    let [todos, settodos] = useState(initodo)
  
  const ondelete=(todo)=>{
    let arr=todos.filter((e)=>{return e!==todo})
    settodos(()=>{return[...arr]})
  }
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify('todos'))
  }, [todos])
  
  return (
    <div>
    <Nav/>
    <Addtodo title={title} desc={desc} setdesc={setdesc} settitle={settitle} settodos={settodos} todos={todos}/>
    <Todo todos={todos} ondelete={ondelete}/>    
    </div>
  )
}
