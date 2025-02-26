import React from 'react';
import Todo from './Todo'; // Ensure you have this component

const Todos = (props) => {
  console.log(props.todos);

  return (
    <section>
      {
        props.todos.map((todo) => (  // ✅ Corrected arrow function syntax
          <Todo todo={todo} key={todo.id} />
        ))
      }
    </section>
  );
};

export default Todos;
