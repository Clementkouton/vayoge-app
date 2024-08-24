import React from 'react';
import { FaLightbulb, FaSuitcase, FaPassport, FaFirstAid } from 'react-icons/fa';

const tips = [
  { icon: FaLightbulb, text: "Recherchez les coutumes locales avant votre départ" },
  { icon: FaSuitcase, text: "Faites une liste de bagages pour ne rien oublier" },
  { icon: FaPassport, text: "Vérifiez la validité de vos documents de voyage" },
  { icon: FaFirstAid, text: "Préparez une trousse de premiers soins basique" },
];

const TravelTipsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Conseils de Voyage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <tip.icon className="text-4xl text-[#f93e06] mb-4" />
              <p className="text-gray-700">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTipsSection;