import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./containers/Navbar";
import MainList from "./containers/MainList";

import { selectTodos, selectCompleted } from './appSlice';

import "./App.scss";

const App = () => {
  const todos = useSelector(selectTodos);
  const completed = useSelector(selectCompleted);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/completed"
            component={(props) => (
              <MainList
                {...props}
                items={completed}
                canAddTodo={false}
                name="Tareas Completadas"
                type="completed"
              />
            )}
          />
          <Route
            path="/"
            component={(props) => (
              <MainList
                {...props}
                items={todos}
                canAddTodo={true}
                name="Lista de TODOS"
                type="todo"
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
