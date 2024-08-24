"use client"

import React, { useState, useEffect } from 'react';
import { db } from '../db/configfirebase';
import { collection, getDocs } from 'firebase/firestore';
import Card from '../Components/Card';

export default function Galerie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      console.log("Tentative de récupération des données");
      const querySnapshot = await getDocs(collection(db, "vayage-app")); // Assurez-vous que le nom est correct
      console.log("Nombre de documents récupérés :", querySnapshot.size);
      const newData = querySnapshot.docs.map(doc => {
        console.log("Document ID:", doc.id, "Data:", doc.data());
        return {
          id: doc.id,
          ...doc.data()
        };
      });
      console.log("Données formatées :", newData);
      setData(newData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  console.log("Données dans le state :", data);

  return (
<div id="content" className="container mx-auto px-4 py-8">
  <h1 className="text-3xl md:text-4xl text-center font-bold text-[#f93e06] mb-8 relative">
    Galérie des Aventures
    <span className="block w-24 h-1 bg-[#f93e06] mx-auto mt-2"></span>
  </h1>

  {data.length === 0 ? (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#f93e06]"></div>
      <p className="mt-4 text-gray-600">Chargement des aventures...</p>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )}

  {data.length > 0 && (
    <div className="text-center mt-8">
      <button  className="bg-[#f93e06] font-bold text-white py-2 px-4 rounded-full hover:bg-[#d93400] transition duration-300 ease-in-out">
        Voir plus d'aventures
      </button>
    </div>
  )}
</div>
  );
}