// Libraries
import React, { useContext, useEffect } from 'react';
// Components | Utils
import { UserContext } from '../../../contexts/UserContext';
import { newGame } from '../../../utils/cardUtils';
import getSounds from '../../../utils/soundUtils';
// Assets
import * as Styled from './styles';
import { DesktopContext } from '../../../contexts/DesktopContext';

const GameOver = (props) => {
  const { setCardDecks, setDealingDecks, gameStats, setGameStats } =
    props;

  const { setIsGameRunning } = useContext(DesktopContext);
  const { user } = useContext(UserContext);
  const [winSound] = getSounds('win');

  /*
  ====================================================
  ================== USE EFFECT ======================
  ====================================================
  */

  useEffect(() => {
    winSound.play();
  }, []);

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

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

  const handleCloseClick = () => {
    setIsGameRunning(false);
  };

  /*
  ====================================================
  =================== RENDER ========================
  ====================================================
  */

  return (
    <>
      <Styled.WinScreen>
        <span>You Won!</span>
      </Styled.WinScreen>

      <Styled.Window>
        <Styled.TitleBar>
          <span>Game Over</span>
          <Styled.CloseButton onClick={handleCloseClick} />
        </Styled.TitleBar>

        <Styled.WindowBody>
          <p>
            Congratulations {user.username}!
            <br />
            You won with {gameStats?.score} points in{' '}
            {gameStats?.moves} moves.
          </p>
          <p> Do you want to start another game?</p>
          <Styled.YesButton onClick={handleNewGameClick}>
            Yes
          </Styled.YesButton>
        </Styled.WindowBody>
      </Styled.Window>
    </>
  );
};

export default React.memo(GameOver);
