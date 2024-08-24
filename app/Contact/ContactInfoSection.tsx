import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 ">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Nos Coordonnées</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex p-2 flex-col items-center text-center  shadow-sm shadow-slate-600">
            <FaPhone className="text-4xl text-[#f93e06] mb-4" />
            <h3 className="text-sm md:text-xl font-bold mb-2">Téléphone</h3>
            <p>+229 69 40 51 98</p>
          </div>
          <div className="flex p-2 flex-col items-center text-center shadow-sm shadow-slate-600">
            <FaEnvelope className="text-4xl text-[#f93e06] mb-4" />
            <h3 className="text-sm md:text-xl font-bold mb-2">Email</h3>
            <p>contact@voyageapp.com</p>
          </div>
          <div className="flex p-2 flex-col items-center text-center shadow-sm shadow-slate-600">
            <FaMapMarkerAlt className="text-4xl text-[#f93e06] mb-4" />
            <h3 className="text-sm md:text-xl font-bold mb-2">Adresse</h3>
            <p>123 Rue du Voyage, 75001 Paris, France</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;