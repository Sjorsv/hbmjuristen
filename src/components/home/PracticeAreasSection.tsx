import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    title: 'Arbeidsmediation',
    description: 'Professionele bemiddeling bij arbeidsconflicten en geschillen.',
    href: '/rechtsgebieden/arbeids-mediation',
  },
  {
    title: 'Familiemediation',
    description: 'Bemiddeling bij familiezaken zoals echtscheiding en omgang.',
    href: '/rechtsgebieden/family-mediation',
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

const PracticeAreasSection = () => {
  return (
    <section className="pt-2 pb-16 md:pt-4 md:pb-24 bg-background">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Ontdek onze <em className="italic">rechtsgebieden</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default PracticeAreasSection;
