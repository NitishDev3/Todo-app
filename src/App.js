import "./App.css";
import Head from "./MyComponents/Head.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let SrNo;
    if (todos.length === 0) {
      SrNo = 1;
    } else {
      SrNo = todos[todos.length - 1].SrNo + 1;
    }

    let todoAdd = {
      SrNo: SrNo,
      title: title,
      desc: desc,
    };

    setTodos([...todos, todoAdd]);
    // console.log(myTodo);
  };
  let initTodos;

  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Head />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
