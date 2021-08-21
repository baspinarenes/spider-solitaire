import React, { useState, useEffect } from 'react';
import XpStartButton from '../../assets/images/winxp-start-button.webp';
import MsnIcon from '../../assets/images/msn-icon.webp';
import SolitaireIcon from '../../assets/images/solitaire-icon.webp';
import * as Styled from './styles';
import getTimeAsAMPM from '../../utils/dateUtils';

const Taskbar = (props) => {
  const { isSolitaireActive } = props;
  const [time, setTime] = useState(getTimeAsAMPM());

  useEffect(() => {
    setInterval(() => setTime(getTimeAsAMPM()), 30000);
  }, []);

  return (
    <Styled.Taskbar>
      <button type="button">
        <img
          src={XpStartButton}
          alt="win xp start"
          height="35"
          width="110"
        />
      </button>
      <Styled.TaskList>
        {isSolitaireActive && (
          <Styled.Task type="button">
            <img src={SolitaireIcon} alt="" width="15" height="15" />
            <span>Spider Solitaire</span>
          </Styled.Task>
        )}
      </Styled.TaskList>
      <Styled.Toolbar>
        <img src={MsnIcon} alt="" width="32" />
        <span>{time}</span>
      </Styled.Toolbar>
    </Styled.Taskbar>
  );
};

export default Taskbar;
