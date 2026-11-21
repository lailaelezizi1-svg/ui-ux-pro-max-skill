export default function About() {
  const cards = [
    ['Piccoli piatti, grandi assaggi', 'Tapas da condividere, pensate per ordinare tanto e provare di tutto. Spesso anche in versione piatto o nel panino.'],
    ['Ingredienti con un nome', "Stracciatella dalla Masseria Aia Antica di Ostuni, capocollo di Corato, pecorino sardo DOP, chinotto presidio Slow Food."],
    ['Vegetariani benvenuti', 'Carote glassate, patate dolci con feta, polpette di pane, parmigiana, fave e cicorie: molte tapas sono senza carne né pesce.'],
    ['Cantina di carattere', 'Vini pugliesi e italiani, bollicine e una sezione di vini naturali, anche al calice. Più birre, spritz e drink.'],
  ]
  return (
    <section id="storia" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-script text-3xl text-emerald-deep">Il locale</p>
        <h2 className="font-display mt-1 max-w-2xl text-3xl font-semibold sm:text-5xl">Un tapas bar nel quartiere Murattiano</h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/75">
          Cime di Tapas si trova in Via Umberto I, a due passi da Piazza Vittorio Emanuele II. Atmosfera informale e intima, cucina che reinterpreta i sapori pugliesi in formato tapas e orari lunghi: dal pranzo fino all'una di notte.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([t, d]) => (
            <article key={t} className="rounded-3xl border border-ink/10 bg-white/60 p-6">
              <h3 className="font-display text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-ink/70">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
