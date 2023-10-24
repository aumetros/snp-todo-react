import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask, editTask } from "slices/tasksSlice";
import styles from "./Task.module.scss";

function Task({ task }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isReadOnly, setIsReadOnly] = React.useState("readonly");
  const [title, setTitle] = React.useState(task.task);
  const dispatch = useDispatch();
  // const taskRef = React.useRef();

  const tasks = useSelector((state) => state.tasks);

  function handleToggleTask() {
    setIsChecked(!isChecked);
    setTimeout(() => {
      dispatch(toggleTask(task.id));
    }, 300);
  }

  function handleDeleteTask() {
    dispatch(deleteTask(task.id));
  }

  const isDublicateTask = React.useMemo(() => {
    return tasks.some((task) => task.task === title);
  }, [tasks, title]);

  React.useEffect(() => {
    setIsChecked(task.complete);
  }, [task]);

  // function handleFocusTask() {
  //   taskRef.current.contentEditable = true;
  //   taskRef.current.focus();
  //   taskRef.current.addEventListener("blur", handleBlurTask);
  //   taskRef.current.addEventListener("keypress", handleEnterPress);
  // }

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleEditTask(value) {
    if (!value) {
      setTitle(task.task);
      return;
    }

    if (value === task.task) {
      return;
    }

    if (isDublicateTask) {
      alert("Такое задание у вас уже есть!");
      setTitle(task.task);
      return;
    }

    dispatch(editTask({ taskId: task.id, text: value }));
  }

  function handleBlurTask(e) {
    handleEditTask(e.target.value);
    setIsReadOnly("readonly");
    e.target.removeEventListener("blur", handleBlurTask);
    e.target.removeEventListener("keypress", handleEnterPress);
  }

  function handleEnterPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.removeEventListener("blur", handleBlurTask);
      handleEditTask(e.target.value);
      setIsReadOnly("readonly");
      e.target.removeEventListener("keypress", handleEnterPress);
    }
  }

  function handleEditTask1(e) {
    setIsReadOnly(false);
    e.target.addEventListener("blur", handleBlurTask);
    e.target.addEventListener("keypress", handleEnterPress);
  }

  return (
    <li className={styles.root}>
      <span
        className={`${styles.check} ${isChecked && styles.checked}`}
        onClick={handleToggleTask}
      ></span>
      <input
        type="text"
        className={styles.text}
        name={task.id}
        value={title}
        onChange={handleChange}
        onDoubleClick={handleEditTask1}
        readOnly={isReadOnly}
      />
      <button
        className={`${styles.button} ${styles.edit}`}
        type="button"
        // onClick={handleFocusTask}
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
