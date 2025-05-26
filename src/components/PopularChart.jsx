// src/components/PopularChart.jsx
import React from 'react';

function PopularChart() {
  // 임시 데이터
  const popularSongs = [
    { id: 1, title: '밤양갱', artist: '비비' },
    { id: 2, title: 'Perfect Night', artist: 'LE SSERAFIM' },
    { id: 3, title: 'Love Lee', artist: 'AKMU' },
  ];

  return (
    <div>
      <ul>
        {popularSongs.map((song) => (
          <li key={song.id} style={{ marginBottom: '10px' }}>
            <strong>{song.title}</strong> - {song.artist}
            <button style={{ marginLeft: '10px' }}>▶️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularChart;
