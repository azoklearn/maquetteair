import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Reveal, { RevealText } from '../Reveal'

const testimonials = [
  {
    name: 'Élodie M.',
    role: 'Propriétaire · Roanne centre',
    text: 'Mes revenus ont augmenté de plus de 40% dès le premier trimestre. L\'équipe est d\'une réactivité et d\'une élégance rares.',
  },
  {
    name: 'Julien P.',
    role: 'Investisseur · Riorges',
    text: 'Confier mon T3 à Air Hôtes est la meilleure décision de l\'année. Tout est fluide, transparent, sans aucune mauvaise surprise.',
  },
  {
    name: 'Sophie L.',
    role: 'Propriétaire · Saint-Alban',
    text: 'Le shooting et la mise en scène ont métamorphosé mon annonce. Les retours voyageurs sont dithyrambiques.',
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative py-28 md:py-40 bg-sand-100">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <span className="eyebrow">Témoignages</span>
            <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1.02]">
              <RevealText text="La parole" /> <br/>
              <span className="italic text-gold/90"><RevealText text="à nos hôtes." delay={0.2}/></span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="card-luxe bg-sand-50 hover:bg-ink hover:text-sand-50 group min-h-[380px] flex flex-col justify-between"
            >
              <div>
                <Quote className="text-gold" size={28}/>
                <p className="mt-6 font-display text-xl md:text-2xl leading-snug">"{t.text}"</p>
              </div>
              <div className="mt-8 pt-6 border-t border-ink/10 group-hover:border-sand-50/15 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-ink/50 group-hover:text-sand-50/50 mt-1">{t.role}</p>
                </div>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={12} fill="currentColor"/>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
