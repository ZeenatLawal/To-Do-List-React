import React from 'react';
import ReactDOM from 'react-dom';
import './functionBased/App.css';

// component file
import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
