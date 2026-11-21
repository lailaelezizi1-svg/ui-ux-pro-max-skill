import { business, hours } from '../data/business'
import { ClockIcon, FacebookIcon, PhoneIcon, PinIcon } from './Icons'

export default function Visit() {
  return (
    <section id="dove" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-script text-3xl text-emerald-deep">Vieni a trovarci</p>
        <h2 className="font-display text-3xl font-semibold sm:text-5xl">Dove & orari</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <address className="not-italic">
              <p className="flex items-start gap-3 text-lg"><PinIcon /><span>{business.street}<br />{business.zip} {business.city} ({business.region})</span></p>
              <p className="mt-3 flex items-center gap-3 text-lg"><PhoneIcon /><a className="font-semibold underline decoration-emerald decoration-2 underline-offset-4" href={`tel:${business.phoneTel}`}>{business.phone}</a></p>
            </address>
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold"><ClockIcon />Orari</h3>
              <table className="mt-3 w-full max-w-md text-left">
                <caption className="sr-only">Orari di apertura</caption>
                <tbody>{hours.map((h) => (
                  <tr key={h.day} className="border-b border-ink/10"><th scope="row" className="py-2 pr-4 font-medium">{h.day}</th><td className="py-2 text-ink/75">{h.label}</td></tr>
                ))}</tbody>
              </table>
              <p className="mt-2 text-sm text-ink/60">Il mercoledì varia in base al periodo: telefona per conferma.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href={`tel:${business.phoneTel}`}><PhoneIcon />Prenota per telefono</a>
              <a className="btn btn-ghost" href={business.directionsUrl} target="_blank" rel="noopener noreferrer"><PinIcon />Indicazioni</a>
              <a className="btn btn-ghost" href={business.facebookUrl} target="_blank" rel="noopener noreferrer"><FacebookIcon />Facebook</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-lg">
            <iframe title="Mappa di Cime di Tapas a Monopoli" loading="lazy" className="h-[26rem] w-full"
              src={`https://www.google.com/maps?q=${business.lat},${business.lng}&z=17&output=embed`} referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  )
}
