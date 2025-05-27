import React, { useState, useEffect } from 'react';

const Song = ({ song }) => {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    if (song && song.id) {
      fetch('http://localhost:3001/api/view-count', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ songId: song.id }),
        })
        .then(res => res.json())
        .then(data => {
          if (data && typeof data.views === 'number') {
            setViewCount(data.views);
          }
        });
    }
  }, [song]);

  if (!song) return null;

  return (
    <div style={{ textAlign: 'left' }}>
      <h3>{song.title}</h3>
      <p>아티스트: {song.artist}</p>
      <p>앨범: {song.album}</p>
      <p>발매일: {song.releaseDate}</p>
      <p>장르: {song.genre}</p>
      <p>조회수: {viewCount !== null ? viewCount : '로딩 중...'}</p>
      <p>가사:</p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{song.lyrics}</pre>
    </div>
  );
};

export default Song;
