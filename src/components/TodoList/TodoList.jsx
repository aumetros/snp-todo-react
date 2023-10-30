import Task from "components/Task";
import { useSelector } from "react-redux";
import {
  selectTasks,
  selectFilters,
  selectActiveTasks,
  selectCompleteTasks,
} from "selectors";
import React from "react";
import styles from "./TodoList.module.scss";

function TodoList() {
  const filter = useSelector(selectFilters);
  const tasks = useSelector(selectTasks);
  const activeTasks = useSelector(selectActiveTasks);
  const completeTasks = useSelector(selectCompleteTasks);

  const renderList = React.useMemo(() => {
    if (filter.status === "all") {
      return tasks;
    } else if (filter.status === "complete") {
      return completeTasks;
    } else if (filter.status === "active") {
      return activeTasks;
    }
  }, [filter, tasks, activeTasks, completeTasks]);

  return (
    <ul className={styles.root}>
      {renderList.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}

export default TodoList;
