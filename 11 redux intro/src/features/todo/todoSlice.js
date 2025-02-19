import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  edit: { id: "", text: "" },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      state.edit = { id: "", text: "" };
    },
    editTodo: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
