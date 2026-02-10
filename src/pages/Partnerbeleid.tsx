import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Partnerbeleid = () => {
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
          Samenwerking en selectie met partners en derden
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
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Doel en werkwijze</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM biedt juridische ondersteuning bij internationale kwesties, waaronder zaken in Marokko, door samen te werken met zorgvuldig geselecteerde en gecontracteerde juristen in het buitenland. Deze procedure legt uit hoe de samenwerking met deze gecontracteerde partners verloopt en hoe klanten hiervan kunnen profiteren.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Selectie van partners</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>HBM Juristen werkt uitsluitend met partners die een strikt selectieproces doorlopen, waarin zorgvuldigheid en professionele integriteit centraal staan. Kandidaten worden beoordeeld op juridische deskundigheid, praktijkervaring, reputatie en hun vermogen om complexe dossiers op een consistente en betrouwbare wijze te behandelen. Pas wanneer alle toetsingscriteria overtuigend zijn vervuld, volgt een persoonlijke uitnodiging om als partner aan te sluiten. Door deze hoge kwaliteitsdrempel blijft het niveau van dienstverlening gewaarborgd en kunnen cliënten vertrouwen op een team van deskundigen dat werkt volgens uniforme normen en een gedeelde professionele overtuiging. De selectiecriteria waarborgen kwaliteit en betrouwbaarheid:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Ervaring en Specialisatie:</span> De partners beschikken over specialistische kennis en ervaring in rechtsgebieden zoals ondernemingsrecht, familierecht en internationaal privaatrecht.</li>
                  <li><span className="font-medium">Integriteit en Vertrouwen:</span> Alleen partners die aan hoge ethische normen voldoen, worden geselecteerd om onze klanten te vertegenwoordigen.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Transparante overeenkomsten en kosten</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Onze samenwerking met gecontracteerde partners biedt klanten transparantie en duidelijkheid:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Dienstenovereenkomst:</span> Wij werken met de partner op basis van een duidelijke overeenkomst die taken en verantwoordelijkheden specificeert.</li>
                  <li><span className="font-medium">Kostenstructuur:</span> Vooraf worden duidelijke afspraken gemaakt over de kostenstructuur en de wijze van facturering.</li>
                  <li><span className="font-medium">Vertrouwelijkheid en gegevensbescherming:</span> Onze partners zijn verplicht om te voldoen aan de strengste eisen op het gebied van gegevensbescherming en vertrouwelijkheid.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Voortgangsrapportages en contact</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Tijdens de samenwerking kunnen klanten rekenen op duidelijke communicatie en regelmatige updates:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Regelmatige updates:</span> Wij zorgen ervoor dat u regelmatig op de hoogte wordt gehouden van de voortgang van uw zaak.</li>
                  <li><span className="font-medium">Vaste contactpersoon:</span> Een vaste contactpersoon staat tot uw beschikking voor al uw vragen en communicatie met betrekking tot uw zaak.</li>
                  <li><span className="font-medium">Feedbackmogelijkheid:</span> Klanten kunnen feedback geven op de dienstverlening, wat ons helpt om continu de kwaliteit te verbeteren.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Kwaliteitsbewaking en naleving</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>HBM Juristen borgt de kwaliteit van de dienstverlening van de gecontracteerde partners en zorgt voor naleving van wet- en regelgeving:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Kwaliteitscontrole:</span> De juridische werkzaamheden van onze partners worden regelmatig gecontroleerd.</li>
                  <li><span className="font-medium">Naleving van wetgeving:</span> Wij waarborgen dat de juridische diensten voldoen aan de relevante regelgeving.</li>
                  <li><span className="font-medium">Klachtenregeling:</span> Als klant kunt u gebruikmaken van onze klachtenregeling bij eventuele ontevredenheid over de diensten van de partner.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Evaluatie en continuïteit</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>HBM Juristen evalueert de samenwerking met haar partners doorlopend om kwaliteit en betrouwbaarheid te garanderen. Zo kunnen wij de best mogelijke juridische ondersteuning blijven bieden:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Beëindiging van samenwerking:</span> Indien een partner niet langer voldoet aan onze normen, regelen wij een naadloze overdracht van uw zaak naar een andere betrouwbare partner en informeren wij u tijdig.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Archivering van documenten</h2>
              <p className="text-lg text-foreground leading-relaxed">Alle relevante documentatie en communicatie over uw zaak wordt zorgvuldig gearchiveerd en voldoet aan de geldende eisen voor toegankelijkheid en bewaartermijnen.</p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Tot slot</h2>
              <p className="text-lg text-foreground leading-relaxed">Met deze procedure waarborgt HBM hoogwaardige juridische ondersteuning voor klanten met zaken in het buitenland. Wij werken enkel met gecontracteerde business-partners die voldoen aan strenge selectiecriteria, om onze klanten de beste kwaliteit, transparantie en betrokkenheid te bieden.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerbeleid;
