import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal, { RevealText } from '../Reveal'

const steps = [
  { n: '01', title: 'Analyse', text: 'Audit de votre bien, étude du marché local et estimation du potentiel locatif réel à Roanne.' },
  { n: '02', title: 'Optimisation', text: 'Recommandations design, home-staging et shooting professionnel pour valoriser chaque détail.' },
  { n: '03', title: 'Mise en ligne', text: 'Création d\'annonces premium multi-plateformes (Airbnb, Booking) avec stratégie tarifaire dynamique.' },
  { n: '04', title: 'Gestion complète', text: 'Voyageurs, ménage hôtelier, blanchisserie, maintenance — vous touchez vos revenus, on s\'occupe du reste.' },
]

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" ref={ref} className="relative py-28 md:py-40 bg-sand-50">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <span className="eyebrow">Notre méthode</span>
            <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1.02]">
              <RevealText text="Quatre étapes." /> <br/>
              <span className="italic text-gold/90"><RevealText text="Aucune friction." delay={0.2}/></span>
            </h2>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-ink/70 leading-relaxed">
              Un processus éprouvé, transparent, et entièrement orchestré par notre équipe locale.
            </p>
          </Reveal>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {/* progress line under (mobile) and across (desktop) */}
          <div className="absolute -top-px left-0 right-0 h-px bg-ink/10 hidden md:block" />
          <motion.div
            className="absolute -top-px left-0 h-px bg-gold hidden md:block origin-left"
            style={{ width: lineHeight }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="bg-sand-50 p-8 md:p-10 min-h-[320px] flex flex-col justify-between group hover:bg-sand-100 transition-colors duration-700"
            >
              <span className="font-display text-7xl text-ink/10 group-hover:text-gold transition-colors duration-700">{s.n}</span>
              <div>
                <h3 className="font-display text-3xl tracking-tight">{s.title}</h3>
                <p className="mt-4 text-sm text-ink/70 leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
