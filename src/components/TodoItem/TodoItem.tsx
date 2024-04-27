import { Todo } from "../../types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "./TodoItem.module.css";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

function TodoItem({ todo }: { todo: Todo }) {
  const todos = useSelector((state: RootState) => state.todos.todos);

  // const handleDelete = (id: string) => {
  //   console.log([...todos]);
  // const res = await updateTodos([...todos]);
  // if ("data" in res) {
  //   setTitle("");
  // }
  // if ("error" in res) {
  //   alert(res.error);
  // }
  // };

  return (
    <li className={styles.todoItem}>
      <div className={styles.checkbox}>
        <input type="checkbox" id={`todo-${todo.id}`} />
        <label htmlFor={`todo-${todo.id}`}></label>
      </div>
      {todo.title}
      <button
        className={styles.btnDelete}
        onClick={() => handleDelete(todo.id)}
      >
        <DeleteOutlineIcon />
      </button>
    </li>
  );
}

export default TodoItem;
