// Libraries
import React, { useContext } from 'react';
// Components | Utils
import { UserContext } from '../../../contexts/UserContext';
import Window from '../../PreGame/Window';
import { newGame } from '../../../utils/cardUtils';
import getSounds from '../../../utils/soundUtils';
// Assets
import * as Styled from './styles';

const GameOver = (props) => {
  const { setCardDecks, setDealingDecks, gameStats, setGameStats } =
    props;
  const { user } = useContext(UserContext);
  const [winSound] = getSounds('win');

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  let isGameFinished = false;

  const handleNewGameClick = () => {
    isGameFinished = false;
    const [cDecks, dDecks] = newGame();
    setCardDecks(cDecks);
    setDealingDecks(dDecks);
    setGameStats({
      completedDeckCount: 0,
      score: 500,
      moves: 0,
    });
  };

  if (gameStats.completedDeckCount === 8) {
    winSound.play();
    isGameFinished = true;
  }

  /*
  ====================================================
  =================== RENDER ========================
  ====================================================
  */

  return (
    <>
      <Styled.WinScreen isGameFinished={isGameFinished}>
        <span>You Won!</span>
      </Styled.WinScreen>
      <Window
        title="Game Over"
        isGameOverWindow
        size={{ height: '140px', width: '320px' }}
        isGameFinished={isGameFinished}
      >
        <Styled.WindowContent>
          <p>
            Congratulations {user.username},<br /> you won with{' '}
            {gameStats.score} points in {gameStats.moves} moves!
          </p>
          <p> Do you want to start another game?</p>
          <button type="button" onClick={handleNewGameClick}>
            Yes
          </button>
        </Styled.WindowContent>
      </Window>
    </>
  );
};

export default React.memo(GameOver);
