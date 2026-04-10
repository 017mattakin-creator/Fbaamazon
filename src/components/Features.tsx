const features = [
  { title: "Search Find Buy Strategy", desc: "The best way to rank a product on Amazon is by following the Search Find Buy-(SFB) method. All Amazon sellers are trying to become #1 ranked on Amazon and we can do this for you. We trained our buyers on how to search for a product with relevant keywords and purchase it. This is a proven strategy that we are following and getting good results on most of our projects" },
  { title: "100% Safe Method", desc: "Our main concern is safety. We never share our customer details with anyone. All of your information is safe with us. We never share your product details in any public place (e.g. Facebook groups or open blogs). We contact our buyers privately and share Keywords and product page screenshots. All of our buyers are real and from different addresses. The purchases you will get from our buyers will be the same as Organic Orders" },
  { title: "Long-Lasting Guarantee", desc: "We are providing 6 months of protection on our reviews. If a review gets down by Amazon in 180 days then we will replace it. In this case, you need to pay half of your product price again. But, we would like to assure you that our service is totally safe and we work with real buyers. There is no chance of getting a review down by Amazon and we have no such experience previously" },
  { title: "Ship Empty Box (FBM)", desc: "If you are selling as FBM-Fullfilment by Merchant, then this offer is for you. You can ship empty boxes to the order numbers which we will share with you. Shipping empty box, you can save the free product. But, if you want to ship the empty box, then you need to pay $3 extra commission for each review and our minimum requirement is 20 reviews (2nd Package). That means if you want to ship the empty box then you need to start with a minimum of 20 reviews or more" },
  { title: "Returning Products to Seller Address (FBA offer)", desc: "If you are selling as FBA-Fullfilment by Amazon, then this offer is for you. If you want to get back your products to your specified address, then yes we can do that for you. But, to get back your product you need to create the shipping label for us and pay $3 extra commission for each review. Our minimum requirement is 20 reviews (2nd Package). That means if you want to get back your product to your address then you need to start with a minimum of 20 reviews or more" },
  { title: "Buyer's account Inspection", desc: "All of our buyers are real and they are from different addresses. It’s important to inspect buyers accounts as well. We always look up our buyers accounts and advise them to maintain a good ratio of posting 5-star reviews. We know how strict Amazon is to protect fake reviews. For not getting banned from Amazon we always inspect our buyers profiles also advise them the best way to post a 5-star review. Actually, it is one of the reasons we are taking a commission from Sellers" },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Why Our Service Are Safe</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition">
              <div className="text-accent font-bold mb-4 text-xl">{f.title}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
