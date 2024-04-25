import { Todo } from "../../types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "./TodoItem.module.css";

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className={styles.todoItem}>
      <div className={styles.checkbox}>
        <input type="checkbox" id={`todo-${todo.id}`} />
        <label htmlFor={`todo-${todo.id}`}></label>
      </div>
      {todo.todo}
      <button className={styles.btnDelete}>
        <DeleteOutlineIcon />
      </button>
    </li>
  );
}

export default TodoItem;
