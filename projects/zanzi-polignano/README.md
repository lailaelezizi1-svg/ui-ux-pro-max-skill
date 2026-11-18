# Zanzi · Osteria Trattoria — sito web

Sito vetrina per **Zanzi**, trattoria di mare in Via Toselli 20, Polignano a Mare (BA).
HTML, CSS e JavaScript statici: niente framework né build. Si pubblica su qualsiasi hosting.

## Cosa contiene

| Sezione | Contenuto |
|---|---|
| Hero | Tramonto da Largo Ardito, CTA "Prenota" / "Menù", voto Google, stato **aperto/chiuso in tempo reale** (ora di Roma) |
| La storia | Osteria di famiglia, da pizzeria a trattoria di mare, punti di forza |
| I piatti del cuore | 5 piatti citati nelle recensioni (calamarata al pistacchio, crudo, bruschette, spaghetti, frittura) |
| Menù | Menù a schede (Antipasti, Primi, Secondi, Pizze, Dolci, Da bere), con nota allergeni (Reg. UE 1169/2011) |
| L'esperienza | Tavoli al tramonto, servizi (fronte mare, aria condizionata, bambini, accessibilità) |
| Recensioni | 4 recensioni Google reali con link a tutte le recensioni |
| Galleria | Polignano + piatti |
| Prenota | Modulo che **apre WhatsApp con il messaggio già compilato** (nessun server, nessun costo) |
| Dove siamo | Indirizzo, indicazioni, orari, mappa Google caricata solo su consenso |
| Footer | Contatti, orari, social, privacy, crediti foto |

Il sito è anche:
- **bilingue IT/EN** (lingua scelta in automatico dal browser, pulsante IT/EN, link `?lang=en`)
- **SEO-ready**: meta tag, Open Graph per la condivisione, dati strutturati `Restaurant` (schema.org), sitemap, robots
- **conforme GDPR**: font ospitati in locale, nessun cookie di tracciamento, mappa Google solo dopo un clic, pagina privacy
- **accessibile**: contrasti WCAG AA, navigazione da tastiera, testi alternativi, `prefers-reduced-motion`
- **veloce**: immagini WebP ottimizzate, lazy loading, circa 1,8 MB in tutto
- **mobile-first**: barra fissa "Chiama / Prenota" su smartphone

## Da fare prima di pubblicare

1. **Foto vere del ristorante (la cosa più importante).** Le foto attuali vengono da Wikimedia Commons
   (licenze CC, crediti nel footer). Quelle di Polignano vanno bene. Le foto dei **piatti** però vanno sostituite
   con quelle del ristorante: chiedetele al titolare o usate quelle della sua pagina Facebook, con il suo permesso.
   Non usate le foto dei clienti su Google/TripAdvisor: appartengono a chi le ha scattate.
   - Sovrascrivete i file in `assets/img/` con lo stesso nome e le stesse proporzioni
     (piatti 800×600, hero 1920×1280, ecc.), oppure aggiornate `src`, `width` e `height` in `index.html`.
   - Quando le foto sono tutte vostre, svuotate `credits: []` in `assets/js/content.js`.
2. **Menù e prezzi.** Il menù è in `assets/js/content.js`, nel blocco `menu`. I piatti vengono da recensioni e foto
   dei clienti: **verificateli con il titolare**, soprattutto le pizze ("Margherita", "La Zanzi") e i vini.
   Aggiungete i prezzi nel campo `price` (es. `price: "€ 14"`): se resta vuoto, il prezzo non si vede.
3. **Dati legali.** In `index.html` sostituite `P.IVA [da inserire]`. In `privacy.html` completate i campi tra
   parentesi quadre: ragione sociale, P.IVA, email, data.
4. **Dominio.** Il sito usa `https://www.zanzipolignano.it` come segnaposto (in `index.html`, `robots.txt` e
   `sitemap.xml`). Cercate e sostituite con il dominio vero, dopo averne verificato la disponibilità.
5. **WhatsApp.** Il modulo invia al +39 329 202 4432. Controllate che il numero abbia WhatsApp attivo
   (meglio ancora WhatsApp Business). Il numero si cambia in `content.js` (`whatsapp`) e nei link `wa.me` dell'HTML.
6. **Orari.** Sono quelli di Google (tutti i giorni 12–15 e 19–24). Se in inverno cambiano, aggiornate `hours`
   in `content.js` e le righe orari in `index.html`.
7. **Testi.** Storia e descrizioni sono scritti a partire dalle recensioni pubbliche. Fateli rileggere al titolare
   e personalizzateli (nome dell'oste, anno di apertura, aneddoti di famiglia…).

## Consigli per il titolare (fuori dal sito)

- **Rivendicare la scheda Google Business Profile.** Al momento la scheda su Google Maps risulta *non rivendicata*.
  Rivendicarla permette di aggiungere sito, foto ufficiali, menù e orari stagionali, e di rispondere alle recensioni.
- **Rispondere alle recensioni**, anche a quelle negative, con toni cortesi: su TripAdvisor la media è più bassa che su Google.
- **Unificare le schede TripAdvisor**: oggi il locale compare con più nomi ("Zanzi Pizza", "Ristorante Zanzi",
  "Trattoria Zanzi"). Chiedete a TripAdvisor di unire i duplicati.
- **Aprire un profilo Instagram**, perché per un locale vista mare sul tramonto è il canale più efficace,
  e aggiungerlo al footer (`.social`) e ai `sameAs` nei dati strutturati.

## Pubblicazione

Il sito è una cartella statica: basta caricarla.

- **Netlify** (gratis): trascinate la cartella su <https://app.netlify.com/drop>, poi collegate il dominio.
- **GitHub Pages**, **Cloudflare Pages**, **Vercel** o un hosting tradizionale via FTP: caricate tutto il contenuto della cartella.
- `404.html` usa percorsi assoluti (`/assets/...`): funziona quando il sito è nella radice del dominio.

Anteprima in locale:

```bash
cd projects/zanzi-polignano
python3 -m http.server 8000
# aprite http://localhost:8000
```

## Struttura

```
index.html            Pagina principale (testi italiani)
privacy.html          Informativa privacy e cookie
404.html              Pagina di errore
assets/css/style.css  Design system: colori, tipografia, componenti
assets/js/content.js  Contenuti modificabili: menù, orari, traduzioni EN, crediti
assets/js/main.js     Interazioni: lingua, menù, stato aperto/chiuso, prenotazione, mappa
assets/img/           Foto WebP, piatto decorativo (plate.svg), immagine social (og-cover.jpg)
assets/fonts/         Playfair Display + Karla (OFL), ospitati in locale
```

## Design

- **Palette** presa dal locale vero: blu ceramica pugliese `#1b4b8f`, bianco calce `#f7f3ea`,
  blu notte `#0f2a4a`, arancio tramonto `#f08a5d`.
- **Tipografia**: Playfair Display (titoli, corsivo per gli accenti) + Karla (testi).
- **Motivi**: piatto in ceramica a pennellate blu (come quelli del ristorante) e bordo a onde.

## Fonti delle informazioni

Scheda Google Maps (indirizzo, telefono, orari, voto 4,1 su 452 recensioni, servizi), recensioni Google,
pagina Facebook "Osteria trattoria Zanzipizza", schede TripAdvisor, Wanderlog e piatti.menu (novembre 2026).
