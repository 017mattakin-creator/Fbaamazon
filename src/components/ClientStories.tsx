import { useLanguage } from '../context/LanguageContext';

const trustItems = [
  { title: { en: "Unmatched Quality", zh: "无与伦比的质量" }, desc: { en: "Consistently praised for attention to detail and ability to turn complex visions into reality.", zh: "因对细节的关注和将复杂愿景变为现实的能力而受到一致好评。" } },
  { title: { en: "Total Reliability", zh: "绝对可靠" }, desc: { en: "Professional transparency and consistency across every phase of the project.", zh: "项目各个阶段的专业透明度和一致性。" } },
  { title: { en: "Collaborative Spirit", zh: "协作精神" }, desc: { en: "More than a provider, we are a partner invested in your long-term success.", zh: "我们不仅仅是提供商，更是致力于您长期成功的合作伙伴。" } },
];

const testimonials = [
  { name: "Sarah Jenkins", role: "Founder of PixelCraft", text: "The level of detail was unmatched. My vision was realized perfectly.", img: "https://live.staticflickr.com/65535/55204634305_5577da7be4_z.jpg" },
  { name: "Marcus Thorne", role: "Small Business Owner", text: "Reliable, efficient, and incredibly easy to work with. Highly recommended.", img: "https://live.staticflickr.com/65535/55204386428_6436983c7d_w.jpg" },
  { name: "Elena Rodriguez", role: "Freelance Photographer", text: "Rare to find a team that genuinely cares about client success.", img: "https://live.staticflickr.com/65535/55204486379_e8261bff90_w.jpg" },
];

const images = [
  "https://live.staticflickr.com/65535/55206585556_578e264037_m.jpg",
  "https://live.staticflickr.com/65535/55205683732_2951978b2b_m.jpg",
  "https://live.staticflickr.com/65535/55206585551_d7f5cafd91_m.jpg",
  "https://live.staticflickr.com/65535/55205683702_a06b0963fc_m.jpg",
  "https://live.staticflickr.com/65535/55205683727_a46ef8b2f7_m.jpg",
  "https://live.staticflickr.com/65535/55206828124_7d182977b9_m.jpg",
  "https://live.staticflickr.com/65535/55206978280_4bbb4bbd57_m.jpg",
  "https://live.staticflickr.com/65535/55206585571_af1a6e5be7_m.jpg",
  "https://live.staticflickr.com/65535/55205683762_c19aceeb9a_m.jpg",
  "https://live.staticflickr.com/65535/55206585601_0ed018f53d_m.jpg",
  "https://live.staticflickr.com/65535/55206585576_6c09deeee7_m.jpg",
  "https://live.staticflickr.com/65535/55206828204_402625eee2_m.jpg",
  "https://live.staticflickr.com/65535/55206828209_898fb7ae68_m.jpg",
  "https://live.staticflickr.com/65535/55206978325_7a7734a931_m.jpg",
  "https://live.staticflickr.com/65535/55206585611_2368a2d352_m.jpg",
  "https://live.staticflickr.com/65535/55205683767_67d7680ca5_m.jpg",
  "https://live.staticflickr.com/65535/55205683802_262e21d952_m.jpg",
];

export default function ClientStories() {
  const { lang } = useLanguage();

  return (
    <div className="bg-stone-50 text-stone-900 py-20">
      <header className="py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          {lang === 'en' ? 'Real Stories, Real Trust' : '真实故事，真实信任'}
        </h1>
        <p className="text-xl text-stone-600">
          {lang === 'en' ? 'Honest feedback from the people who power our success.' : '来自推动我们成功的人们的诚实反馈。'}
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
              <h3 className="font-bold text-lg mb-2">{item.title[lang]}</h3>
              <p className="text-stone-600">{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition-all">
              <img src={t.img} className="w-16 h-16 rounded-full mb-6 object-cover" alt="Client" />
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="italic text-stone-700 mb-4">"{t.text}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-stone-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            {lang === 'en' ? 'Transparency & Trust' : '透明度与信任'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map((img, i) => (
              <img key={i} src={img} className="w-full h-40 object-cover rounded-2xl" loading="lazy" alt="Trust" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
