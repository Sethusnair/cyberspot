import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { company } from '@/data/company';
import { fadeUp, viewportOnce } from '@/utils/motion';
import { ContactForm } from './contact/ContactForm';
import { WhatsAppIcon } from '@/components/layout/SocialIcons';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B1120] py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Exceptional Together"
          description="Tell us about your project and our team will get back to you with a personalized quotation."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <GlassCard dark className="flex h-full flex-col gap-8 p-8">
              <div>
                <h3 className="text-lg font-bold text-white">Our Office</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Reach out directly or send us your requirements — we typically respond within
                  one business day.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <MapPin size={16} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-white">Office Address</p>
                    {company.addressLines.map((line) => (
                      <p key={line} className="text-sm text-slate-300">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Mail size={16} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm text-slate-300 hover:text-violet-300"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Phone size={16} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${company.phone.replace(/\s+/g, '')}`}
                      className="text-sm text-slate-300 hover:text-violet-300"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <WhatsAppIcon width={16} height={16} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-white">WhatsApp</p>
                    <a
                      href={`https://wa.me/${company.whatsappDigits}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-300 hover:text-emerald-300"
                    >
                      {company.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Clock size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Business Hours</p>
                    <p className="text-sm text-slate-300">{company.businessHours}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.12}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-premium-lg sm:p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
