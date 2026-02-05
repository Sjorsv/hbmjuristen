import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import buildingImage from '@/assets/building-exterior.jpg';

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
            src={buildingImage} 
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
              Uiteraard leveren wij gedegen werk af, maar naast juridische kwaliteit is ook het onderhouden van een persoonlijke relatie met cliënten voor HBM Juristen van groot belang.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Bovendien kijken wij met een praktische blik naar de zaken die u ons voorlegt. Wat is vanuit zakelijk oogpunt verstandig? Ons plan van aanpak komt tot stand door onderlinge afstemming waarbij onze juristen uw wensen voor ogen houden en onze kennis en expertise voor u wordt ingezet om maximaal resultaat te behalen.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Werkwijze;
