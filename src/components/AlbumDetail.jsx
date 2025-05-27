import React from 'react';
import { useParams } from 'react-router-dom';

const albumData = [
  {
    id: 1,
    title: 'Poet | Artist',
    artist: 'SHINee (샤이니)',
    releaseDate: '2025-05-25',
    genre: '댄스',
    publisher: '카카오엔터테인먼트',
    tracks: ['Poet | Artist', 'Starlight'],
    image: '/images/Poet | Artist.jpg',
  },
  {
    id: 2,
    title: 'CORPUS 0',
    artist: '데이먼스 이어(Damons year)',
    releaseDate: '2025-05-25',
    genre: '인디음악, 록/메탈, R&B/Soul, 발라드',
    publisher: '워너뮤직/ADA',
    tracks: [
      '+', '504 Gateway Timeout', 'Gertha Loew', '죽지 않은 연인에게', '태엽감기',
      '물 속의 6월', 'CORPUS 0', '희망의 빛', 'Erebia', '죽은 연인에게', '섬망', 'Telepathy', '-'
    ],
    image: '/images/CORPUS 0.jpg',
  },
  {
    id: 3,
    title: 'fault',
    artist: 'matt matt',
    releaseDate: '2025-05-25',
    genre: 'R&B/Soul',
    publisher: 'YG PLUS',
    tracks: ['fault'],
    image: '/images/fault.jpg',
  },
  {
    id: 4,
    title: '우리 둘의 바다',
    artist: '서도밴드 (sEODo BAND)',
    releaseDate: '2025-05-25',
    genre: '록/메탈',
    publisher: '지니뮤직, Stone Music Entertainment',
    tracks: ['우리 둘의 바다'],
    image: '/images/우리 둘의 바다.jpg',
  },
  {
    id: 5,
    title: 'Blue Rain',
    artist: '옥주현',
    releaseDate: '2025-05-25',
    genre: '발라드',
    publisher: '카카오엔터테인먼트',
    tracks: ['Blue Rain', 'Blue Rain (Inst.)'],
    image: '/images/Blue Rain.jpg',
  },
  {
    id: 6,
    title: 'Right Away',
    artist: 'Sphaze(스페이즈)',
    releaseDate: '2025-05-25',
    genre: 'R&B/Soul, 댄스',
    publisher: 'YG PLUS',
    tracks: ['Right Away', 'Starlight(2025)', 'Cloud 9(2025)'],
    image: '/images/Right Away.jpg',
  },
];

function AlbumDetail() {
  const { id } = useParams();
  const album = albumData.find((a) => a.id === parseInt(id));

  if (!album) {
    return <div>앨범 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div
      style={{
        padding: '34px',
        boxSizing: 'border-box',
        textAlign: 'left',
        marginTop: '140px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'flex-start',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={album.image}
          alt={album.title}
          style={{
            width: '340px',
            height: '340px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 0 8px rgba(0,0,0,0.1)',
            flexShrink: 0,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '34px', marginBottom: '20px' }}>{album.title}</h2>
          <p><strong>아티스트:</strong> {album.artist}</p>
          <p><strong>발매일:</strong> {album.releaseDate}</p>
          <p><strong>장르:</strong> {album.genre}</p>
          <p><strong>발매사:</strong> {album.publisher}</p>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>수록곡</h3>
        <ul style={{ paddingLeft: '20px' }}>
          {album.tracks.map((track, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              {track}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlbumDetail;
