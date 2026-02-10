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
