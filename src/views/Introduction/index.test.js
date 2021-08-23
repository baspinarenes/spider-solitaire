import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import DesktopContextProvider from '../../contexts/DesktopContext';
import GameContextProvider from '../../contexts/GameContext';
import { theme } from '../../globalStyles';
import Introduction from '.';

describe('Introduction Screen', () => {
  it('should be render', () => {
    const { container } = render(
      <DesktopContextProvider>
        <GameContextProvider>
          <ThemeProvider theme={theme}>
            <Introduction />
          </ThemeProvider>
        </GameContextProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
