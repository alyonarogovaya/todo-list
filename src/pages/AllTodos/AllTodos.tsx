import { useFetchTodosQuery } from "../../services/todosApi";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Message from "../../components/Message/Message";
import TodoItem from "../../components/TodoItem/TodoItem";
import { Todo } from "../../types";
import styles from "./AllTodos.module.css";

const AllTodos = () => {
  const { data, isFetching, error } = useFetchTodosQuery({});
  const todos = data?.record.todos;
  return (
    <>
      {isFetching && <LoadingSpinner />}
      {data && (
        <ul className={styles.list}>
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
