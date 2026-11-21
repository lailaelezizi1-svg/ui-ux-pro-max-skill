import { useMemo, useState } from 'react'
import { COPERTO, menu, type Category } from '../data/menu'
import { LeafIcon } from './Icons'

const groups = [['cucina', 'Cucina'], ['bere', 'Da bere'], ['vino', 'Vini']] as const

export default function MenuSection() {
  const [group, setGroup] = useState<Category['group']>('cucina')
  const [veg, setVeg] = useState(false)
  const cats = useMemo(() => menu.filter((c) => c.group === group).map((c) => ({ ...c, items: veg ? c.items.filter((i) => i.tag === 'veg') : c.items })).filter((c) => c.items.length), [group, veg])
  return (
    <section id="menu" className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-4">
        <p className="font-script text-3xl text-emerald-deep">Il menu</p>
        <h2 className="font-display text-3xl font-semibold sm:text-5xl">Da ordinare in più round</h2>
        <p className="mt-4 max-w-2xl text-ink/70">Coperto €{COPERTO}. Gli speciali e i prezzi possono cambiare: la carta aggiornata è sempre quella in sala o sul <a className="underline decoration-emerald decoration-2 underline-offset-4" href="https://www.leggimenu.it/menu/cimeditapasmonopoli" target="_blank" rel="noopener noreferrer">menu digitale</a>.</p>
        <div className="sticky top-16 z-30 -mx-4 mt-8 flex flex-wrap items-center gap-3 bg-cream/95 px-4 py-3 backdrop-blur">
          <div role="tablist" aria-label="Sezioni del menu" className="flex rounded-full bg-ink/10 p-1">
            {groups.map(([id, label]) => (
              <button key={id} role="tab" aria-selected={group === id} onClick={() => setGroup(id)}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition ${group === id ? 'bg-ink text-cream' : 'text-ink/70 hover:text-ink'}`}>{label}</button>
            ))}
          </div>
          <label className="flex min-h-11 cursor-pointer items-center gap-2 text-sm font-medium">
            <input type="checkbox" checked={veg} onChange={(e) => setVeg(e.target.checked)} className="h-5 w-5 accent-emerald-600" />
            Solo vegetariano <span className="sr-only">(indicativo: chiedi sempre allo staff)</span>
          </label>
        </div>
        {cats.length === 0 && <p className="mt-10 text-ink/60">Nessuna voce vegetariana in questa sezione.</p>}
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {cats.map((c) => (
            <div key={c.id} className={c.items.length > 12 ? 'lg:col-span-2' : ''}>
              <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
              {c.intro && <p className="text-sm text-emerald-deep">{c.intro}</p>}
              <ul className={`mt-4 ${c.items.length > 12 ? 'gap-x-12 lg:columns-2' : ''}`}>
                {c.items.map((i) => (
                  <li key={c.id + i.name} className="mb-4 break-inside-avoid">
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium">{i.name}</span>
                      {i.tag === 'veg' && <span title="Vegetariano" className="text-emerald-deep"><LeafIcon /><span className="sr-only">vegetariano</span></span>}
                      {i.tag === 'new' && <span className="rounded bg-terracotta px-1.5 text-[10px] font-bold text-white uppercase">novità</span>}
                      <span className="dot-leader" aria-hidden />
                      <span className="shrink-0 text-right font-semibold">{i.price}</span>
                    </div>
                    {i.note && <p className="text-sm text-ink/60">{i.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink/60">Allergeni e intolleranze: comunicali sempre al personale prima di ordinare. Il filtro vegetariano è indicativo.</p>
      </div>
    </section>
  )
}
