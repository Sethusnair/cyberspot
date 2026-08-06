import { Phone, ArrowRight } from 'lucide-react';
import { CTA, company } from '@/data/company';
import { WhatsAppIcon } from './SocialIcons';

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-premium-lg backdrop-blur-lg lg:hidden">
      <a
        href={`tel:${company.phone.replace(/\s+/g, '')}`}
        aria-label={`Call ${company.name}`}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-violet-400 hover:text-violet-600"
      >
        <Phone size={18} />
      </a>
      <a
        href={`https://wa.me/${company.whatsappDigits}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-emerald-600 transition-colors hover:border-emerald-400 hover:bg-emerald-50"
      >
        <WhatsAppIcon width={18} height={18} />
      </a>
      <a
        href="#contact"
        className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-sm font-semibold text-white shadow-glow"
      >
        {CTA.primary}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}
