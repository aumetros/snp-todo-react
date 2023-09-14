import "./Todo.css";
import TodoForm from "../TodoForm/TodoForm";
import Navbar from "../Navbar/Navbar";
import TodoList from "../TodoList/TodoList";

function Todo() {
  return (
  <div className="todo">
    <TodoForm />
    <Navbar />
    <TodoList />
  </div>
  )
}

export default Todo;
