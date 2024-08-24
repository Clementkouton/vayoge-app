import Image from 'next/image'
import { FaCalendar, FaMapPin } from 'react-icons/fa'
import { SiSession } from "react-icons/si";

export default function Card({ data }) {
  console.log("Données reçues dans Card :", data);
  
  return (
    <div className='bg-white p-4 rounded-md shadow-md cursor-pointer border hover:translate-y-[-10px] transition-all hover:border-[#fc370b]'>
      {data.image && (
        <Image 
          src={data.image} 
          alt={data.titre || 'Image'} 
          width={300}
          height={400} 
          className="w-full bottom h-[400px] bg-bottom rounded-md object-cover"
        />
      )}
      <h2 className='text-xl font-bold mt-2'>{data.titre || 'Titre non disponible'}</h2>
      {data.lieu && (
        <div className='flex items-center gap-2 text-[#ff6030] text-[14px] my-2'>
          <FaMapPin />
          <p>{data.lieu}</p>
        </div>
      )}
      {data.date && (
        <div className='flex items-center gap-2 text-[#3056ff] text-[14px] my-2'>
          <FaCalendar />
          <p>{data.date}</p>
        </div>
      )}
      {data.section && (
        <div className='flex items-center gap-2 text-[#3056ff] text-[14px] my-2'>
          <SiSession />
          <p>{data.section}</p>
        </div>
      )}
      {data.description && (
        <div className='text-gray-700 text-[14px] my-2'>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  )
}