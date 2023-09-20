import React from "react";
import { setFilter } from "../../slices/filtersSlice";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const filter = useSelector((state) => state.filters)
  const [activeFilter, setActiveFilter] = React.useState(filter.status);
  const dispatch = useDispatch();

  function handleFilters(e) {
    dispatch(setFilter(e.target.id));
    setActiveFilter(e.target.id);
  }

  return (
    <div className="todo-navbar">
      <div className="todo-navbar__container">
        <div className="todo-counters">
          <span
            id="active"
            className={`todo-counters__text ${activeFilter === 'active' && "todo-counters__text_focus"}`}
            onClick={handleFilters}
          >
            Активные:
          </span>
          <span className="todo-counters__counter todo-counters__counter_active">
            0
          </span>
          <span
            id="complete"
            className={`todo-counters__text ${activeFilter === 'complete' && "todo-counters__text_focus"}`}
            onClick={handleFilters}
          >
            Завершенные:
          </span>
          <span className="todo-counters__counter todo-counters__counter_complete">
            0
          </span>
          <span
            id="all"
            className={`todo-counters__text ${activeFilter === 'all' && "todo-counters__text_focus"}`}
            onClick={handleFilters}
          >
            Всего:
          </span>
          <span className="todo-counters__counter todo-counters__counter_all">
            0
          </span>
        </div>
        <div className="todo-nabar__clear-list">
          <span className="todo-navbar__clear todo-navbar__clear_type_text">
            Очистить:
          </span>
          <span className="todo-navbar__clear todo-navbar__clear_type_completed">
            Завершенные
          </span>
          <span className="todo-navbar__clear todo-navbar__clear_type_all">
            Весь список
          </span>
        </div>
      </div>
      <div className="todo-navbar__common-container">
        <span className="todo-navbar__common todo-navbar__common_type_check"></span>
        <span className="todo-navbar__common todo-navbar__common_type_uncheck"></span>
      </div>
    </div>
  );
}

export default Navbar;
