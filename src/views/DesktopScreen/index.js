import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

// Burada LocalStorage vs bir şey yapmalıyım.

const DesktopScreen = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div id="desktop-screen">
      <p>{user?.username}</p>
    </div>
  );
};

export default DesktopScreen;
