import React from "react";
import { ForecastDay } from "../types/WeatherDashboard.types";

const ForecastDayCard: React.FC<ForecastDay> = ({ day, temp, condition }) => (
  <div className="forecast-day-card">
    <p className="forecast-day">{day}</p>
    <h3 className="forecast-temp">{temp}°</h3>
    <p className="forecast-condition">{condition}</p>
  </div>
);

export default ForecastDayCard;
