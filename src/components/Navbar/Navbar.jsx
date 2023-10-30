import React from "react";
import { setFilter } from "slices/filtersSlice";
import {
  clearCompleteTasks,
  clearAllTasks,
  checkAllTasks,
  uncheckAllTasks,
} from "slices/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilters,
  selectTasks,
  selectActiveTasks,
  selectCompleteTasks,
} from "selectors";
import { FILTER_ACTIVE, FILTER_COMPLETE, FILTER_ALL } from "utils/filters";
import styles from "./Navbar.module.scss";

function Navbar() {
  const filter = useSelector(selectFilters);
  const tasks = useSelector(selectTasks);
  const activeTasks = useSelector(selectActiveTasks);
  const completeTasks = useSelector(selectCompleteTasks);

  const dispatch = useDispatch();

  function handleFilters(e) {
    dispatch(setFilter(e.target.id));
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
          <span className={styles.counter}>{activeTasks.length}</span>
          <span
            id={FILTER_COMPLETE}
            className={`${styles.text} ${
              filter.status === FILTER_COMPLETE && styles.focus
            }`}
            onClick={handleFilters}
          >
            Завершенные:
          </span>
          <span className={styles.counter}>{completeTasks.length}</span>
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
          className={`${styles.common} ${styles["common_type_check"]} ${
            activeTasks.length === 0 && styles["common_type_disable"]
          }`}
          onClick={handleCheckAllTasks}
        ></span>
        <span
          className={`${styles.common} ${
            completeTasks.length === 0 && styles["common_type_disable"]
          }`}
          onClick={handleUncheckAllTasks}
        ></span>
      </div>
    </div>
  );
}

export default Navbar;
