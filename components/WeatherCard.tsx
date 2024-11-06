// components/WeatherCard.tsx
import React from "react";

interface WeatherCardProps {
  location: string;
  temperature: number;
  condition: string;
  wind: number;
  humidity: number;
  visibility: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location, temperature, condition, wind, humidity, visibility }) => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg p-4 text-center text-white shadow-lg">
      <h2 className="text-lg font-semibold">{location}</h2>
      <p className="text-6xl font-bold">{temperature}°</p>
      <p className="text-md">{condition}</p>
      <div className="flex justify-between mt-4 text-sm">
        <p>🌬️ {wind} km/h</p>
        <p>💧 {humidity}%</p>
        <p>👁️ {visibility} km</p>
      </div>
    </div>
  );
};

export default WeatherCard;
