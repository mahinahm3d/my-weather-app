// components/ForecastCard.tsx
import React from "react";

interface Forecast {
  day: string;
  condition: string;
  high: number;
  low: number;
}

interface ForecastCardProps {
  forecast: Forecast[];
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white shadow-lg">
      <h3 className="text-lg font-semibold">Next 7 Days</h3>
      <ul className="mt-4 space-y-2">
        {forecast.map((day, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{day.day}</span>
            <span>{day.condition}</span>
            <span>
              {day.high}°/{day.low}°
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastCard;
