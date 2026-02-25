import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does raccoon removal take in Southwest Ranches?",
    answer: "Most raccoon removal projects are completed within 48 to 72 hours. Complete exclusion and entry point sealing typically happen immediately after the animal is safely removed."
  },
  {
    question: "Is raccoon exclusion permanent?",
    answer: "Yes, we use heavy-gauge steel mesh and professional-grade industrial sealants that raccoons cannot chew or tear through, providing long-term structural protection."
  },
  {
    question: "Do you use humane methods for raccoon control?",
    answer: "We prioritize humane practices and follow all Florida wildlife regulations. We use live-trapping and relocation where appropriate, or one-way doors to allow animals to exit safely."
  },
  {
    question: "Can raccoons transmit diseases to my family?",
    answer: "Raccoons can carry diseases like Rabies and Raccoon Roundworm. Our attic decontamination service removes hazardous waste and sanitizes the area to ensure your family's safety."
  },
  {
    question: "How do I know if the animal in my attic is a raccoon?",
    answer: "Raccoons are heavy and make loud thumping sounds. You may also hear vocalizations like chattering or growling. Our Southwest Ranches experts provide definitive identification via inspection."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Raccoon Removal <span className="text-indigo-600">in Southwest Ranches FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about raccoon elimination, home exclusion techniques, and wildlife protection in Southwest Ranches.
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
