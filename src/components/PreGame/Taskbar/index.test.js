import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Taskbar from '.';
import { theme } from '../../../globalStyles';
import DesktopContextProvider from '../../../contexts/DesktopContext';

describe('Taskbar Components', () => {
  it('should be render', () => {
    const { container } = render(
      <DesktopContextProvider>
        <ThemeProvider theme={theme}>
          <Taskbar />
        </ThemeProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
