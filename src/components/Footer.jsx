import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { RevealText } from './Reveal'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-sand-50 grain overflow-hidden">
      <div className="container-luxe pt-28 pb-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="eyebrow text-sand-50/50">Restons en contact</span>
            <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1.02]">
              <RevealText text="Confiez-nous" /> <br />
              <span className="italic text-gold"><RevealText text="votre bien." delay={0.15} /></span>
            </h2>
            <p className="mt-8 max-w-md text-sand-50/60 leading-relaxed">
              Une équipe locale, exigeante, et passionnée — au service de vos revenus locatifs à Roanne et alentours.
            </p>
            <Link to="/estimation" className="mt-10 inline-flex items-center gap-3 group">
              <span className="font-display text-2xl md:text-3xl">Démarrer une estimation</span>
              <span className="w-12 h-12 rounded-full border border-sand-50/30 flex items-center justify-center transition-all duration-500 ease-expo group-hover:bg-gold group-hover:border-gold group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[11px] uppercase tracking-ultra text-sand-50/40">Contact</h4>
              <ul className="mt-6 space-y-4 text-sand-50/80">
                <li className="flex items-center gap-3"><Phone size={14} className="text-gold"/> 04 77 00 00 00</li>
                <li className="flex items-center gap-3"><Mail size={14} className="text-gold"/> contact@airhotes.fr</li>
                <li className="flex items-center gap-3"><MapPin size={14} className="text-gold"/> Roanne, Loire (42)</li>
                <li className="flex items-center gap-3"><Instagram size={14} className="text-gold"/> @airhotes.roanne</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-ultra text-sand-50/40">Navigation</h4>
              <ul className="mt-6 space-y-4">
                <li><a href="/#services" className="hover:text-gold transition-colors">Services</a></li>
                <li><a href="/#process" className="hover:text-gold transition-colors">Notre méthode</a></li>
                <li><a href="/#temoignages" className="hover:text-gold transition-colors">Témoignages</a></li>
                <li><Link to="/estimation" className="hover:text-gold transition-colors">Estimation</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-sand-50/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-sand-50/40">
          <span>© {new Date().getFullYear()} Air Hôtes Conciergerie Roannaise — Tous droits réservés.</span>
          <span>Crafted with care in Roanne · Loire</span>
        </div>
      </div>

      <div className="pointer-events-none select-none whitespace-nowrap">
        <h2 className="font-display text-[22vw] leading-none text-sand-50/[0.04] -mb-[5vw] text-center">AirHôtes</h2>
      </div>
    </footer>
  )
}
