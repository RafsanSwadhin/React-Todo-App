import React from "react";

import Todo from './Todo'
const Todos = (props) =>{
  console.log(props.todos)

  return (
    <section>
      {
        props.todos.map((todo ) =><Todo todo={todo} key = {todo.id}/>)
      }
    </section>
  )
}

// import React from 'react';
// import Todo from './Todo'; // Ensure you have this component
// import style from "./todos.module.css"
// const Todos = (props) => {
//   console.log(props.todos);

//   return (
//     <section className={style.todos}>
//       {
//         props.todos.map((todo) => (  // ✅ Corrected arrow function syntax
//           <Todo todo={todo.todo} key={todo.id} />
//         ))
//       }
//     </section>
//   );
// };

// export default Todos;
