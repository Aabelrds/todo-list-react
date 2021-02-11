import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./containers/Navbar";
import MainList from "./containers/MainList";

import storage from './services/storage';

import "./App.scss";

const defaultItems = [
  {
    title: "Item 1",
    id: "265ba7de-1c95-4adf-a745-e2c520eeb10",
  },
  {
    title: "Item 2",
    id: "93dde976-9a8f-4fa8-90f7-dcbfceb66a2f",
  },
  {
    title: "Item 3",
    id: "0fd9721d-b043-46bd-8943-de2a15b1e3ea",
  },
  {
    title: "Item 4",
    id: "ff1eae36-fef8-4398-9148-3b151fc4d45d",
  },
];

const App = () => {
  const [todos, setTodos] = useState(defaultItems);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const t = storage.get('todos')
    t.length ? setTodos(t) : setTodos(defaultItems);
    setCompleted(storage.get('completed'));
  }, []);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);

    storage.set("todos", newTodos);
  };

  const removeTodo = todo => {
    if (todos.indexOf(todo) >= 0) {
      const newTodos = [...todos];
      newTodos.splice(todos.indexOf(todo), 1);
      setTodos(newTodos);
      storage.set('todos', newTodos);
    } else {
      const newCompleted = [...completed];
      newCompleted.splice(completed.indexOf(todo), 1);
      setCompleted(newCompleted);
      storage.set('completed', newCompleted);
    }
  }

  const whenCompleteTodo = (todo) => {
    const elementIndex = todos.indexOf(todo);

    const todosCopy = [...todos];
    const completedTodo = todosCopy.splice(elementIndex, 1);

    const newCompleted = [...completed, ...completedTodo];
    setTodos(todosCopy);
    setCompleted(newCompleted);

    storage.set("todos", todosCopy);
    storage.set("completed", newCompleted);
  };

  const whenUncompleteTodo = (todo) => {
    const elementIndex = completed.indexOf(todo);

    const completedCopy = [...completed];
    const uncompletedTodo = completedCopy.splice(elementIndex, 1);

    const newTodos = [...todos, ...uncompletedTodo];
    setCompleted(completedCopy);
    setTodos(newTodos);

    storage.set("completed", completedCopy);
    storage.set("todos", newTodos);
  };

  const addComment = (todo, comment) => {
    console.log('app todo', todo)
    console.log('app comment', comment)

    if (todos.indexOf(todo) >= 0) {
      const newTodos = [...todos];
      const index = todos.indexOf(todo);
      newTodos.splice(index, 1, {...todos[index], comment })
      setTodos(newTodos);
      storage.set('todos', newTodos);
    } else {
      const newCompleted = [...completed];
      const index = completed.indexOf(todo);
      newCompleted.splice(index, 1, {...completed[index], comment })
      setCompleted(newCompleted);
      storage.set('completed', newCompleted);
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>Hola</div>
        <Switch>
          <Route
            path="/completed"
            component={(props) => (
              <MainList
                {...props}
                items={completed}
                canAddTodo={false}
                name="Tareas Completadas"
                handleTodo={whenUncompleteTodo}
                removeTodo={removeTodo}
                type="completed"
                addComment={addComment}
              />
            )}
          />
          <Route
            path="/"
            component={(props) => (
              <MainList
                {...props}
                addTodo={addTodo}
                items={todos}
                canAddTodo={true}
                name="Lista de TODOS"
                type="todo"
                removeTodo={removeTodo}
                handleTodo={whenCompleteTodo}
                addComment={addComment}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
