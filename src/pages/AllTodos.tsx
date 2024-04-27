import TodoItem from "../components/TodoItem/TodoItem";
import { Todo } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const AllTodos = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <>
      {todos && (
        <ul>
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </>
  );
};

export default AllTodos;
