import React, { useState } from 'react';
import SolitaireGame from '../SolitaireGame';
import Taskbar from '../../components/Taskbar';
import SolitaireIcon from '../../assets/images/solitaire-icon.webp';
import * as Styled from './styles';
import GameContextProvider from '../../contexts/GameContext';

const DesktopScreen = () => {
  const [isSolitaireActive, setIsSolitaireActive] = useState(false);

  const handleClickProgram = () => {
    setIsSolitaireActive(true);
  };

  return (
    <Styled.Desktop>
      <Styled.ProgramContainer>
        {!isSolitaireActive ? (
          <Styled.ProgramList>
            <Styled.Program
              onDoubleClick={handleClickProgram}
              onTouchStart={handleClickProgram}
            >
              <img
                src={SolitaireIcon}
                alt=""
                width="40"
                height="40"
              />
              <span>Spider Solitaire</span>
            </Styled.Program>
          </Styled.ProgramList>
        ) : (
          <GameContextProvider>
            <SolitaireGame
              setIsSolitaireActive={setIsSolitaireActive}
            />
          </GameContextProvider>
        )}
      </Styled.ProgramContainer>
      <Taskbar isSolitaireActive={isSolitaireActive} />
    </Styled.Desktop>
  );
};

export default DesktopScreen;
