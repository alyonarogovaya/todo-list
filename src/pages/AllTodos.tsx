import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Message from "../components/Message/Message";
import TodoItem from "../components/TodoItem/TodoItem";
import { Todo } from "../types";

import { RootState } from "../store/store";
import { useAppSelector } from "../store/hooks";

const AllTodos = () => {
  const todos = useAppSelector((store: RootState) => store.todos);
  const isLoading = useAppSelector((store: RootState) => store.isLoading);
  const error = useAppSelector((store: RootState) => store.error);

  console.log(error);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {todos && (
        <ul>
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
      {error && (
        <Message message="An error occured loading data. Try again later" />
      )}
    </>
  );
};

export default AllTodos;
