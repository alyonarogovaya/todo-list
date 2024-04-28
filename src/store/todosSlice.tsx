import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

interface ITodosDispatchArg {
  type?:
    | "todos/addTodo"
    | "todos/setTodos"
    | "todos/deleteTodo"
    | "todos/changeTodoStatus"
    | "todos/loading"
    | "todos/error";
  payload: Todo | Todo[] | string | boolean;
}

interface ITodosDispatchFunc {
  (arg: ITodosDispatchArg): ITodosDispatchArg;
}

interface ITodosState {
  todos: Todo[];
  isLoading: boolean;
  error: boolean;
}

const initialState: ITodosState = {
  todos: [],
  isLoading: false,
  error: false,
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = [...action.payload];
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id != action.payload);
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      state.todos.map((item) => {
        if (item.id == action.payload) {
          item.isCompleted = !item.isCompleted;
        }
      });
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    error: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const fetchTodos = () => {
  return async (dispatch: ITodosDispatchFunc) => {
    dispatch({ type: "todos/error", payload: false });
    dispatch({ type: "todos/loading", payload: true });
    const res = await fetch(
      `https://api.jsonbin.io/v3/b/${process.env.BIN_ID}/latest`,
      {
        headers: {
          "X-Master-Key": `${process.env.X_MASTER_KEY}`,
          "X-Access-Key": `${process.env.X_ACCESS_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      return dispatch({ type: "todos/error", payload: true });
    }

    const data = await res.json();
    dispatch({ type: "todos/setTodos", payload: data.record.todos });
    dispatch({ type: "todos/loading", payload: false });
  };
};

export const addTodo = (todo: Todo) => {
  return async (dispatch: ITodosDispatchFunc, getState: () => ITodosState) => {
    dispatch({ type: "todos/addTodo", payload: todo });

    await fetch(`https://api.jsonbin.io/v3/b/${process.env.BIN_ID}`, {
      method: "PUT",
      headers: {
        "X-Master-Key": `${process.env.X_MASTER_KEY}`,
        "X-Access-Key": `${process.env.X_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todos: getState().todos,
      }),
    });
  };
};

export const deleteTodo = (id: string) => {
  return async (dispatch: ITodosDispatchFunc, getState: () => ITodosState) => {
    dispatch({ type: "todos/deleteTodo", payload: id });

    await fetch(`https://api.jsonbin.io/v3/b/${process.env.BIN_ID}`, {
      method: "PUT",
      headers: {
        "X-Master-Key": `${process.env.X_MASTER_KEY}`,
        "X-Access-Key": `${process.env.X_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todos: getState().todos,
      }),
    });
  };
};

export const changeTodoStatus = (id: string) => {
  return async (dispatch: ITodosDispatchFunc, getState: () => ITodosState) => {
    dispatch({ type: "todos/changeTodoStatus", payload: id });

    await fetch(`https://api.jsonbin.io/v3/b/${process.env.BIN_ID}`, {
      method: "PUT",
      headers: {
        "X-Master-Key": `${process.env.X_MASTER_KEY}`,
        "X-Access-Key": `${process.env.X_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todos: getState().todos,
      }),
    });
  };
};

export default TodoSlice.reducer;
