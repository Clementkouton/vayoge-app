import React from 'react'
import { FaHiking, FaWater, FaMountain, FaBiking } from 'react-icons/fa';



export default function AventureTypes() {

    const adventureTypes = [
        { name: 'Randonnée', icon: FaHiking },
        { name: 'Sports Aquatiques', icon: FaWater },
        { name: 'Alpinisme', icon: FaMountain },
        { name: 'Cyclisme', icon: FaBiking },
      ];
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Types d'Aventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adventureTypes.map((type, index) => (
            <div key={index} className="text-center">
              <type.icon className="text-5xl mb-4 text-[#f93e06] mx-auto" />
              <h3 className="font-semibold text-lg">{type.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


