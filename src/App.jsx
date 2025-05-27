import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './pages/Signup';
import PopularChartPage from './pages/PopularChartPage';
import LatestMusic from './pages/LatestMusic';
import GenreMusic from './pages/GenreMusic';
import Playlist from './pages/Playlist';
import AlbumDetail from './components/AlbumDetail';
import SongDetail from './pages/SongDetail';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        color: '#000',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <Header />
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          minHeight: 'calc(100vh - 100px)',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/popular" element={<PopularChartPage />} />
          <Route path="/latest" element={<LatestMusic />} />
          <Route path="/genre" element={<GenreMusic />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/album/:id" element={<AlbumDetail />} />
          <Route path="/song/:id" element={<SongDetail />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
