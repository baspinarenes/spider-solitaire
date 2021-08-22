// Libraries
import React, { useContext } from 'react';
// Components | Utils
import { GameContext } from '../../../contexts/GameContext';
import getSounds from '../../../utils/soundUtils';
import { deal, newGame } from '../../../utils/cardUtils';
// Assets
import * as Styled from './styles';

const WindowMenu = () => {
  const {
    cardDecks,
    setCardDecks,
    dealingDecks,
    setDealingDecks,
    setGameStats,
  } = useContext(GameContext);

  const [cannotDealSound, dealSound] = getSounds(
    'cannot-deal',
    'deal'
  );

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleDealClick = () => {
    dealSound.play();
    const [returnCardDecks, returnDealingDecks] = deal(
      cardDecks,
      dealingDecks,
      cannotDealSound
    );
    setCardDecks(returnCardDecks);
    setDealingDecks(returnDealingDecks);
  };

  const handleClickNewGame = () => {
    newGame(setCardDecks, setDealingDecks, setGameStats);
  };

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.Menu>
      <Styled.MenuItem>
        <Styled.MenuButton>Game</Styled.MenuButton>
        <Styled.MenuContent>
          <Styled.SubMenuButton onClick={handleClickNewGame}>
            New Game
          </Styled.SubMenuButton>
        </Styled.MenuContent>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <Styled.MenuButton onClick={handleDealClick}>
          Deal!
        </Styled.MenuButton>
      </Styled.MenuItem>
    </Styled.Menu>
  );
};

export default WindowMenu;
