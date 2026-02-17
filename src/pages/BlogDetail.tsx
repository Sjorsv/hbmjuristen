import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import insight1 from '@/assets/insight-1.jpg';
import insight2 from '@/assets/insight-2.jpg';
import insight3 from '@/assets/insight-3.jpg';
import headerMorocco from '@/assets/header-morocco.jpg';

interface BlogPost {
  slug: string;
  type: 'blog' | 'pers';
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'bezoek-universiteit-utrecht': {
    slug: 'bezoek-universiteit-utrecht',
    type: 'blog',
    category: 'Nieuws',
    title: 'Bezoek Universiteit Utrecht (Ad Informandum) aan HBM Juristen in Marokko',
    excerpt: 'In april 2024 heeft HBM Juristen studenten van Ad Informandum, verbonden aan de Universiteit Utrecht, ontvangen in Marokko.',
    date: '12 april 2024',
    author: 'HBM Juristen',
    readTime: '2 min leestijd',
    image: headerMorocco,
    content: [
      'In april 2024 heeft HBM Juristen studenten van Ad Informandum, verbonden aan de Universiteit Utrecht, ontvangen in Marokko in het kader van hun studiereis.',
      'Tijdens het bezoek is een toelichting gegeven op de internationale rechtspraktijk van het kantoor. De studenten hebben daarnaast exclusieve toegang gekregen tot het Hof van Beroep Casablanca, waar zij een rondleiding hebben ontvangen en inzicht kregen in de organisatie en werkwijze van de Marokkaanse rechtspraak.',
      'HBM Juristen dankt de president van het Hof van Beroep te Casablanca, de betrokken advocaten en juristen, alsmede alle collega\'s die hebben bijgedragen aan de organisatie en inhoudelijke invulling van deze leerzame dag.',
    ],
  },
  'rechtsbijstandsstelsel': {
    slug: 'rechtsbijstandsstelsel',
    type: 'blog',
    category: 'Bestuursrecht',
    title: 'Toegang tot het recht onder druk – waarom herijking van het rechtsbijstandsstelsel noodzakelijk is',
    excerpt: 'De toegang tot het recht staat in Nederland al geruime tijd onder spanning. Burgers met complexe juridische problemen vinden niet tijdig betaalbare en deskundige ondersteuning.',
    date: '28 januari 2025',
    author: 'HBM Juristen',
    readTime: '4 min leestijd',
    image: insight1,
    content: [
      'De toegang tot het recht staat in Nederland al geruime tijd onder spanning. In de dagelijkse praktijk wordt zichtbaar wat cijfers slechts gedeeltelijk tonen: burgers met complexe juridische problemen vinden niet tijdig betaalbare en deskundige ondersteuning. De vraag naar inhoudelijke rechtsbijstand groeit, terwijl het stelsel van gesubsidieerde rechtsbijstand slechts een beperkt deel van de rechtszoekenden bereikt.',
      'Op grond van de Wet op de rechtsbijstand kunnen uitsluitend advocaten – en in specifieke gevallen mediators – aanspraak maken op publieke financiering. Dat systeem is historisch verklaarbaar. Het beroep van advocaat kent een beschermde titel, verplichte beroepsopleiding, tuchtrecht en toezicht door de Nederlandse orde van advocaten en de Raad voor Rechtsbijstand.',
      '## De praktijk van 2026 is echter breder',
      'Gespecialiseerde juristenpraktijken behandelen inmiddels structureel complexe zaken binnen onder meer het bestuursrecht, vreemdelingenrecht, arbeidsrecht en civiel recht. Zij voeren bezwaar- en beroepsprocedures, stellen processtukken op, begeleiden cliënten bij zittingen en dragen bij aan inhoudelijke rechtsontwikkeling. De kwaliteit van deze werkzaamheden is in veel gevallen gelijkwaardig aan die van traditionele sociale advocatuur. Toch ontbreekt iedere structurele mogelijkheid om – waar maatschappelijke nood evident is – een beroep te doen op publieke middelen.',
      '## Een wezenlijke spanning tussen systeem en realiteit',
      'Dat leidt tot een wezenlijke spanning tussen systeem en realiteit.',
      'Heeft u vragen over dit onderwerp of uw specifieke situatie? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.',
    ],
  },
  'drie-formele-trajecten': {
    slug: 'drie-formele-trajecten',
    type: 'blog',
    category: 'Nieuws',
    title: 'Drie formele trajecten met het ministerie',
    excerpt: 'HBM Juristen heeft deze problematiek rechtstreeks onder de aandacht gebracht bij het ministerie van Justitie en Veiligheid.',
    date: '15 januari 2025',
    author: 'HBM Juristen',
    readTime: '4 min leestijd',
    image: insight2,
    content: [
      'HBM Juristen heeft deze problematiek niet louter publiekelijk aangekaart, maar ook rechtstreeks onder de aandacht gebracht bij het ministerie van Justitie en Veiligheid.',
      'In de afgelopen periode hebben drie formele correspondentie- en overlegtrajecten plaatsgevonden:',
      'Een eerste inhoudelijke briefwisseling over de exclusieve toegang van advocaten tot gesubsidieerde rechtsbijstand, waarin is bepleit om kwaliteitscriteria centraal te stellen in plaats van uitsluitend titelgebonden toegang.',
      'Een vervolgreactie waarin concreet is voorgesteld om te onderzoeken of gecertificeerde juristen onder strikte kwaliteitsvoorwaarden binnen het bestaande stelsel kunnen opereren.',
      'Een nadere schriftelijke uitwisseling naar aanleiding van de reactie van het ministerie, waarin is benadrukt dat de maatschappelijke behoefte aan betaalbare juridische bijstand structureel groter is dan het huidige stelsel kan dragen.',
      '## Reactie van het ministerie',
      'In de beantwoording heeft het ministerie bevestigd dat de toegang tot het recht voortdurende aandacht heeft en dat er onderzoek loopt naar alternatieve organisatievormen binnen de juridische sector. Tegelijkertijd is aangegeven dat het te ver zou voeren om de volledige groep juristen onder een nieuw wettelijk kader te brengen.',
      'Die reactie verdient respect, maar vraagt ook om verdere verdieping. Het debat is immers geen principieel beroepsdebat, maar een systeemvraagstuk.',
      'Heeft u vragen over dit onderwerp? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.',
    ],
  },
  'effectieve-toegang-recht': {
    slug: 'effectieve-toegang-recht',
    type: 'blog',
    category: 'Nieuws',
    title: 'De kern: effectieve toegang tot het recht',
    excerpt: 'Artikel 6 EVRM verplicht staten tot effectieve toegang tot de rechter.',
    date: '8 januari 2025',
    author: 'HBM Juristen',
    readTime: '3 min leestijd',
    image: insight3,
    content: [
      'Artikel 6 EVRM verplicht staten tot effectieve toegang tot de rechter. Die verplichting ziet niet uitsluitend op het bestaan van procedures, maar op daadwerkelijke bereikbaarheid van juridische bijstand wanneer dat noodzakelijk is voor een eerlijk proces.',
      'Het Europees Hof voor de Rechten van de Mens heeft herhaaldelijk benadrukt dat rechtsbescherming praktisch en reëel moet zijn.',
      'Wanneer burgers geen toevoeging krijgen, maar ook geen commerciële tarieven kunnen dragen, ontstaat een grijs gebied waarin rechtsbescherming feitelijk onbereikbaar wordt. Juist in dat gebied opereren gespecialiseerde juristenpraktijken, vaak tegen sterk gereduceerde tarieven of met aanzienlijke onbetaalde inzet.',
      'Dat model is maatschappelijk betrokken, maar economisch kwetsbaar.',
      'Heeft u vragen over dit onderwerp? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.',
    ],
  },
  'schijnzelfstandigheid-handhaving': {
    slug: 'schijnzelfstandigheid-handhaving',
    type: 'blog',
    category: 'Arbeidsrecht',
    title: 'Arbeidsrecht: schijnzelfstandigheid, platformarbeid en handhaving',
    excerpt: 'Het Nederlandse arbeidsrecht bevindt zich in een herijkingsfase. De handhaving op schijnzelfstandigheid is sinds 2025 aanzienlijk aangescherpt.',
    date: '2 januari 2025',
    author: 'HBM Juristen',
    readTime: '4 min leestijd',
    image: insight2,
    content: [
      'Het Nederlandse arbeidsrecht bevindt zich in een herijkingsfase. De handhaving op schijnzelfstandigheid is sinds 2025 aanzienlijk aangescherpt. De Belastingdienst heeft aangekondigd de opschorting van handhaving te beëindigen, waardoor opdrachtgevers die structureel werken met zzp\'ers kritisch moeten toetsen of daadwerkelijk sprake is van zelfstandigheid.',
      '## Het Deliveroo-arrest',
      'De rechtspraak, met name het Deliveroo-arrest van de Hoge Raad (HR 24 maart 2023), heeft bevestigd dat de kwalificatie van een arbeidsovereenkomst afhankelijk is van de feitelijke uitvoering van de werkzaamheden. De bedoeling van partijen is niet doorslaggevend. Elementen zoals gezagsverhouding, organisatorische inbedding en ondernemersrisico wegen zwaar.',
      '## Wetgeving in voorbereiding',
      'Daarnaast ligt wetgeving in voorbereiding die beoogt het begrip "werknemer" verder te verduidelijken en de onderkant van de arbeidsmarkt beter te beschermen. Tegelijkertijd blijft flexibiliteit voor ondernemers een politiek thema.',
      'Werkgevers doen er verstandig aan modelovereenkomsten te herzien en feitelijke werkrelaties juridisch te toetsen. Voor zelfstandigen betekent dit dat fiscale en arbeidsrechtelijke risico\'s toenemen.',
    ],
  },
  'mediation-nederland': {
    slug: 'mediation-nederland',
    type: 'blog',
    category: 'Civiel recht',
    title: 'Mediation in Nederland: tussen praktijk en aankomende wetgeving',
    excerpt: 'Mediation is in Nederland al jaren een vaste waarde binnen de rechtspraktijk, maar opmerkelijk genoeg zonder eigen, zelfstandige wettelijke regeling.',
    date: '10 december 2024',
    author: 'HBM Juristen',
    readTime: '6 min leestijd',
    image: insight2,
    content: [
      'Mediation is in Nederland al jaren een vaste waarde binnen de rechtspraktijk, maar opmerkelijk genoeg zonder eigen, zelfstandige wettelijke regeling. In arbeidsconflicten, familiezaken en commerciële geschillen wordt mediation frequent ingezet, vaak nog voordat een rechter zich over de zaak buigt. Toch berust het juridische fundament vooral op contractsvrijheid en op de implementatie van de Europese Mediationrichtlijn uit 2008, niet op een nationale mediationwet.',
      'Daar lijkt verandering in te komen. In Den Haag wordt al geruime tijd gesproken over een formele Wet Mediation. Het initiatief beoogt mediation steviger te verankeren binnen het civiele en bestuursrechtelijke proces. Het uitgangspunt is niet om mediation verplicht te stellen, maar om het gebruik ervan te bevorderen en de kwaliteit van mediators beter te borgen.',
      '## Drie pijlers van het wetsvoorstel',
      'De kern van het wetsvoorstel bestaat uit drie pijlers. Ten eerste wordt gedacht aan een wettelijk register voor mediators, waarin kwaliteitseisen, opleiding en ervaring worden vastgelegd. Ten tweede wil men mediation nadrukkelijker integreren in het burgerlijk procesrecht. Rechters zouden bijvoorbeeld explicieter kunnen beoordelen of mediation in een concreet geschil passend is. Ten derde wordt bezien hoe mediation binnen het bestuursrecht kan worden versterkt, zodat conflicten tussen burger en overheid minder snel escaleren tot langdurige procedures.',
      '## De mediationovereenkomst',
      'Een belangrijk onderdeel van het voorstel is de juridische positie van de mediationovereenkomst. Gedacht wordt aan een regeling waarbij de aanvang van mediation bepaalde verjaringstermijnen kan stuiten. Daarmee krijgt mediation procesrechtelijke betekenis, zonder dat de vrijwilligheid wordt aangetast. De autonomie van partijen blijft het fundament.',
      '## Stand van het wetgevingsproces',
      'De behandeling van het wetsvoorstel heeft vertraging opgelopen. Er bestaat discussie over de noodzaak van titelbescherming, de inrichting van tuchtrecht en de verhouding tussen bestaande private kwaliteitssystemen en een publiek register. Critici vragen zich af of de praktijk werkelijk tekortschiet of dat de huidige structuur reeds voldoende waarborgen biedt. Voorstanders benadrukken juist dat wettelijke verankering het vertrouwen in mediation zal vergroten en de positie van de mediator verduidelijkt.',
      '## Mediation in de praktijk',
      'In de dagelijkse rechtspraktijk is mediation inmiddels meer dan een alternatief; het is onderdeel van strategische geschilvoering. Rechters verwijzen actief, advocaten nemen mediationclausules op in contracten en bestuursorganen zoeken vaker informele oplossingen voordat formele besluitvorming volgt. De komende wetgeving moet deze ontwikkeling institutioneel ondersteunen.',
      'Voor cliënten betekent dit dat mediation steeds minder als vrijblijvende optie wordt gezien en steeds meer als serieuze, juridisch relevante fase binnen een conflict. Voor juristen en mediators geldt dat professionalisering en transparantie toenemen. Wie zich bezighoudt met arbeidsrecht, familierecht of ondernemingsgeschillen doet er verstandig aan de voortgang van de Wet Mediation nauwgezet te volgen.',
      '## Conclusie',
      'Mediation blijft gebaseerd op vrijwilligheid, vertrouwelijkheid en neutraliteit. De wet zal deze beginselen niet vervangen, maar mogelijk versterken. De vraag is niet of mediation een plaats heeft binnen het Nederlandse rechtssysteem, maar hoe die plaats formeel wordt vastgelegd. De komende periode zal duidelijk maken of de wetgever kiest voor een beperkte stimulans of voor een fundamentele herpositionering van mediation binnen de rechtsorde.',
    ],
  },
  'moudawana-hervormingen': {
    slug: 'moudawana-hervormingen',
    type: 'blog',
    category: 'Vreemdelingenrecht',
    title: 'De Moudawana in ontwikkeling — actuele hervormingen en juridische betekenis',
    excerpt: 'De Marokkaanse Moudawana, het familierechtelijk wetboek van het Koninkrijk Marokko, blijft in beweging sinds de fundamentele hervorming van 2004.',
    date: '15 december 2024',
    author: 'HBM Juristen',
    readTime: '6 min leestijd',
    image: insight1,
    content: [
      'De Marokkaanse Moudawana, het familierechtelijk wetboek van het Koninkrijk Marokko, blijft in beweging. Sinds de fundamentele hervorming van 2004 is het uitgangspunt dat het familierecht zowel bescherming biedt aan het gezin als aansluit bij maatschappelijke ontwikkelingen. In 2023 en 2024 zijn opnieuw voorstellen besproken ter actualisering van bepalingen rond huwelijk, echtscheiding, gezag en vermogensverhoudingen.',
      '## Minimumhuwelijksleeftijd en gezag',
      'Een belangrijk aandachtspunt betreft de aanscherping van uitzonderingen op het minimumhuwelijk van 18 jaar. Rechters beschikken thans nog over beoordelingsruimte, maar de tendens is gericht op verdere beperking en strengere motiveringseisen. Daarnaast wordt gekeken naar verduidelijking van de positie van de moeder bij voogdij- en gezagskwesties, met name wanneer ouders gescheiden leven.',
      '## Huwelijksvermogensrecht',
      'Ook het huwelijksvermogensrecht krijgt meer aandacht. Hoewel de Moudawana geen automatische gemeenschap van goederen kent, biedt zij ruimte voor contractuele afspraken bij huwelijkssluiting. In de praktijk blijken dergelijke afspraken vaak te ontbreken, wat bij echtscheiding tot bewijsdiscussies leidt over bijdragen aan vermogensvorming. De rechtsontwikkeling laat zien dat rechters meer gewicht toekennen aan aantoonbare economische participatie van beide echtgenoten.',
      '## Erfrecht',
      'Op het terrein van erfrecht blijft de traditionele systematiek leidend, met vaste verdelingsregels. Hervormingsdiscussies raken aan de vraag in hoeverre binnen het bestaande kader ruimte bestaat voor aanvullende testamentaire planning. Voor personen met dubbele nationaliteit of vermogen in meerdere landen ontstaan daardoor complexe internationaal privaatrechtelijke situaties.',
      '## Relevantie voor de Marokkaanse diaspora',
      'Voor de Marokkaanse diaspora, waaronder Marokkaanse Nederlanders, is dit bijzonder relevant. Echtscheidingen uitgesproken in Nederland moeten in Marokko afzonderlijk worden erkend. Onroerend goed in Marokko valt in beginsel onder Marokkaans recht, ongeacht een eventuele Nederlandse rechtskeuze. Dit kan leiden tot parallelle procedures en uiteenlopende uitkomsten.',
      'De hervormingen vinden plaats binnen het constitutionele bestel van het Koninkrijk, met respect voor de nationale identiteit en de centrale rol van de monarch als waarborg van institutionele stabiliteit. Juridische modernisering wordt aldus vormgegeven als geleidelijke ontwikkeling binnen het bestaande staatsrechtelijke kader.',
      '## Preventieve structurering',
      'Voor cliënten met grensoverschrijdende belangen geldt dat preventieve structurering essentieel is. Huwelijkscontracten, rechtskeuzeclausules en testamentaire voorzieningen kunnen toekomstige geschillen aanzienlijk beperken. In een rechtsgebied dat zowel cultureel als juridisch gelaagd is, vereist effectieve advisering een combinatie van inhoudelijke kennis en strategisch inzicht.',
    ],
  },
  'handelssector-marokko': {
    slug: 'handelssector-marokko',
    type: 'blog',
    category: 'Ondernemingsrecht',
    title: 'De handelssector in Marokko: juridische aandachtspunten voor buitenlandse ondernemers',
    excerpt: 'Marokko positioneert zich nadrukkelijk als economische brug tussen Europa en Afrika. Toetreding tot de Marokkaanse markt vereist een gedegen begrip van het lokale handels- en ondernemingsrecht.',
    date: '1 december 2024',
    author: 'HBM Juristen',
    readTime: '7 min leestijd',
    image: insight1,
    content: [
      'Marokko positioneert zich nadrukkelijk als economische brug tussen Europa en Afrika. De strategische ligging, de toegang tot de Middellandse Zee en de Atlantische Oceaan, en handelsverdragen met de Europese Unie, de Verenigde Staten en diverse Afrikaanse staten maken het land aantrekkelijk voor buitenlandse investeerders. Tegelijkertijd vereist toetreding tot de Marokkaanse markt een gedegen begrip van het lokale handels- en ondernemingsrecht.',
      '## Ondernemingsvormen',
      'Buitenlandse ondernemers kunnen in Marokko in beginsel vrij ondernemen. Er geldt geen algemeen verbod op buitenlandse eigendom van ondernemingen. De meest gekozen rechtsvorm is de Société à Responsabilité Limitée (SARL), vergelijkbaar met de Nederlandse besloten vennootschap. Ook de Société Anonyme (SA) wordt gebruikt bij grotere investeringen. Oprichting geschiedt via registratie bij het Handelsregister (Registre de Commerce), waarbij notariële formaliteiten en publicatieverplichtingen van toepassing zijn.',
      '## Vergunningen en regulering',
      'Een essentieel aandachtspunt is het onderscheid tussen directe handelsactiviteiten en activiteiten waarvoor specifieke vergunningen vereist zijn. In bepaalde sectoren – zoals telecommunicatie, energie, financiële dienstverlening en transport – geldt aanvullende regulering en toezicht. Buitenlandse ondernemers dienen vooraf te verifiëren of hun activiteiten onder een vergunningsregime vallen.',
      '## Valutarecht',
      'Daarnaast speelt het valutarecht een belangrijke rol. Marokko kent regels inzake deviezencontrole via het Office des Changes. Buitenlandse investeringen moeten correct worden geregistreerd om repatriëring van winst, dividenden of verkoopopbrengsten mogelijk te maken. Zonder juiste registratie kunnen beperkingen ontstaan bij het overmaken van gelden naar het buitenland.',
      '## Fiscaal klimaat',
      'Op fiscaal terrein heeft Marokko zijn investeringsklimaat gemoderniseerd. Er bestaan belastingvoordelen voor investeringen in specifieke regio\'s of sectoren, waaronder industrie, export en hernieuwbare energie. Nederland en Marokko hebben een belastingverdrag ter voorkoming van dubbele belasting. Toch vereist de toepassing daarvan een zorgvuldige structuur, met aandacht voor vaste inrichting, bronheffing en transfer pricing.',
      '## Contractuele aspecten',
      'Contractueel is het van belang dat forum- en rechtskeuzeclausules expliciet worden vastgelegd. Hoewel Marokko partij is bij verschillende internationale verdragen, waaronder het Verdrag van New York inzake erkenning en tenuitvoerlegging van buitenlandse arbitrale vonnissen, kan de executie van buitenlandse rechterlijke uitspraken afzonderlijke procedures vereisen. Arbitrage wordt daarom regelmatig gekozen in internationale handelscontracten.',
      '## Mededinging en arbeidsrecht',
      'Ook mededingingsrecht en consumentenbescherming zijn in ontwikkeling. De Conseil de la Concurrence treedt actiever op tegen kartelvorming en machtsmisbruik. Buitenlandse ondernemingen die distributienetwerken opzetten dienen hun contractuele verhoudingen te toetsen aan de Marokkaanse mededingingsregels.',
      'Tot slot verdient het arbeidsrecht aandacht. Hoewel de handelssector relatief flexibel is, kent Marokko dwingendrechtelijke bepalingen inzake arbeidsovereenkomsten, sociale zekerheid en ontslag. Lokale compliance is geen formaliteit, maar een voorwaarde voor duurzame aanwezigheid.',
      '## Conclusie',
      'De handelssector in Marokko biedt aanzienlijke kansen voor buitenlandse investeerders. De combinatie van geografische ligging, infrastructuurprojecten zoals Tanger Med en economische modernisering maakt het land aantrekkelijk. Tegelijkertijd vereist succesvol ondernemen een geïntegreerde juridische benadering waarin ondernemingsrecht, fiscaal recht, valutarecht en internationaal privaatrecht samenkomen. Strategische voorbereiding voorkomt dat commerciële ambities stranden in procedurele of administratieve obstakels.',
    ],
  },
  'vreemdelingenrecht-ind-2026': {
    slug: 'vreemdelingenrecht-ind-2026',
    type: 'blog',
    category: 'Vreemdelingenrecht',
    title: 'Vreemdelingenrecht in Nederland: IND-rapporten, vertragingen en rechtsbescherming in 2026',
    excerpt: 'De IND kampt structureel met lange wachttijden en een groeiende werkvoorraad, wat directe gevolgen heeft voor asielzoekers, familie- en migratieprocedures.',
    date: '20 november 2024',
    author: 'HBM Juristen',
    readTime: '7 min leestijd',
    image: insight3,
    content: [
      'In Nederland vormt de Vreemdelingenwet 2000 samen met het Vreemdelingenbesluit 2000 de kern van het vreemdelingenrecht. De uitvoering hiervan is in handen van de Immigratie- en Naturalisatiedienst (IND). De laatste jaarcijfers laten zien dat de IND structureel kampt met lange wachttijden en een groeiende werkvoorraad, wat directe gevolgen heeft voor asielzoekers, familie- en migratieprocedures.',
      '## Achterstanden en wachttijden',
      'Volgens de jaarstatistiek van de IND over 2025–2026 blijft de achterstand in asielprocedures sterk oplopen. Hoewel het aantal eerste aanvragen daalde van ruim 32 000 in 2024 naar circa 24 000 in 2025, steeg het totale aantal openstaande zaken naar meer dan 51 000 rond 1 januari 2026. De gemiddelde wachttijd in de algemene procedure nam toe tot 67 weken, aanzienlijk langer dan de wettelijk voorgeschreven maximale beslistermijn van zes maanden.',
      'Deze statistiek valt samen met concrete uitkomsten uit de cijferanalyse van december 2025: de IND nam in die maand minder asielbesluiten dan voorzien — ongeveer 1 910 in plaats van de verwachte 3 340 — doordat de behandeling van zaken meer tijd kost dan eerder geraamd.',
      '## Gevolgen voor gezinshereniging en dwangsommen',
      'De vertragingen hebben niet alleen betrekking op asielaanvragen, maar ook op gezinshereniging en reguliere migratieprocessen. In 2024 betaalde de staat meer dan € 36,8 miljoen aan dwangsommen omdat de IND te laat besliste in asiel- en familieherenigingsprocedures. Het aantal rechtszaken tegen vertragingen is de laatste jaren sterk gestegen, wat de uitvoeringsdruk verder vergroot.',
      'Een andere ontwikkeling is dat de IND momenteel nog zaken behandelt met aanvraagdata tot september 2023, wat wijst op aanzienlijke achterstanden in de procesvolgorde.',
      '## EU-Asiel- en Migratiepact',
      'Naast statistische vertragingen staan belangrijke beleidswijzigingen op stapel. Per 12 juni 2026 treedt het nieuwe EU-Asiel- en Migratiepact in werking, waarmee de Nederlandse procedure naar verwachting wordt vereenvoudigd. Zo zullen processtappen zoals de voornemen- en zienswijzeprocedure worden afgeschaft om de doorlooptijd te verkorten, wat de uitvoering door de IND moet verlichten.',
      '## Rechtsbescherming',
      'In de rechtspraktijk betekent deze situatie dat aanvragen — of het nu gaat om asiel, gezinshereniging of arbeidsmigratie — structureel langer in behandeling blijven dan wettelijk is vastgelegd. Dit heeft directe effecten op rechtsbescherming, want te late IND-besluiten kunnen aanleiding geven tot juridische procedures tegen de staat en tot de toekenning van dwangsommen. De rechtsbescherming van vreemdelingen blijft afhankelijk van tijdige bezwaar- en beroepsprocedures bij rechtbanken en de Raad van State.',
      'Tegelijkertijd dwingt de groeiende dossiervoorraad de IND tot organisatorische aanpassingen en pilotprocedures om snelheid en efficiëntie te verbeteren. Hoe deze maatregelen zich verhouden tot de rechtszekerheid van individuele verzoekers, blijft onderwerp van juridische en politieke discussie in 2026.',
    ],
  },
};

const relatedPosts = [
  {
    title: 'Drie formele trajecten met het ministerie',
    category: 'Nieuws',
    date: '15 januari 2025',
    image: insight2,
    href: '/blog/drie-formele-trajecten',
  },
  {
    title: 'De kern: effectieve toegang tot het recht',
    category: 'Nieuws',
    date: '8 januari 2025',
    image: insight3,
    href: '/blog/effectieve-toegang-recht',
  },
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container-editorial section-padding text-center">
          <h1 className="text-3xl font-serif mb-4">Artikel niet gevonden</h1>
          <p className="text-muted-foreground mb-8">Dit artikel bestaat niet of is verplaatst.</p>
          <Button asChild>
            <Link to="/actualiteit">Bekijk alle artikelen</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="container-editorial">
        <div className="pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to={post.type === 'pers' ? '/pers' : '/blog'}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar overzicht
            </Link>
          </motion.div>
          
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex gap-2 mb-4"
          >
            <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              post.type === 'pers' 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}>
              {post.type === 'pers' ? 'Pers' : 'Blogs'}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground max-w-4xl"
          >
            {post.title}
          </motion.h1>
          
          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container-editorial pb-10">
        <motion.div 
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-serif text-foreground mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 bg-section-grey rounded-2xl"
          >
            <h3 className="text-xl font-serif text-foreground mb-3">
              Hulp nodig bij uw juridische vraag?
            </h3>
            <p className="text-muted-foreground mb-6">
              Onze juristen staan klaar om u te helpen. Neem contact op voor een vrijblijvend gesprek.
            </p>
            <Button variant="cta" size="lg">
              Neem contact op
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-section-grey">
        <div className="container-editorial section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Gerelateerde artikelen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={article.href}
                    className="group block"
                  >
                    <div className="relative rounded-2xl overflow-hidden mb-5">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div>
                      <time className="text-sm text-muted-foreground">
                        {article.date}
                      </time>
                      <h3 className="text-lg font-serif font-medium text-foreground mt-2 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/actualiteit" className="arrow-link">
                Bekijk alle artikelen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
