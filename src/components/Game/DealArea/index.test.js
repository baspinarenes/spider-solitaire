import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import DealArea from '.';
import { theme } from '../../../globalStyles';
import GameContextProvider from '../../../contexts/GameContext';

describe('DealArea Components', () => {
  HTMLMediaElement.prototype.play = jest.fn();

  it('should be render', () => {
    const { container } = render(
      <GameContextProvider>
        <ThemeProvider theme={theme}>
          <DealArea completedDeckCount={2} />
        </ThemeProvider>
      </GameContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
