import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Is there any risk in getting reviews from us?", a: "No, we use the SFB (Search Find Buy) method which mimics organic buyer behavior, making it 100% safe for your Amazon store." },
  { q: "How many buyers do you have?", a: "We have a massive network of over 10,000+ real, verified buyers across multiple locations to ensure natural review distribution." },
  { q: "How do you accept payments?", a: "We accept payments via secure methods like Payoneer, Wise, and Direct Bank Transfer to ensure a smooth transaction." },
  { q: "How can I track the project with you?", a: "We provide a dedicated tracking sheet and regular updates on WhatsApp, including Order IDs and Review links." },
  { q: "How many reviews can you do?", a: "We can handle any volume from 10 to 500+ reviews per month, depending on your needs and product inventory." },
  { q: "Do I have to make the payment upfront?", a: "Yes, for commission-based services, we require payment before starting the project to secure the reviewers." },
  { q: "Do I get any protection or money-back guarantee?", a: "Absolutely! We offer a 180-day review protection guarantee. If a review is dropped, we replace it for free." },
  { q: "How many days do you take to complete the orders?", a: "Typically, we spread reviews over 7-14 days to keep it natural, but the timeframe can be adjusted based on your speed." },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Frequently Asked Question</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div
                className="p-6 cursor-pointer flex justify-between items-center font-bold text-primary hover:text-accent transition"
                onClick={() => setActive(active === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} />
              </div>
              {active === i && (
                <div className="p-6 border-t border-slate-100 text-slate-600 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
