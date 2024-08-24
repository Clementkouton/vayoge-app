import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-bottom bg-center z-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="z-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Découvrez l'Aventure</h1>
        <p className="text-xl mb-8">Explorez le monde, créez des souvenirs inoubliables</p>
        <button className="bg-[#f93e06] text-white font-bold py-2 px-4 rounded-full hover:bg-[#d93400] transition duration-300">
          Partager vos Aventure
        </button>
      </div>
    </div>
  );
};

export default HeroSection;