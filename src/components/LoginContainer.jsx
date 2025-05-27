import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const LoginContainer = () => {
  const [mode, setMode] = useState('login'); 

  return (
    <div>
      {mode === 'login' ? (
        <Login onSwitch={() => setMode('signup')} />
      ) : (
        <Signup onSwitch={() => setMode('login')} />
      )}
    </div>
  );
};

export default LoginContainer;
