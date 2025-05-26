import React, { useState, useEffect } from 'react';

// 더미 사용자 데이터
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

  // ✅ 컴포넌트가 처음 렌더링 될 때 localStorage에서 로그인 정보 불러오기
  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      setLoggedInUser(savedUser);
    }
  }, []);

  // ✅ 로그인 처리
  const handleLogin = () => {
    const match = dummyUsers.find(
      user => user.id === username.trim() && user.pw === password.trim()
    );

    if (match) {
      setLoggedInUser(match.id);
      localStorage.setItem('loggedInUser', match.id); // localStorage에 저장
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  // ✅ 로그아웃 처리
  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser'); // localStorage에서 삭제
  };

  // ✅ 로그인 후 화면
  if (loggedInUser) {
    return (
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '300px',
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
          margin: '0 auto',
          marginBottom: '40px',
        }}
      >
        <h2>{loggedInUser}님</h2>
        <button
          onClick={handleLogout}
          style={{
            background: 'none',
            border: 'none',
            color: '#007bff',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            fontSize: '14px',
          }}
        >
          로그아웃
        </button>
      </div>
    );
  }

  // ✅ 로그인 폼
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '300px',
        backgroundColor: '#f9f9f9',
        margin: '0 auto',
        marginBottom: '40px',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>로그인</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <button
        onClick={handleLogin}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
      >
        로그인
      </button>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = '/signup'}
          style={{
            background: 'none',
            border: 'none',
            color: '#007bff',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            fontSize: '14px',
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;
