import React from "react";
import { setFilter } from "slices/filtersSlice";
import {
  clearCompleteTasks,
  clearAllTasks,
  checkAllTasks,
  uncheckAllTasks,
} from "slices/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, selectTasks } from "selectors";
import { FILTER_ACTIVE, FILTER_COMPLETE, FILTER_ALL } from "utils/filters";
import styles from "./Navbar.module.scss";

function Navbar() {
  const filter = useSelector(selectFilters);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  function handleFilters(e) {
    dispatch(setFilter(e.target.id));
  }

  const activeTasks = React.useMemo(
    () => tasks.filter((task) => !task.complete).length,
    [tasks]
  );

  const completeTasks = React.useMemo(
    () => tasks.filter((task) => task.complete).length,
    [tasks]
  );

  const allTasks = React.useMemo(() => tasks.length, [tasks]);

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
    return activeTasks > 0
      ? `${styles.common} ${styles["common_type_check"]}`
      : `${styles.common} ${styles["common_type_check"]} ${styles["common_type_disable"]}`;
  }

  function handleDisableUncheckAll() {
    return completeTasks > 0
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
          <span className={styles.counter}>{activeTasks}</span>
          <span
            id={FILTER_COMPLETE}
            className={`${styles.text} ${
              filter.status === FILTER_COMPLETE && styles.focus
            }`}
            onClick={handleFilters}
          >
            Завершенные:
          </span>
          <span className={styles.counter}>{completeTasks}</span>
          <span
            id={FILTER_ALL}
            className={`${styles.text} ${
              filter.status === FILTER_ALL && styles.focus
            }`}
            onClick={handleFilters}
          >
            Всего:
          </span>
          <span className={styles.counter}>{allTasks}</span>
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
