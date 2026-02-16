import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import headerBuildings from '@/assets/header-buildings.jpg';

const Werkwijze = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="container-editorial pt-8 pb-6">
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
          Werkwijze
        </motion.h1>
      </section>

      {/* Hero image */}
      <div className="container-editorial">
        <motion.div 
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
        >
          <img 
            src={headerBuildings} 
            alt="HBM Juristen kantoor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </motion.div>
      </div>

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
              De werkwijze van HBM Juristen is gericht op een zorgvuldige, gestructureerde en transparante behandeling van ieder dossier. Door nauw samen te werken en helder te communiceren, bieden wij houvast in juridische trajecten met grote impact. Wij hanteren vaste processtappen, zodat cliënten duidelijk inzicht hebben in de voortgang, de termijnen en de te verwachten werkzaamheden.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Iedere nieuwe zaak wordt eerst intern beoordeeld om de juridische aard, complexiteit en benodigde deskundigheid vast te stellen. Op basis daarvan wordt het dossier gekoppeld aan de meest geschikte collega, zodat de zaak vanaf het begin wordt behandeld door een jurist met de juiste gespecialiseerde kennis en ervaring. Hiermee waarborgen wij een zorgvuldige, efficiënte en kwalitatief consistente behandeling van elk dossier.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hieronder volgt een overzicht van de stappen en processen die onderdeel kunnen uitmaken van onze werkwijze.
            </p>
          </motion.div>

          {/* Stappen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10 mt-12"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Eerste contact en intakegesprek</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Het proces begint met een (kosteloos) oriënterend gesprek waarin de cliënt zijn of haar juridische vraagstuk of probleem kan toelichten. Tijdens deze consult worden de feiten besproken, de juridische context geanalyseerd, werkzaamheden en kosten en eventuele relevante documenten beoordeeld.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Analyse en advies</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Na het oriënterend gesprek volgt de opdrachtbevestiging, waarin onder andere de kosten en werkzaamheden worden vastgelegd. Hierna volgt een diepgaande analyse van de relevante wetgeving, jurisprudentie en andere (juridische) bronnen die van toepassing zijn op het vraagstuk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Uitvoering en begeleiding</h2>
              <p className="text-lg text-foreground leading-relaxed">
                De jurist voert de benodigde acties uit, zoals het opstellen van juridische documenten (zoals dagvaardingen, brieven of contracten), het indienen van processtukken bij de rechtbank of het voeren van onderhandelingen namens de cliënt. HBM Juristen biedt intensieve begeleiding tijdens de uitvoering van de juridische stappen en houdt de cliënt op de hoogte van elke belangrijke ontwikkeling.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Procesvertegenwoordiging</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Indien de zaak voor de rechter wordt gebracht, vertegenwoordigt de jurist de cliënt gedurende de gehele procedure. De jurist bereidt de cliënt voor op de zitting, formuleert de standpunten en verdedigt deze op een professionele wijze in de rechtbank. HBM Juristen streeft ernaar om de beste juridische positie voor de cliënt te realiseren.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Nazorg en evaluatie</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Na afloop van de juridische procedure of na het bereiken van een oplossing volgt een evaluatiegesprek met de cliënt. Hierin wordt besproken hoe de procedure is verlopen en wat de uiteindelijke resultaten zijn. De jurist biedt daarnaast advies over eventuele vervolgstappen of voorzorgsmaatregelen om toekomstige juridische problemen te voorkomen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Klantgerichte communicatie en transparantie</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Gedurende het hele proces wordt de cliënt regelmatig geïnformeerd over de voortgang en eventuele wijzigingen in de strategie. HBM Juristen hecht veel waarde aan transparantie en zorgt ervoor dat de cliënt altijd op de hoogte is van de kosten en de tijdsduur die aan de zaak verbonden zijn. Wij hebben geen invloed op termijnen van externe partijen, zoals bijvoorbeeld de rechtbank.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-3">Conclusie</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Onze werkwijze is gericht op een systematische en persoonlijke benadering, met als doel om elke cliënt de meest effectieve juridische bijstand te bieden.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Werkwijze;
