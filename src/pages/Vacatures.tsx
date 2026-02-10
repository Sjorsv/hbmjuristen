import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, Briefcase, GraduationCap, Clock, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const vacatures = [
  {
    title: 'Jurist Civiel Recht',
    type: 'Vast dienstverband',
    location: 'Amsterdam',
    hours: '32–40 uur per week',
    description: 'Wij zoeken een gedreven jurist met ervaring in het civiele recht om ons team te versterken. Je werkt zelfstandig aan dossiers en adviseert cliënten over uiteenlopende civielrechtelijke kwesties.',
    requirements: [
      'Afgeronde WO-opleiding Rechtsgeleerdheid',
      'Minimaal 2 jaar werkervaring in het civiele recht',
      'Uitstekende beheersing van de Nederlandse taal in woord en geschrift',
      'Proactieve en oplossingsgerichte werkhouding',
    ],
  },
  {
    title: 'Jurist Vreemdelingenrecht',
    type: 'Vast dienstverband',
    location: 'Amsterdam',
    hours: '32–40 uur per week',
    description: 'Voor onze groeiende praktijk in het vreemdelingenrecht zijn wij op zoek naar een ervaren jurist die cliënten bijstaat in asiel- en migratiezaken.',
    requirements: [
      'Afgeronde WO-opleiding Rechtsgeleerdheid',
      'Aantoonbare kennis van het vreemdelingenrecht',
      'Ervaring met het voeren van procedures bij de IND en rechtbank',
      'Beheersing van Engels en/of Frans is een pré',
    ],
  },
  {
    title: 'Mediator (Parttime)',
    type: 'Parttime',
    location: 'Amsterdam',
    hours: '16–24 uur per week',
    description: 'Wij zijn op zoek naar een gecertificeerd mediator voor familie- en arbeidsmediation. Je begeleidt partijen naar een duurzame oplossing in complexe geschillen.',
    requirements: [
      'MfN-registermediator of gelijkwaardige certificering',
      'Ervaring in familie- en/of arbeidsmediation',
      'Empathisch, neutraal en oplossingsgericht',
      'Beschikbaar voor minimaal 2 dagen per week',
    ],
  },
];

const Vacatures = () => {
  return (
    <Layout>
      <section className="container-editorial">
        <div className="pt-8 pb-6">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground"
            >
              Vacatures
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Wij zijn altijd op zoek naar talent dat ons team versterkt. 
              Bekijk onze openstaande vacatures of neem contact met ons op voor mogelijkheden.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vacatures */}
      <section className="container-editorial py-10 md:py-14">
        <div className="space-y-8">
          {vacatures.map((vacature, index) => (
            <motion.div
              key={vacature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-section-grey rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-serif text-foreground mb-2">{vacature.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {vacature.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {vacature.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {vacature.hours}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {vacature.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Wat wij vragen:</h3>
                <ul className="space-y-2">
                  {vacature.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="cta" asChild className="gap-2">
                <a href="mailto:info@hbmjuristen.nl?subject=Sollicitatie: ${vacature.title}">
                  <Mail className="w-4 h-4" />
                  Solliciteer per e-mail
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stage sectie */}
      <section className="bg-section-grey">
        <div className="container-editorial section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[620px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">Stage</h2>
            </div>

            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Stagiairs kunnen het gehele jaar door solliciteren. Wij selecteren kandidaten op kwaliteiten, ervaring en professionele houding. Een stage omvat een gestructureerd programma met professionele begeleiding door de praktijkopleider, aangevuld met zowel theoretische als praktische werkzaamheden en de uitvoering van door de onderwijsinstelling opgelegde stageopdrachten.
              </p>
              <p>
                Sollicitaties kunnen uitsluitend per e-mail worden ingediend, voorzien van curriculum vitae (CV) en motivatiebrief. Wij beoordelen aanmeldingen zorgvuldig en nemen contact op wanneer u wordt uitgenodigd voor een kennismaking.
              </p>
            </div>

            <div className="pt-6">
              <Button variant="cta" size="lg" asChild className="gap-2">
                <a href="mailto:info@hbmjuristen.nl?subject=Stagesollicitatie">
                  <Mail className="w-4 h-4" />
                  Solliciteer voor een stage
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Vacatures;
