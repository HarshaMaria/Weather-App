// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={fetchWeatherData}>Get Weather</button>

//       {weatherData && (
//         <div className="weather-info">
//           <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Weather Condition: {weatherData.weather[0].description}</p>
//           <img
//             src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
//             alt={weatherData.weather[0].description}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
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

      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather Condition: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
}

export default App;

