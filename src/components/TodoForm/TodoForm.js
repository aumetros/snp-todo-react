import './TodoForm.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTask } from '../../slices/tasksSlice';

function TodoForm() {
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: nanoid(),
      task: inputValue,
      complete: false,
    };

    dispatch(addTask(task));
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='todo'
        value={inputValue}
        onChange={handleChange}
        className='todo-form__input'
        placeholder='Добавьте следующее дело'
        required
      />
      <button className='todo-form__button' type='submit'>
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
