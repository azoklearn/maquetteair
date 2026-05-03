import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal, { RevealText } from '../Reveal'

const types = ['Studio', 'T2', 'T3', 'T4', 'Maison']

// Simple heuristic for UI demo (FR market — Roanne)
const baseNight = { Studio: 60, T2: 85, T3: 120, T4: 160, Maison: 210 }

export default function Simulator() {
  const [type, setType] = useState('T2')
  const [surface, setSurface] = useState(45)
  const [occupancy, setOccupancy] = useState(75)

  const monthly = useMemo(() => {
    const nightly = baseNight[type] * (1 + (surface - 30) / 200)
    const nights = (occupancy / 100) * 30
    return Math.round(nightly * nights)
  }, [type, surface, occupancy])

  const yearly = monthly * 12

  return (
    <section className="relative py-28 md:py-40 bg-ink text-sand-50 grain overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-gold/[0.07] blur-3xl pointer-events-none" />
      <div className="container-luxe relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-sand-50/50">Simulateur</span>
            <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1.02]">
              <RevealText text="Combien peut" /> <br/>
              <span className="italic text-gold"><RevealText text="rapporter votre bien ?" delay={0.2}/></span>
            </h2>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-sand-50/60 leading-relaxed">
              Une estimation indicative en quelques secondes — pour aller plus loin, demandez votre étude personnalisée.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-px bg-sand-50/10 rounded-3xl overflow-hidden"
        >
          <div className="lg:col-span-7 p-8 md:p-12 bg-ink space-y-10">
            <div>
              <label className="text-[11px] uppercase tracking-ultra text-sand-50/40">Type de bien</label>
              <div className="mt-4 flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-5 py-2.5 rounded-full text-sm border transition-all duration-500
                      ${type === t
                        ? 'bg-gold border-gold text-ink'
                        : 'border-sand-50/15 text-sand-50/80 hover:border-sand-50/40'}`}
                  >{t}</button>
                ))}
              </div>
            </div>

            <Slider label="Surface" suffix=" m²" value={surface} setValue={setSurface} min={15} max={250} step={1} />
            <Slider label="Taux d'occupation estimé" suffix=" %" value={occupancy} setValue={setOccupancy} min={30} max={95} step={1} />
          </div>

          <div className="lg:col-span-5 p-8 md:p-12 bg-gradient-to-br from-ink-800 to-ink relative">
            <div className="text-[11px] uppercase tracking-ultra text-sand-50/40">Revenu mensuel estimé</div>
            <div className="mt-4 font-display text-6xl md:text-7xl text-sand-50 tabular-nums">
              {monthly.toLocaleString('fr-FR')}<span className="text-gold">€</span>
            </div>
            <div className="mt-2 text-sm text-sand-50/60">
              soit <span className="text-gold">{yearly.toLocaleString('fr-FR')} €</span> / an (brut, indicatif)
            </div>

            <div className="mt-10 pt-8 border-t border-sand-50/10">
              <p className="text-sm text-sand-50/70 leading-relaxed">
                Cette estimation est indicative. Notre équipe peut affiner le potentiel réel de votre bien en quelques minutes.
              </p>
              <Link to="/estimation" className="mt-8 btn-primary bg-gold text-ink hover:bg-sand-50">
                Demander mon étude personnalisée
                <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Slider({ label, value, setValue, min, max, step, suffix = '' }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-[11px] uppercase tracking-ultra text-sand-50/40">{label}</label>
        <span className="font-display text-2xl text-sand-50 tabular-nums">{value}{suffix}</span>
      </div>
      <div className="mt-4 relative h-px bg-sand-50/15">
        <div className="absolute top-0 left-0 h-px bg-gold" style={{ width: pct + '%' }}/>
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
        <div className="absolute -top-2 w-4 h-4 rounded-full bg-gold ring-4 ring-gold/15 transition-all" style={{ left: `calc(${pct}% - 8px)` }}/>
      </div>
    </div>
  )
}
