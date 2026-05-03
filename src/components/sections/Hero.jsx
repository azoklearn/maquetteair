import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const ref = useRef(null)
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const overlay = useTransform(scrollYProgress, [0, 1], [0.35, 0.7])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line span', {
        yPercent: 110,
        duration: 1.4,
        ease: 'expo.out',
        stagger: 0.07,
        delay: 0.4,
      })
      gsap.from('.hero-meta', {
        opacity: 0,
        y: 30,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.1,
        delay: 1.1,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink">
      <motion.div
        ref={imgRef}
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="/hero.jpg"
          alt="Intérieur haut de gamme — Conciergerie Roannaise"
          className="w-full h-[120%] object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,152,90,0.15),transparent_60%)]" />

      <div className="relative z-10 h-full container-luxe flex flex-col justify-end pb-16 md:pb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-meta inline-flex items-center gap-3 text-[11px] uppercase tracking-ultra text-sand-50/70"
        >
          <span className="w-8 h-px bg-gold"/> Conciergerie Airbnb · Roanne, Loire
        </motion.span>

        <h1 className="mt-8 h-display text-sand-50 text-[12vw] sm:text-[9vw] lg:text-[7.6vw] leading-[0.92]">
          <span className="hero-line block overflow-hidden"><span className="inline-block">Maximisez vos</span></span>
          <span className="hero-line block overflow-hidden"><span className="inline-block italic text-gold">revenus locatifs</span></span>
          <span className="hero-line block overflow-hidden"><span className="inline-block">sans le moindre effort.</span></span>
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-8 md:items-end">
          <p className="hero-meta text-sand-50/75 max-w-md leading-relaxed">
            Air Hôtes prend en charge l'intégralité de votre location courte durée à Roanne et ses alentours — gestion, voyageurs, optimisation, ménage. Vous percevez. Nous orchestrons.
          </p>
          <div className="hero-meta flex flex-wrap items-center gap-4 md:justify-end">
            <Link to="/estimation" className="btn-primary bg-sand-50 text-ink hover:bg-gold">
              Estimer mon bien
              <ArrowRight size={16}/>
            </Link>
            <a href="#services" className="text-sand-50/80 text-sm tracking-wide nav-link">
              Découvrir les services
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 right-6 md:right-16 z-10 flex items-center gap-3 text-sand-50/60 text-[11px] tracking-ultra uppercase"
      >
        <span>Scroll</span>
        <span className="relative w-px h-12 bg-sand-50/20 overflow-hidden">
          <motion.span
            className="absolute top-0 left-0 w-px h-1/3 bg-gold"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-sand-50/10 bg-ink/40 backdrop-blur-md py-4 overflow-hidden">
        <div className="marquee text-sand-50/60 text-[11px] tracking-ultra uppercase">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 shrink-0">
              {['Gestion clé en main', 'Optimisation Airbnb', 'Coordination voyageurs', 'Shooting drone', 'Ménage hôtelier', 'Roanne · Loire'].map((s, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span>{s}</span><span className="w-1 h-1 rounded-full bg-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
