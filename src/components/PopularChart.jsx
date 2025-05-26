import React from 'react';
import songsData from '../data/songsData';

function PopularChart() {
  // id 10, 12, 13번 곡만 선별
  const popularSongs = songsData.filter(song =>
    [10, 12, 13].includes(song.id)
  );

  return (
    <div>
      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        {popularSongs.map((song, index) => (
          <li
            key={song.id}
            style={{
              marginBottom: '10px',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                marginRight: '8px',
                minWidth: '20px',
                color: 'black',
              }}
            >
              {index + 1}.
            </span>
            <strong style={{ flexGrow: 1 }}>{song.title}</strong> – {song.artist}
            <div style={{ width: '70px', textAlign: 'center', marginLeft: '10px' }}>
              <button
                onClick={() =>
                  alert('재생 기능은 저작권 문제로 구현하지 못했습니다.')
                }
                style={{
                  cursor: 'pointer',
                  border: 'none',
                  borderRadius: '4px',
                  color: 'white',
                  padding: '4px 8px',
                  backgroundColor: '#007bff',
                }}
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

export default PopularChart;
