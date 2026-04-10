import { Check } from 'lucide-react';

const plans = [
  { name: "Basic", price: "15 Reviews for $75", features: ["Verified Purchase", "Helpful Votes", "180 Days Guarantee", "Image Review"] },
  { name: "Standard", price: "30 Reviews for $120", features: ["Verified Purchase", "Helpful Votes", "180 Days Guarantee", "Image + Video"] },
  { name: "Premium", price: "50 Reviews for $150", features: ["Verified Purchase", "Helpful Votes", "180 Days Guarantee", "Image + Video", "Seller Feedback"], popular: true },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">Our Pricing</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg font-medium text-slate-600 mb-16">
          This pricing is our commission.<br />
          You pay product cost separately.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`bg-surface p-8 rounded-3xl border ${p.popular ? 'border-accent shadow-lg' : 'border-slate-100'} flex flex-col`}>
              <div className="text-primary font-bold text-xl uppercase tracking-wider mb-6">{p.name}</div>
              <div className="flex-grow">
                <p className="text-3xl font-bold text-primary mb-8">{p.price}</p>
                <ul className="space-y-4 text-left text-sm text-slate-600 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={20} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              {p.popular && <div className="bg-accent text-white py-3 rounded-full font-bold text-center uppercase tracking-widest text-sm">Most Popular</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
