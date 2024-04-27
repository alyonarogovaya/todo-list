import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

const initialState: {
  todos: Todo[];
  isLoading: boolean;
} = {
  todos: [],
  isLoading: false,
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = [...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setTodos, setIsLoading } = TodoSlice.actions;

export default TodoSlice.reducer;
