import { url } from 'inspector'
import React from 'react'

export default function Header() {
  return (
    <div className=' h-[90vh] bg-cover bg-bottom bg-no-repeat bg-centerr' style={{backgroundImage: "url('https://images.unsplash.com/photo-1724116808295-69156746d7d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className=' bg-black bg-opacity-50 w-full h-full flex items-center justify-center flex-col'>
        <h2 className=' text-5xl sm:text-6xl md:text-8xl text-white font-bold '>Activity</h2>
        <div className=' bg-white my-2 w-[2px] h-[60px] md:h-[80px]'></div>
        <a href="#content" className=' bg-[#f4430e] hover:bg-[#d83c0d] p-1 rounded-md text-white font-bold text-[12px] md:p-2 md:text-[16px] transition-all'>Voir les Aventure</a>
      </div>
    </div>
  )
}
