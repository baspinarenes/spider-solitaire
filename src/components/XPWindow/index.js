import React from 'react';
import * as Styled from './styles';
import SolitaireIcon from '../../assets/images/solitaire-icon.webp';
import WindowMenu from '../WindowMenu';

const XPWindow = (props) => {
  const { children, setIsSolitaireActive } = props;

  const handleClose = () => {
    setIsSolitaireActive(false);
  };

  return (
    <Styled.Window>
      <Styled.TitleBar>
        <img src={SolitaireIcon} alt="" />
        <span>Spider Solitaire</span>
        <Styled.CloseButton onClick={handleClose} />
      </Styled.TitleBar>
      <WindowMenu />

      <Styled.WindowBody>{children}</Styled.WindowBody>
    </Styled.Window>
  );
};

export default XPWindow;
