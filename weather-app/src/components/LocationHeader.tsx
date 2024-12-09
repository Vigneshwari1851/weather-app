import React from "react";

interface LocationHeaderProps {
  city: string;
  date: string;
}

const LocationHeader: React.FC<LocationHeaderProps> = ({ city, date }) => (
  <div className="location-header">
    <h1 className="city-name">{city}</h1>
    <p className="current-date">{date}</p>
  </div>
);

export default LocationHeader;
