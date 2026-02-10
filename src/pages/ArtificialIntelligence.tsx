import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ArtificialIntelligence = () => {
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
          Artificial Intelligence (AI) & Data Security
        </motion.h1>
      </section>

      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen maakt gebruik van een afgeschermde zakelijke AI-omgeving binnen haar organisatie. Binnen deze beveiligde infrastructuur kunnen marketinggerichte, cloudgerelateerde, grafische werkzaamheden en andere werkzaamheden worden uitgevoerd waarbij vertrouwelijke informatie op zorgvuldige wijze wordt verwerkt. Deze omgeving voldoet aan internationaal erkende beveiligings- en auditstandaarden, waaronder het certificeringsprogramma van de Cloud Security Alliance (CSA STAR) en SOC 2 Type 2-auditnormeringen. De AI-omgeving past versleuteling toe tijdens opslag en verzending, ondersteunt naleving van de AVG en andere relevante privacywetgeving en waarborgt dat bedrijfsgegevens niet worden gebruikt voor trainingsdoeleinden. De toegang is ingericht volgens role-based access control en wordt ondersteund door continue monitoring en auditlogging teneinde ongeautoriseerde toegang of afwijkingen te voorkomen. Alle gegenereerde output wordt beoordeeld, gecontroleerd en waar nodig aangepast door een bevoegde professional.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtificialIntelligence;
