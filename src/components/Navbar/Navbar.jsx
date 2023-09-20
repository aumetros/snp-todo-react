import "./Navbar.css";

function Navbar() {
  return (
<div className="todo-navbar">
            <div className="todo-navbar__container">
              <div className="todo-counters">
                <span id="active"
                  className="todo-counters__text todo-navbar__item todo-navbar__item_focus todo-navbar__item_type_active">Активные:</span>
                <span className="todo-counters__counter todo-counters__counter_active">0</span>
                <span id="complete"
                  className="todo-counters__text todo-navbar__item todo-navbar__item_type_complete">Завершенные:</span>
                <span className="todo-counters__counter todo-counters__counter_complete">0</span>
                <span id="all" className="todo-counters__text todo-navbar__item todo-navbar__item_type_all">Всего:</span>
                <span className="todo-counters__counter todo-counters__counter_all">0</span>
              </div>
              <div className="todo-nabar__clear-list">
                <span className="todo-navbar__clear todo-navbar__clear_type_text">Очистить:</span>
                <span className="todo-navbar__clear todo-navbar__clear_type_completed">Завершенные</span>
                <span className="todo-navbar__clear todo-navbar__clear_type_all">Весь список</span>
              </div>
            </div>
            <div className="todo-navbar__common-container">
              <span className="todo-navbar__common todo-navbar__common_type_check"></span>
              <span className="todo-navbar__common todo-navbar__common_type_uncheck"></span>
            </div>
          </div>
  )
}

export default Navbar;