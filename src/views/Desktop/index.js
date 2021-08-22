// Libraries
import React, { useContext } from 'react';
// Components | Utils
import GameContextProvider from '../../contexts/GameContext';
import { DesktopContext } from '../../contexts/DesktopContext';
import SolitaireGame from '../SolitaireGame';
import Taskbar from '../../components/PreGame/Taskbar';
// Assets
import * as Styled from './styles';
import Program from '../../components/PreGame/Program/index';

const Desktop = () => {
  const { isGameRunning } = useContext(DesktopContext);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.Desktop>
      <Styled.ProgramContainer>
        {!isGameRunning ? (
          <Styled.ProgramList>
            <Program />
          </Styled.ProgramList>
        ) : (
          <GameContextProvider>
            <SolitaireGame />
          </GameContextProvider>
        )}
      </Styled.ProgramContainer>
      <Taskbar />
    </Styled.Desktop>
  );
};

export default Desktop;
