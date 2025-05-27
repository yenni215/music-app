import React from 'react';
import { useParams } from 'react-router-dom';
import songsData from '../data/songsData';

function SongDetail() {
  const { id } = useParams();
  const song = songsData.find((s) => s.id.toString() === id);

  if (!song) {
    return <div style={{ paddingTop: '120px' }}>곡 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ paddingTop: '180px', paddingLeft: '20px' }}>
      <h2>{song.title}</h2>
      <p><strong>아티스트:</strong> {song.artist}</p>
      <p><strong>앨범:</strong> {song.album}</p>
      <p><strong>발매일:</strong> {song.releaseDate}</p>
      <p><strong>장르:</strong> {song.genre}</p>
      <p><strong>가사:</strong></p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{song.lyrics}</pre>
    </div>
  );
}

export default SongDetail;
