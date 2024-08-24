"use client"
import React from 'react'
import Form from '../Components/Form'

export default function page() {
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
        <div className=' p-6 mt-8 lg:w-[35%] md:w-[50%]'>
          <h2 className=' text-xl md:text-2xl lg:text-3xl font-bold text-[#f7410a] text-center'>Ajouter un Poste</h2>
          <Form />
        </div>
    </div>
  )
}
