import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <>
      <div className="container my-20">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
    </>
  );
}
