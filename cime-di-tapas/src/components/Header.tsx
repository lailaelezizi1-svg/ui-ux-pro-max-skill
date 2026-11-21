import { useState } from 'react'
import { business } from '../data/business'
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons'

const links = [['#storia', 'Il locale'], ['#aperitapas', 'Aperitapas'], ['#menu', 'Menu'], ['#recensioni', 'Recensioni'], ['#dove', 'Dove & orari']]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-cream backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="shrink-0" aria-label="Cime di Tapas, torna all'inizio">
          <img src="/brand/logo-sm.png" alt="Cime di Tapas" width={749} height={247} className="h-9 w-auto" />
        </a>
        <nav aria-label="Principale" className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([h, l]) => <a key={h} href={h} className="hover:text-emerald-glow">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${business.phoneTel}`} className="btn btn-primary !min-h-11 !px-4 text-sm"><PhoneIcon /><span className="hidden sm:inline">Prenota</span><span className="sm:hidden">Chiama</span></a>
          <button className="grid h-11 w-11 place-items-center rounded-full md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Chiudi menu' : 'Apri menu'} onClick={() => setOpen(!open)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-ink px-4 pb-4 md:hidden">
          {links.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-lg">{l}</a>)}
        </nav>
      )}
    </header>
  )
}
