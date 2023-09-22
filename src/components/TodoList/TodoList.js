import "./TodoList.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import React from "react";

function TodoList() {
  const [renderList, setRenderList] = React.useState([]);
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filters);

  React.useEffect(() => {
    if (filter.status === "all") {
      setRenderList(tasks);
    } else if (filter.status === "complete") {
      const completeTasks = tasks.filter((task) => task.complete);
      setRenderList(completeTasks);
    } else if (filter.status === "active") {
      const activeTasks = tasks.filter((task) => !task.complete);
      setRenderList(activeTasks);
    }
  }, [filter, tasks]);

  return (
    <ul className="todo-list">
      {renderList.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}

export default TodoList;
