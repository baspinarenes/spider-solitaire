import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../globalStyles';
import GameContextProvider from '../../../contexts/GameContext';
import HintContextProvider from '../../../contexts/HintContext';
import { Deck } from './styles';

describe('Deck Components', () => {
  it('should be render', () => {
    const { container } = render(
      <HintContextProvider>
        <GameContextProvider>
          <ThemeProvider theme={theme}>
            <Deck
              deckNo={2}
              deck={{ visibleCardCount: 2, cards: [1, 2] }}
            />
          </ThemeProvider>
        </GameContextProvider>
      </HintContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
