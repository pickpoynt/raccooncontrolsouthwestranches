import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does chipmunk removal take in Brooksville?",
    answer: "Most chipmunk removal projects take between 3 to 7 days. This includes the initial setup of live traps and the relocation of the active colony."
  },
  {
    question: "Is chipmunk exclusion permanent?",
    answer: "Yes, our exclusion methods use professional-grade wildlife mesh and specialized sealants that prevent re-entry, providing long-term structural protection for your property."
  },
  {
    question: "Are your removal methods humane?",
    answer: "Absolutely. We specialize in live-trapping and relocation, ensuring that chipmunks are moved safely to a natural habitat away from residential areas."
  },
  {
    question: "Do chipmunks cause damage to pool decks?",
    answer: "Yes, chipmunks are frequent tunnelers. Their burrows under pool decks and foundations in Brooksville can lead to soil erosion and eventually structural settling or cracking."
  },
  {
    question: "How can I prevent chipmunks from returning?",
    answer: "Relocating existing populations is only half the battle. We recommend sealing all entry points and modifying the habitat by reducing seed sources and closing old tunnel systems."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Chipmunk Removal <span className="text-indigo-600">in Brooksville FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about chipmunk elimination, wildlife exclusion techniques, and property protection in Brooksville.
          </p>
        </div>





        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
