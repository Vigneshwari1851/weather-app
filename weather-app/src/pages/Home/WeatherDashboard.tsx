import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../../api/weatherAPI"; // Path to your API file
import LocationHeader from "../../components/LocationHeader";
import GreetingHeader from "../../components/GreetingHeader";
import WeatherCard from "../../components/WeatherCard";
import ForecastDayCard from "../../components/ForecastDayCard";
import HourlyForecastCard from "../../components/HourlyForecastCard";
import { WeatherDashboardProps } from "../../types/WeatherDashboard.types";
import "../../styles/weather.css";

const WeatherDashboard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherDashboardProps | null>(
    null
  );
  const location = "Multan";
  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData(location);
      console.log("Fetched weather data:", data);
      if (data) setWeatherData(data);
    };
    getWeatherData();
  }, [location]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-dashboard-container">
      <div className="weather-dashboard">
        <div className="left-panel">
          <LocationHeader city={weatherData.city} date={weatherData.date} />
          <WeatherCard {...weatherData.currentWeather} />
          <div className="forecast">
            {weatherData.forecast.map((day, index) => (
              <ForecastDayCard key={index} {...day} />
            ))}
          </div>
        </div>
        <div className="right-panel">
          <GreetingHeader
            greeting={weatherData.greeting}
            time={weatherData.time}
            weatherDetails={{
              temp: weatherData.currentWeather.temp,
              description: weatherData.currentWeather.condition,
            }}
          />
          <div className="hourly-forecast">
            {weatherData.hourlyForecast.map((hour, index) => (
              <HourlyForecastCard key={index} {...hour} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
