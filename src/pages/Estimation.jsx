import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal, { RevealText } from '../components/Reveal'
import Simulator from '../components/sections/Simulator'

export default function Estimation() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-sand-50">
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Estimation gratuite</span>
            <h1 className="h-display text-5xl md:text-8xl mt-6 leading-[0.96]">
              <RevealText text="Découvrez le" /> <br/>
              <span className="italic text-gold"><RevealText text="potentiel" delay={0.15}/></span> <br/>
              <RevealText text="de votre bien." delay={0.3}/>
            </h1>
            <Reveal>
              <p className="mt-8 text-ink/70 max-w-lg leading-relaxed">
                Quelques informations suffisent — notre équipe vous répond sous 24h avec une analyse complète, gratuite et sans engagement.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5">
            <ul className="space-y-4 mt-4 lg:mt-12">
              {['Étude personnalisée', 'Analyse du marché local', 'Stratégie tarifaire dédiée', 'Aucun engagement'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink/80">
                  <span className="w-7 h-7 rounded-full bg-ink text-gold flex items-center justify-center"><Check size={14}/></span>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Simulator />

      <section className="py-28 bg-sand-100">
        <div className="container-luxe">
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto bg-sand-50 rounded-3xl p-10 md:p-14 border border-ink/5"
          >
            <span className="eyebrow">Contact</span>
            <h2 className="h-display text-4xl md:text-5xl mt-4">Prenez contact avec nous</h2>

            {sent ? (
              <div className="mt-10 p-8 rounded-2xl bg-ink text-sand-50">
                <p className="font-display text-2xl">Merci, votre demande a bien été reçue.</p>
                <p className="text-sand-50/60 mt-2 text-sm">Notre équipe vous recontacte sous 24h.</p>
              </div>
            ) : (
              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                <Field label="Nom & prénom" />
                <Field label="Téléphone" type="tel"/>
                <Field label="Email" type="email" full/>
                <Field label="Adresse du bien" full/>
                <Field label="Message" textarea full/>
                <button type="submit" className="sm:col-span-2 btn-primary justify-center mt-4">Envoyer ma demande</button>
              </div>
            )}
          </motion.form>
        </div>
      </section>
    </>
  )
}

function Field({ label, type = 'text', textarea = false, full = false }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-[11px] uppercase tracking-ultra text-ink/50">{label}</span>
      {textarea ? (
        <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-ink/15 focus:border-ink outline-none py-3 text-ink placeholder:text-ink/30 transition-colors"/>
      ) : (
        <input type={type} className="mt-2 w-full bg-transparent border-b border-ink/15 focus:border-ink outline-none py-3 text-ink placeholder:text-ink/30 transition-colors"/>
      )}
    </label>
  )
}
