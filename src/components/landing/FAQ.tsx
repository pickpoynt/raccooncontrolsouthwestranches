import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does vole removal take in Brooksville?",
    answer: "Most vole removal projects see a significant reduction in activity within 3 to 5 days. Complete elimination and burrow collapse typically take about a week."
  },
  {
    question: "Is vole exclusion permanent?",
    answer: "Yes, we use hardware cloth and underground barriers that prevent voles from re-entering your gardens and turf areas, providing long-term structural soil protection."
  },
  {
    question: "Do you use poisons for vole control?",
    answer: "We prioritize safety and use targeted, subsurface methods that minimize risk to pets and non-target wildlife in Brooksville's delicate ecosystem."
  },
  {
    question: "Can voles damage my home's foundation?",
    answer: "Voles primarily damage roots and sod, but their extensive tunneling can occasionally lead to soil settling or moisture issues near foundations if left unchecked."
  },
  {
    question: "How do I know if I have voles or moles?",
    answer: "Voles create surface runways (like little paths) and eat plants. Moles create mounds of dirt and eat insects. Our Brooksville experts can provide a definitive identification."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Vole Removal <span className="text-indigo-600">in Brooksville FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about vole elimination, lawn exclusion techniques, and landscape protection in Brooksville.
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
