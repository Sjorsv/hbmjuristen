import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Emailbeleid = () => {
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
          E-mailbeleid en aansprakelijkheidsbeperking
        </motion.h1>
      </section>

      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen maakt gebruik van elektronische communicatie voor de behandeling van dossiers en voor algemene correspondentie. Onderstaand beleid is van toepassing op alle door ons verzonden e-mails, inclusief bijlagen.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Vertrouwelijkheid</h2>
              <p className="text-lg text-foreground leading-relaxed">E-mails van HBM Juristen kunnen vertrouwelijke of juridisch beschermde informatie bevatten. De inhoud is uitsluitend bestemd voor de geadresseerde. Indien een bericht onbedoeld bij u terechtkomt, verzoeken wij u het bericht onmiddellijk te verwijderen en de afzender te informeren. Het zonder toestemming gebruiken, kopiëren, verspreiden of openbaar maken van de inhoud is niet toegestaan.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Beveiliging en integriteit</h2>
              <p className="text-lg text-foreground leading-relaxed">Hoewel wij passende technische en organisatorische maatregelen treffen, kunnen wij niet garanderen dat e-mailcommunicatie vrij is van onderschepping, wijzigingen of virussen. HBM Juristen aanvaardt geen aansprakelijkheid voor schade die voortvloeit uit de onjuistheid, onvolledigheid of vertraagde ontvangst van berichten die per e-mail worden verzonden.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Toepasselijk recht</h2>
              <p className="text-lg text-foreground leading-relaxed">Het toepasselijke recht kan verschillen per dossier en per land waarin de juridische werkzaamheden worden verricht. Het toepasselijke recht wordt altijd bevestigd in de opdrachtbevestiging of in de toepasselijke algemene voorwaarden. De enkele ontvangst van een e-mailbericht brengt geen keuze van recht of forum met zich mee.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Algemene voorwaarden</h2>
              <p className="text-lg text-foreground leading-relaxed">Op onze werkzaamheden zijn de algemene voorwaarden van HBM Juristen van toepassing. Deze voorwaarden worden op verzoek verstrekt en zijn beschikbaar via onze website.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Milieu</h2>
              <p className="text-lg text-foreground leading-relaxed">Wij verzoeken u om, waar mogelijk, geen onnodige afdrukken te maken van e-mailcorrespondentie.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Emailbeleid;
