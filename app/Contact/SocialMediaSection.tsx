import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#f93e06]">Suivez-nous</h2>
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-3xl text-[#f93e06] hover:text-[#d93400] transition duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-3xl text-[#f93e06] hover:text-[#d93400] transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-3xl text-[#f93e06] hover:text-[#d93400] transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-3xl text-[#f93e06] hover:text-[#d93400] transition duration-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;