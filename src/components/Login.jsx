import React, { useState, useEffect } from 'react';

const dummyUsers = [
  { id: 'yeeun', pw: '1111' },
  { id: 'eunjin', pw: '2222' },
  { id: 'hyewon', pw: '3333' },
  { id: 'eunwoo', pw: '4444' },
  { id: 'yeongeun', pw: '5555' },
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      setLoggedInUser(savedUser);
    }
  }, []);

  const handleLogin = () => {
    const match = dummyUsers.find(
      user => user.id === username.trim() && user.pw === password.trim()
    );

    if (match) {
      setLoggedInUser(match.id);
      localStorage.setItem('loggedInUser', match.id);
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  const containerStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '40px',
    backgroundColor: '#f9f9f9',
    color: '#000',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    color: '#000',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  const linkButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
    padding: 0,
    fontSize: '14px',
  };

  if (loggedInUser) {
    return (
      <div style={containerStyle}>
        <h2>{loggedInUser}님</h2>
        <button onClick={handleLogout} style={linkButtonStyle}>
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '20px' }}>로그인</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
      </div>

      <button onClick={handleLogin} style={buttonStyle}>
        로그인
      </button>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => (window.location.href = '/signup')}
          style={linkButtonStyle}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;
