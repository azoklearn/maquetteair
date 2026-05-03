import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/#services', label: 'Services' },
  { to: '/#process', label: 'Notre méthode' },
  { to: '/#temoignages', label: 'Témoignages' },
  { to: '/estimation', label: 'Estimation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-expo
          ${scrolled
            ? 'bg-sand-50/85 backdrop-blur-xl border-b border-ink/5 py-4'
            : 'bg-transparent py-6'}`}
      >
        <div className="container-luxe flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center transition-transform duration-700 ease-expo group-hover:rotate-180">
              <span className="font-display text-gold text-lg leading-none">A</span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-[15px] tracking-tight">Air Hôtes</span>
              <span className="text-[10px] tracking-ultra uppercase text-ink/50">Conciergerie Roannaise</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="nav-link text-sm text-ink/80 hover:text-ink transition-colors">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/estimation" className="btn-primary text-xs">
              Estimer mon bien
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center"
            aria-label="Ouvrir le menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink text-sand-50"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-luxe py-6 flex items-center justify-between">
              <span className="font-display text-gold text-2xl">A</span>
              <button onClick={() => setOpen(false)} className="w-11 h-11 rounded-full border border-sand-50/20 flex items-center justify-center" aria-label="Fermer">
                <X size={18} />
              </button>
            </div>
            <nav className="container-luxe mt-12 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={l.to} className="font-display text-5xl md:text-6xl tracking-tight hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-luxe mt-16">
              <Link to="/estimation" className="btn-primary bg-gold text-ink hover:bg-sand-50">Estimer mon bien</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
