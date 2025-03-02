import React,{useState} from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'
const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    console.log(todo)
  }
  return <div className={style.container}>
    <h1 style={{color:'white'}}>Todo App</h1>
    <NewTodo onAddTodo = {handleAddTodo}/>
      <Todos todos = {todos}/>
    </div>
}
export default Home