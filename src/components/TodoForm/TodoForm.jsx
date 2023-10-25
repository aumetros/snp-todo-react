import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "slices/tasksSlice";
import styles from "./TodoForm.module.scss";

function TodoForm({ main }) {
  const [inputValue, setInputValue] = React.useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const isDublicateTask = React.useMemo(() => {
    return tasks.some((task) => task.title === inputValue);
  }, [tasks, inputValue]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const addNewTask = React.useCallback(() => {
    if (!inputValue) return;
    if (isDublicateTask) {
      alert("Такое задание у вас уже есть!");
      return;
    }
    const task = {
      id: nanoid(),
      title: inputValue,
      complete: false,
    };
    dispatch(addTask(task));
    setInputValue("");
  }, [dispatch, inputValue, isDublicateTask]);

  function handleSubmit(e) {
    e.preventDefault();
    addNewTask();
  }

  React.useEffect(() => {
    const handleClick = (e) => {
      if (!main.current.contains(e.target)) {
        addNewTask();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [main, addNewTask]);

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={inputValue}
        onChange={handleChange}
        className={styles.input}
        placeholder="Добавьте следующее дело"
      />
      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
