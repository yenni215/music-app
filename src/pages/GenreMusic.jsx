import React from 'react';
import { Link } from 'react-router-dom';
import songsData from '../data/songsData';

function GenreMusic() {
 
  const songsByGenre = songsData.reduce((acc, song) => {
    const genres = song.genre.split(',').map(g => g.trim());
    genres.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(song);
    });
    return acc;
  }, {});

  return (
    <div style={{ paddingTop: '100px', paddingLeft: '20px', paddingRight: '20px' }}>
      <h2 style={{ marginBottom: '30px' }}>장르별 음악</h2>

      {Object.entries(songsByGenre).map(([genre, songs]) => (
        <div key={genre} style={{ marginBottom: '40px' }}>
          <h3 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px' }}>{genre}</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '10px' }}>
            {songs.map((song) => (
              <li
                key={song.id}
                style={{
                  marginBottom: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: 'black',
                  padding: '4px 0',
                }}
              >
                <Link
                  to={`/song/${song.id}`}
                  style={{ textDecoration: 'none', color: 'black', flex: 1 }}
                >
                  <strong>{song.title}</strong> – {song.artist}
                </Link>

                <button
                  onClick={() =>
                    alert('재생 기능은 저작권 문제로 구현하지 못했습니다.')
                  }
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    padding: '4px 8px',
                    marginLeft: '10px',
                  }}
                >
                  ▶
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GenreMusic;
