import { Mail, MessageCircle } from 'lucide-react';

export default function Footer({ onToggleAdmin }: { onToggleAdmin: () => void }) {
  return (
    <footer className="py-16 text-center bg-surface border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <a
            href="https://wa.me/12017723344"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-10 py-3 rounded-full text-lg font-bold shadow-lg inline-block hover:bg-sky-600 transition"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-3 mb-10 text-slate-600 font-medium">
          <p className="flex items-center justify-center gap-3">
            <Mail className="text-accent" /> Email: contact@revboostfba.com
          </p>
          <p className="flex items-center justify-center gap-3">
            <MessageCircle className="text-emerald-600" /> Whatsapp: +1 (201) 772-3344
          </p>
        </div>
        <div className="border-t border-slate-200 pt-8 text-slate-500 font-medium text-sm">
          © 2026 revboostfba.com All Rights Reserved
          <button onClick={onToggleAdmin} className="w-4 h-4 opacity-0 cursor-default absolute bottom-0 right-0" aria-label="Admin Trigger"></button>
        </div>
      </div>
    </footer>
  );
}
