import React, { useEffect, useState } from 'react';
import LatestAlbum from "../components/LatestAlbum";
import PopularChart from "../components/PopularChart";
import Login from "../components/Login";
import { fetchWeather } from "../api/getWeather";
import { Link, useNavigate } from "react-router-dom";
import songsData from "../data/songsData";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getWeather() {
      try {
        const data = await fetchWeather();
        setWeather(data);
      } catch (error) {
        console.error("날씨 정보를 불러오는 데 실패했습니다:", error);
      }
    }
    getWeather();
  }, []);

  const handleRecommendation = () => {
    if (!weather || !weather.weather || !weather.weather[0]) {
      alert("날씨 정보를 가져올 수 없습니다.");
      return;
    }
    const description = weather.weather[0].description;
    alert(`"${description}"에 어울리는 음악을 추천해줄게요!`);

    let genre = "발라드";
    if (description.includes("맑음")) genre = "댄스";
    else if (description.includes("비") || description.includes("소나기")) genre = "발라드";
    else if (description.includes("흐림") || description.includes("구름")) genre = "R&B/Soul";

    const matchedSongs = songsData.filter(song => {
      const genres = song.genre.split(",").map(g => g.trim());
      return genres.includes(genre);
    });

    if (matchedSongs.length === 0) {
      alert(`"${genre}" 장르의 곡을 찾을 수 없습니다.`);
      return;
    }
    const randomSong = matchedSongs[Math.floor(Math.random() * matchedSongs.length)];
    navigate(`/song/${randomSong.id}`);
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        color: '#000',
        minHeight: '100vh',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '96px 0 48px 0',
          display: 'flex',
          gap: '24px',
          width: '100%',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ flex: 1 }}>
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ margin: '48px 0 16px 0', fontSize: '20px' }}>최신앨범 &gt;</h2>
            <LatestAlbum />
          </section>
        </div>

        <div style={{ marginTop: '93px', width: '280px', flexShrink: 0 }}>
          <Login />

          {weather && weather.weather && (
            <div style={{ marginTop: '20px', fontSize: '14px', textAlign: 'center' }}>
              <h4 style={{ marginBottom: '8px' }}> 현재 날씨 </h4>
              <p>{weather.name}</p>
              <p>{weather.weather[0].description}</p>
              <p>{weather.main.temp}°C</p>
              <button
                onClick={handleRecommendation}
                style={{
                  marginTop: '8px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                현재 날씨에 어울리는 음악을 추천해줄게요 !
              </button>
            </div>
          )}

          <section style={{ marginTop: '48px' }}>
            <h2 style={{ margin: '0 0 16px 16px', fontSize: '20px' }}>
              <Link
                to="/popular"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                인기차트 &gt;
              </Link>
            </h2>
            <PopularChart />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
