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
};

const otherPracticeAreas = [
  { name: 'Bestuursrecht', description: 'Bezwaar en beroep tegen overheidsbesluiten', href: '/rechtsgebieden/bestuursrecht' },
  { name: 'Consumentenrecht', description: 'Bescherming bij consumentengeschillen', href: '/rechtsgebieden/consumentenrecht' },
  { name: 'Vreemdelingenrecht', description: 'Verblijfsvergunningen en asiel', href: '/rechtsgebieden/vreemdelingenrecht' },
  { name: 'Huurrecht', description: 'Huurgeschillen en woningrecht', href: '/rechtsgebieden/huurrecht' },
  { name: 'Personen- en familierecht', description: 'Echtscheiding en familiezaken', href: '/rechtsgebieden/personen-familierecht' },
  { name: 'Sociale zekerheidsrecht', description: 'Uitkeringen en toeslagen', href: '/rechtsgebieden/sociale-zekerheidsrecht' },
];

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const practiceArea = slug ? practiceAreasData[slug] : null;

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
            className="text-display-lg md:text-display-xl text-foreground"
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
      <section className="container-editorial section-padding">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {practiceArea.intro}
            </p>
            
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
            
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Meer weten over onze diensten? Onze juristen staan u graag te woord. 
              Neem contact met ons op voor een vrijblijvende kennismaking.
            </p>
            
            <Button variant="cta" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Neem contact op
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
            <h2 className="text-display-sm font-light text-foreground mb-10">
              Bekijk andere rechtsgebieden
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPracticeAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={area.href}
                    className="group block p-6 bg-background rounded-xl border border-border hover:shadow-soft transition-all duration-300"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {area.description}
                    </p>
                    <span className="arrow-link text-sm">
                      Meer informatie
                      <ArrowRight className="w-4 h-4" />
                    </span>
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
