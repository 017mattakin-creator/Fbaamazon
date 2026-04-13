import { useLanguage } from '../context/LanguageContext';

const features = [
  { 
    title: { en: "Search Find Buy Strategy", zh: "搜索、查找、购买策略" }, 
    desc: { en: "The best way to rank a product on Amazon is by following the Search Find Buy-(SFB) method. All Amazon sellers are trying to become #1 ranked on Amazon and we can do this for you. We trained our buyers on how to search for a product with relevant keywords and purchase it. This is a proven strategy that we are following and getting good results on most of our projects", zh: "在亚马逊上对产品进行排名的最佳方式是遵循“搜索、查找、购买”(SFB) 方法。所有亚马逊卖家都试图在亚马逊上获得第一名，我们可以为您做到这一点。我们培训买家如何使用相关关键词搜索产品并购买。这是一种我们正在遵循并大多数项目中取得良好效果的成熟策略。" } 
  },
  { 
    title: { en: "100% Safe Method", zh: "100%安全的方法" }, 
    desc: { en: "Our main concern is safety. We never share our customer details with anyone. All of your information is safe with us. We never share your product details in any public place (e.g. Facebook groups or open blogs). We contact our buyers privately and share Keywords and product page screenshots. All of our buyers are real and from different addresses. The purchases you will get from our buyers will be the same as Organic Orders", zh: "我们最关心的是安全。我们从不与任何人分享客户详情。您的所有信息在我们这里都是安全的。我们从不在任何公共场所（例如Facebook群组或公开博客）分享您的产品详情。我们私下联系买家并分享关键词和产品页面截图。我们所有的买家都是真实的，来自不同的地址。您从我们买家那里获得的购买将与自然订单相同。" } 
  },
  { 
    title: { en: "Long-Lasting Guarantee", zh: "长期保证" }, 
    desc: { en: "We are providing 6 months of protection on our reviews. If a review gets down by Amazon in 180 days then we will replace it. In this case, you need to pay half of your product price again. But, we would like to assure you that our service is totally safe and we work with real buyers. There is no chance of getting a review down by Amazon and we have no such experience previously", zh: "我们为评论提供6个月的保护。如果评论在180天内被亚马逊删除，我们将替换它。在这种情况下，您需要再次支付一半的产品价格。但是，我们要向您保证，我们的服务是绝对安全的，我们与真实的买家合作。亚马逊删除评论的可能性很小，我们以前没有过这样的经历。" } 
  },
  { 
    title: { en: "Ship Empty Box (FBM)", zh: "寄送空箱 (FBM)" }, 
    desc: { en: "If you are selling as FBM-Fullfilment by Merchant, then this offer is for you. You can ship empty boxes to the order numbers which we will share with you. Shipping empty box, you can save the free product. But, if you want to ship the empty box, then you need to pay $3 extra commission for each review and our minimum requirement is 20 reviews (2nd Package). That means if you want to ship the empty box then you need to start with a minimum of 20 reviews or more", zh: "如果您以FBM（商家自行配送）方式销售，那么此优惠适合您。您可以向我们将与您分享的订单号寄送空箱。寄送空箱，您可以节省免费产品。但是，如果您想寄送空箱，则需要为每条评论额外支付3美元的佣金，我们的最低要求是20条评论（第二个套餐）。这意味着如果您想寄送空箱，则需要从至少20条评论或更多开始。" } 
  },
  { 
    title: { en: "Returning Products to Seller Address (FBA offer)", zh: "将产品退回卖家地址 (FBA优惠)" }, 
    desc: { en: "If you are selling as FBA-Fullfilment by Amazon, then this offer is for you. If you want to get back your products to your specified address, then yes we can do that for you. But, to get back your product you need to create the shipping label for us and pay $3 extra commission for each review. Our minimum requirement is 20 reviews (2nd Package). That means if you want to get back your product to your address then you need to start with a minimum of 20 reviews or more", zh: "如果您以FBA（亚马逊配送）方式销售，那么此优惠适合您。如果您想将产品退回到您指定的地址，那么是的，我们可以为您做到。但是，要退回您的产品，您需要为我们创建运输标签，并为每条评论支付3美元的额外佣金。我们的最低要求是20条评论（第二个套餐）。这意味着如果您想将产品退回到您的地址，则需要从至少20条评论或更多开始。" } 
  },
  { 
    title: { en: "Buyer's account Inspection", zh: "买家账户检查" }, 
    desc: { en: "All of our buyers are real and they are from different addresses. It’s important to inspect buyers accounts as well. We always look up our buyers accounts and advise them to maintain a good ratio of posting 5-star reviews. We know how strict Amazon is to protect fake reviews. For not getting banned from Amazon we always inspect our buyers profiles also advise them the best way to post a 5-star review. Actually, it is one of the reasons we are taking a commission from Sellers", zh: "我们所有的买家都是真实的，来自不同的地址。检查买家账户也很重要。我们总是查看买家的账户，并建议他们保持良好的5星评论发布比例。我们知道亚马逊在打击虚假评论方面有多严格。为了不被亚马逊封禁，我们总是检查买家的个人资料，并建议他们发布5星评论的最佳方式。实际上，这也是我们向卖家收取佣金的原因之一。" } 
  },
];

export default function Features() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            {lang === 'en' ? 'Why Our Service Are Safe' : '为什么我们的服务是安全的'}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition">
              <div className="text-accent font-bold mb-4 text-xl">{f.title[lang]}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{f.desc[lang]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
