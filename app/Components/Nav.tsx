"use client"

import { useRouter, usePathname } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineEventAvailable } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { MdOutlineContactMail } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link';

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menu = [  
    {name: "Accueil", icon: AiOutlineHome ,path: "/"},
    {name: "Aventures", icon:  MdOutlineEventAvailable ,path: "/Aventure"},
    {name: "Agenda", icon: TfiAgenda ,path: "/Agenda"},
    {name: "Contact", icon: MdOutlineContactMail ,path: "/Contact"}
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='absolute z-50 top-0 left-0 flex justify-between items-center w-full p-3 bg-black border-b h-[50px] border-b-[#ffb129]'>
      <div onClick={()=> router.push('/')} className="flex items-center gap-2 cursor-pointer text-[#ff6030]">
        <GiJourney className="text- text-3xl" />
        <span className="font-black text-2xl -m-2">Travel</span>
      </div>

      {/* Menu button for mobile */}
      <button onClick={toggleMenu} className="md:hidden text-white my-50 font-bold hover:text-[#ff5230]">
        {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Menu for desktop */}
      <ul className='hidden md:flex items-center justify-center text-white'>
        {menu.map((item)=> (
          <li key={item.name} className='hover:text-[#ff6030] transition-all flex mx-3 items-center cursor-pointer w-full'>
            <Link href={item.path} className={`flex items-center gap-2 font-medium text-[14px] ${
              pathname === item.path
                ? "text-[#ff6030] font-bold"
                : "text-white hover:text-[#ff6030]"
            }`}>
              <item.icon /> <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu for mobile */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-[50px] mx-5 left-0 w-full bg-black md:hidden">
          <ul className='flex flex-col items-center justify-center text-white'>
            {menu.map((item)=> (
              <li key={item.name} className='hover:text-[#ff6030]  transition-all flex items-center justify-center cursor-pointer w-full p-3'>
                <Link href={item.path} className={`flex items-center justify-center gap-2 font-medium text-[14px] ${
                  pathname === item.path
                    ? "text-[#ff6030] font-bold"
                    : "text-white hover:text-[#ff6030]"
                }`} onClick={() => setIsMenuOpen(false)}>
                  <item.icon /> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={()=> router.push('/Create')} className='block bg-[#f84813] px-3 py-1.5 text-white rounded-full hover:scale-110 transition-all'>
        <FaPlus />
      </button>
    </div>
  )
}