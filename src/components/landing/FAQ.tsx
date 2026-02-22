const faqs = [
  {
    question: "What are the signs that my Chesapeake home needs repiping?",
    answer: "Common signs include frequent leaks, a noticeable drop in water pressure, discolored or rusty water, and a metallic taste. If your home has galvanized pipes or is over 40 years old, a professional inspection from our home repiping chesapeake va team is highly recommended."
  },
  {
    question: "How long does a typical whole-home repipe take?",
    answer: "Most whole-home repiping projects in Chesapeake are completed in 3 to 5 days. We work efficiently to minimize disruption, often ensuring you have water service restored at the end of each workday."
  },
  {
    question: "Which is better for repiping: PEX or Copper?",
    answer: "Both have advantages. PEX is flexible, resistant to scale, and more affordable, making it a popular choice for Chesapeake attics and crawlspaces. Copper is traditional, durable, and has natural antimicrobial properties. We'll help you choose the best material for your specific needs."
  },
  {
    question: "Will repiping my home require tearing down all my walls?",
    answer: "Not at all. Our home repiping chesapeake va specialists use 'surgical' extraction methods. We make small, strategic incisions in the drywall that are easily patched, preserving as much of your home's original finish as possible."
  },
  {
    question: "Does repiping increase my home's value?",
    answer: "Yes, significantly. A full repipe is a major selling point in the Chesapeake real estate market, as it assures buyers that the home is free from hidden water damage risks and has modernized plumbing infrastructure."
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
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Repiping Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            home repiping chesapeake va <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Key answers for Chesapeake property owners considering complete plumbing modernization.
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
