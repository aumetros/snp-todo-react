import "./Todo.css";
import TodoForm from "../TodoForm/TodoForm";
import Navbar from "../Navbar/Navbar";

function Todo({ main }) {
  return (
  <div className="todo">
    <TodoForm main={main} />
    <Navbar />
  </div>
  )
}

export default Todo;
