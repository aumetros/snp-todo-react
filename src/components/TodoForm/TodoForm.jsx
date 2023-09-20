import "./TodoForm.css";
import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../slices/tasksSlice";
import { useOuterClick } from "../../hooks/useOuterClick";

function TodoForm({ main }) {
  const [inputValue, setInputValue] = React.useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function isDublicateTask() {
    return tasks.some((task) => task.task === inputValue);
  }

  function addNewTask() {
    if (!inputValue) return;
    if (isDublicateTask()) {
      alert("Такое задание у вас уже есть!");
      return;
    }
    const task = {
      id: nanoid(),
      task: inputValue,
      complete: false,
    };
    dispatch(addTask(task));
    setInputValue("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewTask();
  }

  useOuterClick(main, addNewTask);

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={inputValue}
        onChange={handleChange}
        className="todo-form__input"
        placeholder="Добавьте следующее дело"
      />
      <button className="todo-form__button" type="submit">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;