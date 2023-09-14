import "./Main.css";
import Todo from "../Todo/Todo";
import TodoList from "../TodoList/TodoList"

function Main() {
  return (
    <div className="main">
      <Todo />
      <TodoList />
    </div>
  )
}

export default Main;