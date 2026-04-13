import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-primary tracking-tight">
        fb<span className="text-accent">@</span>.amazon
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="bg-slate-100 text-slate-900 px-4 py-2 rounded-full font-bold hover:bg-slate-200 transition"
        >
          {lang === 'en' ? '中文' : 'English'}
        </button>
        <a
          href="https://wa.me/12017723344"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition"
        >
          <MessageCircle size={20} /> {lang === 'en' ? 'Chat' : '聊天'}
        </a>
      </div>
    </nav>
  );
}
