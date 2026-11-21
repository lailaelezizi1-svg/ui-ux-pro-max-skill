import { useEffect, useState } from 'react'
import { business } from '../data/business'
import { openNow } from '../lib'
import { ClockIcon, PhoneIcon, PinIcon } from './Icons'

export default function Hero() {
  const [status, setStatus] = useState(openNow())
  useEffect(() => { const t = setInterval(() => setStatus(openNow()), 60000); return () => clearInterval(t) }, [])
  const color = status.state === 'open' ? 'bg-emerald-glow' : status.state === 'closed' ? 'bg-terracotta' : 'bg-cream/60'
  return (
    <section id="top" className="grain relative overflow-hidden bg-ink pt-28 pb-20 text-cream">
      <div aria-hidden className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-emerald/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-terracotta/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm" role="status">
            <span className={`h-2.5 w-2.5 rounded-full ${color}`} aria-hidden />{status.text}
          </p>
          <h1 className="font-display text-4xl leading-[1.08] font-semibold sm:text-6xl">
            Tapas, vino e Puglia, <span className="font-script text-emerald-glow text-[1.15em] font-normal">a piccoli assaggi.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Nel cuore di Monopoli, un tapas bar dove si condivide: stracciatella di Ostuni, capocollo di Corato, polpette al sugo, fave e cicorie, in compagnia di una cantina di vini pugliesi e naturali.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${business.phoneTel}`} className="btn btn-primary"><PhoneIcon />Prenota un tavolo</a>
            <a href="#menu" className="btn btn-ghost">Sfoglia il menu</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/75">
            <li className="flex items-center gap-2"><PinIcon />{business.street}, {business.city}</li>
            <li className="flex items-center gap-2"><ClockIcon />Aperto fino all'1 di notte</li>
          </ul>
        </div>
        <div className="rise [animation-delay:.15s]">
          <div className="-rotate-2 rounded-3xl bg-cream p-3 shadow-2xl shadow-black/50">
            <img src="/brand/logo-sign.webp" alt="Insegna in legno di Cime di Tapas con scritta verde" width={800} height={262} className="w-full rounded-2xl" fetchPriority="high" />
          </div>
          <p className="mt-5 text-center text-sm text-cream/70">Pochi tavoli: meglio prenotare, soprattutto la sera.</p>
        </div>
      </div>
    </section>
  )
}
