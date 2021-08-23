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
    const [returnedCardDecks, returnDealingDecks] = deal(
      cardDecks,
      dealingDecks,
      cannotDealSound
    );
    setCardDecks(returnedCardDecks);
    setDealingDecks(returnDealingDecks);
  };

  const handleNewGameClick = () => {
    const [cDecks, dDecks] = newGame();
    setCardDecks(cDecks);
    setDealingDecks(dDecks);
    setGameStats({
      completedDeckCount: 0,
      score: 500,
      moves: 0,
    });
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
          <Styled.SubMenuButton onClick={handleNewGameClick}>
            New Game
          </Styled.SubMenuButton>
        </Styled.MenuContent>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <Styled.MenuButton
          onClick={handleDealClick}
          disabled={dealingDecks.length === 0}
        >
          Deal!
        </Styled.MenuButton>
      </Styled.MenuItem>
    </Styled.Menu>
  );
};

export default WindowMenu;
