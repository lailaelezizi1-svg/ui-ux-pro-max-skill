import { business } from '../data/business'

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-sm text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/brand/logo-sm.png" alt="Cime di Tapas" width={749} height={247} className="h-10 w-auto" loading="lazy" />
          <p>{business.street} · {business.zip} {business.city} ({business.region})<br />Tel. <a className="underline" href={`tel:${business.phoneTel}`}>{business.phone}</a></p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          <a href="#menu" className="hover:text-white">Menu</a><a href="#dove" className="hover:text-white">Dove & orari</a>
          <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google Maps</a>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-xs text-cream/40">© {new Date().getFullYear()} Cime di Tapas. Sito dimostrativo non ufficiale, in attesa di approvazione del titolare.</p>
    </footer>
  )
}
