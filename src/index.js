import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/ToDo';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDo from './components/ToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
