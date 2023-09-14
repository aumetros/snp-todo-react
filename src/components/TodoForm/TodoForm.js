import "./TodoForm.css";

function TodoForm() {
  return (
    <form className="todo-form">
      <input
        type="text"
        name="todo"
        className="todo-form__input"
        placeholder="Добавьте следующее дело"
        required
      />
      <button className="todo-form__button" type="submit">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
