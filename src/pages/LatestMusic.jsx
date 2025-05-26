import React from 'react';
import { Link } from 'react-router-dom';
import songsData from '../data/songsData';

function LatestMusic() {
  return (
    <div style={{ paddingTop: '1px', maxWidth: '1400px',   // 기존보다 더 넓게
    margin: '0 auto',     // 중앙 정렬 유지
    paddingLeft: '10px',  // 좌우 여백 조절
    paddingRight: '10px', }}>
      <h2>최신곡</h2>

      {/* 테이블 헤더 */}
      <div
        style={{
          display: 'flex',
          fontWeight: 'bold',
          padding: '10px 0',
          borderBottom: '2px solid #ccc',
          color: 'black',
        }}
      >
        <div style={{ width: '40px' }}>NO</div>
        <div style={{ flex: 1 }}>곡제목</div>
        <div style={{ flex: 1 }}>아티스트</div>
        <div style={{ width: '60px', textAlign: 'center' }}>듣기</div>
      </div>

      {/* 곡 목록 */}
      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        {songsData.map((song, index) => (
          <li
            key={song.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
              color: 'black',
            }}
          >
            {/* NO */}
            <div style={{ width: '40px' }}>{index + 1}</div>

            {/* 곡제목 (링크로 검정색) */}
            <div style={{ flex: 1 }}>
              <Link
                to={`/songs/${song.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {song.title}
              </Link>
            </div>

            {/* 아티스트 */}
            <div style={{ flex: 1 }}>{song.artist}</div>

            {/* 듣기 버튼 (간단한 아이콘 형태) */}
            <div style={{ width: '60px', textAlign: 'center' }}>
              <button
                onClick={() => alert(`"${song.title}" 재생 기능은 아직 구현되지 않았습니다.`)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#007bff',
                  border: 'none',
                  borderRadius: '4px',
                  color: 'white',
                  padding: '4px 8px',
                }}
              >
                ▶
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestMusic;
