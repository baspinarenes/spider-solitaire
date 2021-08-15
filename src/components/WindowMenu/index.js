import React from 'react';
import * as Styled from './styles';

const WindowMenu = () => {
  return (
    <Styled.Menu>
      <Styled.MenuItem>
        <Styled.MenuButton>Game</Styled.MenuButton>
        <Styled.MenuContent>
          <Styled.SubMenuButton>New Game</Styled.SubMenuButton>
          <Styled.SubMenuButton>Statistics</Styled.SubMenuButton>
        </Styled.MenuContent>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <Styled.MenuButton>Deal!</Styled.MenuButton>
      </Styled.MenuItem>
    </Styled.Menu>
  );
};

export default WindowMenu;
