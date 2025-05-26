// src/components/Playlist.jsx
import React, { useState } from 'react';
import songsData from '../data/songsData';

const playlists = {
  '운동할 때 듣기 좋은 음악': [1, 5, 9, 12],
  '휴식할 때 듣기 좋은 음악': [2, 4, 8, 13],
  '출퇴근길 플레이리스트': [3, 6, 7, 10]
};

function Playlist() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const songsToShow = selectedPlaylist
    ? songsData.filter(song => playlists[selectedPlaylist].includes(song.id))
    : [];

  // 재생 버튼 클릭 시 알림
  const handlePlay = () => {
    alert('재생 기능은 저작권 문제로 구현하지 못했습니다.');
  };

  return (
    <div style={{ padding: '320px 40px 40px 40px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>플레이리스트</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', gap: '16px' }}>
        {Object.keys(playlists).map((name) => (
          <li key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setSelectedPlaylist(name)}
              style={{
                cursor: 'pointer',
                padding: '8px 16px',
                backgroundColor: selectedPlaylist === name ? '#007bff' : '#eee',
                color: selectedPlaylist === name ? 'white' : 'black',
                border: 'none',
                borderRadius: '4px',
                flexGrow: 1,
                textAlign: 'left'
              }}
            >
              {name}
            </button>
            <button
              onClick={handlePlay}
              style={{
                cursor: 'pointer',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                padding: '4px 8px',
                fontSize: '14px',
                height: '32px'
              }}
              title="재생"
            >
              ▶
            </button>
          </li>
        ))}
      </ul>

      {selectedPlaylist && (
        <div style={{ marginTop: '24px' }}>
          <h3>{selectedPlaylist} 곡 목록</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {songsToShow.map(song => (
              <li key={song.id} style={{ marginBottom: '10px' }}>
                <strong>{song.title}</strong> – {song.artist}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Playlist;
