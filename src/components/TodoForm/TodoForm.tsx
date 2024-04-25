import { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../../store/todosSlice";
import styles from "./TodoForm.module.css";

const TodoForm: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) {
      alert("It seems you didn't write what you need to do");
    }
    dispatch(addTodo(todo));
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
    </form>
  );
};

export default TodoForm;
