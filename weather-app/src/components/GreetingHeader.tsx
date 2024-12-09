import React from "react";

interface GreetingHeaderProps {
  greeting: string;
  time: string;
  weatherDetails: {
    temp: number;
    description: string;
  };
}

const GreetingHeader: React.FC<GreetingHeaderProps> = ({
  greeting,
  time,
  weatherDetails,
}) => (
  <div className="greeting-header">
    <h2 className="greeting-text">{greeting}</h2>
    <p className="current-time">{time}</p>
    <div className="weather-info">
      <h3 className="temperature">{weatherDetails.temp}°</h3>
      <p className="description">{weatherDetails.description}</p>
    </div>
  </div>
);

export default GreetingHeader;
