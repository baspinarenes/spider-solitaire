import React from 'react';
import SolitaireIcon from '../../assets/images/solitaire-icon.webp';
import * as Styled from './styles';
import Taskbar from '../../components/Taskbar/index';

const DesktopScreen = () => (
  <Styled.Desktop>
    <Styled.ProgramContainer>
      <Styled.Program>
        <img src={SolitaireIcon} alt="" width="40" height="40" />
        <span>Spider Solitaire</span>
      </Styled.Program>
    </Styled.ProgramContainer>
    <Taskbar />
  </Styled.Desktop>
);

export default DesktopScreen;
