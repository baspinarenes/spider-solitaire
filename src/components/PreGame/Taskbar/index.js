// Libraries
import React, { useContext } from 'react';
// Components | Utils
import { DesktopContext } from '../../../contexts/DesktopContext';
// Assets
import * as Styled from './styles';
import XpStartButton from '../../../assets/images/winxp-start-button.webp';
import SolitaireIcon from '../../../assets/images/solitaire-icon.webp';
import Toolbar from '../Toolbar';

const Taskbar = () => {
  const { isGameRunning } = useContext(DesktopContext);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.Taskbar>
      <Styled.StartButton>
        <img
          src={XpStartButton}
          alt="win xp start"
          height="35"
          width="110"
        />
      </Styled.StartButton>
      <Styled.TaskList>
        {isGameRunning && (
          <Styled.Task>
            <img
              src={SolitaireIcon}
              alt="solitaire icon"
              width="15"
              height="15"
            />
            <span>Spider Solitaire</span>
          </Styled.Task>
        )}
      </Styled.TaskList>
      <Toolbar />
    </Styled.Taskbar>
  );
};

export default Taskbar;
