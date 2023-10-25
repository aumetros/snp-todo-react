import Todo from "components/Todo";
import TodoList from "components/TodoList";
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
