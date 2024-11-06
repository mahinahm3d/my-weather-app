// components/AirQualityCard.tsx
import React from "react";

interface AirQualityCardProps {
  qualityIndex: number;
  level: string;
}

const AirQualityCard: React.FC<AirQualityCardProps> = ({ qualityIndex, level }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white shadow-lg">
      <h3 className="text-lg font-semibold">Air Quality</h3>
      <p className="text-4xl font-bold mt-2">{qualityIndex}</p>
      <p className="mt-1">{level}</p>
    </div>
  );
};

export default AirQualityCard;
