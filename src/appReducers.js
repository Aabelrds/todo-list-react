import storage from "./services/storage";

export const addTodoReducer = (state, action) => {
    const todos = [...state.todos, action.payload];

    state.todos = todos;
    state.isAddingTodo = false;

    storage.set("todos", todos);
};
