import React from 'react';
import { FaCalendar, FaMap, FaSuitcase, FaPlane } from 'react-icons/fa';

const tools = [
  { name: 'Planificateur de voyage', icon: FaCalendar, description: 'Organisez votre itinéraire jour par jour' },
  { name: 'Cartes interactives', icon: FaMap, description: 'Explorez vos destinations avec des cartes détaillées' },
  { name: 'Liste de bagages', icon: FaSuitcase, description: 'Ne rien oublier avec notre liste personnalisable' },
  { name: 'Réservations', icon: FaPlane, description: 'Trouvez les meilleurs tarifs pour vos vols et hébergements' },
];

const PlanningTools: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Outils de Planification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <tool.icon className="text-4xl mb-4 text-[#f93e06] mx-auto" />
              <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningTools;