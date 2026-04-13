import { useLanguage } from '../context/LanguageContext';

const steps = [
  { 
    title: { en: "Start Project", zh: "启动项目" }, 
    desc: { en: "To start a project with us, choose a pricing plan and place an order. We will send you a payment link and will start your project after completing the payment", zh: "要与我们启动项目，请选择定价计划并下单。我们将向您发送付款链接，并在完成付款后启动您的项目。" } 
  },
  { 
    title: { en: "Product Purchasing", zh: "产品购买" }, 
    desc: { en: "Our reviewers will purchase your product (using SFB method) and send us the order ID. We will send you the order ID so that you can recognize our orders.", zh: "我们的评论者将购买您的产品（使用SFB方法）并向我们发送订单ID。我们将向您发送订单ID，以便您识别我们的订单。" } 
  },
  { 
    title: { en: "Review Posting", zh: "发布评论" }, 
    desc: { en: "After receiving the item, reviewers will send us product photos. After our confirmation, they will post reviews one by one and we will pay them the product price.", zh: "收到商品后，评论者将向我们发送产品照片。经我们确认后，他们将逐一发布评论，我们将向他们支付产品价格。" } 
  },
];

export default function Workflow() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            {lang === 'en' ? 'How Reviews Get Done' : '评论是如何完成的'}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-surface p-8 rounded-3xl border border-slate-100">
              <div className="text-accent font-bold text-5xl mb-6">0{i + 1}</div>
              <div className="text-primary font-bold text-xl mb-4">{s.title[lang]}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{s.desc[lang]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
