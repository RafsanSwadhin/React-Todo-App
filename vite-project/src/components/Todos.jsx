import React from 'react';
import Todo from './Todo'; // Ensure you have this component
import style from "./todos.module.css"
const Todos = (props) => {
  console.log(props.todos);

  return (
    <section className={style.todos}>
      {
        props.todos.map((todo) => (  // ✅ Corrected arrow function syntax
          <Todo todo={todo.todo} key={todo.id} id = {todo.id} onRemoveTodo = {props.onRemoveTodo}/>
        ))
      }
    </section>
  );
};

export default Todos;