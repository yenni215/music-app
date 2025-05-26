import React from 'react';
import { Link } from 'react-router-dom';
import songsData from '../data/songsData';

function PopularChartPage() {
  const popularOrder = [10, 12, 13, 14, 17, 18, 19, 20, 21, 11];
  const popularSongs = popularOrder
    .map(id => songsData.find(song => song.id === id))
    .filter(Boolean);

  const containerStyle = {
    paddingTop: '100px',
    maxWidth: '1400px',
    margin: '0 auto',
    paddingLeft: '25px',
    paddingRight: '10px',
    backgroundColor: '#ffffff',
    color: '#000000',
    minHeight: '100vh',
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
    color: '#007bff',
    fontWeight: '500',
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
      <h2>인기차트 Top 10</h2>

      <div style={headerStyle}>
        <div style={{ width: '40px' }}>순위</div>
        <div style={{ flex: 1 }}>곡제목</div>
        <div style={{ flex: 1 }}>아티스트</div>
        <div style={{ width: '60px', textAlign: 'center' }}>듣기</div>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        {popularSongs.map((song, index) => (
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
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
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

export default PopularChartPage;
