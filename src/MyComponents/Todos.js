import React from "react";
import TodoItem from "./TodoItem.js";

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">ToDos List</h3>
      {props.todos.length === 0 ? (
        <div className="card mx-5 bg-primary">
          <div className="card-body text-center text-white">No Todo!</div>
        </div>
      ) : (
        Array.from(props.todos).map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.SrNo} onDelete={props.onDelete} />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
}
