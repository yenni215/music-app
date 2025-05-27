import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import songsData from '../data/songsData';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get('query')?.toLowerCase() || '';
  const matchedSongs = songsData.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query) ||
    (song.album && song.album.toLowerCase().includes(query))
  );

  return (
    <div style={{ padding: '100px 40px' }}>
      <h2>검색 결과: "{query}"</h2>
      {matchedSongs.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <ul>
          {matchedSongs.map(song => (
            <li key={song.id} style={{ marginBottom: '12px' }}>
              <Link to={`/song/${song.id}`}>
                <strong>{song.title}</strong> - {song.artist} [{song.album}]
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
