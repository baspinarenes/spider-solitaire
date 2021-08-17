import React, { useContext } from 'react';
import useSound from 'use-sound';
import * as Styled from './styles';
import { GameContext } from '../../contexts/GameContext';
import { deal, newGame } from '../../utils/cardUtils';
import DealCardsSound from '../../assets/audios/deal-cards.ogg';

const WindowMenu = () => {
  const {
    cardDecks,
    setCardDecks,
    dealingDecks,
    setDealingDecks,
    setGameStats,
  } = useContext(GameContext);

  const [playDealCardsSound] = useSound(DealCardsSound, {
    volume: 1,
  });

  const handleDealClick = () => {
    playDealCardsSound();
    const [returnCardDecks, returnDealingDecks] = deal(
      cardDecks,
      dealingDecks
    );
    setCardDecks(returnCardDecks);
    setDealingDecks(returnDealingDecks);
  };

  const handleClickNewGame = () => {
    newGame(setCardDecks, setDealingDecks, setGameStats);
  };

  return (
    <Styled.Menu>
      <Styled.MenuItem>
        <Styled.MenuButton>Game</Styled.MenuButton>
        <Styled.MenuContent>
          <Styled.SubMenuButton onClick={handleClickNewGame}>
            New Game
          </Styled.SubMenuButton>
          <Styled.SubMenuButton>Statistics</Styled.SubMenuButton>
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
