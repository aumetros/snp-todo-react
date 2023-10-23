import React from "react";
import { setFilter } from "slices/filtersSlice";
import {
  clearCompleteTasks,
  clearAllTasks,
  checkAllTasks,
  uncheckAllTasks,
} from "slices/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_ACTIVE, FILTER_COMPLETE, FILTER_ALL } from "utils/filters";
import styles from "./Navbar.module.scss";

function Navbar() {
  const filter = useSelector((state) => state.filters);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleFilters(e) {
    dispatch(setFilter(e.target.id));
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
    dispatch(uncheckAllTasks());
  }

  function handleDisableCheckAll() {
    return tasks.filter((task) => !task.complete).length > 0
      ? `${styles.common} ${styles["common_type_check"]}`
      : `${styles.common} ${styles["common_type_check"]} ${styles["common_type_disable"]}`;
  }

  function handleDisableUncheckAll() {
    return tasks.filter((task) => task.complete).length > 0
      ? `${styles.common}`
      : `${styles.common} ${styles["common_type_disable"]}`;
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.counters}>
          <span
            id={FILTER_ACTIVE}
            className={`${styles.text} ${
              filter.status === FILTER_ACTIVE && styles.focus
            }`}
            onClick={handleFilters}
          >
            Активные:
          </span>
          <span className={styles.counter}>{handleActiveCounter()}</span>
          <span
            id={FILTER_COMPLETE}
            className={`${styles.text} ${
              filter.status === FILTER_COMPLETE && styles.focus
            }`}
            onClick={handleFilters}
          >
            Завершенные:
          </span>
          <span className={styles.counter}>{handleCompleteCounter()}</span>
          <span
            id={FILTER_ALL}
            className={`${styles.text} ${
              filter.status === FILTER_ALL && styles.focus
            }`}
            onClick={handleFilters}
          >
            Всего:
          </span>
          <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div>
          <span className={styles.clear}>Очистить:</span>
          <span
            className={`${styles.clear} ${styles["clear_type_completed"]}`}
            onClick={handleClearCompleteTasks}
          >
            Завершенные
          </span>
          <span
            className={`${styles.clear} ${styles["clear_type_all"]}`}
            onClick={handleClearAllTasks}
          >
            Весь список
          </span>
        </div>
      </div>
      <div className={styles["common-container"]}>
        <span
          className={handleDisableCheckAll()}
          onClick={handleCheckAllTasks}
        ></span>
        <span
          className={handleDisableUncheckAll()}
          onClick={handleUncheckAllTasks}
        ></span>
      </div>
    </div>
  );
}

export default Navbar;
