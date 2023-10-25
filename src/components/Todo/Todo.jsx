import TodoForm from "components/TodoForm";
import Navbar from "components/Navbar";
import styles from "./Todo.module.scss";

function Todo({ main }) {
  return (
  <div className={styles.root}>
    <TodoForm main={main} />
    <Navbar />
  </div>
  )
}

export default Todo;
