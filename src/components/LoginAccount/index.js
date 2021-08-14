import React, { useState, useContext } from 'react';
import useSound from 'use-sound';
import AccountImage from '../../assets/images/account-image.webp';
import * as Styled from './styles';
import OpeningMusic from '../../assets/audios/opening.ogg';
import { UserContext } from '../../contexts/UserContext';

const LoginAccount = ({ isGuest, setIsLoggedIn }) => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  const [play] = useSound(OpeningMusic, { volume: 0.15 });
  const handleAccountClick = (e) => {
    e.preventDefault();

    if (isGuest) {
      setUser({
        ...user,
        username: 'Guest',
      });
      setIsLoggedIn(true);
      play();
    } else if (username) {
      setUser({
        ...user,
        username,
      });
      play();
      setIsLoggedIn(true);
    }
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleTextChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Styled.LoginAccountButton
      $isGuest={isGuest}
      $isUsernameWritten={username}
      onClick={handleAccountClick}
    >
      <Styled.AccountAvatar src={AccountImage} alt="" />
      {isGuest ? (
        <span>Guest</span>
      ) : (
        <input
          type="text"
          placeholder="Or write your username"
          value={username}
          onClick={handleInputClick}
          onChange={handleTextChange}
          onKeyDown={(e) =>
            e.key === 'Enter' && handleAccountClick(e)
          }
        />
      )}
    </Styled.LoginAccountButton>
  );
};

export default LoginAccount;
