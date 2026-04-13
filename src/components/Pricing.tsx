import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const plans = [
  { 
    name: { en: "Basic", zh: "基础版" }, 
    price: { en: "15 Reviews for $75", zh: "15条评论，75美元" }, 
    features: { en: ["Verified Purchase", "Helpful Votes", "180 Days Guarantee", "Image Review"], zh: ["已验证购买", "有用的投票", "180天保证", "图片评论"] } 
  },
  { 
    name: { en: "Standard", zh: "标准版" }, 
    price: { en: "30 Reviews for $120", zh: "30条评论，120美元" }, 
    features: { en: ["Verified Purchase", "Helpful Votes", "180 Days Guarantee", "Image + Video"], zh: ["已验证购买", "有用的投票", "180天保证", "图片+视频"] } 
  },
  { 
    name: { en: "Premium", zh: "高级版" }, 
    price: { en: "50 Reviews for $150", zh: "50条评论，150美元" }, 
    features: { en: ["Verified Purchase", "Helpful Votes", "180 Days Guarantee", "Image + Video", "Seller Feedback"], zh: ["已验证购买", "有用的投票", "180天保证", "图片+视频", "卖家反馈"] }, 
    popular: true 
  },
];

export default function Pricing() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          {lang === 'en' ? 'Our Pricing' : '我们的定价'}
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
        <p className="text-lg font-medium text-slate-600 mb-16">
          {lang === 'en' ? 'This pricing is our commission.' : '此定价为我们的佣金。'}
          <br />
          {lang === 'en' ? 'You pay product cost separately.' : '您需另行支付产品成本。'}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`bg-surface p-8 rounded-3xl border ${p.popular ? 'border-accent shadow-lg' : 'border-slate-100'} flex flex-col`}>
              <div className="text-primary font-bold text-xl uppercase tracking-wider mb-6">{p.name[lang]}</div>
              <div className="flex-grow">
                <p className="text-3xl font-bold text-primary mb-8">{p.price[lang]}</p>
                <ul className="space-y-4 text-left text-sm text-slate-600 mb-8">
                  {p.features[lang].map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={20} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              {p.popular && (
                <div className="bg-accent text-white py-3 rounded-full font-bold text-center uppercase tracking-widest text-sm">
                  {lang === 'en' ? 'Most Popular' : '最受欢迎'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
