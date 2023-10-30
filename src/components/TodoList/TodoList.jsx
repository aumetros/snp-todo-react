import Task from "components/Task";
import { useSelector } from "react-redux";
import { selectTasks, selectFilters } from "selectors";
import React from "react";
import styles from "./TodoList.module.scss";

function TodoList() {
  const [render, setRender] = React.useState([]);
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilters);

  const renderList = React.useMemo(
    () =>
      render.map((task) => {
        return <Task key={task.id} task={task} />;
      }),
    [render]
  );

  React.useEffect(() => {
    if (filter.status === "all") {
      setRender(tasks);
    } else if (filter.status === "complete") {
      const completeTasks = tasks.filter((task) => task.complete);
      setRender(completeTasks);
    } else if (filter.status === "active") {
      const activeTasks = tasks.filter((task) => !task.complete);
      setRender(activeTasks);
    }
  }, [filter, tasks]);

  return (
    <ul className={styles.root}>
      {renderList}
    </ul>
  )
}

export default TodoList;
