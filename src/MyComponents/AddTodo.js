import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (title === "" || desc === "" ) {
      alert("Title or Description cannot be empty");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
    
  };
  return (
    <div className="container my3">
      <h3 className="text-center">Add a ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3 my-2">
          <label htmlFor="title" className="form-label">
            ToDo Title
          </label>
          <input
            type="Text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 my-2">
          <label htmlFor="desc" className="form-label">
            ToDo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};
