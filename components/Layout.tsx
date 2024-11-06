// components/Layout.tsx
import React from "react";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import TemperatureGraph from "./TemperatureGraph";
import AirQualityCard from "./AirQualityCard";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <div className="w-full max-w-md space-y-4">
        <WeatherCard location="Sydney" temperature={24} condition="Mostly Sunny" wind={9} humidity={25} visibility={1.7} />
        <ForecastCard forecast={[{ day: "Mon", condition: "Windy", high: 23, low: 18 }, { day: "Tue", condition: "Storm", high: 18, low: 15 }]} />
        <TemperatureGraph />
        <AirQualityCard qualityIndex={135} level="Unhealthy for sensitive groups" />
      </div>
    </div>
  );
};

export default Layout;
