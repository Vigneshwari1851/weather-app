import React from "react";
import { CurrentWeather } from "../types/WeatherDashboard.types";

const WeatherCard: React.FC<CurrentWeather> = ({
  temp,
  condition,
  windSpeed,
  humidity,
}) => (
  <div className="weather-card">
    <h1 className="current-temp">{temp}°</h1>
    <p className="current-condition">{condition}</p>
    <div className="additional-info">
      <p className="wind-speed">Wind: {windSpeed} mph</p>
      <p className="humidity-level">Humidity: {humidity}%</p>
    </div>
  </div>
);

export default WeatherCard;
