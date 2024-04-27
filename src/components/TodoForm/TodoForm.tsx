import { useState } from "react";
import { addTodo } from "../../store/todosSlice";
import styles from "./TodoForm.module.css";
import { useAppDispatch } from "../../store/hooks";

const TodoForm: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) {
      alert("It seems you didn't write what you need to do");
    }

    const newTodo = {
      title: todo,
      isCompleted: false,
      id: new Date().toISOString(),
    };

    dispatch(addTodo(newTodo));
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        required
        value={todo}
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
