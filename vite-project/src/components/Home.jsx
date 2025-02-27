import React from 'react'
import Todos from './Todos'
import style from './home.module.css'

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
      <Todos todos = {dummyTodos}/>
    </div>
  
}
export default Home