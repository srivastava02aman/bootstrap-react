import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//browser router is used to link the pages and its prevent 
//the pages refresh.
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


