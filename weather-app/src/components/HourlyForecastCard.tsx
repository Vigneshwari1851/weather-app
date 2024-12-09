import React from "react";
import { HourlyForecast } from "../types/WeatherDashboard.types";

const HourlyForecastCard: React.FC<HourlyForecast> = ({
  hour,
  temp,
  condition,
}) => (
  <div className="hourly-forecast-card">
    <p className="hour">{hour}</p>
    <h3 className="hourly-temp">{temp}°</h3>
    <p className="hourly-condition">{condition}</p>
  </div>
);

export default HourlyForecastCard;
