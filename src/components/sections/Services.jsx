import { motion } from 'framer-motion'
import { KeyRound, Users, Sparkles, Camera, ArrowUpRight } from 'lucide-react'
import Reveal, { RevealText } from '../Reveal'

const services = [
  {
    icon: KeyRound,
    title: 'Gestion complète Airbnb',
    desc: 'Annonce, calendrier, tarifs dynamiques, réservations, états des lieux : tout est piloté pour vous.',
    tag: '01',
  },
  {
    icon: Users,
    title: 'Coordination voyageurs',
    desc: 'Accueil personnalisé, communication 7j/7, gestion des imprévus — une expérience irréprochable.',
    tag: '02',
  },
  {
    icon: Sparkles,
    title: 'Optimisation & décoration',
    desc: 'Conseil home-staging, mise en scène et choix mobilier pour transformer votre bien en pépite.',
    tag: '03',
  },
  {
    icon: Camera,
    title: 'Shooting professionnel & drone',
    desc: 'Photos cinématographiques et prises aériennes qui font la différence dès la première impression.',
    tag: '04',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-sand-50">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <span className="eyebrow">Nos services</span>
            <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1]">
              <RevealText text="Une conciergerie" /> <br/>
              <span className="italic text-gold/90"><RevealText text="entièrement dédiée" delay={0.15} /></span> <br/>
              <RevealText text="à votre tranquillité." delay={0.3} />
            </h2>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <p className="text-ink/70 leading-relaxed">
              De l'analyse stratégique à l'accueil voyageur, nous gérons chaque détail avec l'exigence d'une maison hôtelière. Vous gagnez du temps. Vos invités vivent une parenthèse mémorable.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group card-luxe min-h-[420px] flex flex-col justify-between hover:bg-ink hover:text-sand-50 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_rgba(11,11,11,0.4)]"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] tracking-ultra uppercase text-ink/40 group-hover:text-gold transition-colors">
                  / {s.tag}
                </span>
                <span className="w-10 h-10 rounded-full border border-ink/15 group-hover:border-gold flex items-center justify-center transition-all duration-700 ease-expo group-hover:rotate-45">
                  <ArrowUpRight size={16} className="group-hover:text-gold transition-colors"/>
                </span>
              </div>

              <div>
                <s.icon className="text-gold mb-6" size={28} strokeWidth={1.4} />
                <h3 className="font-display text-2xl md:text-[26px] leading-tight">{s.title}</h3>
                <p className="mt-4 text-sm text-ink/70 group-hover:text-sand-50/70 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
