import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Login from '.';
import { theme } from '../../../globalStyles';
import UserContextProvider from '../../../contexts/UserContext';

describe('Login Components', () => {
  it('should be render', () => {
    HTMLMediaElement.prototype.play = jest.fn();

    const { container } = render(
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          <Login />
        </ThemeProvider>
      </UserContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
