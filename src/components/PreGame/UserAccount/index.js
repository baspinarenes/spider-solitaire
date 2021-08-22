import React, { useState, useContext } from 'react';

import AccountImage from '../../../assets/images/account-image.webp';
import * as Styled from './styles';
import { UserContext } from '../../../contexts/UserContext';
import getSounds from '../../../utils/soundUtils';

const UserAccount = (props) => {
  const { isGuest } = props;
  const { user, setUser, setIsUserSelected } =
    useContext(UserContext);
  const [usernameInputText, setUsernameInputText] = useState(
    user.username
  );
  const [openingSound] = getSounds('opening');

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleAccountClick = (e) => {
    e.preventDefault();

    setUser(
      isGuest
        ? { ...user, username: 'Guest' }
        : { ...user, username: usernameInputText }
    );

    setIsUserSelected(true);
    openingSound.play();
  };

  // For the button not to be clicked when I click the input
  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleTextChange = (e) => {
    setUsernameInputText(e.target.value);
  };

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.UserAccount
      $isGuest={isGuest}
      $isUsernameWritten={
        usernameInputText && usernameInputText !== 'Guest'
      }
      onClick={handleAccountClick}
      disabled={
        !isGuest &&
        usernameInputText === 'Guest' &&
        usernameInputText !== ''
      }
    >
      <Styled.Avatar
        src={AccountImage}
        alt="avatar"
        width="60"
        height="60"
      />
      {isGuest ? (
        <span>Guest</span>
      ) : (
        <input
          type="text"
          placeholder="Or write your username"
          value={
            usernameInputText === 'Guest' ? '' : usernameInputText
          }
          onClick={handleInputClick}
          onChange={handleTextChange}
          onKeyDown={(e) =>
            e.key === 'Enter' && handleAccountClick(e)
          }
        />
      )}
    </Styled.UserAccount>
  );
};

export default UserAccount;
