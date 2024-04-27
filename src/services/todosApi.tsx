import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "../types";

const X_MASTER_KEY =
  "$2a$10$qEiSzVF.BR.GplsyOIy6b.R9Fw4TzBWpW8hISwS2m7Gj/nhYahQ9C";
const X_ACCESS_KEY =
  "$2a$10$JnqCe17Dhpwev2dNkLXvJORc2l181J7.QfE9qgsdAiNaFj/Q2U3TO";
const BIN_ID = "662ad519ad19ca34f85fd1aa";

interface ITodosResponse {
  record: {
    todos: Todo[];
  };
}

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.jsonbin.io/v3/b/${BIN_ID}`,
    prepareHeaders: (headers) => {
      headers.set("X-Master-Key", `${X_MASTER_KEY}`);
      headers.set("X-Access-Key", `${X_ACCESS_KEY}`);
      headers.set("Content-Type", "application/json");
    },
  }),
  endpoints: (builder) => ({
    fetchTodos: builder.query<ITodosResponse, void>({
      query: () => ({
        url: "/latest",
      }),
    }),
    updateTodos: builder.mutation<ITodosResponse, Todo[]>({
      query: (todos) => ({
        url: "",
        method: "PUT",
        body: {
          todos,
        },
      }),
    }),
  }),
});

export const { useFetchTodosQuery, useUpdateTodosMutation } = todosApi;
