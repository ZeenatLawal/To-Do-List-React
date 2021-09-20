/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const TodoItem = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => props.handleChangeProps(props.todo.id)}
    />
    <button type="button" onClick={() => props.deleteTodoProps(props.todo.id)}>
      Delete
    </button>
    {' '}
    {props.todo.title}
  </li>
);

export default TodoItem;
