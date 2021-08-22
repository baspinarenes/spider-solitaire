import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState({
    username: '',
  });

  const [isUserSelected, setIsUserSelected] = useState(false);

  /*
  ====================================================
  ================== USE EFFECT ======================
  ====================================================
  */

  useEffect(() => {
    const sessionStoragedUser = sessionStorage.getItem('user');

    if (
      sessionStoragedUser &&
      sessionStoragedUser.username !== 'Guest'
    ) {
      setUser(JSON.parse(sessionStoragedUser));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <UserContext.Provider
      value={{ user, setUser, isUserSelected, setIsUserSelected }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
