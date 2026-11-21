import { business } from '../data/business'
import { StarIcon } from './Icons'

export default function Reviews() {
  const themes = ['Personale cordiale e attento ai consigli', 'Ottima scelta di vini, birre e drink', 'Buon rapporto qualità/prezzo', 'Opzioni vegetariane apprezzate']
  return (
    <section id="recensioni" className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-script text-3xl text-emerald-glow">Dicono di noi</p>
        <h2 className="font-display text-3xl font-semibold sm:text-5xl">Piace a chi passa da Monopoli</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-2 gap-4">
            {[['4,7', 'Google', 'oltre 1.300 recensioni'], ['4,6', 'Tripadvisor', 'oltre 230 recensioni']].map(([s, n, c]) => (
              <div key={n} className="rounded-3xl border border-white/10 bg-ink-soft p-6">
                <p className="font-display text-5xl font-semibold text-emerald-glow">{s}</p>
                <div className="mt-1 flex text-emerald-glow" aria-label={`${s} stelle su 5`}>{[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} />)}</div>
                <p className="mt-3 font-semibold">{n}</p><p className="text-sm text-cream/60">{c}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-ink-soft p-6">
            <h3 className="font-display text-xl font-semibold">Cosa apprezzano gli ospiti</h3>
            <ul className="mt-4 space-y-2">{themes.map((t) => <li key={t} className="flex gap-3"><span className="text-emerald-glow">●</span>{t}</li>)}</ul>
            <a className="btn btn-ghost mt-6" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Leggi le recensioni su Google Maps</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-cream/50">Valutazioni indicative rilevate a novembre 2026 da portali pubblici; sintesi dei temi ricorrenti nelle recensioni degli ospiti.</p>
      </div>
    </section>
  )
}
