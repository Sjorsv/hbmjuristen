import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Phone, MapPin, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import teamImage from '@/assets/team-working.jpg';
import logoNmv from '@/assets/logo-nmv.png';
import logoBb from '@/assets/logo-bb.png';
import logoNjv from '@/assets/logo-njv.png';

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        {/* Back link and Title above image */}
        <div className="container-editorial pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/" 
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
            Wie zijn wij
          </motion.h1>
        </div>
        
        {/* Hero image */}
        <div className="container-editorial">
          <motion.div 
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <img 
              src={teamImage} 
              alt="HBM Juristen team"
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
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen is een bevlogen en doelgericht juristenkantoor waar u terechtkunt voor juridisch advies en rechtsbijstand. Wij bieden geen halve oplossingen, maar messcherp juridisch advies en krachtige ondersteuning. Of het nu gaat om ontslag, vreemdelingenzaken, verbintenissenrecht, familiemediation, arbeidsmediation, bestuursrecht of Marokkaans recht – wij staan aan uw zijde.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Ons team heeft een enorme gedrevenheid voor het juridische vak. De kennis en snelheid waarmee wij dagelijks werken, zijn indrukwekkend. Voor nieuwe cliënten bieden wij daarom een geheel kosteloos eerste telefonische consult, zodat u laagdrempelig de eerste stap kunt zetten naar passende juridische ondersteuning. Zowel particulieren als ondernemers weten ons te vinden dankzij onze diepe juridische kennis en heldere communicatie.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Wij combineren expertise en praktijkervaring om uw juridische zaak zo goed mogelijk te verdedigen. Elke zaak – hoe ingewikkeld ook – wordt aangepakt met de juiste expertise en samenwerking. Bij ons wordt niet geschermd met ideeën zonder praktische oplossingen. Wij staan aan uw kant en denken in oplossingen, ongeacht de situatie. Dat doen wij gedurfd, helder en met een no-nonsense mentaliteit – precies wat onze cliënten van ons verwachten.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen is lid van de Nederlandse Juristen Vereniging (NJV) en de Nederlandse Mediatorsvereniging (NMv). Wij zijn actief in Nederland, Marokko en China.
            </p>

            <div className="flex items-center gap-8 pt-2">
              <img src={logoNjv} alt="Nederlandse Juristen Vereniging" className="h-12 object-contain" />
              <img src={logoNmv} alt="Nederlandse Mediatorsvereniging" className="h-12 object-contain" />
              <img src={logoBb} alt="Bureau Beroepszaken" className="h-12 object-contain" />
            </div>

            <div className="flex items-center gap-2 text-lg text-foreground">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Goed bereikbaar: centraal gelegen in Amsterdam.</span>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild className="gap-2">
                <Link to="/contact">
                  <Phone className="w-4 h-4" />
                  Neem contact op
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link to="/over-ons/team">
                  <Users className="w-4 h-4" />
                  Ontmoet ons team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toen en nu Section */}
      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Toen en nu
            </h2>

            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen begon in 2020 als een brede juridische praktijk die cliënten ondersteunde in uiteenlopende rechtsgebieden. De generalistische aanpak van de beginperiode bood inzicht in de behoeften van verschillende cliënten en maakte duidelijk waar gespecialiseerde kennis daadwerkelijk toegevoegde waarde kon bieden.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">2020–2023</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Tot 2023 bestond een aanzienlijk deel van de werkzaamheden uit juridisch advies in familiezaken, in het bijzonder echtscheidingsdossiers en procedures waarin hoorzittingen een centrale rol speelden. Opvallend was de continue en relatief hoge toestroom van cliënten uit België, die mede bijdroeg aan een intensief werkrooster. In die periode was de praktijk zeven dagen per week geopend van 08.00 tot 21.00 uur, waarbij dossiers en spoedoverleggen regelmatig tot 23.00 uur doorliepen. Deze werkwijze was passend bij de toenmalige vraag, maar legde ook de basis voor een latere herstructurering.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">2024–heden</h3>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  In 2024 is de openingstijd teruggebracht tot 21.00 uur en dit jaar is de dienstverlening verder geconcentreerd tot de middaguren, zodat werkzaamheden zorgvuldig, gecontroleerd en met een hogere mate van specialisatie kunnen worden uitgevoerd. Deze ontwikkeling markeert een bewuste keuze voor kwaliteit boven kwantiteit, een meer beheersbare procesvoering en een duidelijker afbakening van de rechtsgebieden waarin de praktijk uitblinkt.
                </p>
                <p>
                  HBM Juristen richt zich inmiddels op een aantal kernspecialisaties, waaronder civiele procedures, internationale dossiers, Marokkaans recht, mediation en vreemdelingenzaken. De hedendaagse praktijk werkt vanuit inhoudelijke diepgang, een internationale oriëntatie en een consequente focus op kwaliteit en zorgvuldigheid.
                </p>
                <p>
                  Waar HBM Juristen in 2020 begon als een algemene praktijk, staat het kantoor nu voor specialistische juridische dienstverlening die aansluit bij de actuele juridische realiteit in binnen- en buitenland. Deze ontwikkeling weerspiegelt een continue professionele groei en een duidelijke koers richting duurzame, hoogwaardige en gespecialiseerde rechtsbijstand.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-section-grey">
        <div className="container-editorial section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Meer over HBM Juristen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                to="/over-ons/team"
                className="group block h-full bg-background rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      Ons team
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Maak kennis met onze ervaren juristen
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/rechtsgebieden"
                className="group block h-full bg-background rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      Rechtsgebieden
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bekijk onze expertise en specialisaties
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/contact"
                className="group block h-full bg-background rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      Contact
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Neem vrijblijvend contact met ons op
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
