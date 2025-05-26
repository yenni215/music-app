import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '', confirm: '' });

  // 입력값 변경 처리
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 회원가입 버튼 클릭 시
  const handleSignup = (e) => {
    e.preventDefault();

    const { username, password, confirm } = form;

    // 중복 아이디 체크
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isDuplicate = users.some((user) => user.username === username);
    if (isDuplicate) {
      alert('이미 존재하는 아이디입니다.');
      return;
    }

    // 비밀번호 확인
    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 회원 정보 localStorage에 저장
    const newUser = { username, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    alert('회원가입 완료!');
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '20px' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          name="confirm"
          placeholder="비밀번호 확인"
          value={form.confirm}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          회원가입
        </button>
      </form>
      <p style={{ marginTop: '10px' }}>
        이미 계정이 있으신가요?{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          로그인
        </span>
      </p>
    </div>
  );
}

export default Signup;
