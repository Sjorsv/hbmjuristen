import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Audit = () => {
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
          Interne Audit
        </motion.h1>
      </section>

      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 text-lg text-foreground leading-relaxed"
          >
            <p>HBM Juristen beschikt over een gecertificeerde interne auditor die jaarlijks de interne processen beoordeelt. De audits zijn gericht op effectiviteit, naleving en risicobeheersing. De werkwijze sluit aan bij internationale kwaliteitskaders, waaronder ISO 9001:2015. Deze aanpak bevordert consistente en transparante bedrijfsvoering en verstevigt de interne structuur, informatiebeveiliging, milieubewust handelen en veiligheidsbeleid.</p>
            <p>Voor cliënten betekent dit dat HBM Juristen niet alleen juridisch zorgvuldig werkt, maar tevens aantoonbaar voldoet aan professionele kwaliteitsnormen, waardoor betrouwbaarheid en continuïteit worden gewaarborgd.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Audit;