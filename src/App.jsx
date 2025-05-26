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
import SongDetail from './pages/SongDetail'; // 곡 상세 페이지 추가

function App() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* 헤더 영역 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Header />
      </div>

      {/* 페이지 콘텐츠 영역 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/popular" element={<PopularChartPage />} />
          <Route path="/latest" element={<LatestMusic />} />
          <Route path="/genre" element={<GenreMusic />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/album/:id" element={<AlbumDetail />} />
          <Route path="/songs/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
