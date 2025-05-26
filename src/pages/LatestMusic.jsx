import React from 'react';
import { Link } from 'react-router-dom';
import songsData from '../data/songsData';

function LatestMusic() {
  const sortedSongs = [...songsData].sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );

  // 다크모드 관련 제거, 라이트모드 고정 색상 적용
  const containerStyle = {
    paddingTop: '100px',
    maxWidth: '1400px',
    margin: '0 auto',
    paddingLeft: '25px',
    paddingRight: '10px',
    color: '#000', // 검정색 텍스트
    backgroundColor: '#fff', // 흰색 배경
  };

  const headerStyle = {
    display: 'flex',
    fontWeight: 'bold',
    padding: '10px 0',
    borderBottom: '2px solid #ccc',
    color: 'inherit',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    color: 'inherit',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff', // 파란색 링크
  };

  const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    padding: '4px 8px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h2>최신곡</h2>

      {/* 테이블 헤더 */}
      <div style={headerStyle}>
        <div style={{ width: '40px' }}>NO</div>
        <div style={{ flex: 1 }}>곡제목</div>
        <div style={{ flex: 1 }}>아티스트</div>
        <div style={{ width: '60px', textAlign: 'center' }}>듣기</div>
      </div>

      {/* 곡 목록 */}
      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        {sortedSongs.map((song, index) => (
          <li key={song.id} style={itemStyle}>
            <div style={{ width: '40px' }}>{index + 1}</div>

            <div style={{ flex: 1 }}>
              <Link to={`/song/${song.id}`} style={linkStyle}>
                {song.title}
              </Link>
            </div>

            <div style={{ flex: 1 }}>{song.artist}</div>

            <div style={{ width: '60px', textAlign: 'center' }}>
              <button
                onClick={() =>
                  alert('재생 기능은 저작권 문제로 구현하지 못했습니다.')
                }
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = '#0056b3')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = '#007bff')
                }
              >
                ▶
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestMusic;
