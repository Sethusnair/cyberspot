import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { upcomingPortfolio } from '@/data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion';

const upcomingIcons = [Sparkles, ShieldCheck];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          description="A full case-study archive of our engagements is on the way."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {upcomingPortfolio.map((card, i) => {
            const Icon = upcomingIcons[i];
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white/60 p-8 backdrop-blur"
              >
                <span className="absolute right-4 top-4 rounded-full bg-violet-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-600">
                  Coming Soon
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-glow">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
