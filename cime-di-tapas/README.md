# Cime di Tapas – sito web (Monopoli)

Sito one-page, mobile-first, per il tapas bar **Cime di Tapas** (Via Umberto I, 8-10, Monopoli). Progetto dimostrativo in attesa di approvazione del titolare.

## Tecnologie
React 19 · TypeScript · Vite · Tailwind CSS v4 · Google Fonts (Fraunces, DM Sans, Yellowtail).

## Avvio
```bash
npm install
npm run dev       # sviluppo su http://localhost:5173
npm run build     # type-check + build in dist/
npm run preview   # anteprima del build
```

## Struttura
```
src/data/business.ts   contatti, orari, coordinate (unica fonte)
src/data/menu.ts       menu completo (trascrizione LeggiMenu fornita dal cliente)
src/components/        Header, Hero, About, Aperitapas, MenuSection, Reviews, Visit, Footer
src/lib.ts             logica "aperto ora" (fuso Europe/Rome)
src/assets/brand/      logo originale
public/brand/          logo (PNG trasparente, ridotto) e insegna in WebP
public/                favicon, og.jpg, robots.txt, sitemap.xml
```

## Risorse usate
- Logo: immagine fornita dal cliente (nessuna modifica al disegno; ritaglio dello sfondo ligneo per la versione trasparente).
- Palette dal logo: verde smeraldo (~#12A584), inchiostro scuro, crema legno.
- Menu, telefono e orari: forniti dal cliente. Indirizzo e coordinate: Google Maps.

## Funzionalità
Stato "aperto ora" in tempo reale, menu filtrabile (Cucina/Da bere/Vini, solo vegetariano), CTA telefonica, indicazioni e mappa, SEO (title/meta, Open Graph, schema.org `Restaurant`, sitemap, robots), accessibilità (skip link, ARIA, focus visibile, reduced-motion).

## Da completare / verificare
- **Foto del locale e dei piatti**: non disponibili, quindi la home usa l'insegna. Da inserire quando il cliente le fornisce.
- **Dominio**: canonical, sitemap e Open Graph puntano a `https://www.cimeditapas.it/`, non verificato come attivo. Sostituire con il dominio reale.
- **Email**: assente per scelta del titolare. Le prenotazioni avvengono solo per telefono.
- **Pagina Facebook** (`facebook.com/cimeditapas`): segnalata da una directory, non verificata. Instagram non trovato.
- **Orari del mercoledì**: variabili, indicati come tali.
- **Valutazioni** (Google 4,7; Tripadvisor 4,6): rilevate da Wanderlog, da riverificare. Nessuna recensione testuale è riportata.
- Il filtro "vegetariano" è dedotto dagli ingredienti, quindi indicativo e da confermare con il titolare.
- Non eseguito un audit Lighthouse completo; build e render verificati con Playwright (desktop e mobile, nessun errore JS).
