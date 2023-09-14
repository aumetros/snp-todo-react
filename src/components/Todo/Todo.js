import "./Todo.css";
import TodoForm from "../TodoForm/TodoForm";
import Navbar from "../Navbar/Navbar";

function Todo() {
  return (
  <div className="todo">
    <TodoForm />
    <Navbar />
  </div>
  )
}

export default Todo;
