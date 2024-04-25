import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const X_MASTER_KEY =
  "$2a$10$qEiSzVF.BR.GplsyOIy6b.R9Fw4TzBWpW8hISwS2m7Gj/nhYahQ9C";
const X_ACCESS_KEY =
  "$2a$10$JnqCe17Dhpwev2dNkLXvJORc2l181J7.QfE9qgsdAiNaFj/Q2U3TO";
const BIN_ID = "662abda7ad19ca34f85fc923";

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
  }),
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => ({
        url: "",
        headers: {
          "X-Master-Key": `${X_MASTER_KEY}`,
          "X-Access-Key": `${X_ACCESS_KEY}`,
        },
      }),
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFetchTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  todosApi;
