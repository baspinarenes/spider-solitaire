import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Window from '.';
import { theme } from '../../../globalStyles';
import DesktopContextProvider from '../../../contexts/DesktopContext';
import GameContextProvider from '../../../contexts/GameContext';

describe('Window Components', () => {
  it('should be render', () => {
    const { container } = render(
      <DesktopContextProvider>
        <GameContextProvider>
          <ThemeProvider theme={theme}>
            <Window />
          </ThemeProvider>
        </GameContextProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
