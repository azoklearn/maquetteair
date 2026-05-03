import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RevealText } from '../Reveal'

export default function CTA() {
  return (
    <section className="relative py-28 md:py-40 bg-sand-50 overflow-hidden">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] overflow-hidden bg-ink text-sand-50 p-10 md:p-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,152,90,0.18),transparent_60%)] pointer-events-none"/>
          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-sand-50/50">À vous de jouer</span>
              <h2 className="h-display text-5xl md:text-8xl mt-6 leading-[0.96]">
                <RevealText text="Confiez-nous" /> <br/>
                <span className="italic text-gold"><RevealText text="votre bien." delay={0.2}/></span>
              </h2>
              <p className="mt-8 text-sand-50/65 max-w-lg leading-relaxed">
                Estimation gratuite, sans engagement. Une équipe locale vous rappelle sous 24h pour discuter du potentiel de votre logement.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                to="/estimation"
                className="group inline-flex flex-col items-start gap-6 p-8 rounded-3xl border border-sand-50/15 hover:border-gold transition-colors duration-700"
              >
                <span className="w-14 h-14 rounded-full bg-gold text-ink flex items-center justify-center transition-transform duration-700 ease-expo group-hover:rotate-45">
                  <ArrowUpRight size={20}/>
                </span>
                <div>
                  <p className="font-display text-3xl">Démarrer maintenant</p>
                  <p className="text-sm text-sand-50/55 mt-1">Réponse sous 24h</p>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
