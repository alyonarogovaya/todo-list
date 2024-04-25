import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodosType {
  id: number;
  name: string;
  deleted: boolean;
  completed: boolean;
}
const initialState: TodosType[] = [];

const TodoSlice = createSlice({
  name: "todo",
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action: PayloadAction<TodosType>) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.value.map((item) => {
        if (item.id == action.payload) {
          item.deleted = !item.deleted;
        }
      });
    },
    deletePermanentlyTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      state.value.map((item) => {
        if (item.id == action.payload) {
          item.completed = !item.completed;
        }
      });
    },
    uncheckTodo: (state) => {
      state.value = state.value.filter((item) => item.completed == false);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  deletePermanentlyTodo,
  completeTodo,
  uncheckTodo,
} = TodoSlice.actions;

export default TodoSlice.reducer;
