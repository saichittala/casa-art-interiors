"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "./Icons";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How much does a complete home interior cost?",
    answer:
      "At Casa Art Interiors, pricing is completely transparent with zero hidden costs. Complete home interiors for a 2BHK/3BHK typically range from ₹8 Lakhs to ₹25 Lakhs depending on the materials (BWP ply, acrylic/PU finishes, hardware brands like Hafele/Hettich) and custom woodwork scope. Because we manufacture in our own factory at Neopolis-Kokapet, you save 20-30% compared to typical design studios that outsource.",
  },
  {
    question: "How long does an interior project take?",
    answer:
      "Standard residential modular projects (modular kitchen, wardrobes, TV units) take 35 to 45 working days from design finalization. Complete luxury turnkey projects (including false ceiling, painting, glass & electrical works) are typically delivered within 45 to 60 days with a committed handover guarantee.",
  },
  {
    question: "Do you handle complete execution?",
    answer:
      "Yes, absolutely. We provide 100% end-to-end execution. From concept drawings, 3D renders, in-house modular manufacturing, electrical, plumbing, false ceiling, glass works, painting, to on-site assembly and deep cleaning before final handover, you have a single accountable point of contact.",
  },
  {
    question: "Do you provide 3D designs?",
    answer:
      "Yes. Once we take site measurements and understand your lifestyle preferences, our interior architects provide realistic 3D visualizations and VR walkthroughs of your entire home so you can see exactly how the lighting, textures, and finishes look before factory production begins.",
  },
  {
    question: "Do you manufacture your own modular interiors?",
    answer:
      "Yes! Our dedicated, state-of-the-art modular manufacturing unit is located at Plot No. 291/E2, Beside Delhivery Warehouse, Khanapur Village Road, Neopolis-Kokapet, Hyderabad. We use German CNC cutting and edge-banding machinery for millimeter precision and bubble-free finishes.",
  },
  {
    question: "Do you provide site visits?",
    answer:
      "Yes, we offer complimentary on-site visits and floor plan evaluations across Hyderabad. Our design specialists will visit your apartment or villa to take laser measurements and discuss design possibilities.",
  },
  {
    question: "Which areas in Hyderabad do you serve?",
    answer:
      "We serve all major localities in Hyderabad, including Kokapet, Neopolis, Narsingi, Gachibowli, Financial District, Hitec City, Madhapur, Jubilee Hills, Banjara Hills, Kondapur, Tellapur, Manikonda, and surrounding areas. We are also the official interior design partner for Magna Solitaire.",
  },
  {
    question: "How do I start my interior project?",
    answer:
      "Getting started is simple! Click 'Book a Free Consultation' or send us a message on WhatsApp at +91 8897969521. Share your floor plan, and we will set up an initial consultation and factory tour at our Neopolis-Kokapet facility.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
            <button
              className="faq-button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
            >
              <span className="faq-question-text">{faq.question}</span>
              <span
                className="faq-icon-circle"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ChevronDownIcon size={16} color="var(--text-dark-primary)" />
              </span>
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
