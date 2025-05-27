import React from 'react';
import { useNavigate } from 'react-router-dom';

const albums = [
  { id: 1, title: 'Poet | Artist', image: './public/images/Poet | Artist.jpg' },
  { id: 2, title: 'CORPUS 0', image: './public/images/CORPUS 0.jpg' },
  { id: 3, title: 'fault', image: './public/images/fault.jpg' },
  { id: 4, title: '우리 둘의 바다', image: './public/images/oueSea.jpg' },
  { id: 5, title: 'Blue Rain', image: './public/images/Blue Rain.jpg' },
  { id: 6, title: 'Right Away', image: './public/images/Right Away.jpg' }
];

function LatestAlbum() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/album/${id}`);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }}
    >
      {albums.map(album => (
        <div
          key={album.id}
          onClick={() => handleClick(album.id)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '30px',
            cursor: 'pointer',
            backgroundColor: '#fff', 
            color: '#000' 
          }}
        >
          <img
            src={album.image}
            alt={album.title}
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '32px'
            }}
          />
          <p style={{ fontSize: '15px', fontWeight: '500' }}>{album.title}</p>
        </div>
      ))}
    </div>
  );
}

export default LatestAlbum;
