import React, { useState } from 'react';
import Toolbar from './Toolbar';

function LandingPage(props) {
  const [isLoogedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoogedIn={isLoogedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      ></Toolbar>
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
}

export default LandingPage;
