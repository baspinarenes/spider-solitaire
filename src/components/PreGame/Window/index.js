// Libraries
import React, { useContext } from 'react';
// Components | Utils
import { DesktopContext } from '../../../contexts/DesktopContext';
import WindowMenu from '../WindowMenu';
// Assets
import * as Styled from './styles';
import SolitaireIcon from '../../../assets/images/solitaire-icon.webp';

const Window = (props) => {
  const { children, title } = props;

  const { setIsGameRunning } = useContext(DesktopContext);

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleCloseClick = () => {
    setIsGameRunning(false);
  };

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.Window>
      <Styled.TitleBar>
        <img src={SolitaireIcon} alt="solitaire icon" />
        <span>{title}</span>
        <Styled.CloseButton onClick={handleCloseClick} />
      </Styled.TitleBar>
      <WindowMenu />
      <Styled.WindowBody>{children}</Styled.WindowBody>
    </Styled.Window>
  );
};

export default Window;
