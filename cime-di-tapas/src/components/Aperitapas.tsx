import { business } from '../data/business'
import { PhoneIcon } from './Icons'

export default function Aperitapas() {
  return (
    <section id="aperitapas" className="relative overflow-hidden bg-emerald py-16 text-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-script text-3xl text-white">Dalle 17:00 alle 20:00</p>
          <h2 className="font-display text-4xl font-semibold sm:text-6xl">Aperitapas</h2>
          <p className="mt-3 max-w-lg text-lg">4 tapas scelte dalla cucina, bevanda inclusa. Il modo più semplice per cominciare la serata.</p>
        </div>
        <div className="rounded-[2rem] bg-ink p-8 text-center text-cream">
          <p className="font-display text-6xl font-semibold text-emerald-glow">€15</p>
          <p className="mb-5 text-sm text-cream/70">4 tapas + bevanda</p>
          <a href={`tel:${business.phoneTel}`} className="btn btn-primary"><PhoneIcon />Prenota</a>
        </div>
      </div>
    </section>
  )
}
