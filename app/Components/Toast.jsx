import React from 'react'
import { IoClose } from "react-icons/io5";


export default function Toast({msg="", closeToast}) {

  return (
    <div className=' duration-500 transition-all ease-in-out bg-white shadow-md justify-between flex items-center p-4 rounded-md' >
      <h5>{msg}</h5>
      <button onClick={closeToast} className=' ml-5 text-[#fa4109] text-[14px]'><IoClose /></button>
    </div>
  )
}
