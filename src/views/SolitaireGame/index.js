// Libraries
import React, { useContext } from 'react';
// Components | Utils
import HintContextProvider from '../../contexts/HintContext';
import DraggingContextProvider from '../../contexts/DraggingContext';
import { GameContext } from '../../contexts/GameContext';
import Window from '../../components/PreGame/Window';
import GameOver from '../../components/Game/GameOver';
import DeckArea from '../../components/Game/DeckArea';
import CompletedDeckArea from '../../components/Game/CompletedArea';
import HintArea from '../../components/Game/HintArea';
import DealArea from '../../components/Game/DealArea';
// Assets
import * as Styled from './styles';

const SolitaireGame = () => {
  const {
    setDealingDecks,
    cardDecks,
    setCardDecks,
    gameStats,
    setGameStats,
  } = useContext(GameContext);

  /*
  ====================================================
  =================== RENDER ========================
  ====================================================
  */

  return (
    <DraggingContextProvider>
      <HintContextProvider>
        <Window title="Spider Solitaire">
          <Styled.Board>
            <DeckArea cardDecks={cardDecks} />
            <Styled.BottomArea>
              <CompletedDeckArea
                completedDeckCount={gameStats.completedDeckCount}
              />
              <HintArea
                cardDecks={cardDecks}
                gameStats={gameStats}
                setGameStats={setGameStats}
              />
              <DealArea
                setCardDecks={setCardDecks}
                cardDecks={cardDecks}
              />
            </Styled.BottomArea>
            {gameStats.completedDeckCount === 8 && (
              <GameOver
                setCardDecks={setCardDecks}
                setDealingDecks={setDealingDecks}
                gameStats={gameStats}
                setGameStats={setGameStats}
              />
            )}
          </Styled.Board>
        </Window>
      </HintContextProvider>
    </DraggingContextProvider>
  );
};

export default SolitaireGame;
