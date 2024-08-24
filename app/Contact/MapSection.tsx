import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Notre Localisation</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe className=' w-full h-[400px] ' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5432266.380214449!2d-2.6038005972921816!3d48.332197314345756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3d189458d9%3A0xe0c3565d5dcdb9b!2sPOINT%20Z%20(GIF%20Emploi)!5e0!3m2!1sfr!2sbj!4v1724520870774!5m2!1sfr!2sbj"
            
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy" 
           ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;