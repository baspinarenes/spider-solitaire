// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// Components | Utils
import UserContextProvider from './contexts/UserContext';
import App from './App';
// Assets
import './index.scss';
import { theme } from './globalStyles';

/* eslint-disable no-console */
console.log(
  "%cHi, I'm Enes. Welcome to my project. You can find more at https://enesbaspinar.me. Oh by the way, feel free to look at my CV :)",
  'background: #222; color: #bada55; padding: 4px;'
);
/* eslint-enable no-console */

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
