// Complete dataset of all 32 slides for V.O.C. (Vaderland, Onafhankelijkheid & Cultuur)
const slidesData = [
  {
    id: 1,
    chapter: "Introductie",
    chapterNum: 0,
    theme: "intro",
    type: "cover",
    title: "V.O.C.",
    subtitle: "Vaderland, Onafhankelijkheid & Cultuur",
    badge: "Politiek Manifest & Visie",
    content: "Een strategische heroverweging van Nederlands soevereiniteit, economische veerkracht, defensieve kracht en culturele identiteit.",
    bullets: [],
    highlights: [
      { label: "Pijler 1", value: "Vaderland" },
      { label: "Pijler 2", value: "Onafhankelijkheid" },
      { label: "Pijler 3", value: "Cultuur" }
    ],
    speakerColor: "#F59E0B",
    icon: "compass"
  },
  {
    id: 2,
    chapter: "Visie",
    chapterNum: 0,
    theme: "intro",
    type: "cards-grid",
    title: "Wat willen wij?",
    subtitle: "Onze kernvisie en fundamentele doelstellingen",
    badge: "Doelstellingen",
    content: "Onze beweging streeft naar een autonoom, zelfbewust en weerbaar Nederland waarin het welzijn van de eigen burger centraal staat.",
    bullets: [
      { strong: "Sterke nationale identiteit", text: "Behoud van onze Nederlandse cultuur, tradities en gedeelde waarden." },
      { strong: "Grotere defensie en veiligheid", text: "Een zelfstandige krijgsmacht die onze grenzen en soevereiniteit effectief beschermt." },
      { strong: "Strategische economie & staatsinvloed", text: "Investeren in eigen maakindustrie en vitale infrastructuur." },
      { strong: "Zelfstandigheid en soevereiniteit", text: "Eigen keuzes maken voor het welzijn en de toekomst van onze burgers." }
    ],
    cards: [
      {
        icon: "temple",
        title: "VADERLAND & CULTUUR",
        desc: "Versterking van nationale trots, taal en cultureel erfgoed in het onderwijs en publieke domein."
      },
      {
        icon: "shield",
        title: "DEFENSIE & VEILIGHEID",
        desc: "Grotere defensie-uitgaven en slagkracht ter bescherming van ons grondgebied en vitale belangen."
      },
      {
        icon: "anchor",
        title: "ONAFHANKELIJKHEID & ECONOMIE",
        desc: "Zelfstandige industrie, strategische productie en duidelijke staatsregie over vitale sectoren."
      }
    ]
  },
  {
    id: 3,
    chapter: "Visie",
    chapterNum: 0,
    theme: "intro",
    type: "statement",
    title: "Waarom willen wij dit?",
    subtitle: "De noodzaak van hernieuwde autonomie",
    badge: "Beweegredenen",
    content: "In een snel veranderende geopolitieke wereld kan Nederland niet langer afhankelijk blijven van externe machten voor essentiële levensbehoeften.",
    bullets: [
      { strong: "Sterk, veilig en zelfstandig", text: "Zelfbeschikking en soevereine besluitvorming zonder buitenlandse inmenging." },
      { strong: "Investeren in defensie en eigen productie", text: "Zekerheid van voedsel, energie, medische middelen en defensiematerieel binnen eigen grenzen." },
      { strong: "Behoud van identiteit en tradities", text: "Het koesteren van onze eeuwenoude geschiedenis, normen en maatschappelijke cohesie." }
    ],
    metrics: [
      { value: "100%", label: "Focus op soevereiniteit" },
      { value: "Eigen Regie", label: "Op vitale infrastructuur" },
      { value: "Erfgoed", label: "Als fundament voor de toekomst" }
    ]
  },
  {
    id: 4,
    chapter: "Agenda",
    chapterNum: 0,
    theme: "agenda",
    type: "pillars-overview",
    title: "Onze belangrijke thema's",
    subtitle: "Waar staat de VOC voor?",
    badge: "Programma",
    content: "Ons programma rust op zes fundamentele pijlers die Nederland opnieuw vormgeven:",
    pillars: [
      { num: "01", name: "Veiligheid", desc: "Zelfstandige krijgsmacht, grensbeveiliging en vitale weerbaarheid", icon: "shield-check", color: "orange" },
      { num: "02", name: "Economie", desc: "Productieherstel, regie op strategische sectoren en innovatie", icon: "building-factory", color: "blue" },
      { num: "03", name: "Migratie & Cultuur", desc: "Strenge regels, draagkracht bewaken en taal & tradities eren", icon: "users-group", color: "gold" },
      { num: "04", name: "Wonen", desc: "Betaalbare bouw, centrale overheidsregie en prioriteit voor burgers", icon: "home", color: "teal" },
      { num: "05", name: "Klimaat & Energie", desc: "Betaalbare energie, kernkracht en bescherming van de burger", icon: "bolt", color: "emerald" },
      { num: "06", name: "Historisch Ideaal", desc: "Verbondenheid der Lage Landen en herstel van historische grootsheid", icon: "crown", color: "amber" }
    ],
    bullets: []
  },
  {
    id: 5,
    chapter: "Thema 1: Veiligheid",
    chapterNum: 1,
    theme: "veiligheid",
    type: "section-break",
    title: "Veiligheid: een sterk en veilig Nederland",
    subtitle: "Pijler 1 — Onze nationale weerbaarheid en verdediging",
    badge: "Pijler 01",
    speakerColor: "#D946EF",
    content: "Veiligheid is het fundament van elke vrije en welvarende samenleving. Zonder adequate verdediging is soevereiniteit slechts een illusie.",
    bullets: [
      { strong: "Ons doel:", text: "Een sterk en veilig Nederland dat zijn eigen burgers te allen tijde kan beschermen." },
      { strong: "Bescherming tegen bedreigingen:", text: "Robuuste afweer tegen statelijke actoren, cyberinfiltratie en hybride dreigingen." },
      { strong: "Sterke, zelfstandige krijgsmacht:", text: "Herstel van slagkracht, voldoende materieel en modernste defensietechnologie." }
    ]
  },
  {
    id: 6,
    chapter: "Thema 1: Veiligheid",
    chapterNum: 1,
    theme: "veiligheid",
    type: "data-chart",
    title: "Een sterke krijgsmacht",
    subtitle: "Investeren in defensie en operationele capaciteit",
    badge: "Defensiebudget",
    content: "Nederland verhoogt zijn defensie-uitgaven structureel naar en boven de NAVO-norm om militaire autonomie te waarborgen.",
    bullets: [
      { strong: "Meer defensie-investeringen:", text: "Structurele budgetgroei gekoppeld aan langjarige contracten." },
      { strong: "Moderne wapens en technologie:", text: "Investeren in luchtverdediging, drones, marine-fregatten en precisiewapens." },
      { strong: "Opleiden militair personeel:", text: "Aantrekkelijke arbeidsvoorwaarden en vergroting van reservisten en paraatheid." },
      { strong: "Versterken Nederlandse defensie-industrie:", text: "Orders zoveel mogelijk gunnen aan nationale scheepswerven en hightechbedrijven." }
    ],
    chartData: {
      type: "bar",
      title: "Ontwikkeling Defensiebudget (Mld. €)",
      statHighlight: "2,05%",
      statDesc: "van BBP bereikt in 2024 (NAVO-norm 2,0%)",
      labels: ["2021", "2023", "2024", "2025", "2026"],
      values: [11.5, 15.4, 21.4, 24.0, 26.8],
      targetLine: 21.0,
      targetLabel: "NAVO Target (2.0%)"
    }
  },
  {
    id: 7,
    chapter: "Thema 1: Veiligheid",
    chapterNum: 1,
    theme: "veiligheid",
    type: "security-map",
    title: "Bescherming van Nederland",
    subtitle: "Veiligheid en soevereiniteit binnen onze fysieke en digitale grenzen",
    badge: "Paraatheid",
    content: "Een gecoördineerde landelijke netwerkstructuur die kust, luchtruim, vitale knooppunten en de civiele maatschappij continu bewaakt.",
    bullets: [
      { strong: "Bescherming grenzen en vitale infrastructuur:", text: "Intensieve bewaking van Noordzee-kabels, havens en grensovergangen." },
      { strong: "Bestrijding cyberaanvallen en sabotage:", text: "Een soeverein nationaal cybercommando met proactieve responsmogelijkheden." },
      { strong: "Ondersteuning politie en hulpdiensten:", text: "Militaire bijstand bij rampenbestrijding, terrorisme en ernstige ontwrichting." },
      { strong: "Paraatheid bij crises en dreigingen:", text: "Decentrale noodvoorzieningen en robuuste crisiscommando's." }
    ],
    mapHighlights: [
      { title: "24/7 Bewaking", detail: "Kustlijn & Luchtruim — Continue radar- en patrouillediensten over de gehele Noordzee." },
      { title: "Vitale Infrastructuur", detail: "Havens, energie & data — Rotterdam, Amsterdam, Eemshaven en energie-hubs onder directe bescherming." },
      { title: "Cyber & Civiele Hulp", detail: "Defensie ondersteunt civiel — Bescherming van nutsbedrijven, telecom en drinkwater." },
      { title: "Snelle Reactiemacht", detail: "Landelijke paraatheidseenheden binnen 60 minuten inzetbaar bij calamiteiten." }
    ]
  },
  {
    id: 8,
    chapter: "Thema 1: Veiligheid",
    chapterNum: 1,
    theme: "veiligheid",
    type: "cards-grid",
    title: "Zelfstandig en voorbereid",
    subtitle: "Nederland moet op zichzelf kunnen rekenen",
    badge: "Zelfredzaamheid",
    content: "Bondgenootschappen zijn waardevol, maar zelfstandig vermogen is doorslaggevend in tijden van geopolitieke crisis.",
    bullets: [
      { strong: "Minder afhankelijk van buitenland:", text: "Beëindigen van afhankelijkheid van niet-westerse of volatiele toeleveranciers." },
      { strong: "Voldoende voorraden en materieel:", text: "Strategische reserves van munitie, brandstoffen, reservedelen en medicijnen voor minimaal 6 maanden." },
      { strong: "Investeren in technologie en kennis:", text: "Samenwerking tussen TNO, universiteiten en defensiebedrijven." },
      { strong: "Strategische samenwerking:", text: "Partnerschappen gebaseerd op wederzijds respect en gelijkwaardigheid." }
    ]
  },
  {
    id: 9,
    chapter: "Thema 2: Economie",
    chapterNum: 2,
    theme: "economie",
    type: "section-break",
    title: "Economie: een zelfstandig Nederland",
    subtitle: "Pijler 2 — Een sterke, productieve en soevereine economie",
    badge: "Pijler 02",
    speakerColor: "#06B6D4",
    hasFlagMap: true,
    content: "Een economie die primair draait op financiële speculatie is kwetsbaar. Wij kiezen voor een tastbare reële maakindustrie die waarde creëert voor onze eigen samenleving.",
    bullets: [
      { strong: "Ons doel:", text: "Een sterke en zelfstandige economie die niet buigt voor externe schokken." },
      { strong: "Nationale productie:", text: "Investeringen in binnenlandse fabrieken, hoogwaardige technologie en vakmanschap." },
      { strong: "Strategische autonomie:", text: "Controle over essentiële sectoren zoals voedsel, energie en logistieke slagaders." }
    ]
  },
  {
    id: 10,
    chapter: "Thema 2: Economie",
    chapterNum: 2,
    theme: "economie",
    type: "cards-grid",
    title: "Nederlandse bedrijven en industrie",
    subtitle: "Investeren in eigen productie en innovatief vermogen",
    badge: "Maakindustrie",
    content: "Nederlandse ondernemers en ambachtslieden zijn de ruggengraat van onze welvaart. Wij geven hen prioriteit.",
    bullets: [
      { strong: "Steun voor Nederlandse producenten:", text: "Fiscale voordelen en soepelere regelgeving voor mkb en maakbedrijven." },
      { strong: "Behoud van strategische industrieën:", text: "Blokkeren van vijandige overnames van Nederlandse sleuteltechnologiebedrijven." },
      { strong: "Investeren in technologie en innovatie:", text: "Focussen op chiptechnologie, maritieme engineering, agritech en robotica." },
      { strong: "Stimuleren van binnenlandse werkgelegenheid:", text: "Eerlijke lonen en waardering voor praktisch opgeleiden en vaklieden." }
    ]
  },
  {
    id: 11,
    chapter: "Thema 2: Economie",
    chapterNum: 2,
    theme: "economie",
    type: "cards-grid",
    title: "De rol van de overheid",
    subtitle: "De staat als krachtige economische regisseur",
    badge: "Staatsregie",
    content: "De overheid treedt niet op als toeschouwer, maar als actieve beschermer van het algemeen belang en onze nationale welvaart.",
    bullets: [
      { strong: "Overheidsinvloed op strategische sectoren:", text: "Gouden aandeel en beslissingsbevoegdheid over vitale netwerken." },
      { strong: "Investeringen in infrastructuur en energie:", text: "Grootschalige publieke investeringen in spoor, havens, sluizen en het energienet." },
      { strong: "Bescherming tegen buitenlandse afhankelijkheid:", text: "Screening van buitenlandse staatsfondsen en ongewenste eigendomsstructuren." },
      { strong: "Inzet belastinggeld voor nationale prioriteiten:", text: "Nederlands belastinggeld moet renderen in Nederland voor Nederlandse burgers." }
    ]
  },
  {
    id: 12,
    chapter: "Thema 2: Economie",
    chapterNum: 2,
    theme: "economie",
    type: "cards-grid",
    title: "Economische onafhankelijkheid",
    subtitle: "Nederland moet op eigen kracht vooruit",
    badge: "Autonomie",
    content: "Veerkracht betekent dat we zelfstandig kunnen doordraaien, ook wanneer internationale toeleveringsketens haperen.",
    bullets: [
      { strong: "Minder afhankelijk van buitenlandse grondstoffen:", text: "Actief stimuleren van circulariteit, recycling van zeldzame metalen en strategische voorraden." },
      { strong: "Versterking Nederlandse energievoorziening:", text: "Binnenlandse energieopwekking als fundament onder de industriële productie." },
      { strong: "Opbouw van strategische voorraden:", text: "Nationale voorraden van vitale goederen, medicijnen en industriële componenten." },
      { strong: "Economische groei koppelen aan veiligheid:", text: "Geen handelspartnerschappen die onze nationale veiligheid ondermijnen." }
    ]
  },
  {
    id: 13,
    chapter: "Thema 3: Migratie & Cultuur",
    chapterNum: 3,
    theme: "migratie",
    type: "section-break",
    title: "Migratie: cultuur en nationale identiteit",
    subtitle: "Pijler 3 — Behoud van het Nederlands karakter, tradities en sociale samenhang",
    badge: "Pijler 03",
    speakerColor: "#F59E0B",
    content: "Een samenleving kan alleen hecht en solidair zijn wanneer er sprake is van een gedeelde cultuur, taal en historisch bewustzijn.",
    bullets: [
      { strong: "Nederlandse taal, geschiedenis en cultuur:", text: "De hoekstenen van onze nationale identiteit, die we met trots doorgeven." },
      { strong: "Strengere migratie:", text: "Strikte grenscontroles en toelating alleen binnen de grenzen van onze maatschappelijke draagkracht." },
      { strong: "Volwaardige integratie:", text: "Wie hier woont conformeert zich aan de Nederlandse wetten en waarden." }
    ]
  },
  {
    id: 14,
    chapter: "Thema 3: Migratie & Cultuur",
    chapterNum: 3,
    theme: "migratie",
    type: "cards-grid",
    title: "Strenger migratiebeleid",
    subtitle: "Duidelijke regels, strikte grenzen en handhaving",
    badge: "Grensbeleid",
    content: "Een land dat zijn eigen grenzen niet controleert verliest de controle over zijn eigen voorzieningen en voorzienbaarheid.",
    bullets: [
      { strong: "Strengere regels voor immigratie en asiel:", text: "Beperking van instroom tot echte noodhulp in de eigen regio." },
      { strong: "Zorgvuldige en efficiënte procedures:", text: "Snel uitsluitsel aan de grens; bij afwijzing directe terugkeerplicht." },
      { strong: "Aanpak illegaal verblijf:", text: "Strikte handhaving, effectieve uitzetting en geen toegang tot publieke voorzieningen zonder geldige status." },
      { strong: "Rekening houden met draagkracht:", text: "Woningmarkt, zorg, onderwijs en sociale voorzieningen moeten eerst de eigen bevolking kunnen bedienen." }
    ]
  },
  {
    id: 15,
    chapter: "Thema 3: Migratie & Cultuur",
    chapterNum: 3,
    theme: "migratie",
    type: "cards-grid",
    title: "Taal en integratie",
    subtitle: "Samenleven met gedeelde uitgangspunten en verantwoordelijkheid",
    badge: "Integratie",
    content: "Integratie is geen vrijblijvende optie, maar een absolute plicht om deel uit te kunnen maken van onze samenleving.",
    bullets: [
      { strong: "Nederlands leren als absolute voorwaarde:", text: "De Nederlandse taal is het bindmiddel van ons land en verplicht in elk onderwijs- en werktraject." },
      { strong: "Aandacht voor geschiedenis en samenleving:", text: "Verplichte kennis van de canon van Nederland, onze democratische rechtsstaat en tradities." },
      { strong: "Stimuleren onderwijs en werk:", text: "Iedereen draagt bij door middel van arbeid; sociale voorzieningen zijn geen levensstijl." },
      { strong: "Duidelijke verwachtingen integratie:", text: "Respect voor de gelijkwaardigheid van man en vrouw, vrijheid van meningsuiting en scheiding van kerk en staat." }
    ]
  },
  {
    id: 16,
    chapter: "Thema 3: Migratie & Cultuur",
    chapterNum: 3,
    theme: "migratie",
    type: "cards-grid",
    title: "Tradities en nationale cultuur",
    subtitle: "Onze rijke geschiedenis en waarden koesteren en behouden",
    badge: "Erfgoed",
    content: "Een volk zonder historisch geheugen heeft geen wortels. Wij zijn trots op wie we zijn en wat onze voorouders hebben opgebouwd.",
    bullets: [
      { strong: "Aandacht voor geschiedenis en tradities:", text: "Onze vaderlandse geschiedenis krijgt weer een centrale rol in het geschiedenisonderwijs." },
      { strong: "Investeren in cultureel erfgoed:", text: "Rijksmonumenten, historische schepen, molens en musea worden actief beschermd en gefinancierd." },
      { strong: "Behoud van feestdagen en gebruiken:", text: "Bescherming van traditionele Nederlandse feesten, folklore en streekgewoonten." },
      { strong: "Respect voor de wet:", text: "De Nederlandse wet staat te allen tijde boven religieuze of buitenlandse dogma's." }
    ]
  },
  {
    id: 17,
    chapter: "Thema 4: Wonen",
    chapterNum: 4,
    theme: "wonen",
    type: "section-break",
    title: "Wonen: een huis voor iedereen",
    subtitle: "Pijler 4 — Betaalbare, kwalitatieve woningen als fundamenteel burgerrecht",
    badge: "Pijler 04",
    speakerColor: "#06B6D4",
    content: "Een eigen woning biedt rust, stabiliteit en de basis voor het stichten van een gezin. De huidige wooncrisis vraagt om daadkrachtige overheidsregie.",
    bullets: [
      { strong: "Ons doel:", text: "Voldoende betaalbare woningen voor de Nederlandse bevolking in veilige leefomgevingen." },
      { strong: "Meer beschikbare woningen:", text: "Drastische toename van het woningaanbod door onnodige belemmeringen weg te nemen." },
      { strong: "Centrale overheidsplanning:", text: "Het Rijk neemt de regie terug over ruimtelijke ordening en infrastructuurontwikkeling." }
    ]
  },
  {
    id: 18,
    chapter: "Thema 4: Wonen",
    chapterNum: 4,
    theme: "wonen",
    type: "cards-grid",
    title: "Meer woningen bouwen",
    subtitle: "Bouwen aan de toekomst door bureaucratie te doorbreken",
    badge: "Woningbouw",
    content: "Niet eindeloos polderen, maar scheppen in de grond: grootschalige realisatie van nieuwe gezins- en starterswoningen.",
    bullets: [
      { strong: "Versnellen woningbouw:", text: "Stikstof- en milieuprocedures vereenvoudigen zodat bouwprojecten onmiddellijk van start kunnen." },
      { strong: "Ontwikkelen nieuwe woonwijken:", text: "Aanwijzen van nieuwe bouwlocaties met kwalitatieve architectuur en groene ruimte." },
      { strong: "Investeren in infrastructuur en voorzieningen:", text: "Nieuwe wijken direct ontsluiten met snelwegen, openbaar vervoer, scholen en winkels." },
      { strong: "Verminderen vertraging bouwprojecten:", text: "Kortere bezwaartermijnen en versnelde vergunningverlening voor projecten van algemeen belang." }
    ]
  },
  {
    id: 19,
    chapter: "Thema 4: Wonen",
    chapterNum: 4,
    theme: "wonen",
    type: "cards-grid",
    title: "Betaalbaar wonen",
    subtitle: "Wonen moet bereikbaar blijven voor de hardwerkende burger",
    badge: "Betaalbaarheid",
    content: "De huizenmarkt moet ten dienste staan van bewoners, niet van internationale speculanten en vastgoedfondsen.",
    bullets: [
      { strong: "Meer betaalbare koopwoningen:", text: "Bouw van betaalbare starterswoningen met speciale regelingen voor jonge gezinnen." },
      { strong: "Versnellen sociale woningbouw:", text: "Hervorming van woningcorporaties met hernieuwde focus op betaalbare huur." },
      { strong: "Centrale overheidsplanning:", text: "Strikte afspraken over maximale bouwkosten en grondprijzen." },
      { strong: "Bescherming van huurders en starters:", text: "Inperking van opkoop door buitenlandse beleggers." }
    ]
  },
  {
    id: 20,
    chapter: "Thema 4: Wonen",
    chapterNum: 4,
    theme: "wonen",
    type: "cards-grid",
    title: "Wonen en nationale prioriteiten",
    subtitle: "Een woningmarkt die Nederland versterkt en beschermt",
    badge: "Prioriteiten",
    content: "Woningtoewijzing moet aansluiten bij de behoeften en verdiensten van onze eigen burgers.",
    bullets: [
      { strong: "Afstemmen op bevolkingsbehoeften:", text: "Voorrang voor mensen met een lokale economische of maatschappelijke binding." },
      { strong: "Goed bereikbare woongebieden:", text: "Spreiding van woningbouw over het hele land om leefbaarheid in regio's te stimuleren." },
      { strong: "Huisvesting militairen en veteranen:", text: "Gegarandeerde en kwalitatieve huisvesting voor hen die ons land dienen en verdedigen." },
      { strong: "Rekening houden met veiligheid en infrastructuur:", text: "Woonwijken ontwerpen met oog op sociale veiligheid en weerbaarheid tegen wateroverlast." }
    ]
  },
  {
    id: 21,
    chapter: "Thema 5: Klimaat & Energie",
    chapterNum: 5,
    theme: "klimaat",
    type: "section-break",
    title: "Klimaat: economie en energie eerst",
    subtitle: "Pijler 5 — Betaalbare energie, nuchter milieubeleid en energiezekerheid",
    badge: "Pijler 05",
    speakerColor: "#EF4444",
    content: "Klimaatbeleid mag nooit ten koste gaan van onze welvaart, energiezekerheid en de portemonnee van gewone gezinnen.",
    bullets: [
      { strong: "Ons doel:", text: "Betaalbare energie en een sterke, concurrerende Nederlandse economie." },
      { strong: "Betaalbaar klimaatbeleid en energiezekerheid:", text: "Pragmatische keuzes gericht op leveringszekerheid en technologische haalbaarheid." },
      { strong: "Geen dure maatregelen voor burgers:", text: "Stop op onbetaalbare subsidies, heffingen en gedwongen van het gas afhalen." }
    ]
  },
  {
    id: 22,
    chapter: "Thema 5: Klimaat & Energie",
    chapterNum: 5,
    theme: "klimaat",
    type: "climate-chart",
    title: "Kritisch op klimaatmaatregelen",
    subtitle: "Geen onnodige lasten voor burgers en mkb-ondernemingen",
    badge: "Klimaatuitgaven",
    content: "De kosten van het klimaatbeleid zijn geëxplodeerd tot tientallen miljarden, zonder gegarandeerd effect op het wereldwijde klimaat.",
    bullets: [
      { strong: "Kritische toets op kosten en effectiviteit:", text: "Elke euro aan beleid moet aantoonbaar nut hebben voor het milieu en leefomgeving." },
      { strong: "Geen overbelasting van huishoudens:", text: "Afschaffen van onevenredig hoge energiebelastingen en netbeheertarieven." },
      { strong: "Bescherming van Nederlandse bedrijven:", text: "Geen eenzijdige nationale koppen op Europese regels die onze concurrentiepositie slopen." }
    ],
    chartData: {
      totalGrowth: [
        { year: "2019", val: 23.4 },
        { year: "2020", val: 27.6 },
        { year: "2021", val: 29.8 },
        { year: "2022", val: 33.6 },
        { year: "2023", val: 40.6 }
      ],
      breakdown2023: {
        total: "€40,6 Mld.",
        subsidies: "€34,3 Mld. (79% van totaal)",
        sectors: [
          { name: "Personenauto's", pct: 28, amount: "~€18 Mld." },
          { name: "Mobiele Bronnen", pct: 5, amount: "5%" },
          { name: "Hernieuwbare Energie", pct: 13, amount: "10-13%" },
          { name: "Zonnepanelen", pct: 10, amount: "~€10 Mld." },
          { name: "Overig / Industrie", pct: 44, amount: "Rest" }
        ]
      }
    }
  },
  {
    id: 23,
    chapter: "Thema 5: Klimaat & Energie",
    chapterNum: 5,
    theme: "klimaat",
    type: "gas-chart",
    title: "Betrouwbare en betaalbare energie",
    subtitle: "Energiezekerheid staat centraal voor industrie en burger",
    badge: "Energiezekerheid",
    content: "Energie is de levensader van de maatschappij. Onze energievoorziening moet betrouwbaar, onafhankelijk en betaalbaar zijn.",
    bullets: [
      { strong: "Betrouwbare energie tegen betaalbare prijzen:", text: "Verlaging van energiebelastingen en btw op elektriciteit en gas." },
      { strong: "Openhouden van verschillende energiebronnen:", text: "Een gebalanceerde energiemix; geen vroegtijdige sluiting van conventionele centrales." },
      { strong: "Onderzoek naar en uitbreiding van kernenergie:", text: "Bouw van minimaal vier grootschalige kerncentrales en modulaire reactoren (SMR's)." },
      { strong: "Tegengaan van buitenlandse energieafhankelijkheid:", text: "Zelfcontrole over raffinaderijen, gasopslagen en het hoogspanningsnetwerk." }
    ],
    chartData: {
      prices: [
        { year: "2019", price: 0.68 },
        { year: "2020", price: 0.72 },
        { year: "2021", price: 0.90 },
        { year: "2022", price: 1.55 },
        { year: "2023", price: 2.10 }
      ],
      note: "In 2023 was €1,2 Mld. (57%) direct gerelateerd aan subsidies, ODE en BTW."
    }
  },
  {
    id: 24,
    chapter: "Thema 5: Klimaat & Energie",
    chapterNum: 5,
    theme: "klimaat",
    type: "cards-grid",
    title: "Realistisch klimaatbeleid",
    subtitle: "Nederland moet zelf zijn eigen keuzes kunnen maken",
    badge: "Soevereiniteit",
    content: "Geen dictaten vanuit internationale bureaucratieën: Nederland bepaalt zijn eigen energietoekomst.",
    bullets: [
      { strong: "Realistisch en haalbaar beleid:", text: "Focus op concrete waterveiligheid, dijkbewaking en bodemdaling in plaats van luchtkastelen." },
      { strong: "Innovatie boven verplichtingen:", text: "Stimuleren van technologische innovaties en waterstof zonder dwingende verboden." },
      { strong: "Concurrentiepositie beschermen:", text: "Waarborgen dat Nederlandse glastuinbouw, chemie en industrie kunnen blijven floreren." },
      { strong: "Kritisch op internationale afspraken:", text: "Heronderhandelen of opschorten van buitenlandse verdragen die onze soevereiniteit fnuiken." }
    ]
  },
  {
    id: 25,
    chapter: "Thema 6: Historisch Ideaal",
    chapterNum: 6,
    theme: "historie",
    type: "section-break",
    title: "Ons historische ideaal",
    subtitle: "Pijler 6 — Herstel van historische trots, invloed en culturele eenheid",
    badge: "Pijler 06",
    speakerColor: "#D946EF",
    content: "Wij herontdekken de statuur van Nederland als trotse zeevarende natie met een rijke geschiedenis en wereldwijde betekenis.",
    bullets: [
      { strong: "Ons doel:", text: "Het historische Nederlandse rijk en zijn invloed in ere herstellen." },
      { strong: "Herstel voormalige historische banden:", text: "Diepere banden en partnerschappen met gebieden waarmee we een gedeelde geschiedenis delen." },
      { strong: "Trots op koloniaal verleden en historische invloed:", text: "Geen schaamtecultuur, maar een evenwichtige waardering van onze gigantische maritieme en handelskracht." },
      { strong: "Terugkeer van Nederland als grootmacht:", text: "Een land dat internationaal gewicht in de schaal legt en zijn stem laat gelden." }
    ]
  },
  {
    id: 26,
    chapter: "Thema 6: Historisch Ideaal",
    chapterNum: 6,
    theme: "historie",
    type: "historical-map",
    title: "Vlaanderen terug bij Nederland",
    subtitle: "Eén land, gedeelde geschiedenis en dezelfde moedertaal",
    badge: "Groot-Nederland",
    content: "De kunstmatige scheiding van de Lage Landen heeft onze gezamenlijke taal- en cultuurgemeenschap nooit kunnen uitwissen.",
    bullets: [
      { strong: "Aansluiting van Vlaanderen bij Nederland:", text: "Het actief verkennen van een federatieve of confederale unie tussen Nederland en Vlaanderen." },
      { strong: "Nadruk op gedeelde taal, cultuur en geschiedenis:", text: "Gezamenlijk onderwijsbeleid, media-uitwisseling en culturele samenwerking." },
      { strong: "Territoriale uitbreiding van Nederland:", text: "Het verenigen van de Delta-regio vormt de economische motor van West-Europa (Rotterdam + Antwerpen)." },
      { strong: "Politiek nastreven van historisch ideaal:", text: "Een serieuze diplomatieke agenda om de historische eenheid van de Lage Landen te herstellen." }
    ]
  },
  {
    id: 27,
    chapter: "Thema 6: Historisch Ideaal",
    chapterNum: 6,
    theme: "historie",
    type: "cards-grid",
    title: "Voormalige overzeese gebieden",
    subtitle: "Het historische verleden als onlosmakelijk onderdeel van onze identiteit",
    badge: "Overzeese Banden",
    content: "Onze maritieme handelstraditie reikte over de oceanen en vormde de grondslag voor de moderne wereldeconomie.",
    bullets: [
      { strong: "Koloniale geschiedenis centraal:", text: "Onderzoek en onderwijs over de ongeëvenaarde handelsvloten, innovaties en ontdekkingsreizen." },
      { strong: "Trots op historische maritieme macht:", text: "Erkenning van de moed en handelsgeest die de Gouden Eeuw mogelijk maakten." },
      { strong: "Aandacht voor het overzeese erfgoed:", text: "Instandhouding van historische forten, pakhuizen, archieven en monumenten wereldwijd." },
      { strong: "Herstel historische banden en Indonesië:", text: "Intensieve economische, culturele en maritieme samenwerking gebaseerd op gezamenlijk erfgoed." }
    ]
  },
  {
    id: 28,
    chapter: "Thema 6: Historisch Ideaal",
    chapterNum: 6,
    theme: "historie",
    type: "cards-grid",
    title: "Nederland als historische grootmacht",
    subtitle: "Onze trotse blik op de geopolitieke toekomst",
    badge: "Geopolitiek",
    content: "Nederland is geen klein land dat gedoemd is om orders van anderen op te volgen, maar een trotse natie met een eigen mondiale rol.",
    bullets: [
      { strong: "Historische rol Nederland centraal:", text: "Herpositionering van Nederland als onafhankelijke maritieme en diplomatieke speler." },
      { strong: "Meer internationale invloed:", text: "Versterken van onze diplomatieke corpsen en handelsmissies met een assertieve opstelling." },
      { strong: "Historische banden als beleidsbasis:", text: "Prioriteit geven aan bilaterale betrekkingen met onze historische handelspartners." },
      { strong: "Ambities binnen internationaal recht:", text: "Het nastreven van onze nationale belangen met respect voor soevereine verhoudingen." }
    ]
  },
  {
    id: 29,
    chapter: "Conclusie",
    chapterNum: 7,
    theme: "conclusie",
    type: "section-break",
    title: "Waar staan wij voor?",
    subtitle: "Onze onwrikbare kernwaarden en principes",
    badge: "Kernwaarden",
    speakerColor: "#EF4444",
    content: "Een samenvatting van het kompas waarmee wij Nederland naar een soevereine, welvarende en veilige toekomst navigeren.",
    bullets: [
      { strong: "Historische rol Nederland centraal:", text: "Trots op wie we zijn geweest, helder over wie we willen zijn." },
      { strong: "Meer internationale invloed:", text: "Zelfvertrouwen op het wereldtoneel zonder onderdanigheid." },
      { strong: "Historische banden als beleidsbasis:", text: "Waarden en loyaliteit geworteld in onze eigen grond en traditie." },
      { strong: "Territoriale ambities en veiligheid:", text: "Bescherming van have en goed, cultuur en soevereiniteit." }
    ]
  },
  {
    id: 30,
    chapter: "Conclusie",
    chapterNum: 7,
    theme: "conclusie",
    type: "statement",
    title: "Onze toekomstvisie",
    subtitle: "Het Nederland van morgen: krachtig, zelfbewust en bloeiend",
    badge: "Toekomstvisie",
    content: "Wij bouwen aan een Nederland dat zijn eigen lot in handen heeft. Een baken van welvaart, stabiliteit en nationale trots.",
    bullets: [
      { strong: "Zelfstandig, weerbaar en cultuurbewust:", text: "Een volk dat zijn taal, geschiedenis en grenzen respecteert en beschermt." },
      { strong: "Productie en innovatie in eigen land:", text: "Een bloeiende maakindustrie met stabiele banen en innovatieve spitstechnologie." },
      { strong: "Energiezekerheid en betaalbaarheid:", text: "Onafhankelijk van buitenlandse mogendheden door een krachtige nucleaire en strategische mix." },
      { strong: "Eigen belangen altijd voorop:", text: "Politiek die onvoorwaardelijk kiest voor het welzijn van de Nederlandse burger." }
    ],
    metrics: [
      { value: "Autonoom", label: "Politieke koers" },
      { value: "Weerbaar", label: "Militair & economisch" },
      { value: "Verbonden", label: "Historie & toekomst" }
    ]
  },
  {
    id: 31,
    chapter: "Conclusie",
    chapterNum: 7,
    theme: "conclusie",
    type: "cards-grid",
    title: "Onze ambities",
    subtitle: "Een grotere rol voor Nederland in Europa en de wereld",
    badge: "Ambitieplan",
    content: "Tijd om de bescheidenheid achter ons te laten en met opgeheven hoofd onze rechtmatige plek in de wereld in te nemen.",
    bullets: [
      { strong: "Grotere Nederlandse invloed wereldwijd:", text: "Een assertief buitenlandbeleid gericht op het beschermen van onze maritieme handelsaders." },
      { strong: "Historische gebieden en banden centraal:", text: "Culturele en economische hereniging met gelijkgezinde zusterregio's zoals Vlaanderen." },
      { strong: "Versterking van economie en defensie:", text: "Een ondoordringbare defensie gekoppeld aan een toonaangevende export- en maakindustrie." },
      { strong: "Nationale belangen voorop:", text: "Ieder verdrag en elke internationale afspraak wordt getoetst aan het belang van het Nederlandse volk." }
    ]
  },
  {
    id: 32,
    chapter: "Conclusie",
    chapterNum: 7,
    theme: "outro",
    type: "flag-outro",
    title: "V.O.C.",
    subtitle: "Vaderland, Onafhankelijkheid & Cultuur",
    badge: "Manifest 2026",
    content: "Voor een soeverein, veilig en trots Nederland.",
    bullets: [],
    outroNote: "Het manifest van Vaderland, Onafhankelijkheid & Cultuur. Een nieuw hoofdstuk voor onze natie.",
    icon: "monogram"
  }
];
