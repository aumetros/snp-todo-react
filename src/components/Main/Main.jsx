import Todo from "../Todo/Todo";
import TodoList from "../TodoList/TodoList";
import React from "react";
import styles from "./Main.module.scss";

function Main() {
  const mainRef = React.useRef();

  return (
    <div className={styles.root} ref={mainRef}>
      <Todo main={mainRef} />
      <TodoList />
    </div>
  );
}

export default Main;
