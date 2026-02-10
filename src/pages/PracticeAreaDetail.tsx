import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-office.jpg';

// Practice area data - can be expanded for other areas
const practiceAreasData: Record<string, {
  title: string;
  intro: string;
  services: string[];
  extra?: string;
  sections?: { heading: string; text: string; items?: string[] }[];
}> = {
  'arbeidsrecht': {
    title: 'Arbeidsrecht',
    intro: 'Het arbeidsrecht betreft arbeidsverhoudingen en de relatie werkgever-werknemer in de brede zin van het woord. Bent u betrokken bij een beëindiging van uw arbeidsovereenkomst (ontslag) door fraude, diefstal of een andere onenigheid met uw werkgever? Wij helpen u bij conflicten met uw werkgever.',
    services: [
      'Ontslag',
      'Vaststellingsovereenkomst',
      'Conflicten',
      'Gesprekken met uw werkgever',
      'Arbeidsvoorwaarden',
    ],
  },
  'consumentenrecht': {
    title: 'Consumentenrecht',
    intro: 'Heeft u een product gekocht dat defect is? Is uw aankoop niet geleverd? Zit u vast aan een duur abonnement of is er onduidelijkheid over de garantietermijn van uw aankoop? U heeft meer rechten dan u waarschijnlijk denkt. Onze juristen staan u bij.',
    services: [
      'Garantie',
      'Defect of beschadigd product',
      'Levering',
      'Abonnement',
    ],
  },
  'bestuursrecht': {
    title: 'Bestuursrecht',
    intro: 'Het bestuursrecht regelt de rechtsverhoudingen tussen burgers en overheid. Met al uw zaken tegen een overheidsinstelling kunt u bij ons terecht. Wij brengen onze kennis en ervaring graag voor u in het geding. Vanzelfsprekend begeleiden wij u tijdens iedere fase van uw geschil, van het eerste bezwaarschrift tot aan het beroep bij de rechtbank.',
    services: [
      'Bijstandsuitkering, WW, WAO / WIA -uitkering',
      'Belastingzaken',
    ],
  },
  'verbintenissenrecht': {
    title: 'Verbintenissenrecht',
    intro: 'Een verbintenis is een vermogensrechtelijke rechtsbetrekking tussen twee of meer personen op grond waarvan de ene partij (schuldenaar) verplicht is tot een bepaalde prestatie, waartoe de andere partij (schuldeiser) is gerechtigd. Het gaat daarbij echter niet enkel om verbintenissen die partijen zelf zijn aangegaan zoals een verbintenis in het kader van een koopovereenkomst maar ook om verbintenissen die uit de wet voortvloeien. Bijvoorbeeld de verplichting om iemand zijn schade te vergoeden na een aanrijding. Wordt een contract niet goed nagekomen? Wij staan u bij met juridisch advies en rechtsbijstand.',
    services: [],
  },
  'vreemdelingenrecht': {
    title: 'Vreemdelingenrecht',
    intro: 'Wilt u uw partner overhalen uit het buitenland of is uw aanvraag voor een visum afgewezen? Wij staan u gedurende de gehele procedure bij.',
    services: [
      'Visumaanvraag',
      'MVV (TEV) bij gezinshereniging',
      'Gezinshereniging op grond van artikel 8 EVRM',
    ],
  },
  'personen-familierecht': {
    title: 'Personen- en familierecht',
    intro: 'HBM Juristen adviseert over veel onderwerpen binnen het personen- en familierecht.',
    services: [
      'Scheiden',
      'Kinderalimentatie',
      'Adoptie',
      'Voogdij',
      'Huwelijkse voorwaarden en nog veel meer',
    ],
  },
  'arbeids-mediation': {
    title: 'Arbeidsmediation',
    intro: 'Voor zowel werkgevers als werknemers.\n\nOnze gecertificeerde arbeidsmediator intervenieert in alle fasen van arbeidsconflicten en ondersteunt partijen bij het herstellen van de arbeidsrelatie of het zorgvuldig afronden daarvan. De begeleiding omvat onder meer bemiddeling bij arbeidsconflicten, procedures rondom beëindiging van de arbeidsovereenkomst, vraagstukken over ziekteverzuim en re-integratie, loon- en discriminatiegeschillen en beoordeling van concurrentie- en relatiebedingen. Indien nodig vertegenwoordigen wij cliënten in procedures bij de kantonrechter, het UWV en in formele bemiddelingsgesprekken.',
    services: [
      'Bemiddeling bij conflicten via gecertificeerde mediation',
      'Ontslagprocedures (op staande voet, VSO-onderhandelingen)',
      'Discriminatie, pesten en loonkwesties',
      'Ziekteverzuim en re-integratietrajecten',
      'Concurrentie- en relatiebedingen',
    ],
    extra: 'Werkwijze\n\nHet mediationtraject begint met een kennismaking en intake waarin de mediator de situatie, het doel en de geschiktheid van mediation beoordeelt. Wanneer beide partijen instemmen, wordt een mediationovereenkomst ondertekend waarin vertrouwelijkheid, vrijwilligheid en kosten zijn vastgelegd. Vervolgens vinden de mediationgesprekken plaats, bestaande uit een of meerdere sessies waarin de mediator belangen verkent, standpunten ordent en partijen begeleidt bij het zoeken naar haalbare oplossingen, zowel in gezamenlijke gesprekken als waar nodig in afzonderlijke sessies. Zodra overeenstemming is bereikt, worden de gemaakte afspraken schriftelijk vastgelegd in een overeenkomst of plan, gevolgd door eventuele nazorg zoals een evaluatie of ondersteuning bij de uitvoering van de afspraken.\n\nOnze mediationdiensten zijn gecertificeerd door Conflictbemiddeling Nederland. Deze kwalificatie weerspiegelt onze toewijding aan kwaliteit en professionaliteit in iedere zaak.',
  },
  'family-mediation': {
    title: 'Familiemediation',
    intro: 'Conflicten binnen de familie vragen om een beheerste en toekomstgerichte aanpak. Onze gecertificeerde familiemediator begeleidt partijen bij echtscheidingen, vermogensverdelingen, alimentatieafspraken, erkenning en gezag en de uitwerking van huwelijkse voorwaarden. De focus ligt op duurzame afspraken en de-escalatie van conflicten.',
    services: [
      'Mediation bij scheidingen, gericht op duurzame en uitvoerbare afspraken',
      'Opstellen van ouderschapsplannen, zorg- en omgangsregelingen',
      'Ondersteuning bij familieafspraken',
      'De-escalerende begeleiding van familieconflicten met culturele en religieuze aspecten, met aandacht voor communicatie en toekomstbestendigheid',
    ],
    extra: 'Werkwijze\n\nHet mediationtraject begint met een kennismaking en intake waarin de mediator de situatie, het doel en de geschiktheid van mediation beoordeelt. Wanneer beide partijen instemmen, wordt een mediationovereenkomst ondertekend waarin vertrouwelijkheid, vrijwilligheid en kosten zijn vastgelegd. Vervolgens vinden de mediationgesprekken plaats, bestaande uit een of meerdere sessies waarin de mediator belangen verkent, standpunten ordent en partijen begeleidt bij het zoeken naar haalbare oplossingen, zowel in gezamenlijke gesprekken als waar nodig in afzonderlijke sessies. Zodra overeenstemming is bereikt, worden de gemaakte afspraken schriftelijk vastgelegd in een overeenkomst of plan, gevolgd door eventuele nazorg zoals een evaluatie of ondersteuning bij de uitvoering van de afspraken.\n\nOnze mediationdiensten zijn gecertificeerd door Conflictbemiddeling Nederland. Deze kwalificatie weerspiegelt onze toewijding aan kwaliteit en professionaliteit in iedere zaak.',
  },
  'sociale-zekerheidsrecht': {
    title: 'Sociale zekerheidsrecht',
    intro: 'Het Sociale Zekerheidsrecht omvat onder meer de Werkloosheidswet (WW), de Ziektewet (ZW), de Algemene Ouderdomswet (AOW), de Wet werk en Inkomen naar Arbeidsvermogen (WIA) en de Wet Werk en Bijstand (WWB).\n\nHet is een geheel aan rechten en verplichtingen van iedereen die te maken heeft met sociale zekerheid: werkgevers, werknemers, arbeidsongeschikten, werklozen, ouderen en zelfstandigen. Komt iemand, tijdelijk of blijvend, in financiële moeilijkheden, dan vormt de overheid het vangnet door middel van sociale verzekeringen en sociale voorzieningen.',
    services: [],
  },
  'huurrecht': {
    title: 'Huurrecht',
    intro: 'Heeft u problemen met de verhuurder over huurgeld, huurcontract of onderhoud? U kunt als huurder of eigenaar van een woning bij ons terecht voor een adequate aanpak voor uw problemen.',
    services: [
      'Huurgeschil',
      'Woonurgentie',
      'Geschil onderhoud of nieuwe woning',
    ],
  },
  'china': {
    title: 'China',
    intro: 'HBM Juristen biedt juridische ondersteuning aan cliënten die actief zijn binnen het handels- en investeringsverkeer tussen China en Marokko.\n\nWij staan cliënten bij in handelscontracten, samenwerkingsovereenkomsten, investeringsstructuren, geschillenbeslechting, markttoetreding en compliance.',
    services: [],
  },
  'marokko': {
    title: 'Marokkaans Recht',
    intro: 'HBM Juristen beschikt over een gespecialiseerde praktijk voor het Marokkaanse recht. Wij behoren tot de beperkte groep Europese juridische dienstverleners met structurele aanwezigheid in zowel Nederland als Marokko. Vanuit Amsterdam en Casablanca ondersteunen wij cliënten uit Europa, Azië en Afrika bij juridische vraagstukken die specialistische kennis van het Marokkaanse recht vereisen.\n\nOnze werkwijze is gebaseerd op een vaste samenwerking met gecontracteerde advocaten en juristen in Marokko. Onze collega\'s zijn vertrouwd met de rechtscultuur, de gang van zaken binnen rechtbanken, administratieve autoriteiten en alternatieve geschiloplossing. De combinatie van lokale expertise en internationale coördinatie zorgt voor een stabiel en betrouwbaar juridisch kader, zowel voor particulieren als ondernemingen.\n\nDoor de voortdurende interactie tussen Nederland en Marokko ontstaat een effectieve cross-border structuur waarin kennis van beide rechtsstelsels wordt geïntegreerd. Hierdoor kunnen wij cliënten begeleiden bij geschillen, investeringsprojecten, familierechtelijke procedures, contractvorming en ondernemingsrechtelijke trajecten. Wij werken met duidelijke afspraken, transparante communicatie en juridische precisie, met oog voor de sociale, bestuurlijke en culturele context van Marokko.',
    services: [],
    sections: [
      {
        heading: 'Civiel recht en Erfrecht',
        text: 'Het civiel recht wordt beheerst door onder meer het Marokkaanse familierecht en Wet nr. 39-08 inzake het Wetboek van Zakelijke Rechten. Dit rechtsgebied omvat vastgoedkwesties zoals eigendom, verkoop en verkrijging van onroerend goed, inclusief alle daaraan verbonden zakelijke rechten zoals vruchtgebruik, erfpacht en hypotheken.\n\nOnze dienstverlening omvat juridisch advies, procesvertegenwoordiging, het uitvoeren van diverse procedures en islamitische erfrechtregels in het geval van een nalatenschap.\n\nOns civielrechtelijk werk is gebaseerd op de Marokkaanse familiecode en de Wet op de Zakelijke Rechten (nr. 39-08) en omvat:',
        items: [
          'Koop, verkoop en eigendomsoverdracht van onroerend goed',
          'Erfenisprocedures, taxatie van bezittingen en toepassing van testamenten',
          'Toepassing van islamitisch erfrecht bij overlijden',
        ],
      },
      {
        heading: 'Ondernemingsrecht',
        text: 'Binnen het ondernemingsrecht in Marokko biedt HBM Juristen gespecialiseerde ondersteuning aan bedrijven die actief zijn in of verbonden zijn met de Marokkaanse markt. Onze begeleiding richt zich op zowel de inrichting als de bescherming van ondernemingen, met aandacht voor de lokale wettelijke vereisten, bestuursrechtelijke procedures en commerciële praktijk.\n\nWij adviseren en vertegenwoordigen ondernemingen bij onder meer:',
        items: [
          'Oprichting van rechtspersonen en beoordeling van contractuele verplichtingen',
          'Commerciële geschillen met leveranciers, afnemers of zakenpartners',
          'Bescherming van handelsnamen, merken en andere bedrijfsidentiteit',
          'Vraagstukken rond bestuurdersaansprakelijkheid en interne governance',
          'Vroegtijdige signalering en aanpak van financiële risico\'s ter voorkoming van faillissementssituaties',
        ],
      },
      {
        heading: 'Familierecht',
        text: 'Het Marokkaanse familierecht wordt beheerst door de Moudawana (Familiewetboek), waarin de wettelijke kaders en procedures zijn vastgesteld voor onder meer huwelijk (artikel 65 e.v.), zowel tussen Marokkaanse burgers als gemengde huwelijken, scheiding in haar diverse vormen (waaronder talaq en khol\', artikel 71 e.v.), voogdijregelingen (hadana, artikelen 163-186), erfrecht en vermogensrechtelijke afwikkeling (artikel 321 e.v.), en alimentatiegeschillen.\n\nOnze gespecialiseerde advocaten en juristen zijn ervaren in de toepassing van de Moudawana, vertegenwoordigen cliënten tijdens zittingen, verzamelen en presenteren bewijs, voeren verweer of procederen waar nodig, en ondersteunen bij onderhandelingen om geschillen waar mogelijk minnelijk te beslechten.\n\nOnze diensten omvatten onder meer:',
        items: [
          'Huwelijk tussen Marokkaanse en/of internationale partijen (art. 65 e.v.)',
          'Echtscheiding, inclusief talaq en khol\' (art. 71 e.v.)',
          'Kinderzorg en voogdij (Hadana) (art. 163–186)',
          'Alimentatie, erfenis en vermogensverdeling (art. 321 e.v.)',
        ],
      },
      {
        heading: 'Bankrecht en consumentenbescherming',
        text: 'Wij behandelen krediet- en invorderingsdossiers op basis van de relevante bankwetgeving en adviseren over consumentenrechten volgens de consumentenbeschermingswetgeving. Wij behandelen geschillen over financieringen, contractuele verplichtingen, bankproducten en vastgoedtransacties.\n\nOnze diensten bestrijken zowel de belangen van financiële instellingen als consumenten. Wij staan cliënten bij in o.a. over:',
        items: [
          'Invordering en kredietdossiers conform Wet nr. 103-12',
          'Consumentenrechten op basis van Wet nr. 31-08, zoals het herroepingsrecht (art. 151)',
          'Financieringsvraagstukken, vastgoedtransacties en contractuele geschillen',
        ],
      },
      {
        heading: 'Intellectuele Eigendomsrechten (IE-recht)',
        text: 'Wij verzorgen de registratie, bescherming en handhaving van IE-rechten zoals merken, octrooien en handelsnamen, en adviseren over licenties, exploitatie en gerechtelijke procedures. Op basis van Wet nr. 17-97 beschermen wij de intellectuele eigendom van onze cliënten, waaronder:',
        items: [
          'Octrooien (art. 16 e.v.)',
          'Merkrechten (art. 133 e.v.)',
          'Handelsnamen (art. 177 e.v.)',
          'Registratie en IE-strategie',
          'Licentie- en exploitatieadvies',
          'Handhaving bij inbreuk en gerechtelijke procedures',
        ],
      },
      {
        heading: 'Douanerecht en Internationale Handel',
        text: 'De douaneprocedures in Marokko worden hoofdzakelijk geregeld door het Douanewetboek en Accijnsreglement (Code des Douanes et Impôts Indirects), zoals beheerd door de Administration des Douanes et Impôts Indirects (ADII).\n\nOnze ondersteuning richt zich op zowel bedrijven als particulieren en omvat onder meer:',
        items: [
          'Juridisch advies bij import/exportprojecten en logistieke ketens',
          'Analyse van douanedocumentatie en naleving van invoer- of uitvoerbepalingen',
          'Begeleiding bij geschillen of inbeslagnames door de douane',
          'Vertegenwoordiging bij administratieve bezwaarprocedures en gerechtelijke beroepszaken',
          'Optimalisatie van fiscale douanerechten en toepassing van handelsverdragen',
        ],
      },
      {
        heading: 'Financieel recht en belastingrecht',
        text: 'Wij begeleiden cliënten bij uiteenlopende fiscale en financiële vraagstukken, met als doel een optimaal fiscaal resultaat te bereiken binnen de grenzen van de wet.\n\nWij begeleiden cliënten bij fiscale en financiële kwesties om te zorgen voor:',
        items: [
          'Fiscale optimalisatie binnen de wettelijke kaders',
          'Geschillen met belastingautoriteiten, inclusief onderhandelingen en gerechtelijke procedures',
          'Compliance met het Algemeen Belastingwetboek',
        ],
      },
      {
        heading: 'Arbeidsrecht',
        text: 'Wij staan cliënten bij in de precontractuele, contractuele en postcontractuele fase van de arbeidsrelatie, inclusief ontslagprocedures, loonclaims, afwezigheid en arbeidsovereenkomsten.\n\nHet arbeidsrecht wordt door ons gehanteerd binnen drie fasen:\n\nPre-contractueel: onderhandelingen, risicoanalyse en het opstellen van arbeidsovereenkomsten.\n\nContractueel: uitvoering of wijziging van arbeidsovereenkomsten, waaronder kwesties zoals taakomschrijving, werktijden, verlofrechten en organisatorische beperkingen.\n\nPost-contractueel: begeleiding bij beëindiging van arbeidsovereenkomsten, zowel in onderling overleg als bij geschillen.',
        items: [],
      },
      {
        heading: 'Juridisch advies Marokkaans Recht',
        text: 'HBM Juristen biedt gespecialiseerd juridisch advies binnen het rechtsstelsel van Marokko. Onze advocaten en juristen zijn volledig toegerust om cliënten te adviseren binnen uiteenlopende Marokkaanse rechtsgebieden, waaronder civiel recht, familierecht, ondernemingsrecht, arbeidsrecht, douanerecht, intellectuele eigendomsrechten en fiscale regelgeving.\n\nWij analyseren de relevante feiten en stukken, passen de toepasselijke Marokkaanse wet- en regelgeving toe en verstrekken een helder, systematisch en praktisch advies.',
        items: [],
      },
      {
        heading: 'Strafrecht',
        text: 'HBM Juristen verstrekt gespecialiseerd juridisch advies binnen het strafrecht van Marokko. Wij richten ons op de beoordeling van strafrechtelijke dossiers, de analyse van toepasselijke wetgeving en de uitleg van de procedurele stappen binnen het Marokkaanse strafproces.\n\nOnze dienstverlening bestaat uitsluitend uit juridisch advies: wij analyseren de feiten, wijzen op risico\'s en mogelijkheden binnen het Marokkaanse strafrecht en bieden cliënten een helder kader om verdere beslissingen te kunnen nemen.',
        items: [],
      },
      {
        heading: 'Islamitische leer',
        text: 'In het Marokkaanse rechtsstelsel speelt de sharia, of islamitische rechtsleer, een belangrijke rol als referentiebron voor specifieke rechtsgebieden, in het bijzonder binnen het personen- en familierecht. Hoewel de algemene Marokkaanse wetgeving is gecodificeerd binnen een civielrechtelijke traditie die sterk leunt op moderne staatsrechtelijke uitgangspunten, blijft de sharia de normatieve basis voor bepalingen omtrent huwelijk, echtscheiding, voogdij, erfopvolging en andere onderdelen van het familierecht.\n\nOnze praktijk beschikt over diepgaande en actuele kennis van zowel de Moudawana als de onderliggende sharia-principes, waardoor wij cliënten effectief kunnen adviseren en vertegenwoordigen bij grensoverschrijdende familierechtelijke kwesties en situaties waarin islamitisch recht een doorslaggevende rol speelt.\n\nDankzij deze gespecialiseerde expertise kunnen wij complexe vraagstukken helder structureren en juridische strategieën ontwikkelen die aansluiten bij de Marokkaanse rechtspraktijk en de verwachtingen van onze internationale cliënten.',
        items: [],
      },
    ],
  },
};

const otherPracticeAreas = [
  { name: 'Bestuursrecht', description: 'Bezwaar en beroep tegen overheidsbesluiten', href: '/rechtsgebieden/bestuursrecht' },
  { name: 'Consumentenrecht', description: 'Bescherming bij consumentengeschillen', href: '/rechtsgebieden/consumentenrecht' },
  { name: 'Vreemdelingenrecht', description: 'Verblijfsvergunningen en asiel', href: '/rechtsgebieden/vreemdelingenrecht' },
  { name: 'Huurrecht', description: 'Huurgeschillen en woningrecht', href: '/rechtsgebieden/huurrecht' },
  { name: 'Personen- en familierecht', description: 'Echtscheiding en familiezaken', href: '/rechtsgebieden/personen-familierecht' },
  { name: 'Sociale zekerheidsrecht', description: 'Uitkeringen en toeslagen', href: '/rechtsgebieden/sociale-zekerheidsrecht' },
  { name: 'Verbintenissenrecht', description: 'Contracten en schadevergoeding', href: '/rechtsgebieden/verbintenissenrecht' },
];

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const practiceArea = slug ? practiceAreasData[slug] : null;
  const filteredOtherAreas = otherPracticeAreas.filter(
    (area) => !area.href.endsWith(`/${slug}`)
  );

  if (!practiceArea) {
    return (
      <Layout>
        <div className="container-editorial section-padding text-center">
          <h1 className="text-display-sm mb-4">Rechtsgebied niet gevonden</h1>
          <p className="text-muted-foreground mb-8">Dit rechtsgebied bestaat niet of is verplaatst.</p>
          <Button asChild>
            <Link to="/rechtsgebieden">Bekijk alle rechtsgebieden</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section - Smaller version */}
      <section className="relative">
        {/* Back link and Title above image */}
        <div className="container-editorial pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/rechtsgebieden" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Ga terug
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground"
          >
            {practiceArea.title}
          </motion.h1>
        </div>
        
        {/* Smaller hero image */}
        <div className="container-editorial">
          <motion.div 
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <img 
              src={heroImage} 
              alt={practiceArea.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-lg text-foreground leading-relaxed mb-8 space-y-4">
              {practiceArea.intro.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            
            {practiceArea.services.length > 0 && (
              <>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Wij behandelen o.a. de volgende zaken:
                </h2>
                
                <ul className="space-y-2 mb-8">
                  {practiceArea.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground">
                      <span className="text-primary">–</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {practiceArea.extra && (
              <div className="text-lg text-foreground leading-relaxed mb-8 space-y-4">
                {practiceArea.extra.split('\n\n').map((paragraph, i) => {
                  if (i === 0 && paragraph === paragraph.replace(/\n/g, '').trim() && paragraph.length < 50) {
                    return <h2 key={i} className="text-xl font-semibold text-foreground">{paragraph}</h2>;
                  }
                  return <p key={i}>{paragraph}</p>;
                })}
              </div>
            )}

            {practiceArea.sections && practiceArea.sections.length > 0 && (
              <div className="space-y-10 mb-8">
                {practiceArea.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-xl font-semibold text-foreground mb-4">{section.heading}</h2>
                    <div className="text-lg text-foreground leading-relaxed space-y-4">
                      {section.text.split('\n\n').map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {section.items.map((item, k) => (
                          <li key={k} className="flex items-start gap-2 text-foreground">
                            <span className="text-primary mt-0.5">–</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            <p className="text-lg text-foreground leading-relaxed mb-8">
              Meer weten over onze diensten? Onze juristen staan u graag te woord. 
              Neem contact met ons op voor een vrijblijvende kennismaking.
            </p>
            
            <Button variant="cta" size="lg" asChild className="gap-2">
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Neem contact op
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Other Practice Areas Section */}
      <section className="bg-section-grey">
        <div className="container-editorial section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Bekijk andere rechtsgebieden
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOtherAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={area.href}
                    className="group block h-full bg-background rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                          {area.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/rechtsgebieden" className="arrow-link">
                Bekijk alle rechtsgebieden
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreaDetail;
