import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, CalendarCheck, Star, Coins } from 'lucide-react'
import Reveal, { RevealText } from '../Reveal'

function Counter({ to, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  useEffect(() => {
    if (!inView || !ref.current) return
    const el = ref.current
    const start = performance.now()
    const from = 0
    const ease = (t) => 1 - Math.pow(1 - t, 4)
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000))
      const v = from + (to - from) * ease(p)
      el.textContent = prefix + Math.round(v).toLocaleString('fr-FR') + suffix
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, suffix, prefix, duration])
  return <span ref={ref}>{prefix}0{suffix}</span>
}

const stats = [
  { icon: TrendingUp, label: 'Revenus optimisés en moyenne', value: 38, suffix: '%' },
  { icon: CalendarCheck, label: 'Taux d\'occupation moyen', value: 84, suffix: '%' },
  { icon: Star, label: 'Note moyenne voyageurs', value: 4.92, suffix: '/5', float: true },
  { icon: Coins, label: 'Biens sous gestion', value: 60, suffix: '+' },
]

function FloatCounter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  useEffect(() => {
    if (!inView || !ref.current) return
    const el = ref.current
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 2000)
      const ease = 1 - Math.pow(1 - p, 4)
      el.textContent = (to * ease).toFixed(2) + suffix
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, suffix])
  return <span ref={ref}>0.00{suffix}</span>
}

export default function Performance() {
  return (
    <section className="relative py-28 md:py-40 bg-ink text-sand-50 overflow-hidden grain">
      {/* glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-gold/[0.08] blur-3xl pointer-events-none" />

      <div className="container-luxe relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <span className="eyebrow text-sand-50/50">Performance</span>
            <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1.02]">
              <RevealText text="Des résultats qui" /> <br/>
              <span className="italic text-gold"><RevealText text="parlent d'eux-mêmes." delay={0.2} /></span>
            </h2>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-sand-50/60 leading-relaxed">
              Nos hôtes constatent en moyenne une hausse significative de leur revenu net, sans s'occuper de quoi que ce soit. La donnée parle, nous l'optimisons.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-50/10 rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="bg-ink p-8 md:p-10 min-h-[260px] flex flex-col justify-between"
            >
              <s.icon className="text-gold" size={26} strokeWidth={1.4}/>
              <div>
                <div className="font-display text-5xl md:text-6xl tracking-tight text-sand-50">
                  {s.float
                    ? <FloatCounter to={s.value} suffix={s.suffix}/>
                    : <Counter to={s.value} suffix={s.suffix}/>}
                </div>
                <p className="mt-3 text-xs uppercase tracking-ultra text-sand-50/50">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
