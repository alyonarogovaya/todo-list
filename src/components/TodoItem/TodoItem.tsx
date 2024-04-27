import { Todo } from "../../types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "./TodoItem.module.css";
import { useAppDispatch } from "../../store/hooks";
import { changeTodoStatus, deleteTodo } from "../../store/todosSlice";

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (window.confirm("Do you want to delete an item?")) {
      dispatch(deleteTodo(todo.id));
    }
  };

  const handleChange = (id: string) => {
    dispatch(changeTodoStatus(id));
  };

  return (
    <li className={styles.todoItem}>
      <div className={styles.checkbox}>
        <input
          checked={todo.isCompleted}
          type="checkbox"
          id={`todo-${todo.id}`}
          onChange={() => handleChange(todo.id)}
        />
        <label htmlFor={`todo-${todo.id}`}></label>
      </div>
      {todo.title}
      <button className={styles.btnDelete} onClick={handleDelete}>
        <DeleteOutlineIcon />
      </button>
    </li>
  );
}

export default TodoItem;
