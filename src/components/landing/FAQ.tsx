import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How do I know if I have a gopher problem in Frankenmuth?",
    answer: "The most common sign is the appearance of crescent-shaped mounds of fresh soil on your lawn or in your garden. You might also notice plants suddenly dying from root damage or tunnels appearing just below the surface of the soil. If your irrigation lines are being damaged, it's a critical sign of a gopher infestation that requires immediate Gopher control Frankenmuth MI intervention."
  },
  {
    question: "Are your gopher control methods safe for my lawn?",
    answer: "Yes. We use specialized, low-impact removal techniques that target gophers within their burrow systems. This allows us to neutralize the threat without the need for extensive digging or damaging your turf. Our goal is to protect your landscape's aesthetic while eliminating the pests."
  },
  {
    question: "Can gophers damage my home's foundation?",
    answer: "Absolutely. Constant burrowing near foundations can lead to soil erosion and voids under concrete slabs or walkways. Over time, this can cause structural instability. We provide perimeter hardening services in Frankenmuth to prevent gophers from undermining your property's integrity."
  },
  {
    question: "Do you provide emergency response for gopher damage?",
    answer: "Yes, we are available 24/7 for assessment and intervention. If you notice a sudden explosion of gopher activity that is threatening expensive landscaping or utility lines in Frankenmuth or Saginaw County, call us immediately for rapid subterranean mitigation."
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Gopher control Frankenmuth MI <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Essential information for Frankenmuth residents and property owners regarding gopher behavior, landscape safety, and effective control methods.
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
