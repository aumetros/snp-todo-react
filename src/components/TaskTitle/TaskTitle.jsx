import styles from "./TaskTitle.module.scss";

function TaskTitle({
  isEdit,
  title,
  onDoubleClick,
  onChange,
  onEnter,
  onBlur,
}) {
  return (
    <>
      {isEdit ? (
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
      ) : (
        <span className={styles.root} onDoubleClick={onDoubleClick}>
          {title}
        </span>
      )}
    </>
  );
}

export default TaskTitle;
