import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import DesktopContextProvider from '../../contexts/DesktopContext';
import GameContextProvider from '../../contexts/GameContext';
import { theme } from '../../globalStyles';
import SolitaireGame from '.';

describe('SolitaireGame Screen', () => {
  it('should be render', () => {
    const { container } = render(
      <DesktopContextProvider>
        <GameContextProvider>
          <ThemeProvider theme={theme}>
            <SolitaireGame />
          </ThemeProvider>
        </GameContextProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
