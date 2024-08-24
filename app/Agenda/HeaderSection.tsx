import React from 'react'

export default function HeaderSection() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-bottom bg-center z-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1502720433255-614171a1835e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="z-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Découvrez l'Agenda</h1>

      </div>
    </div>
  )
}
