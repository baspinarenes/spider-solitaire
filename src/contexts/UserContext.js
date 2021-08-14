import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState({
    username: '',
  });

  useEffect(() => {
    const sessionStoragedUser = sessionStorage.getItem('user');

    if (sessionStoragedUser) {
      setUser(JSON.parse(sessionStoragedUser));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
