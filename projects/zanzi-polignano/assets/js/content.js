/* ==========================================================================
   Zanzi — contenuti modificabili
   - MENU: aggiungete / togliete piatti e inserite i prezzi (campo "price").
     Se "price" è vuoto il prezzo non viene mostrato.
   - EN: traduzioni inglesi di tutti i testi marcati con data-i18n nell'HTML.
     Il testo italiano vive direttamente in index.html.
   ========================================================================== */
window.ZANZI = {
  phone: "+393292024432",
  whatsapp: "393292024432",

  /* Orari (ora di Roma). Ogni fascia: [apertura, chiusura] in "HH:MM".
     Indice 0 = domenica … 6 = sabato. */
  hours: {
    0: [["12:00", "15:00"], ["19:00", "24:00"]],
    1: [["12:00", "15:00"], ["19:00", "24:00"]],
    2: [["12:00", "15:00"], ["19:00", "24:00"]],
    3: [["12:00", "15:00"], ["19:00", "24:00"]],
    4: [["12:00", "15:00"], ["19:00", "24:00"]],
    5: [["12:00", "15:00"], ["19:00", "24:00"]],
    6: [["12:00", "15:00"], ["19:00", "24:00"]]
  },

  /* --------------------------------------------------------------------- */
  menu: [
    {
      id: "antipasti",
      it: "Antipasti", en: "Starters",
      intro: { it: "Dal mare, crudo e cotto.", en: "From the sea, raw and cooked." },
      items: [
        { it: ["Bruschette di mare", "Pane casereccio abbrustolito con gamberi, alici, stracciatella e pomodorini"],
          en: ["Seafood bruschette", "Toasted country bread with prawns, anchovies, stracciatella and cherry tomatoes"],
          badge: { it: "Da provare", en: "Must try" }, price: "" },
        { it: ["Crudo di mare del giorno", "Gamberi, scampi e il meglio del pescato, serviti al naturale"],
          en: ["Raw seafood of the day", "Prawns, langoustines and the best of the catch, served simply"], price: "" },
        { it: ["Polpo alla griglia", "Polpo arrostito con olio extravergine pugliese e limone"],
          en: ["Grilled octopus", "Chargrilled octopus with Apulian extra-virgin olive oil and lemon"], price: "" },
        { it: ["Gamberi fritti", "In pastella leggera, con maionese ai capperi fatta in casa"],
          en: ["Fried prawns", "In a light batter, with homemade caper mayonnaise"], price: "" },
        { it: ["Zuppa di cozze", "Cozze, pomodoro, aglio e prezzemolo, con crostini di pane"],
          en: ["Mussel soup", "Mussels, tomato, garlic and parsley, with toasted bread"], price: "" }
      ]
    },
    {
      id: "primi",
      it: "Primi", en: "Pasta & rice",
      intro: { it: "La pasta, come si fa a Polignano.", en: "Pasta, the Polignano way." },
      items: [
        { it: ["Calamarata al pistacchio", "Calamari, pomodorini, granella di pistacchio e stracciatella"],
          en: ["Calamarata with pistachio", "Squid, cherry tomatoes, crushed pistachio and stracciatella"],
          badge: { it: "Il più amato", en: "Guest favourite" }, price: "" },
        { it: ["Spaghetti ai frutti di mare", "Cozze, vongole, gamberi e calamari al pomodorino"],
          en: ["Seafood spaghetti", "Mussels, clams, prawns and squid with cherry tomatoes"], price: "" },
        { it: ["Spaghetti alle vongole", "Vongole, aglio, prezzemolo e olio extravergine"],
          en: ["Spaghetti with clams", "Clams, garlic, parsley and extra-virgin olive oil"], price: "" },
        { it: ["Orecchiette con cime di rapa e gamberi rossi", "La tradizione barese incontra il mare"],
          en: ["Orecchiette with turnip greens and red prawns", "Bari tradition meets the sea"], price: "" },
        { it: ["Riso, patate e cozze", "Il grande classico della cucina barese, cotto al forno"],
          en: ["Rice, potatoes and mussels", "The great classic of Bari cooking, baked in the oven"],
          badge: { it: "Tradizione", en: "Tradition" }, price: "" }
      ]
    },
    {
      id: "secondi",
      it: "Secondi", en: "Mains",
      intro: { it: "Semplici, per far parlare il pesce.", en: "Simple, to let the fish speak." },
      items: [
        { it: ["Frittura mista", "Calamari, gamberi e pesce del giorno, con limone"],
          en: ["Mixed fried seafood", "Squid, prawns and fish of the day, with lemon"], price: "" },
        { it: ["Merluzzo fritto", "In pastella dorata e croccante"],
          en: ["Fried cod", "In a crisp golden batter"], price: "" },
        { it: ["Pescato del giorno", "Alla griglia o come lo consiglia l'oste — chiedete la disponibilità"],
          en: ["Catch of the day", "Grilled or as the host suggests — ask what's available"], price: "" }
      ]
    },
    {
      id: "pizze",
      it: "Pizze", en: "Pizza",
      intro: { it: "Poche, ma fatte come si deve.", en: "Just a few, done properly." },
      items: [
        { it: ["Margherita", "Pomodoro, fiordilatte e basilico"],
          en: ["Margherita", "Tomato, fior di latte mozzarella and basil"], price: "" },
        { it: ["La Zanzi", "La pizza della casa — chiedete com'è oggi"],
          en: ["La Zanzi", "Our house pizza — ask how it's made today"], price: "" }
      ]
    },
    {
      id: "dolci",
      it: "Dolci", en: "Desserts",
      intro: { it: "Per chiudere in dolcezza.", en: "A sweet ending." },
      items: [
        { it: ["Cassata ricotta e pistacchio", "Ricotta fresca e pistacchio, fatta in casa"],
          en: ["Ricotta and pistachio cassata", "Fresh ricotta and pistachio, homemade"], price: "" },
        { it: ["Dolce del giorno", "Chiedete la proposta di oggi"],
          en: ["Dessert of the day", "Ask for today's choice"], price: "" }
      ]
    },
    {
      id: "cantina",
      it: "Da bere", en: "Drinks",
      intro: { it: "Vini pugliesi, bollicine e un limoncello da non perdere.", en: "Apulian wines, bubbles and a limoncello not to miss." },
      items: [
        { it: ["Mare Mosso rosé", "Rosato spumantizzato, perfetto con il tramonto"],
          en: ["Mare Mosso rosé", "Sparkling rosé, perfect at sunset"], price: "" },
        { it: ["Vini bianchi e rosati pugliesi", "Selezione al calice e in bottiglia: chiedete all'oste"],
          en: ["Apulian whites and rosés", "By the glass or bottle: ask the host"], price: "" },
        { it: ["Spritz", "L'aperitivo sulla scogliera"],
          en: ["Spritz", "The aperitivo on the cliff"], price: "" },
        { it: ["Limoncello della casa", "Ghiacciato, a fine pasto"],
          en: ["House limoncello", "Ice-cold, after dinner"],
          badge: { it: "Gagliardo", en: "A local hit" }, price: "" }
      ]
    }
  ],

  /* --------------------------------------------------------------------- */
  en: {
    _title: "Zanzi · Seafood Osteria & Trattoria in Polignano a Mare",
    _description: "Family-run seafood trattoria in Polignano a Mare, Via Toselli 20. Fresh catch of the day, pistachio calamarata, fried seafood and seafront tables at sunset. Book on WhatsApp or call +39 329 202 4432.",

    skip: "Skip to content",
    brandHome: "Zanzi, Osteria Trattoria — back to top",
    brandTag: "Osteria · Trattoria",
    navLabel: "Main navigation",
    navStory: "Our story",
    navDishes: "Dishes",
    navMenu: "Menu",
    navReviews: "Reviews",
    navVisit: "Find us",
    navBook: "Book",
    navOpen: "Open navigation menu",
    navClose: "Close menu",
    ctaBook: "Book a table",
    ctaMenu: "See the menu",
    hoursShort: "Every day · 12:00–15:00 · 19:00–24:00",

    heroAlt: "Orange sunset over the cliffs of Polignano a Mare seen from Largo Ardito",
    heroEyebrow: "Seafood trattoria · Polignano a Mare",
    heroTitle: "The sea of Polignano, <em>on your plate.</em>",
    heroLead: "Fresh fish of the day, home-style recipes and a sunset you'll take home with you. Overlooking the sea at Largo Ardito, a short walk from the old town.",
    heroRating: "<strong>4.1</strong> on Google · 450+ reviews",
    scroll: "Discover",

    storyAlt: "The white houses of Polignano a Mare on the cliffs above the sea",
    badgeTitle: "Sunset tables",
    badgeText: "Seafront, on Largo Ardito",
    storyEyebrow: "Our osteria",
    storyTitle: "A small family osteria, <em>looking out over the Adriatic.</em>",
    storyLead: "A handful of tables, the sound of the sea and a kitchen that follows the day's catch. At Zanzi you eat like at home — if home were on the cliffs of Polignano.",
    storyP1: "We started out as a pizzeria and, season after season, became what we love most: a seafood trattoria. The recipes come from the Bari tradition — rice, potatoes and mussels, orecchiette, fried seafood — with a few touches of our own, like the pistachio our guests recognise at first bite.",
    storyP2: "Outside, seafront tables for lunch in the sun and dinner at sunset. Inside, a cosy, cool dining room with air conditioning on summer evenings. And always the host to welcome you and tell you about the dishes that aren't on the menu.",
    storySign: "See you at the table.",
    f1t: "Seafront", f1d: "Outdoor tables on the cliff",
    f2t: "Catch of the day", f2d: "The menu changes with the sea",
    f3t: "Open 7 days", f3d: "Lunch and dinner",
    f4t: "Home cooking", f4d: "Apulian recipes, generous portions",

    dishesEyebrow: "Signature dishes",
    dishesTitle: "The ones our guests <em>order again.</em>",
    dishesLead: "They mention them in reviews, photograph them and come back for more. Here's where to start.",
    d1alt: "Calamarata pasta with squid and cherry tomatoes", d1tag: "Guest favourite", d1t: "Pistachio calamarata",
    d1d: "Short pasta, squid, cherry tomatoes, crushed pistachio and Apulian stracciatella. Our signature dish.",
    d2alt: "Counter of freshly caught raw seafood", d2tag: "From the sea", d2t: "Raw seafood",
    d2d: "Prawns, langoustines and the best of the day's catch, served simply, as Apulian tradition demands.",
    d3alt: "Bruschetta on country bread with cherry tomatoes", d3tag: "To start", d3t: "Seafood bruschette",
    d3d: "Toasted country bread with prawns, anchovies, stracciatella and cherry tomatoes, served on a wooden board.",
    d4alt: "Seafood spaghetti with mussels and clams", d4tag: "Classic", d4t: "Seafood spaghetti",
    d4d: "Mussels, clams, prawns and squid tossed with cherry tomatoes. Simple, generous, smelling of the sea.",
    d5alt: "Golden, crispy fried squid", d5tag: "Crispy", d5t: "Mixed fried seafood",
    d5d: "Squid, prawns and fish of the day, lightly fried until golden, with lemon and homemade bread.",

    menuEyebrow: "The menu",
    menuTitle: "Today's kitchen, <em>the same old sea.</em>",
    menuLead: "The menu follows the catch: some dishes change every day. Ask the host about off-menu specials.",
    menuTabs: "Menu sections",
    menuNote: "Allergies or intolerances? Please ask our staff: the list of allergens in every dish is available on request (EU Reg. 1169/2011).",

    expEyebrow: "The experience",
    expTitle: "Book the sunset, <em>we'll take care of the rest.</em>",
    expLead: "From the seafront tables the sun sets over the coast and the sky turns orange. A glass of rosé, freshly fried seafood and the waves below the cliff: ask for an outdoor table at sunset time.",
    a1: "Seafront tables", a2: "Air-conditioned room", a3: "Kids welcome", a4: "Wheelchair accessible",
    expCta: "Book a sunset table",

    revEyebrow: "What guests say",
    revTitle: "In our guests' <em>own words.</em>",
    ratingAria: "4.1 out of 5 stars",
    ratingText: "Average on Google · 452 reviews",
    ratingLink: "Read all reviews",
    r1: "“The location alone deserves 5 stars, not to mention the welcome, the cooking, the originality of the dishes and the quality of the ingredients. Simplicity and flavour go perfectly with a refined elegance in the presentation. […] A simple place, but truly special.”",
    r2: "“A lovely spot to enjoy the sunset. […] The calamarata was top!! All with a Mare Mosso sparkling rosé. The limoncello was great!!”",
    r3: "“Small but welcoming, with seafront tables outside and air conditioning inside. Top hospitality, high-quality food, so much kindness. […] Good value for money. Recommended.”",
    r4: "“We stumbled upon this beautiful setting by chance… Very friendly and helpful host. Fresh food. Fair portions. […] Highly recommended.”",
    srcGoogle: "Google review · translated from Italian",

    galEyebrow: "Gallery",
    galTitle: "Polignano, <em>from our table.</em>",
    g1alt: "The old town of Polignano on the cliffs at dusk", g1: "The old town at dusk",
    g2alt: "Calamarata served on a hand-painted ceramic plate", g2: "Calamarata",
    g3alt: "Sunset over Lama Monachile beach", g3: "Lama Monachile",
    g4alt: "Freshly opened black mussels", g4: "Mussels from our sea",
    g5alt: "Houses on the cliff lit up at night", g5: "Polignano by night",
    g6alt: "Seafood spaghetti", g6: "Seafood spaghetti",
    g7alt: "Bruschette", g7: "Bruschette",
    galFollow: "Follow us on Facebook",

    bookEyebrow: "Book",
    bookTitle: "Your table <em>is waiting.</em>",
    bookLead: "Fill in the form: WhatsApp will open with your message ready to send. We'll confirm availability as soon as possible.",
    waDirect: "Message us on WhatsApp",
    bookNote: "On weekends and in summer the seafront tables go fast: we recommend booking a few days ahead.",
    formHelp: "All fields are required except notes.",
    fName: "Full name", eName: "Please enter your name.",
    fDate: "Date", eDate: "Please choose a valid date.",
    fTime: "Time", fTimeChoose: "Choose…", eTime: "Please choose a time.",
    lunch: "Lunch", dinner: "Dinner",
    fPeople: "Guests", fMore: "More than 10", ePeople: "Please tell us how many guests.",
    fTable: "Preferred table", tOut: "Seafront", tIn: "Indoors", tAny: "No preference",
    fNotes: "Notes", optional: "(optional)", fNotesPh: "Allergies, high chair, birthdays…",
    fSubmit: "Send request via WhatsApp",
    fPrivacy: "Your booking is confirmed only after our reply. Your data is used solely to handle the request — <a href=\"privacy.html\">privacy policy</a>.",

    visitEyebrow: "Find us",
    visitTitle: "Via Toselli 20, <em>on the sea of Polignano.</em>",
    visitLead: "Just outside the old town, away from the crowds and right by the sea. A few minutes' walk from the historic centre.",
    addrTitle: "Address",
    directions: "Get directions",
    call: "Call",
    hoursTitle: "Opening hours",
    hoursCaption: "Opening hours",
    everyDay: "Every day",
    sevenDays: "7 days a week",
    hoursNote: "Hours may vary in the low season: if in doubt, give us a call.",
    mapConsent: "To show the map we load Google Maps, which may set third-party cookies.",
    mapLoad: "Show the map",

    footerAbout: "Seafood trattoria in Polignano a Mare. Catch of the day, Apulian cooking and seafront tables at sunset.",
    footContact: "Contact",
    footExplore: "Explore",
    leaveReview: "Leave a review",
    legalNav: "Legal",
    privacy: "Privacy & cookies",
    credits: "Photo credits",
    creditsNote: "Photos from Wikimedia Commons, cropped and resized."
  },

  /* UI strings generated by JavaScript */
  ui: {
    it: {
      openNow: "Aperto ora · chiude alle {t}",
      openNowMidnight: "Aperto ora · chiude a mezzanotte",
      closedOpensAt: "Chiuso ora · apre alle {t}",
      closedReopensAt: "Chiuso ora · riapre alle {t}",
      closedTomorrow: "Chiuso ora · apre domani alle {t}",
      today: "oggi",
      sending: "Apertura di WhatsApp…",
      sent: "Se WhatsApp non si è aperto, scriveteci al +39 329 202 4432.",
      fixErrors: "Controllate i campi evidenziati.",
      waIntro: "Ciao Zanzi! Vorrei prenotare un tavolo.",
      waName: "Nome", waDate: "Data", waTime: "Orario", waPeople: "Persone", waTable: "Tavolo", waNotes: "Note",
      waThanks: "Grazie!",
      tables: { fuori: "fronte mare", dentro: "in sala", indifferente: "indifferente" },
      locale: "it-IT"
    },
    en: {
      openNow: "Open now · closes at {t}",
      openNowMidnight: "Open now · closes at midnight",
      closedOpensAt: "Closed now · opens at {t}",
      closedReopensAt: "Closed now · reopens at {t}",
      closedTomorrow: "Closed now · opens tomorrow at {t}",
      today: "today",
      sending: "Opening WhatsApp…",
      sent: "If WhatsApp didn't open, message us at +39 329 202 4432.",
      fixErrors: "Please check the highlighted fields.",
      waIntro: "Hi Zanzi! I'd like to book a table.",
      waName: "Name", waDate: "Date", waTime: "Time", waPeople: "Guests", waTable: "Table", waNotes: "Notes",
      waThanks: "Thank you!",
      tables: { fuori: "seafront", dentro: "indoors", indifferente: "no preference" },
      locale: "en-GB"
    }
  },

  /* Crediti fotografici (foto con licenza Creative Commons da Wikimedia Commons).
     Quando sostituite le foto con quelle del ristorante, svuotate questa lista. */
  credits: [
      {
          "label": "Tramonto da Largo Ardito (hero)",
          "artist": "Carlo Pelagalli",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "page": "https://commons.wikimedia.org/wiki/File:Tramonto_dal_Piazzale_Ardito_(Pozziglioni)_-_panoramio.jpg"
      },
      {
          "label": "Dopo il tramonto dai Pozziglioni",
          "artist": "Carlo Pelagalli",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "page": "https://commons.wikimedia.org/wiki/File:Dopo_il_tramonto_dai_Pozziglioni_-_panoramio.jpg"
      },
      {
          "label": "Case sulla scogliera",
          "artist": "Josep M. Gracia",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "page": "https://commons.wikimedia.org/wiki/File:POL_-_Coastal_houses_and_cliffs_in_Polignano_a_Mare,_Italy,_2022.jpg"
      },
      {
          "label": "Il borgo antico",
          "artist": "Carlo Pelagalli",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "page": "https://commons.wikimedia.org/wiki/File:L%27antico_borgo_medievale_di_Polignano_-_panoramio.jpg"
      },
      {
          "label": "Polignano di notte",
          "artist": "Giorgio Galeotti",
          "license": "CC BY 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
          "page": "https://commons.wikimedia.org/wiki/File:Polignano_a_Mare_-_Bari,_Italy_-_August_16,_2010_02.jpg"
      },
      {
          "label": "Lama Monachile al tramonto",
          "artist": "Raffylng",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "page": "https://commons.wikimedia.org/wiki/File:Tramonto_Spiaggia_Lama_Monachile.jpg"
      },
      {
          "label": "Spaghetti ai frutti di mare",
          "artist": "Auregann",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "page": "https://commons.wikimedia.org/wiki/File:Spaghetti_ai_frutti_di_mare.jpg"
      },
      {
          "label": "Calamarata",
          "artist": "Tavolarte",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "page": "https://commons.wikimedia.org/wiki/File:Calamarata0877.jpg"
      },
      {
          "label": "Crudo di mare",
          "artist": "Italo Greco",
          "license": "CC BY 2.0",
          "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
          "page": "https://commons.wikimedia.org/wiki/File:Il_crudo_di_mare_(15902301060).jpg"
      },
      {
          "label": "Frittura",
          "artist": "Auregann",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "page": "https://commons.wikimedia.org/wiki/File:Frittura_di_pesce_-_sagra_del_pesce_Ognina_2025.jpg"
      },
      {
          "label": "Bruschetta",
          "artist": "Popo le Chien",
          "license": "CC0",
          "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
          "page": "https://commons.wikimedia.org/wiki/File:Bruschetta.jpg"
      },
      {
          "label": "Cozze",
          "artist": "Juan Emilio Prades Bel",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "page": "https://commons.wikimedia.org/wiki/File:Mejillones_del_mar_Mediterr%C3%A1neo_(Mytilus_galloprovincialis).jpg"
      },
      {
          "label": "Calamarata in ceramica",
          "artist": "Diego from Roma, Italy",
          "license": "CC BY 2.0",
          "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
          "page": "https://commons.wikimedia.org/wiki/File:Calamarata_al_rag%C3%B9_di_Cernia_(7097131809).jpg"
      }
  ]
};
