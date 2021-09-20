import React from 'react';
import ReactDOM from 'react-dom';
import './functionBased/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// component file
import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
