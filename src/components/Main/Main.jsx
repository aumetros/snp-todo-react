import "./Main.css";
import Todo from "../Todo/Todo";
import TodoList from "../TodoList/TodoList";
import React from "react";

function Main() {
  const mainRef = React.useRef();

  return (
    <div className="main" ref={mainRef}>
      <Todo main={mainRef} />
      <TodoList />
    </div>
  );
}

export default Main;
