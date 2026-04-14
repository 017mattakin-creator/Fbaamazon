import { useLanguage } from '../context/LanguageContext';

const images = [
  "https://live.staticflickr.com/65535/55206585556_578e264037_b.jpg",
  "https://live.staticflickr.com/65535/55205683732_2951978b2b_b.jpg",
  "https://live.staticflickr.com/65535/55206585551_d7f5cafd91_b.jpg",
  "https://live.staticflickr.com/65535/55205683702_a06b0963fc_b.jpg",
  "https://live.staticflickr.com/65535/55205683727_a46ef8b2f7_b.jpg",
  "https://live.staticflickr.com/65535/55206828124_7d182977b9_b.jpg",
  "https://live.staticflickr.com/65535/55206978280_4bbb4bbd57_b.jpg",
  "https://live.staticflickr.com/65535/55206585571_af1a6e5be7_b.jpg",
  "https://live.staticflickr.com/65535/55205683762_c19aceeb9a_b.jpg",
  "https://live.staticflickr.com/65535/55206585601_0ed018f53d_b.jpg",
  "https://live.staticflickr.com/65535/55206585576_6c09deeee7_b.jpg",
  "https://live.staticflickr.com/65535/55206828204_402625eee2_b.jpg",
  "https://live.staticflickr.com/65535/55206828209_898fb7ae68_b.jpg",
  "https://live.staticflickr.com/65535/55206978325_7a7734a931_b.jpg",
  "https://live.staticflickr.com/65535/55206585611_2368a2d352_b.jpg",
  "https://live.staticflickr.com/65535/55205683767_67d7680ca5_b.jpg",
  "https://live.staticflickr.com/65535/55205683802_262e21d952_b.jpg",
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

      <section className="bg-white py-20 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            {lang === 'en' ? 'Transparency & Trust' : '透明度与信任'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map((img, i) => (
              <img key={i} src={img} className="w-full h-40 object-cover object-center rounded-2xl shadow-sm" loading="lazy" alt="Trust" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
