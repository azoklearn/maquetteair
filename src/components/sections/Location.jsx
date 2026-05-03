import { motion } from 'framer-motion'
import Reveal, { RevealText } from '../Reveal'

const cities = ['Roanne', 'Riorges', 'Mably', 'Le Coteau', 'Saint-Alban-les-Eaux', 'Villerest', 'Renaison', 'Commelle-Vernay']

export default function Location() {
  return (
    <section className="relative py-28 md:py-40 bg-sand-50 overflow-hidden">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="eyebrow">Zone d'intervention</span>
          <h2 className="h-display text-5xl md:text-7xl mt-6 leading-[1.02]">
            <RevealText text="Roanne" /> <br/>
            <span className="italic text-gold/90"><RevealText text="& alentours." delay={0.15}/></span>
          </h2>
          <Reveal>
            <p className="mt-8 text-ink/70 max-w-md leading-relaxed">
              Une équipe locale, présente sur le terrain, qui connaît parfaitement chaque quartier et chaque village du Roannais.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 gap-y-3 gap-x-6">
            {cities.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm text-ink/80"
              >
                <span className="w-1 h-1 rounded-full bg-gold"/>{c}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative aspect-[5/4] rounded-3xl overflow-hidden bg-ink"
        >
          {/* Stylized map */}
          <svg viewBox="0 0 600 480" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="g" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#B8985A" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="#0B0B0B" stopOpacity="0"/>
              </radialGradient>
              <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#FBF8F4" opacity="0.12"/>
              </pattern>
            </defs>
            <rect width="600" height="480" fill="#0B0B0B"/>
            <rect width="600" height="480" fill="url(#dots)"/>
            <circle cx="300" cy="240" r="220" fill="url(#g)"/>
            {/* roads */}
            <path d="M0 280 C 140 240, 240 320, 360 240 S 540 200, 600 220" stroke="#B8985A" strokeWidth="1" strokeDasharray="2 6" fill="none" opacity="0.4"/>
            <path d="M120 0 C 180 120, 260 180, 320 240 S 380 380, 360 480" stroke="#FBF8F4" strokeWidth="1" strokeDasharray="2 6" fill="none" opacity="0.2"/>
            <path d="M0 100 C 200 60, 360 120, 600 80" stroke="#FBF8F4" strokeWidth="1" strokeDasharray="2 6" fill="none" opacity="0.15"/>
            {/* points */}
            {[
              [300, 240, 'Roanne', true],
              [240, 200, 'Riorges'],
              [340, 180, 'Mably'],
              [350, 270, 'Le Coteau'],
              [220, 280, 'Villerest'],
              [180, 160, 'Renaison'],
              [380, 320, 'Commelle'],
              [260, 340, 'St-Alban'],
            ].map(([x, y, label, main], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={main ? 9 : 4} fill={main ? '#B8985A' : '#FBF8F4'} opacity={main ? 1 : 0.7}/>
                {main && <circle cx={x} cy={y} r="22" fill="none" stroke="#B8985A" opacity="0.3">
                  <animate attributeName="r" from="9" to="40" dur="2.4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite"/>
                </circle>}
                <text x={x + 14} y={y + 4} fill="#FBF8F4" fontSize={main ? 14 : 11} fontFamily="Inter" opacity={main ? 1 : 0.7}>{label}</text>
              </g>
            ))}
          </svg>

          <div className="absolute bottom-6 left-6 text-sand-50/70 text-[11px] tracking-ultra uppercase">
            Loire · 42 — France
          </div>
        </motion.div>
      </div>
    </section>
  )
}
