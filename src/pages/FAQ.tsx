import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Wat doet HBM Juristen?',
    answer: 'HBM Juristen verleent rechtshulp in de vorm van juridisch advies en rechtsbijstand aan particulieren en ondernemingen. Wij begeleiden cliënten bij juridische vraagstukken, analyseren juridische posities en adviseren over passende vervolgstappen.',
  },
  {
    question: 'Voor welke rechtsgebieden kan ik bij HBM Juristen terecht?',
    answer: 'HBM Juristen is actief op diverse rechtsgebieden. De exacte specialisaties staan vermeld op onze website. Staat uw vraag er niet bij, dan kunt u altijd contact met ons opnemen om te bespreken of wij u kunnen bijstaan.',
  },
  {
    question: 'Beantwoorden jullie ook persvragen?',
    answer: 'Onze ervaring in het buitenland wordt gewaardeerd. Wij beantwoorden daarom beperkt persvragen die geen direct verband houden met onze praktijk, voor zover dit toelaatbaar is binnen het geldende juridische kader en geen afbreuk doet aan de belangen van betrokken partijen of aan de goede rechtsorde.',
  },
  {
    question: 'Kunnen jullie helpen met administratieve handelingen?',
    answer: 'Nee. HBM Juristen voert geen administratieve handelingen uit. Dit houdt onder meer in dat wij geen documenten opvragen bij instanties, archieven of organisaties, zowel niet binnen Nederland als in het buitenland. Het verzamelen en aanleveren van benodigde stukken blijft de verantwoordelijkheid van de cliënt, tenzij uitdrukkelijk anders overeengekomen.',
  },
  {
    question: 'Kunnen jullie helpen bij het opstellen of beoordelen van juridische documenten?',
    answer: 'Ja. HBM Juristen kan juridische documenten opstellen, beoordelen en juridisch analyseren, zoals overeenkomsten, brieven of processtukken, voor zover dit binnen onze dienstverlening valt.',
  },
  {
    question: 'Welke talen spreken jullie?',
    answer: 'Wij spreken Frans, Engels, Nederlands, Arabisch en Chinees (Mandarijn).',
  },
  {
    question: 'Wat zijn de kosten van de dienstverlening?',
    answer: 'De kosten zijn afhankelijk van de aard en omvang van de werkzaamheden. Vooraf maken wij duidelijke afspraken over het tarief en de wijze van factureren, zodat u niet voor onverwachte kosten komt te staan.',
  },
  {
    question: 'Kan ik bij jullie stage lopen?',
    answer: 'Wij bieden twee keer per jaar stageplaatsen aan binnen het juridische domein. Sollicitaties kunnen het gehele jaar door per e-mail worden ingediend. Aanmeldingen worden doorlopend beoordeeld, waarna geschikte kandidaten worden uitgenodigd zodra een stageplek beschikbaar komt.',
  },
  {
    question: 'Zijn jullie betrokken bij mijn dossier in het buitenland?',
    answer: 'HBM Juristen biedt een gestructureerde en volledige begeleiding van uw dossier. U hebt bij ons altijd een vast aanspreekpunt dat uw vragen beantwoordt en u op de hoogte houdt van relevante ontwikkelingen. Wij analyseren uw situatie, onderzoeken de toepasselijke wet- en regelgeving en bepalen een strategie die aansluit bij uw belangen. Indien nodig starten en begeleiden wij onderzoeken en zorgen wij voor een volledig en zorgvuldig opgebouwd dossier. Bij dossiers waarin werkzaamheden door onze partners in het buitenland worden uitgevoerd, werkt onze praktijk in sommige gevallen actief en rechtstreeks met hen samen, zodat uw zaak als een samenhangend geheel wordt behandeld. Daarnaast onderhouden wij namens u het contact met betrokken instanties en andere partijen, bewaken wij alle wettelijke en procedurele termijnen en leggen wij gemaakte afspraken en stappen zorgvuldig vast. Gedurende het gehele traject monitoren wij de voortgang en waarborgen wij dat uw belangen consistent en deskundig worden behartigd.',
  },
  {
    question: 'Hoe kan ik contact opnemen met HBM Juristen?',
    answer: 'U kunt contact opnemen via de contactgegevens op onze website. Wij streven ernaar om uw bericht zo spoedig mogelijk te beantwoorden.',
  },
];

const FAQ = () => {
  return (
    <Layout>
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
          Veelgestelde vragen (FAQ)
        </motion.h1>
      </section>

      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-lg font-medium text-foreground text-left hover:text-primary py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact blok */}
      <section className="container-editorial pb-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-2xl bg-section-grey p-8 md:p-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Staat uw vraag er niet bij?
            </h2>
            <p className="text-muted-foreground mb-6">
              Neem gerust contact met ons op. Wij helpen u graag verder.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+31202157540" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>020-215 75 40</span>
              </a>
              <a 
                href="mailto:info@hbmjuristen.nl" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@hbmjuristen.nl</span>
              </a>
              <a 
                href="https://wa.me/31202157540" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
