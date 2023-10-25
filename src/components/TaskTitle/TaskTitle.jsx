import styles from "./TaskTitle.module.scss";

function TaskTitle({
  isEdit,
  title,
  onDoubleClick,
  onChange,
  onEnter,
  onBlur,
}) {
  if (isEdit) {
    return (
      <input
        type="text"
        name="edit"
        className={styles.input}
        value={title}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onEnter}
        autoFocus
      />
    );
  }

  return (
    <span className={styles.root} onDoubleClick={onDoubleClick}>
      {title}
    </span>
  );
}

export default TaskTitle;
