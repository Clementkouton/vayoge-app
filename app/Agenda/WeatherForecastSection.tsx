import React from 'react';
import { FaSun, FaCloudRain, FaSnowflake, FaCloud } from 'react-icons/fa';

const forecasts = [
  { city: "Paris", icon: FaSun, temp: "22°C", condition: "Ensoleillé" },
  { city: "New York", icon: FaCloudRain, temp: "18°C", condition: "Pluvieux" },
  { city: "Tokyo", icon: FaCloud, temp: "25°C", condition: "Nuageux" },
  { city: "Sydney", icon: FaSnowflake, temp: "12°C", condition: "Froid" },
];

const WeatherForecastSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Prévisions Météo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forecasts.map((forecast, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-bold text-sm md:text-xl mb-4">{forecast.city}</h3>
              <forecast.icon className="text-5xl text-[#f93e06] mx-auto mb-4" />
              <p className="text-xl md:text-2xl font-bold mb-2">{forecast.temp}</p>
              <p className="text-gray-600">{forecast.condition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeatherForecastSection;