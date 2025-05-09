import React, { useState } from 'react';
import style from "./newtodo.module.css";

const NewTodo = (props) => {
    const [todo, setTodo] = useState({ title: "", desc: "" });
    const { title, desc } = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // ✅ Check if title and desc are NOT empty
        if (title.trim() === "" || desc.trim() === "") {
            alert("Please fill in both Title and Description!");
            return; // ❌ Don't add empty todo
        }

        props.onAddTodo(todo);
        setTodo({ title: "", desc: "" }); // ✅ Clear inputs after adding
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={style["form-field"]}>
                <label htmlFor="desc">Description:</label>
                <textarea
                    name="desc"
                    id="desc"
                    value={desc}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;













// import React, {useState} from 'react'
// import style from "./newtodo.module.css"
// const NewTodo = (props) => {
//     const [todo, setTodo] = useState({title:"",desc:""})
//     const {title,desc} = todo
//     const handleChange = (event) => {
//         const name = event.target.name 
//         setTodo((oldTodo)=> {
//             return {...oldTodo, [name]: event.target.value}
//         })
//     }
//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         props.onAddTodo(todo)
//         setTodo({title:"", desc : ""})
//     }
//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//         <div className={style["form-field"]}>
//             <label htmlFor="title">
//                 Title:
//             </label>
//             <input type="text" name="title" id="title" value={title} onChange={handleChange}/>
//         </div>
//         <div className={style["form-field"]}>
//             <label htmlFor="desc">
//                 Description:
//             </label>
//             <textarea type="text" name="desc" id="desc" value={desc} onChange={handleChange}/>
//         </div>
//         <button type='submit' >Add Todo</button>
//     </form>
//   )
// }

// export default NewTodo