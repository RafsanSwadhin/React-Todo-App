import React from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'

const dummyTodos = [
  {
    id : 2,
    title : "Todo title",
    desc : " Todo description is here ",
},

{
  id : 1,
  title : "Todo title",
  desc : " Todo description is here ",
}
]
const Home = () => {
  return <div className={style.container}>
    <h1 style={{color:'white'}}>Todo App</h1>
    <NewTodo/>
      <Todos todos = {dummyTodos}/>
    </div>
  
}
export default Home