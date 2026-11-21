export const business = {
  name: 'Cime di Tapas',
  legalHint: 'Bistrot Cime di Tapas',
  phone: '+39 080 645 6624',
  phoneTel: '+390806456624',
  street: 'Via Umberto I, 8-10',
  zip: '70043',
  city: 'Monopoli',
  region: 'BA',
  lat: 40.9518648,
  lng: 17.2990296,
  mapsUrl: 'https://www.google.com/maps/place/Cime+di+tapas/@40.9518688,17.2964493,17z/data=!3m1!4b1!4m6!3m5!1s0x1346352efd921191:0xed23d327ccfded0f!8m2!3d40.9518648!4d17.2990296',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=40.9518648,17.2990296',
  menuUrl: 'https://www.leggimenu.it/menu/cimeditapasmonopoli',
  facebookUrl: 'https://www.facebook.com/cimeditapas',
  siteUrl: 'https://www.cimeditapas.it',
}

// 0 = domenica. Chiusura alle 01:00 del giorno dopo. Mercoledì: variabile.
export const hours: { day: string; label: string; open?: string; close?: string; days: number[] }[] = [
  { day: 'Lunedì', label: '11:30 – 01:00', open: '11:30', close: '01:00', days: [1] },
  { day: 'Martedì', label: '11:30 – 01:00', open: '11:30', close: '01:00', days: [2] },
  { day: 'Mercoledì', label: 'Variabile / chiuso (telefona)', days: [3] },
  { day: 'Giovedì', label: '11:30 – 01:00', open: '11:30', close: '01:00', days: [4] },
  { day: 'Venerdì', label: '11:30 – 01:00', open: '11:30', close: '01:00', days: [5] },
  { day: 'Sabato', label: '11:30 – 01:00', open: '11:30', close: '01:00', days: [6] },
  { day: 'Domenica', label: '17:30 – 01:00', open: '17:30', close: '01:00', days: [0] },
]
