import { useState } from "react";
import styles from "./TodoForm.module.css";
import { useUpdateTodosMutation } from "../../services/todosApi";
import { Todo } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setTodos, setIsLoading } from "../../store/todosSlice";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [createApiTodo] = useUpdateTodosMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      alert("It seems you didn't write what you need to do");
    }

    const newTodo: Todo = {
      title,
      isDeleted: false,
      isCompleted: true,
      id: new Date().toISOString(),
    };

    dispatch(setIsLoading(true));

    const res = await createApiTodo([...todos, newTodo]);
    if ("data" in res) {
      dispatch(setTodos(res.data.record.todos));
      setTitle("");
    }
    if ("error" in res) {
      alert(res.error);
    }

    dispatch(setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        required
        value={title}
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
