import { motion } from 'framer-motion';
import { company } from '@/data/company';
import { WhatsAppIcon } from './SocialIcons';

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi ${company.name}, I'd like to enquire about your services.`,
  );

  return (
    <motion.a
      href={`https://wa.me/${company.whatsappDigits}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${company.name} on WhatsApp`}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-premium-lg lg:flex"
    >
      <span className="absolute inset-0 animate-glow-pulse rounded-full bg-emerald-500/40 blur-md" />
      <WhatsAppIcon width={26} height={26} className="relative" />
    </motion.a>
  );
}
