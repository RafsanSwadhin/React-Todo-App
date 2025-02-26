import React from 'react'
import Todos from './Todos'

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
  return <div>
      <Todos todos = {dummyTodos}/>
    </div>
  
}

export default Home