import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "selectors";
import { toggleTask, deleteTask, editTask } from "slices/tasksSlice";
import TaskTitle from "components/TaskTitle";
import styles from "./Task.module.scss";

function Task({ task }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [title, setTitle] = React.useState(task.title);
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);

  const isDublicateTask = React.useMemo(() => {
    return tasks.some((task) => task.title === title);
  }, [tasks, title]);

  function handleToggleTask() {
    setIsChecked(!isChecked);
    setTimeout(() => {
      dispatch(toggleTask(task.id));
    }, 300);
  }

  function handleDeleteTask() {
    dispatch(deleteTask(task.id));
  }

  function handleEditTask() {
    if (!title) {
      setTitle(task.title);
      return;
    }
    if (title === task.title) {
      return;
    }
    if (isDublicateTask) {
      alert("Такое задание у вас уже есть!");
      setTitle(task.title);
      return;
    }
    dispatch(editTask({ taskId: task.id, text: title }));
  }

  function handleEditClick() {
    setIsEdit(true);
  }

  function handleDoubleClick() {
    setIsEdit(true);
  }

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleEnterPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEditTask();
      setIsEdit(false);
    }
  }

  function handleBlur() {
    handleEditTask();
    setIsEdit(false);
  }

  React.useEffect(() => {
    setIsChecked(task.complete);
  }, [task]);

  return (
    <li className={styles.root}>
      <span
        className={`${styles.check} ${isChecked && styles.checked}`}
        onClick={handleToggleTask}
      ></span>
      <TaskTitle
        isEdit={isEdit}
        title={title}
        onDoubleClick={handleDoubleClick}
        onChange={handleChange}
        onEnter={handleEnterPress}
        onBlur={handleBlur}
      />
      <button
        className={`${styles.button} ${styles.edit}`}
        type="button"
        onClick={handleEditClick}
      ></button>
      <button
        className={`${styles.button} ${styles.delete}`}
        type="button"
        onClick={handleDeleteTask}
      ></button>
    </li>
  );
}

export default Task;
