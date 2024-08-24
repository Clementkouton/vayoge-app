import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { link } from 'fs';


export default function Footer() {

    const menuFooter = [
        {name:"Facebook", icon:RiFacebookCircleLine, link:"https://facebook.com"},
        {name:"Linkedin", icon:TiSocialLinkedinCircular, link:"https://linkedin.com"},
        {name:"Twitter", icon:FiTwitter, link:"https://twitter.com"},
        {name:"Instagram", icon:FaInstagram, link:"https://instagram.com"},
    ]

  return (
    <footer className=' flex items-center justify-center flex-col gap-5 p-2 md:p-3 lg:p-4 bg-black text-white'>
        <ul  className=' flex items-center justify-center gap-2'>
            {menuFooter.map((item, index)=> (
                <li key={index}>
                    <a href={item.link} className=' flex items-center gap-2 text-[12px] font-bold hover:text-[#ff481b] transition-all'><item.icon className=' text-[14px]' /><span>{item.name}</span></a>

                </li>
            ))}
        </ul>
      
    </footer>
  )
}
