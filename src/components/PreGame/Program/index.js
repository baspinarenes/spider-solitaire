// Libraries
import React, { useContext } from 'react';
// Components | Utils
import { DesktopContext } from '../../../contexts/DesktopContext';
// Assets
import * as Styled from './styles';
import SolitaireIcon from '../../../assets/images/solitaire-icon.webp';

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

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.Program
      data-cy="spider-solitaire-program"
      onDoubleClick={handleProgramClick}
      onTouchStart={handleProgramClick}
    >
      <img src={SolitaireIcon} alt="" width="40" height="40" />
      <span>Spider Solitaire</span>
    </Styled.Program>
  );
};

export default Program;
