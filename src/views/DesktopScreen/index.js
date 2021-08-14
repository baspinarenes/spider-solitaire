import React, { useState } from 'react';
import SolitaireIcon from '../../assets/images/solitaire-icon.webp';
import * as Styled from './styles';
import Taskbar from '../../components/Taskbar/index';

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
            <Styled.Program onDoubleClick={handleClickProgram}>
              <img
                src={SolitaireIcon}
                alt=""
                width="40"
                height="40"
              />
              <span>Spider Solitaire</span>
            </Styled.Program>
          </Styled.ProgramList>
        ) : null}
      </Styled.ProgramContainer>
      <Taskbar isSolitaireActive={isSolitaireActive} />
    </Styled.Desktop>
  );
};

export default DesktopScreen;
