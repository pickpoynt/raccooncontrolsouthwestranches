import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should I pump my septic tank in Bismarck?",
    answer: "Most experts and local health departments in Bismarck recommend pumping your septic tank every 3-5 years. However, this depends on your household size and the amount of wastewater generated. Regular pumping prevents solids from escaping into your drain field."
  },
  {
    question: "How much does septic pumping cost in Bismarck?",
    answer: "A standard 1,000-gallon septic tank pumping in the Bismarck area typically costs between $350 and $550. Prices can vary based on the size of the tank, the distance of the house from our facility, and whether any digging is required to access the lids."
  },
  {
    question: "What are the signs that my septic tank is full?",
    answer: "Common warning signs include slow-draining sinks or toilets, gurgling sounds in your plumbing, sewage odors near your tank or drain field, and unusually lush or green grass over the absorption area. If you experience these, call for an inspection immediately."
  },
  {
    question: "Do I need to be home for the pumping service?",
    answer: "No, you don't necessarily need to be home as long as we have clear access to your septic tank lids. We do recommend being available via phone in case we discover any issues during our inspection that require your attention."
  },
  {
    question: "Where is my septic tank located?",
    answer: "If you're unsure, we can help locate it using specialized electronic locators or by following the main sewer line out of your home. Having your property's as-built drawing from the Burleigh County health department also helps."
  },
  {
    question: "What shouldn't I flush down my septic system?",
    answer: "Avoid flushing grease, oils, feminine hygiene products, 'flushable' wipes, chemicals, and excessive amounts of household cleaners. These can kill the beneficial bacteria in your tank or cause mechanical blockages."
  },
  {
    question: "Is septic tank cleaning different from pumping?",
    answer: "Pumping primarily removes the liquids and floating solids. Cleaning involves a more thorough removal of the 'sludge' layer at the bottom of the tank and washing the interior walls and baffles to ensure everything is clear."
  },
  {
    question: "How can I make my septic system last longer?",
    answer: "The best ways to extend its life are regular pumping (every 3-5 years), cleaning the effluent filter, conserving water, and avoiding driving heavy vehicles over the tank or drain field."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Bismarck Septic Pumping FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about septic maintenance and cleaning in Bismarck, ND.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-emerald-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
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

