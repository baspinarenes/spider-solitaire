import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import WindowMenu from '.';
import { theme } from '../../../globalStyles';
import DesktopContextProvider from '../../../contexts/DesktopContext';
import GameContextProvider from '../../../contexts/GameContext';

describe('WindowMenu Components', () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it('should be render', () => {
    const { container } = render(
      <DesktopContextProvider>
        <GameContextProvider>
          <ThemeProvider theme={theme}>
            <WindowMenu />
          </ThemeProvider>
        </GameContextProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
