import { MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-primary tracking-tight">
        fb<span className="text-accent">@</span>.amazon
      </div>
      <a
        href="https://wa.me/+447782261548"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition"
      >
        <MessageCircle size={20} /> Chat
      </a>
    </nav>
  );
}
