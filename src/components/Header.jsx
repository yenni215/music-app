import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header style={{
      backgroundColor: '#f8f8f8',
      borderBottom: '1px solid #ddd',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      boxSizing: 'border-box',
      zIndex: 1000
    }}>
      <div style={{
        padding: '16px 48px', // 중앙정렬 제거 → 좌우 여백만 유지
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          width: '100%'
        }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', margin: 0 }}>
            <Link to="/" className="home-link">
              🎵 Music App
            </Link>
          </h1>

          <input
            type="text"
            placeholder="검색어를 입력하세요"
            style={{
              padding: '8px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '300px'
            }}
          />

          <button style={{
            padding: '8px 12px',
            fontSize: '14px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            검색
          </button>
        </div>

        <nav style={{
          marginTop: '20px',
          display: 'flex',
          gap: '24px'
        }}>
          {["인기차트", "최신 음악", "장르음악", "플레이리스트"].map((text, index) => (
            <Link
              key={index}
              to={`/${text === "인기차트" ? "popular" :
                        text === "최신 음악" ? "latest" :
                        text === "장르음악" ? "genre" :
                        "playlist"}`}
              className="menu-link"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
