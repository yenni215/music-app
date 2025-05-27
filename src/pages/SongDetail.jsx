import React from 'react';
import { useParams } from 'react-router-dom';
import songsData from '../data/songsData';
import Song from '../components/Song'; 

function SongDetail() {
  const { id } = useParams();
  const song = songsData.find((s) => s.id.toString() === id);

  if (!song) {
    return <div style={{ paddingTop: '120px' }}>곡 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ paddingTop: '180px', paddingLeft: '20px' }}>
      <Song song={song} /> 
    </div>
  );
}

export default SongDetail;
