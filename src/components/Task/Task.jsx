import "./Task.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../../slices/tasksSlice";

function Task({ task }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const dispatch = useDispatch();
  const taskRef = React.useRef();

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

  function isDublicateTask() {
    return tasks.some((task) => task.task === taskRef.current.textContent);
  }

  function handleEditTask() {
    if (!taskRef.current.textContent) {
      taskRef.current.textContent = task.task;
      return;
    }

    if (taskRef.current.textContent === task.task) {
      return;
    }

    if (isDublicateTask()) {
      alert("Такое задание у вас уже есть!");
      taskRef.current.textContent = task.task;
      return;
    }

    dispatch(editTask({ taskId: task.id, text: taskRef.current.textContent }));
  }

  React.useEffect(() => {
    setIsChecked(task.complete);
  }, [task]);

  function handleBlurTask() {
    handleEditTask();
    taskRef.current.contentEditable = false;
    taskRef.current.removeEventListener("blur", handleBlurTask);
    taskRef.current.removeEventListener("keypress", handleEnterPress);
  }

  function handleEnterPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      taskRef.current.removeEventListener("blur", handleBlurTask);
      handleEditTask();
      taskRef.current.contentEditable = false;
      taskRef.current.removeEventListener("keypress", handleEnterPress);
    }
  }

  function handleFocusTask() {
    taskRef.current.contentEditable = true;
    taskRef.current.focus();
    taskRef.current.addEventListener("blur", handleBlurTask);
    taskRef.current.addEventListener("keypress", handleEnterPress);
  }

  return (
    <li className="todo-list__item">
      <span
        className={`todo-list__item-check ${
          isChecked && "todo-list__item-check_checked"
        }`}
        onClick={handleToggleTask}
      ></span>
      <span
        className="todo-list__item-text"
        ref={taskRef}
        onDoubleClick={handleFocusTask}
      >
        {task.task}
      </span>
      <button
        className="todo-list__item-btn todo-list__item-btn_type_edit"
        type="button"
        title="Редактировать"
        onClick={handleFocusTask}
      ></button>
      <button
        className="todo-list__item-btn todo-list__item-btn_type_delete"
        type="button"
        title="Удалить"
        onClick={handleDeleteTask}
      ></button>
    </li>
  );
}

export default Task;
