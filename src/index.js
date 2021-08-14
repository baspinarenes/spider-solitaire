import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

console.log(
  "%cHi, I'm Enes. Welcome to my project. You can find more at https://enesbaspinar.me. Oh by the way, feel free to look at my CV :)",
  'background: #222; color: #bada55; padding: 4px;'
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
