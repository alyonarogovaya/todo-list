import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./todosSlice";

const store = configureStore({
  reducer: TodosReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
