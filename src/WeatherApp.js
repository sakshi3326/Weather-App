
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setWeather } from './redux/actions';
import './WeatherApp.css'; 
const WeatherApp = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchWeather = async () => {
    setLoading(true);
    setError('');
  
    try {
      const data = await dispatch(fetchWeather(city));
      console.log('Returned Data:', data); // Add this log
      if (data && data.cod === '404') {
        setError('City not found');
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="weather-container">
      <h1 className="app-title">Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="fetch-button" onClick={handleFetchWeather} disabled={loading}>
          Get Weather
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weather && weather.name && weather.sys && (
        <div className="weather-details">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
