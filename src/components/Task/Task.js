import "./Task.css";

function Task({ task }) {
  return (
    <li className="todo-list__item">
      <span className="todo-list__item-check"></span>
      <span className="todo-list__item-text">{task.task}</span>
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
