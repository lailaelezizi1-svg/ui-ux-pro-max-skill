import { hours } from './data/business'

export type OpenState = { state: 'open' | 'closed' | 'unknown'; text: string }

export function openNow(now = new Date()): OpenState {
  const rome = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }))
  const toMin = (s: string) => { const [h, m] = s.split(':').map(Number); return h * 60 + m }
  const minutes = rome.getHours() * 60 + rome.getMinutes()
  const today = rome.getDay()
  const yesterday = (today + 6) % 7
  const find = (d: number) => hours.find((h) => h.days.includes(d))!
  const t = find(today), y = find(yesterday)
  // coda di ieri dopo mezzanotte (chiude alle 01:00)
  if (y.open && minutes < toMin(y.close!)) return { state: 'open', text: 'Aperto ora · fino alle 01:00' }
  if (!t.open) return { state: 'unknown', text: 'Oggi orari variabili: chiamaci' }
  if (minutes >= toMin(t.open)) return { state: 'open', text: 'Aperto ora · fino alle 01:00' }
  return { state: 'closed', text: `Chiuso ora · apre alle ${t.open}` }
}
