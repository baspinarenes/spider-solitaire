import React, { useContext } from 'react';
import * as Styled from './styles';
import SolitaireIcon from '../../../assets/images/solitaire-icon.webp';
import WindowMenu from '../WindowMenu';
import { DesktopContext } from '../../../contexts/DesktopContext';

const Window = (props) => {
  const { children, title, isGameOverWindow, size, isGameFinished } =
    props;

  const { setIsGameRunning } = useContext(DesktopContext);

  const handleClose = () => {
    setIsGameRunning(false);
  };

  return (
    <Styled.Window
      size={size}
      isGameOverWindow={isGameOverWindow}
      isGameFinished={isGameFinished}
    >
      <Styled.TitleBar>
        {!isGameOverWindow && (
          <img src={SolitaireIcon} alt="solitaire icon" />
        )}
        <span>{title}</span>
        <Styled.CloseButton onClick={handleClose} />
      </Styled.TitleBar>
      {!isGameOverWindow && <WindowMenu />}

      <Styled.WindowBody>{children}</Styled.WindowBody>
    </Styled.Window>
  );
};

export default Window;
