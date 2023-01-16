import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Hola Dojo!</h1>
    <h2>Things I need to do:</h2>
  <ul>
    <li>Learn react</li>
    <li>Climb Mt. Everest</li>
    <li>Run a marathon</li>
    <li>Feed the dogs</li>
  </ul>
  </div>
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

