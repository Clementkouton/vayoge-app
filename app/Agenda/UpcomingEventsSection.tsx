import React from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const events = [
  { title: "Festival de musique à Coachella", date: "15-17 Avril", location: "Californie, USA" },
  { title: "Carnaval de Rio", date: "25 Février - 5 Mars", location: "Rio de Janeiro, Brésil" },
  { title: "Oktoberfest", date: "16 Septembre - 3 Octobre", location: "Munich, Allemagne" },
];

const UpcomingEventsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Événements à Venir</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-md lg:text-xl mb-4">{event.title}</h3>
              <div className="flex items-center mb-2">
                <FaCalendar className="text-[#f93e06] mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#f93e06] mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;