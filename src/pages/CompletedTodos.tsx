import Message from "../components/Message/Message";
import TodoItem from "../components/TodoItem/TodoItem";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { Todo } from "../types";

const CompletedTodos = () => {
  const todos = useAppSelector((store: RootState) => store.todos);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      {completedTodos.length ? (
        <ul>
          {completedTodos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <Message message="You haven't completed any item yet" />
      )}
    </>
  );
};

export default CompletedTodos;
