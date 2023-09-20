import React from "react";
import { setFilter } from "../../slices/filtersSlice";
import {
  clearCompleteTasks,
  clearAllTasks,
  checkAllTasks,
  uncheckAllTasks,
} from "../../slices/tasksSlice";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const filter = useSelector((state) => state.filters);
  const tasks = useSelector((state) => state.tasks);
  const [activeFilter, setActiveFilter] = React.useState(filter.status);
  const dispatch = useDispatch();

  function handleFilters(e) {
    dispatch(setFilter(e.target.id));
    setActiveFilter(e.target.id);
  }

  function handleActiveCounter() {
    return tasks.filter((task) => !task.complete).length;
  }

  function handleCompleteCounter() {
    return tasks.filter((task) => task.complete).length;
  }

  function handleClearCompleteTasks() {
    dispatch(clearCompleteTasks());
  }

  function handleClearAllTasks() {
    dispatch(clearAllTasks());
  }

  function handleCheckAllTasks() {
    dispatch(checkAllTasks());
  }

  function handleUncheckAllTasks() {
    dispatch(uncheckAllTasks())
  }

  function handleDisableCheckAll() {
    return tasks.filter((task) => !task.complete).length > 0
      ? "todo-navbar__common todo-navbar__common_type_check"
      : "todo-navbar__common todo-navbar__common_type_check todo-navbar__common_type_disable";
  }

  function handleDisableUncheckAll() {
    return tasks.filter((task) => task.complete).length > 0
      ? "todo-navbar__common todo-navbar__common_type_uncheck"
      : "todo-navbar__common todo-navbar__common_type_uncheck todo-navbar__common_type_disable";
  }

  return (
    <div className="todo-navbar">
      <div className="todo-navbar__container">
        <div className="todo-counters">
          <span
            id="active"
            className={`todo-counters__text ${
              activeFilter === "active" && "todo-counters__text_focus"
            }`}
            onClick={handleFilters}
          >
            Активные:
          </span>
          <span className="todo-counters__counter todo-counters__counter_active">
            {handleActiveCounter()}
          </span>
          <span
            id="complete"
            className={`todo-counters__text ${
              activeFilter === "complete" && "todo-counters__text_focus"
            }`}
            onClick={handleFilters}
          >
            Завершенные:
          </span>
          <span className="todo-counters__counter todo-counters__counter_complete">
            {handleCompleteCounter()}
          </span>
          <span
            id="all"
            className={`todo-counters__text ${
              activeFilter === "all" && "todo-counters__text_focus"
            }`}
            onClick={handleFilters}
          >
            Всего:
          </span>
          <span className="todo-counters__counter todo-counters__counter_all">
            {tasks.length}
          </span>
        </div>
        <div className="todo-nabar__clear-list">
          <span className="todo-navbar__clear todo-navbar__clear_type_text">
            Очистить:
          </span>
          <span
            className="todo-navbar__clear todo-navbar__clear_type_completed"
            onClick={handleClearCompleteTasks}
          >
            Завершенные
          </span>
          <span
            className="todo-navbar__clear todo-navbar__clear_type_all"
            onClick={handleClearAllTasks}
          >
            Весь список
          </span>
        </div>
      </div>
      <div className="todo-navbar__common-container">
        <span className={handleDisableCheckAll()} onClick={handleCheckAllTasks}></span>
        <span className={handleDisableUncheckAll()} onClick={handleUncheckAllTasks}></span>
      </div>
    </div>
  );
}

export default Navbar;
