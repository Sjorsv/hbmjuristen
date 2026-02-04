import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const practiceAreas = [
  {
    title: 'Arbeidsrecht',
    description: 'Deskundig advies bij arbeidsconflicten, ontslag en arbeidsvoorwaarden.',
    href: '/rechtsgebieden/arbeidsrecht',
  },
  {
    title: 'Consumentenrecht',
    description: 'Bescherming van uw rechten als consument bij geschillen.',
    href: '/rechtsgebieden/consumentenrecht',
  },
  {
    title: 'Bestuursrecht',
    description: 'Bezwaar en beroep tegen overheidsbesluiten en vergunningen.',
    href: '/rechtsgebieden/bestuursrecht',
  },
  {
    title: 'Verbintenissenrecht',
    description: 'Advisering over contracten, overeenkomsten en nakoming.',
    href: '/rechtsgebieden/verbintenissenrecht',
  },
  {
    title: 'Vreemdelingenrecht',
    description: 'Hulp bij verblijfsvergunningen, asiel en naturalisatie.',
    href: '/rechtsgebieden/vreemdelingenrecht',
  },
  {
    title: 'Personen en familierecht',
    description: 'Begeleiding bij echtscheiding, alimentatie en voogdij.',
    href: '/rechtsgebieden/personen-familierecht',
  },
  {
    title: 'Arbeids Mediation',
    description: 'Professionele bemiddeling bij arbeidsconflicten en geschillen.',
    href: '/rechtsgebieden/arbeids-mediation',
  },
  {
    title: 'Family Mediation',
    description: 'Bemiddeling bij familiezaken zoals echtscheiding en omgang.',
    href: '/rechtsgebieden/family-mediation',
  },
  {
    title: 'Sociale zekerheidsrecht',
    description: 'Advies bij uitkeringen, toeslagen en sociale voorzieningen.',
    href: '/rechtsgebieden/sociale-zekerheidsrecht',
  },
  {
    title: 'Huurrecht',
    description: 'Juridische ondersteuning bij huurgeschillen en woningrecht.',
    href: '/rechtsgebieden/huurrecht',
  },
  {
    title: 'China',
    description: 'Juridische ondersteuning voor zaken met betrekking tot China.',
    href: '/rechtsgebieden/china',
  },
  {
    title: 'Marokko',
    description: 'Juridische ondersteuning voor zaken met betrekking tot Marokko.',
    href: '/rechtsgebieden/marokko',
  },
];

const PracticeAreas = () => {
  return (
    <Layout>
      <section className="container-editorial">
        {/* Back link */}
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
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6"
          >
            Onze rechtsgebieden
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            HBM Juristen biedt juridische ondersteuning op verschillende rechtsgebieden. 
            Onze ervaren juristen staan klaar om u te helpen met deskundig advies en 
            persoonlijke begeleiding bij uw juridische vraagstukken.
          </motion.p>
        </div>
      </section>

      <section className="container-editorial py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={area.href}
                className="group block h-full bg-section-grey rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {area.title}
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
      </section>
    </Layout>
  );
};

export default PracticeAreas;
