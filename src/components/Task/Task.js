import './Task.css';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../slices/tasksSlice';

function Task({ task }) {
  const dispatch = useDispatch();

  function handleToggleTask() {
    dispatch(toggleTask(task.id));
  }

  function handleDeleteTask() {
    dispatch(deleteTask(task.id));
  }

  return (
    <li className='todo-list__item'>
      <span
        className={`todo-list__item-check ${
          task.complete && 'todo-list__item-check_checked'
        }`}
        onClick={handleToggleTask}
      ></span>
      <span className='todo-list__item-text'>{task.task}</span>
      <button
        className='todo-list__item-btn todo-list__item-btn_type_edit'
        type='button'
        title='Редактировать'
      ></button>
      <button
        className='todo-list__item-btn todo-list__item-btn_type_delete'
        type='button'
        title='Удалить'
        onClick={handleDeleteTask}
      ></button>
    </li>
  );
}

export default Task;
