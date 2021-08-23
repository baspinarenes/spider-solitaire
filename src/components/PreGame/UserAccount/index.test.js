import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import UserAccount from '.';
import { theme } from '../../../globalStyles';
import DesktopContextProvider from '../../../contexts/DesktopContext';
import UserContextProvider from '../../../contexts/UserContext';

describe('UserAccount Components', () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it('should be render', () => {
    const { container } = render(
      <UserContextProvider>
        <DesktopContextProvider>
          <ThemeProvider theme={theme}>
            <UserAccount />
          </ThemeProvider>
        </DesktopContextProvider>
      </UserContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
