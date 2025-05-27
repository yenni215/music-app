import React, { useState } from 'react';

const Song = ({ song }) => {
  if (!song) return null;

  // 가사 펼침 상태 관리
  const [lyricsOpen, setLyricsOpen] = useState(false);

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
      {/* 곡 기본 정보 */}
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

      {/* 댓글 */}
      <div style={{ marginTop: '16px' }}>
        <strong>댓글:</strong>
        {song.comments && song.comments.length > 0 ? (
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            {song.comments.map((comment, index) => (
              <li key={index} style={{ marginBottom: '6px' }}>
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#888', marginTop: '8px' }}>댓글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Song;
