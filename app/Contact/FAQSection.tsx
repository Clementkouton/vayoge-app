"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "Comment puis-je réserver un voyage ?",
    answer: "Vous pouvez réserver un voyage en utilisant notre plateforme en ligne ou en nous contactant directement par téléphone ou email."
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer: "Notre politique d'annulation varie selon le type de voyage. En général, vous pouvez obtenir un remboursement complet si vous annulez au moins 30 jours avant le départ."
  },
  {
    question: "Proposez-vous des assurances voyage ?",
    answer: "Oui, nous proposons différentes options d'assurance voyage pour couvrir vos besoins spécifiques. Contactez-nous pour plus de détails."
  },
  {
    question: "Puis-je personnaliser mon itinéraire ?",
    answer: "Absolument ! Nous sommes spécialisés dans la création d'itinéraires sur mesure. Contactez-nous avec vos préférences et nous créerons un voyage unique pour vous."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-[#f93e06]">Questions Fréquentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp className="text-[#f93e06]" /> : <FaChevronDown className="text-[#f93e06]" />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;