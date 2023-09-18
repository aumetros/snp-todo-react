import "./TodoList.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />
      })}
    </ul>
  )
}

export default TodoList;