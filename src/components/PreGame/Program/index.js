// Libraries
import React, { useContext } from 'react';
// Assets
import * as Styled from './styles';
import SolitaireIcon from '../../../assets/images/solitaire-icon.webp';
import { DesktopContext } from '../../../contexts/DesktopContext';

const Program = () => {
  const { setIsGameRunning } = useContext(DesktopContext);

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleProgramClick = () => {
    setIsGameRunning(true);
  };

  return (
    <Styled.Program
      onDoubleClick={handleProgramClick}
      onTouchStart={handleProgramClick}
    >
      <img src={SolitaireIcon} alt="" width="40" height="40" />
      <span>Spider Solitaire</span>
    </Styled.Program>
  );
};

export default Program;
