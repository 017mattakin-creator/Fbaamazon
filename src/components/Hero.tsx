import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-8 leading-tight">
        {lang === 'en' ? 'Struggling to Get Reviews' : '难以获得评论'}
        <span className="text-accent block mt-3">
          {lang === 'en' ? 'and Sales on Amazon?' : '和亚马逊销售额？'}
        </span>
      </h1>
      <p className="text-2xl font-medium text-slate-600 mb-6">
        {lang === 'en' ? 'We Help You Build Real Product Momentum' : '我们帮助您建立真正的产品动力'}
      </p>
      <p className="text-lg bg-sky-100 text-sky-800 inline-block px-6 py-2 rounded-full font-semibold mb-12">
        {lang === 'en' ? 'Trusted by 1,000+ Amazon Sellers' : '受到1000多名亚马逊卖家的信赖'}
      </p>
      <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-3xl mx-auto">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/gm4gasv7t-4?si=uo4UcoNDD7hsZZ6E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
