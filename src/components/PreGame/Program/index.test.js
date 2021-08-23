import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Program from '.';
import { theme } from '../../../globalStyles';
import UserContextProvider from '../../../contexts/UserContext';
import DesktopContextProvider from '../../../contexts/DesktopContext';

describe('Program Components', () => {
  it('should be render', () => {
    const { container } = render(
      <DesktopContextProvider>
        <UserContextProvider>
          <ThemeProvider theme={theme}>
            <Program />
          </ThemeProvider>
        </UserContextProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
