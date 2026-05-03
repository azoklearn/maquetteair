import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal, { RevealText } from '../Reveal'

const BEFORE = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80'
const AFTER  = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'

export default function BeforeAfter() {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const onMove = (clientX) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.min(100, Math.max(0, p)))
  }

  return (
    <section className="relative py-28 md:py-40 bg-sand-100">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Avant / Après</span>
            <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1.02]">
              <RevealText text="L'art subtil" /> <br/>
              <span className="italic text-gold/90"><RevealText text="de la transformation." delay={0.2}/></span>
            </h2>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-ink/70 leading-relaxed">
              Faites glisser le curseur pour observer l'avant / après d'une mise en scène signée Air Hôtes — du brut au remarquable.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          ref={ref}
          className="relative aspect-[16/10] rounded-3xl overflow-hidden select-none cursor-ew-resize bg-ink shadow-[0_50px_120px_-40px_rgba(11,11,11,0.4)]"
          onMouseDown={(e) => { dragging.current = true; onMove(e.clientX) }}
          onMouseMove={(e) => dragging.current && onMove(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => onMove(e.touches[0].clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
        >
          <img src={AFTER} alt="Après" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={BEFORE} alt="Avant" className="absolute inset-0 h-full object-cover" style={{ width: `${100 / (pos/100)}%`, maxWidth: 'none' }} loading="lazy"/>
          </div>

          <span className="absolute top-6 left-6 text-[11px] tracking-ultra uppercase text-sand-50 bg-ink/40 backdrop-blur px-3 py-1.5 rounded-full">Avant</span>
          <span className="absolute top-6 right-6 text-[11px] tracking-ultra uppercase text-ink bg-sand-50/80 backdrop-blur px-3 py-1.5 rounded-full">Après</span>

          <div className="absolute top-0 bottom-0 w-px bg-sand-50 pointer-events-none" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-sand-50 shadow-xl flex items-center justify-center">
              <div className="flex gap-1">
                <span className="w-px h-3 bg-ink"/><span className="w-px h-3 bg-ink"/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
