import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Toolbar from '.';
import { theme } from '../../../globalStyles';
import DesktopContextProvider from '../../../contexts/DesktopContext';

describe('Toolbar Components', () => {
  it('should be render', () => {
    const { container } = render(
      <DesktopContextProvider>
        <ThemeProvider theme={theme}>
          <Toolbar />
        </ThemeProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
