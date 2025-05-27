import React, { useState, useEffect } from 'react';

const Song = ({ song }) => {
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    if (song && song.id) {
      fetch('/api/view-count', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ songId: song.id }),
      })
        .then(res => res.json())
        .then(data => {
          if (data && typeof data.viewCount === 'number') {
            setViewCount(data.viewCount);
          }
        });
    }
  }, [song]);

  if (!song) return null;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        backgroundColor: '#fff',
        textAlign: 'left',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0' }}>{song.title}</h3>
      <p style={{ margin: '4px 0' }}>
        <strong>아티스트:</strong> {song.artist}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>앨범:</strong> {song.album}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>발매일:</strong> {song.releaseDate}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>장르:</strong> {song.genre}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>조회수:</strong> {viewCount !== null ? viewCount : '로딩 중...'}
      </p>

      <div style={{ marginTop: '12px' }}>
        <strong>가사:</strong>{' '}
        {lyricsOpen ? (
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              backgroundColor: '#f4f4f4',
              padding: '8px',
              borderRadius: '4px',
              maxHeight: '200px',
              overflowY: 'auto',
            }}
          >
            {song.lyrics}
          </pre>
        ) : (
          <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => setLyricsOpen(true)}>
            가사 보기
          </span>
        )}
        {lyricsOpen && (
          <button
            onClick={() => setLyricsOpen(false)}
            style={{
              marginTop: '6px',
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              padding: 0,
              fontSize: '14px',
            }}
          >
            접기
          </button>
        )}
      </div>
    </div>
  );
};

export default Song;
