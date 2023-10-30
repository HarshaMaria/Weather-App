import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = '0f08273440751e5674b6c41ddda682e1';

  const fetchWeatherData = async () => {
    try {
      setError(null);
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setError('City not found. Please enter a valid city name.');
      }

      const forecastResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (forecastResponse.ok) {
        const forecastData = await forecastResponse.json();
        const nextTwoDaysForecast = forecastData.list.filter(forecast => {
          const date = new Date(forecast.dt * 1000);
          const hours = date.getHours();
          return hours === 8 || hours === 16;
        });
        setForecastData(nextTwoDaysForecast);
      } else {
        setError('Error fetching weather forecast data.');
        setForecastData([]);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again later.');
      setForecastData([]);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {error && <div className="error-message">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <h2>Current Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather Condition: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}

      {forecastData.length > 0 && (
        <div className="forecast">
          <h2>Weather Forecast for the Next Two Days</h2>
          {forecastData.map((forecast, index) => (
            <div key={index}>
              <p>Date: {forecast.dt_txt}</p>
              <p>Temperature: {forecast.main.temp}°C</p>
              <p>Weather Condition: {forecast.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
