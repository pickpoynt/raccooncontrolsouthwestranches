const faqs = [
  {
    question: "How can I identify a brown recluse spider?",
    answer: "Brown recluses are typically sandy brown to dark brown with a distinct dark violin-shaped mark on their cephalothorax (the front body part). They have six eyes arranged in three pairs. Our Brown recluse spider control La Grange specialists can provide positive identification and risk assessment for your property."
  },
  {
    question: "Why are brown recluses so hard to eliminate?",
    answer: "Their 'reclusive' nature is the biggest challenge; they hide deep within wall voids and cluttered storage areas. Standard pest control often fails because it doesn't reach these core nesting zones. We use specialized flushing agents and micro-encapsulated treatments to ensure total elimination."
  },
  {
    question: "How quickly can you respond to a spider problem in La Grange?",
    answer: "We offer same-day service for brown recluse sightings across La Grange and all of Oldham County. Call (323) 880-1224 and we'll dispatch a specialist immediately to begin the inspection and elimination process."
  },
  {
    question: "Are your spider treatments safe for my family and pets?",
    answer: "Yes. Our priority is safety. We use specialized application techniques that target spider harborage sites while minimizing exposure to living areas. All treatments follow strict regulatory guidelines for residential use."
  },
  {
    question: "How do you prevent spiders from coming back into my home?",
    answer: "We focus on exclusion and perimeter defense. By sealing small cracks and crevices and applying a long-lasting residual barrier around the foundation of your La Grange home, we create an environment that is naturally resistant to spider infestations."
  }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Spider Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Brown recluse spider control La Grange <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Key answers for La Grange and Oldham County property owners dealing with venomous spider problems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
