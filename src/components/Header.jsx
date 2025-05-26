import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import songsData from '../data/songsData';
import './Header.css';

function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    const matchedSongs = songsData.filter(song => {
      const q = query.toLowerCase();
      return (
        song.title.toLowerCase().includes(q) ||
        song.artist.toLowerCase().includes(q) ||
        (song.album && song.album.toLowerCase().includes(q))
      );
    });

    if (matchedSongs.length === 0) {
      alert('검색 결과가 없습니다.');
      return;
    }

    navigate(`/song/${matchedSongs[0].id}`);
    setQuery('');
  };

  return (
    <header
      style={{
        backgroundColor: '#f8f8f8',
        borderBottom: '1px solid #ddd',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 1000,
        color: '#000',
      }}
    >
      <div
        style={{
          padding: '16px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
          }}
        >
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', margin: 0 }}>
            <Link to="/" className="home-link" style={{ color: '#000' }}>
              🎵 Music App
            </Link>
          </h1>

          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            style={{
              padding: '8px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '300px',
              backgroundColor: '#fff',
              color: '#000',
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              padding: '8px 12px',
              fontSize: '14px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            검색
          </button>
        </div>

        <nav
          style={{
            marginTop: '20px',
            display: 'flex',
            gap: '24px',
          }}
        >
          {['인기차트', '최신 음악', '장르음악', '플레이리스트'].map(
            (text, index) => (
              <Link
                key={index}
                to={`/${
                  text === '인기차트'
                    ? 'popular'
                    : text === '최신 음악'
                    ? 'latest'
                    : text === '장르음악'
                    ? 'genre'
                    : 'playlist'
                }`}
                className="menu-link"
                style={{ color: '#000' }}
              >
                {text}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
