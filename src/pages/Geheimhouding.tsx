import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Geheimhouding = () => {
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
          Interne Geheimhoudingsplicht
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
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 1 – Doel en reikwijdte</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Deze geheimhoudingsplicht strekt ertoe de vertrouwelijkheid te waarborgen van alle informatie waarvan medewerkers van HBM Juristen kennisnemen in het kader van hun werkzaamheden.</p>
                <p>Deze regeling is van toepassing op alle bij HBM Juristen werkzame personen, waaronder begrepen maar niet beperkt tot juristen, advocaten, juridisch medewerkers en stagiairs.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 2 – Vertrouwelijke informatie</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Onder vertrouwelijke informatie wordt verstaan alle informatie, in welke vorm dan ook, die:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>betrekking heeft op cliënten, dossiers, zaken of rechtsposities van cliënten;</li>
                  <li>ziet op interne organisatie, bedrijfsvoering, strategie, tarieven, modellen, werkwijzen, knowhow en interne communicatie van HBM Juristen;</li>
                  <li>afkomstig is van derden en waarvan het vertrouwelijke karakter bekend is of redelijkerwijs bekend moet worden geacht.</li>
                </ul>
                <p>Vertrouwelijke informatie omvat zowel mondelinge, schriftelijke als digitale informatie, ongeacht de wijze van vastlegging of verstrekking.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 3 – Geheimhoudingsverplichting</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Medewerkers zijn verplicht tot strikte geheimhouding van alle vertrouwelijke informatie waarvan zij uit hoofde van hun functie of werkzaamheden kennisnemen.</p>
                <p>Het is medewerkers verboden vertrouwelijke informatie, direct of indirect, aan derden te verstrekken, openbaar te maken of voor andere doeleinden te gebruiken dan noodzakelijk voor de uitvoering van hun werkzaamheden voor HBM Juristen.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 4 – Uitzonderingen</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Verstrekking van vertrouwelijke informatie is uitsluitend toegestaan indien:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>dit noodzakelijk is voor de uitvoering van de werkzaamheden en plaatsvindt binnen de organisatie van HBM Juristen;</li>
                  <li>sprake is van een wettelijke verplichting of een bindend bevel van een bevoegde autoriteit, in welk geval – voor zover mogelijk – vooraf overleg plaatsvindt met de directie van HBM Juristen.</li>
                </ul>
                <p>In alle gevallen dient de verstrekking te worden beperkt tot hetgeen strikt noodzakelijk is.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 5 – Zorgvuldigheid en beveiliging</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Medewerkers dragen zorg voor een zorgvuldige omgang met vertrouwelijke informatie en nemen passende maatregelen ter voorkoming van onbevoegde kennisneming, verlies of misbruik.</p>
                <p>Dit omvat onder meer het naleven van interne richtlijnen inzake dossierbeheer, IT-beveiliging, gebruik van e-mail, cloudopslag en fysieke archivering.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 7 – Slotbepalingen</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Deze geheimhoudingsplicht vormt een aanvulling op eventuele wettelijke beroepsgeheimen en contractuele geheimhoudingsverplichtingen en laat deze onverlet.</p>
                <p>In gevallen waarin deze regeling niet voorziet, beslist de directie van HBM Juristen.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Geheimhouding;
