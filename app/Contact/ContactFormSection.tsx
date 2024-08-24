"use client";
import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ajoutez ici la logique pour envoyer le formulaire
  };

  return (
    <section className="py-16 bg-gray-100 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f93e06]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f93e06]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f93e06]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f93e06]"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-[#f93e06] text-white font-bold py-2 px-4 rounded-md hover:bg-[#d93400] transition duration-300">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;