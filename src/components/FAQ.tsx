import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const faqs = [
  { q: { en: "Is there any risk in getting reviews from us?", zh: "从我们这里获取评论有风险吗？" }, a: { en: "No, we use the SFB (Search Find Buy) method which mimics organic buyer behavior, making it 100% safe for your Amazon store.", zh: "没有，我们使用SFB（搜索、查找、购买）方法，该方法模拟自然买家行为，对您的亚马逊商店100%安全。" } },
  { q: { en: "How many buyers do you have?", zh: "你们有多少买家？" }, a: { en: "We have a massive network of over 10,000+ real, verified buyers across multiple locations to ensure natural review distribution.", zh: "我们拥有一个庞大的网络，在多个地区拥有超过10,000多名真实的、经过验证的买家，以确保评论的自然分布。" } },
  { q: { en: "How do you accept payments?", zh: "你们如何接受付款？" }, a: { en: "We accept payments via secure methods like Payoneer, Wise, and Direct Bank Transfer to ensure a smooth transaction.", zh: "我们通过Payoneer、Wise和直接银行转账等安全方式接受付款，以确保交易顺利。" } },
  { q: { en: "How can I track the project with you?", zh: "我如何与你们一起跟踪项目？" }, a: { en: "We provide a dedicated tracking sheet and regular updates on WhatsApp, including Order IDs and Review links.", zh: "我们提供专门的跟踪表，并在WhatsApp上定期更新，包括订单ID和评论链接。" } },
  { q: { en: "How many reviews can you do?", zh: "你们可以做多少评论？" }, a: { en: "We can handle any volume from 10 to 500+ reviews per month, depending on your needs and product inventory.", zh: "根据您的需求和产品库存，我们可以处理每月10到500多条评论的任何数量。" } },
  { q: { en: "Do I have to make the payment upfront?", zh: "我需要预先付款吗？" }, a: { en: "Yes, for commission-based services, we require payment before starting the project to secure the reviewers.", zh: "是的，对于基于佣金的服务，我们需要在项目开始前付款以确保评论者。" } },
  { q: { en: "Do I get any protection or money-back guarantee?", zh: "我有任何保护或退款保证吗？" }, a: { en: "Absolutely! We offer a 180-day review protection guarantee. If a review is dropped, we replace it for free.", zh: "当然！我们提供180天的评论保护保证。如果评论被删除，我们将免费为您更换。" } },
  { q: { en: "How many days do you take to complete the orders?", zh: "你们需要多少天完成订单？" }, a: { en: "Typically, we spread reviews over 7-14 days to keep it natural, but the timeframe can be adjusted based on your speed.", zh: "通常，我们将评论分散在7-14天内以保持自然，但时间框架可以根据您的速度进行调整。" } },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  const { lang } = useLanguage();

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            {lang === 'en' ? 'Frequently Asked Question' : '常见问题'}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div
                className="p-6 cursor-pointer flex justify-between items-center font-bold text-primary hover:text-accent transition"
                onClick={() => setActive(active === i ? null : i)}
              >
                {faq.q[lang]}
                <ChevronDown className={`transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} />
              </div>
              {active === i && (
                <div className="p-6 border-t border-slate-100 text-slate-600 leading-relaxed">{faq.a[lang]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
