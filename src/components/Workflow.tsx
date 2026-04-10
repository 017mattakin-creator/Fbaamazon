const steps = [
  { title: "Start Project", desc: "To start a project with us, choose a pricing plan and place an order. We will send you a payment link and will start your project after completing the payment" },
  { title: "Product Purchasing", desc: "Our reviewers will purchase your product (using SFB method) and send us the order ID. We will send you the order ID so that you can recognize our orders." },
  { title: "Review Posting", desc: "After receiving the item, reviewers will send us product photos. After our confirmation, they will post reviews one by one and we will pay them the product price." },
];

export default function Workflow() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">How Reviews Get Done</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-surface p-8 rounded-3xl border border-slate-100">
              <div className="text-accent font-bold text-5xl mb-6">0{i + 1}</div>
              <div className="text-primary font-bold text-xl mb-4">{s.title}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
