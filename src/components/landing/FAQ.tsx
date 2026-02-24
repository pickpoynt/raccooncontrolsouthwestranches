import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can you respond to water damage in Josephine?",
    answer: "We offer 24/7 emergency response in Josephine. Our technicians typically arrive on-site within 60-90 minutes of your call to begin extraction and prevent further damage."
  },
  {
    question: "Is water damage restoration covered by my insurance?",
    answer: "Most homeowners' insurance policies cover water damage from internal sources like burst pipes. We work directly with your insurance provider to handle the claims process and documentation."
  },
  {
    question: "How do you provide water damage restoration josephine tx?",
    answer: "We use a combination of industrial-grade extraction, high-velocity drying equipment, and advanced moisture monitoring. By addressing the water immediately, we prevent structural rot and mold growth."
  },
  {
    question: "What are the first steps I should take if my home floods?",
    answer: "If safe, shut off the main water valve and electricity to the affected area. Avoid standing in water if electricity is still on. Call our emergency line immediately for professional extraction."
  },
  {
    question: "How long does the structural drying process typically take?",
    answer: "Most properties take between 3 to 5 days to reach professional dry standards. We monitor moisture levels throughout the process to ensure every structural element is completely recovered."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Restoration <span className="text-indigo-600">in Josephine TX FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about water damage recovery, insurance claims, and our professional restoration process in Josephine.
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
