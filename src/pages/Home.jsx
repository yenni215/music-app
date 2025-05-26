// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import LatestAlbum from "../components/LatestAlbum";
import PopularChart from "../components/PopularChart";
import Login from "../components/Login";
import { fetchWeather } from "../api/getWeather"; // 날씨 API 함수 임포트

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const data = await fetchWeather(); // 기본: 서울
      setWeather(data);
    }
    getWeather();
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '0 24px' }}>
      {/* 본문 콘텐츠 */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '96px 0 48px 0',
          display: 'flex',
          gap: '24px',
          width: '100%',
        }}
      >
        {/* 왼쪽 본문 영역 */}
        <div style={{ flex: 1 }}>
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ margin: '48px 0 16px 0', fontSize: '20px' }}>최신앨범 &gt;</h2>
            <LatestAlbum />
          </section>

          <section>
            <h2 style={{ margin: '0 0 16px 0', fontSize: '20px' }}>인기차트 &gt;</h2>
            <PopularChart />
          </section>
        </div>

        {/* 오른쪽 로그인 + 날씨 박스 */}
        <div style={{ width: '280px', flexShrink: 0, marginTop: '93px', padding: '2px', }}>
          <Login />

          {/* 날씨 박스 */}
          {weather && (
            <div style={{
              marginTop: '20px',
              fontSize: '14px',
              textAlign: 'center'  // 👉 글씨 가운데 정렬
            }}>
              <h4 style={{ marginBottom: '8px' }}>☁️ 현재 날씨 ☁️</h4>
              <p>{weather.name}</p>
              <p>{weather.weather[0].description}</p>
              <p>{weather.main.temp}°C</p>
              <button
                onClick={() => {
                  alert(`"${weather.weather[0].description}"에 어울리는 음악을 추천해줄게요!`);
                }}
                style={{
                  marginTop: '8px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  display: 'block',       // ✅ 버튼을 블록 요소로
                  marginLeft: 'auto',     // ✅ 수평 가운데 정렬
                  marginRight: 'auto'
                }}
              >
                현재 날씨와 어울리는 곡 추천
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
