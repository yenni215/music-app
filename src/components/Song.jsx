import React from 'react';

const Song = ({ song }) => {
  if (!song) return null;

  return (
    <div style={{ textAlign: 'left' }}>
      <h3>{song.title}</h3>
      <h2>곡 상세 정보</h2>
      <p>아티스트: {song.artist}</p>
      <p>앨범: {song.album}</p>
      <p>발매일: {song.releaseDate}</p>
      <p>장르: {song.genre}</p>
      <p>가사:</p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{song.lyrics}</pre>
    </div>
  );
};

export default Song;
