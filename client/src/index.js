import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { TodoState } from './context/todoContext/todoState';

ReactDOM.render(
  <TodoState>
    <App />
  </TodoState>,
  document.getElementById('root')
);
