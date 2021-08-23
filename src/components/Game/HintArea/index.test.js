import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import DraggingContextProvider from '../../../contexts/DraggingContext';
import { theme } from '../../../globalStyles';
import GameContextProvider from '../../../contexts/GameContext';
import HintArea from '.';
import HintContextProvider from '../../../contexts/HintContext';
import UserContextProvider from '../../../contexts/UserContext';
import DesktopContextProvider from '../../../contexts/DesktopContext';

describe('HintArea Components', () => {
  it('should be render', () => {
    HTMLMediaElement.prototype.play = jest.fn();

    const { container } = render(
      <DesktopContextProvider>
        <GameContextProvider>
          <HintContextProvider>
            <UserContextProvider>
              <DraggingContextProvider>
                <ThemeProvider theme={theme}>
                  <HintArea />
                </ThemeProvider>
              </DraggingContextProvider>
            </UserContextProvider>
          </HintContextProvider>
        </GameContextProvider>
      </DesktopContextProvider>
    );

    expect(container.innerHTML).not.toEqual('');
  });
});
