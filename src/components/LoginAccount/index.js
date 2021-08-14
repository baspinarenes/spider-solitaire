import React, { useRef } from 'react';
import useSound from 'use-sound';
import AccountImage from '../../assets/images/login-icon.webp';
import * as S from './styles';
import OpeningMusic from '../../assets/audios/opening.ogg';

const LoginAccount = ({ guest, setUsername }) => {
  const inputEl = useRef(null);
  const [play] = useSound(OpeningMusic);

  const handleAccountClick = (e) => {
    e.preventDefault();

    if (e.currentTarget.name === 'guest') {
      setUsername('Guest');
      play();
    } else if (inputEl.current.value) {
      setUsername(inputEl.current.value);
      play();
    }
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <S.LoginAccountButton name={guest ? 'guest' : ''} onClick={handleAccountClick}>
      <S.AccountAvatar src={AccountImage} alt="" />
      {guest ? (
        <span>Guest</span>
      ) : (
        <input
          type="text"
          placeholder="Or write your username"
          ref={inputEl}
          onClick={handleInputClick}
        />
      )}
    </S.LoginAccountButton>
  );
};

export default LoginAccount;
