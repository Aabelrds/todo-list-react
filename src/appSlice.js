import { createSlice, current } from "@reduxjs/toolkit";
import storage from "./services/storage";

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

const todosFromStorage = storage.get("todos");

const initialTodos = todosFromStorage.length ? todosFromStorage : defaultItems;

export const appSlice = createSlice({
  name: "app",
  initialState: {
    todos: initialTodos,
    completed: [],
    isAddingTodo: false,
  },
  reducers: {
    addTodo: (state, action) => {
      const todos = [...state.todos, action.payload];

      state.todos = todos;
      state.isAddingTodo = false;

      storage.set("todos", todos);
    },
    setIsAddingTodo: (state, action) => {
      state.isAddingTodo = action.payload;
    },
    removeTodo: (state, action) => {
      const todo = action.payload;
      const { todos, completed } = current(state);

      if (todos.indexOf(todo) >= 0) {
        const newTodos = [...todos];
        newTodos.splice(todos.indexOf(todo), 1);
        state.todos = newTodos;
        storage.set("todos", newTodos);
      } else {
        const newCompleted = [...completed];
        newCompleted.splice(completed.indexOf(todo), 1);
        state.completed = newCompleted;
        storage.set("completed", newCompleted);
      }
    },
    addComment: (state, action) => {
      const { todo, comment } = action.payload;
      const { todos, completed } = current(state);

      if (todos.indexOf(todo) >= 0) {
        const newTodos = [...todos];
        const index = todos.indexOf(todo);
        newTodos.splice(index, 1, { ...todos[index], comment });
        state.todos = newTodos;
        storage.set("todos", newTodos);
      } else {
        const newCompleted = [...completed];
        const index = completed.indexOf(todo);
        newCompleted.splice(index, 1, { ...completed[index], comment });
        state.completed = newCompleted;
        storage.set("completed", newCompleted);
      }
    },
    whenCompleteTodo: (state, action) => {
      const { todo } = action.payload;
      const { todos, completed } = current(state);

      const elementIndex = todos.indexOf(todo);

      const todosCopy = [...todos];
      const completedTodo = todosCopy.splice(elementIndex, 1);

      const newCompleted = [...completed, ...completedTodo];

      state.todos = todosCopy;
      state.completed = newCompleted;

      storage.set("todos", todosCopy);
      storage.set("completed", newCompleted);
    },
    whenUncompleteTodo: (state, action) => {
      const { todo } = action.payload;
      const { todos, completed } = current(state);

      const elementIndex = completed.indexOf(todo);

      const completedCopy = [...completed];
      const uncompletedTodo = completedCopy.splice(elementIndex, 1);

      const newTodos = [...todos, ...uncompletedTodo];
      state.completed = completedCopy;
      state.todos = newTodos;

      storage.set("completed", completedCopy);
      storage.set("todos", newTodos);
    },
  },
});

export const {
  addTodo,
  setIsAddingTodo,
  removeTodo,
  addComment,
  whenCompleteTodo,
  whenUncompleteTodo
} = appSlice.actions;

export const selectTodos = (state) => state.app.todos;
export const selectCompleted = (state) => state.app.completed;
export const selectIsAddingTodo = (state) => state.app.isAddingTodo;

export default appSlice.reducer;
