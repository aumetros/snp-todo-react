import "./Task.css";

function Task() {
  return (
    <li className="todo-list__item">
      <span className="todo-list__item-check"></span>
      <span className="todo-list__item-text">Тестовая задачка</span>
      <button
        className="todo-list__item-btn todo-list__item-btn_type_edit"
        type="button"
        title="Редактировать"
      ></button>
      <button
        className="todo-list__item-btn todo-list__item-btn_type_delete"
        type="button"
        title="Удалить"
      ></button>
    </li>
  );
}

export default Task;
