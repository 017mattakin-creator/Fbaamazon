import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { lang, setLang } = useLanguage();

  const allTestimonials = [
    { name: { en: "Sarah Jenkins", zh: "莎拉·詹金斯" }, role: { en: "Founder, United States", zh: "创始人, 纽约" }, img: "https://live.staticflickr.com/65535/55204634305_5577da7be4_z.jpg", text: { en: "Working with this team was a game-changer for my brand. Their SFB method is incredibly effective.", zh: "与这个团队合作对我的品牌来说是一个转折点。他们的SFB方法非常有效。" } },
    { name: { en: "Marcus Thorne", zh: "马库斯·索恩" }, role: { en: "Business Owner, London", zh: "企业主, 伦敦" }, img: "https://live.staticflickr.com/65535/55204386428_6436983c7d_w.jpg", text: { en: "I was skeptical about Amazon review services, but these guys are the real deal.", zh: "我曾经对亚马逊评论服务持怀疑态度，但这些人是真正的专家。" } },
    { name: { en: "Elena Rodriguez", zh: "埃琳娜·罗德里格斯" }, role: { en: "Freelancer, United States", zh: "自由职业者, 马德里" }, img: "https://live.staticflickr.com/65535/55204486379_e8261bff90_w.jpg", text: { en: "The communication throughout the process was outstanding. They kept me updated.", zh: "整个过程中的沟通非常出色。他们一直让我了解最新情况。" } },
    { name: { en: "David Chen", zh: "大卫·陈" }, role: { en: "E-commerce Mgr, United States", zh: "电商经理, 新加坡" }, img: "https://live.staticflickr.com/65535/55204486389_3f7224ecbf.jpg", text: { en: "Their 180-day protection guarantee gave me the peace of mind I needed.", zh: "他们180天的保护保证让我感到安心。" } },
    { name: { en: "Sophie Dubois", zh: "索菲·杜波依斯" }, role: { en: "Boutique Owner, United States", zh: "精品店主, 巴黎" }, img: "https://live.staticflickr.com/65535/55203341682_83726f60f2.jpg", text: { en: "I needed a safe way to launch my new product line, and this team delivered perfectly.", zh: "我需要一种安全的方式来推出我的新产品线，这个团队完美地完成了任务。" } },
    { name: { en: "James Wilson", zh: "詹姆斯·威尔逊" }, role: { en: "Consultant, United Kingdom", zh: "顾问, 悉尼" }, img: "https://live.staticflickr.com/65535/55204634315_b767b2ba4c.jpg", text: { en: "The FBA offer they provided was exactly what I needed to manage my inventory.", zh: "他们提供的FBA报价正是我管理库存所需要的。" } },
    { name: { en: "Amara Okafor", zh: "阿马拉·奥卡福" }, role: { en: "Seller, United Kingdom", zh: "工匠, 拉各斯" }, img: "https://live.staticflickr.com/65535/55204486394_5a5fedc6ab.jpg", text: { en: "I was struggling to get my first few reviews, and this service helped me gain social proof.", zh: "我很难获得最初的几条评论，这项服务帮助我获得了社会证明。" } },
    { name: { en: "Liam O'Connor", zh: "利亚姆·奥康纳" }, role: { en: "Entrepreneur, Germany", zh: "企业家, 都柏林" }, img: "https://live.staticflickr.com/65535/55204240406_1770925cb4.jpg", text: { en: "Reliable, honest, and effective. If you're an Amazon seller looking to boost visibility safely, look no further.", zh: "可靠、诚实且有效。如果您是一位希望安全提升曝光率的亚马逊卖家，这里就是您的不二之选。" } },
    { name: { en: "Yuki Tanaka", zh: "田中由纪" }, role: { en: "Seller, Germany", zh: "卖家, 东京" }, img: "https://live.staticflickr.com/65535/55204634335_7db962e9c3.jpg", text: { en: "The attention to detail in their buyer account inspection is impressive.", zh: "他们对买家账户检查的关注细节令人印象深刻。" } },
    { name: { en: "Wang Wei", zh: "王伟" }, role: { en: "Manager, Beijing", zh: "经理, 北京" }, img: "https://live.staticflickr.com/65535/55203341717_ca61abb8c3.jpg", text: { en: "Excellent service, very professional team.", zh: "非常专业的团队，服务非常出色。" } },
    { name: { en: "Li Na", zh: "李娜" }, role: { en: "Designer, Shanghai", zh: "设计师, 上海" }, img: "https://live.staticflickr.com/65535/55204486419_f659698d0a.jpg", text: { en: "Highly recommend their services for any Amazon seller.", zh: "强烈推荐他们的服务，非常满意。" } },
    { name: { en: "Zhang Qiang", zh: "张强" }, role: { en: "Owner, Guangzhou", zh: "店主, 广州" }, img: "https://live.staticflickr.com/65535/55204386453_3f4ed114c0_n.jpg", text: { en: "They made the whole process seamless.", zh: "整个流程非常顺畅，效率很高。" } },
    { name: { en: "Liu Yang", zh: "刘洋" }, role: { en: "Consultant, Shenzhen", zh: "顾问, 深圳" }, img: "https://live.staticflickr.com/65535/55204386458_da1d6c9d8c_n.jpg", text: { en: "Great results, very happy with the outcome.", zh: "结果超出了我的预期，非常棒。" } },
    { name: { en: "Chen Jing", zh: "陈静" }, role: { en: "Founder, Chengdu", zh: "创始人, 成都" }, img: "https://live.staticflickr.com/65535/55203341737_7c9cfb6aa0_n.jpg", text: { en: "Professional, efficient, and reliable.", zh: "专业、高效、值得信赖。" } },
    { name: { en: "Huang Lei", zh: "黄磊" }, role: { en: "Manager, Hangzhou", zh: "经理, 杭州" }, img: "https://live.staticflickr.com/65535/55204386478_0cbbbb1a32_n.jpg", text: { en: "Exceeded my expectations.", zh: "服务非常周到，超出了预期。" } },
    { name: { en: "Zhao Min", zh: "赵敏" }, role: { en: "Owner, Nanjing", zh: "店主, 南京" }, img: "https://live.staticflickr.com/65535/55204486454_767c2fa6d3_w.jpg", text: { en: "The best service I've used so far.", zh: "这是我用过最好的服务。" } },
    { name: { en: "Zhou Jie", zh: "周杰" }, role: { en: "Freelancer, Wuhan", zh: "自由职业者, 武汉" }, img: "https://live.staticflickr.com/65535/55204634365_648b87b59a_n.jpg", text: { en: "Very happy with the results.", zh: "对结果非常满意。" } },
    { name: { en: "Wu Fang", zh: "吴芳" }, role: { en: "Seller, Xi'an", zh: "卖家, 西安" }, img: "https://live.staticflickr.com/65535/55204486459_44d3c34b13_n.jpg", text: { en: "Professional team, great communication.", zh: "团队非常专业，沟通顺畅。" } },
    { name: { en: "Sun Qiang", zh: "孙强" }, role: { en: "Manager, Chongqing", zh: "经理, 重庆" }, img: "https://live.staticflickr.com/65535/55203341767_eacc2d5365_n.jpg", text: { en: "Highly recommended.", zh: "强烈推荐。" } },
    { name: { en: "Zheng Li", zh: "郑丽" }, role: { en: "Owner, Tianjin", zh: "店主, 天津" }, img: "https://live.staticflickr.com/65535/55203341782_4fe9fea4cc_n.jpg", text: { en: "Excellent experience.", zh: "非常棒的体验。" } },
    { name: { en: "Xu Gang", zh: "徐刚" }, role: { en: "Consultant, Changsha", zh: "顾问, 长沙" }, img: "https://live.staticflickr.com/65535/55204634390_a69fb14e8f.jpg", text: { en: "Very professional and effective.", zh: "非常专业且高效。" } },
    { name: { en: "Lin Jing", zh: "林静" }, role: { en: "Founder, Qingdao", zh: "创始人, 青岛" }, img: "https://live.staticflickr.com/65535/55204240451_7f2b5dbcbf_w.jpg", text: { en: "Great results, highly recommended.", zh: "结果很棒，强烈推荐。" } },
    { name: { en: "Ma Chao", zh: "马超" }, role: { en: "Manager, Dalian", zh: "经理, 大连" }, img: "https://live.staticflickr.com/65535/55204486469_48bc01ce82_w.jpg", text: { en: "Very happy with the service.", zh: "对服务非常满意。" } },
    { name: { en: "Gao Fei", zh: "高飞" }, role: { en: "Owner, Xiamen", zh: "店主, 厦门" }, img: "https://live.staticflickr.com/65535/55204486484_29db3f181d_w.jpg", text: { en: "Communication is smooth, results are excellent.", zh: "沟通顺畅，结果出色。" } },
    { name: { en: "Yang Liu", zh: "杨柳" }, role: { en: "Freelancer, Suzhou", zh: "自由职业者, 苏州" }, img: "https://live.staticflickr.com/65535/55204240476_62283e342f_w.jpg", text: { en: "Highly recommended.", zh: "强烈推荐。" } },
    { name: { en: "Zhu Feng", zh: "朱峰" }, role: { en: "Seller, Ningbo", zh: "卖家, 宁波" }, img: "https://live.staticflickr.com/65535/55204240456_0ffa054529_z.jpg", text: { en: "Very professional.", zh: "非常专业。" } },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-20">
          <div className="text-center flex-grow">
            <span className="text-sky-600 font-semibold tracking-widest uppercase text-sm mb-3 block">
              {lang === 'en' ? 'Testimonials' : '客户评价'}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {lang === 'en' ? 'Real Stories from Happy Clients' : '客户真实故事'}
            </h2>
          </div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="bg-slate-900 text-white px-4 py-2 rounded-full font-bold hover:bg-sky-600 transition shadow-lg"
          >
            {lang === 'en' ? '中文' : 'English'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allTestimonials.slice(0, visibleCount).map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-1/2 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                <img src={t.img} alt={t.name[lang]} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="w-1/2">
                <div className="flex gap-1 text-amber-400 mb-2">★★★★★</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">"{t.text[lang]}"</p>
                <h4 className="font-bold text-slate-900">{t.name[lang]}</h4>
                <p className="text-xs text-slate-500">{t.role[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allTestimonials.length && (
          <div className="text-center mt-16">
            <button 
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-sky-600 transition shadow-lg"
            >
              {lang === 'en' ? 'Read More Stories' : '查看更多故事'} <span>&darr;</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
