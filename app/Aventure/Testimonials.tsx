import React from 'react';
import Image from 'next/image';

const testimonials = [
  { name: 'Sophie L.', text: "Une expérience incroyable ! J'ai découvert des endroits magnifiques et rencontré des gens formidables.", avatar: '/images/avatar1.jpg' },
  { name: 'Thomas M.', text: "L'organisation était parfaite, je recommande vivement pour tous les amateurs d'aventure.", avatar: '/images/avatar2.jpg' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{testi.text}"</p>
              <div className="flex items-center">
                <Image src={testi.avatar} alt={testi.name} width={50} height={50} className="rounded-full mr-4" />
                <span className="font-semibold">{testi.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;