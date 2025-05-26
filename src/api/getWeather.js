// src/api/getWeather.js
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city = 'Seoul') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('날씨 정보를 불러올 수 없습니다.');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('날씨 API 오류:', error);
    return null;
  }
}
