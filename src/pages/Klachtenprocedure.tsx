import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Klachtenprocedure = () => {
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
          Klachtenprocedure
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
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Inleiding</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen streeft ernaar haar cliënten altijd op een professionele, zorgvuldige en klantgerichte manier van dienst te zijn. Indien er toch ontevredenheid is over de dienstverlening, biedt deze klachtenprocedure een overzicht van de stappen die een cliënt kan ondernemen om een klacht in te dienen en de wijze waarop deze klacht wordt behandeld.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Definities</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-foreground leading-relaxed">
                <li><span className="font-medium">Klacht:</span> Een schriftelijke uiting van ontevredenheid van een cliënt over een jurist, medewerker of over de dienstverlening van HBM Juristen.</li>
                <li><span className="font-medium">Klager:</span> De cliënt die een klacht indient.</li>
                <li><span className="font-medium">Klachtenfunctionaris:</span> De medewerker of jurist binnen HBM Juristen die belast is met de behandeling van klachten.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Doel van de klachtenprocedure</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">Deze klachtenprocedure heeft als doel:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-foreground leading-relaxed">
                <li>Het bieden van een laagdrempelige mogelijkheid voor cliënten om een klacht in te dienen;</li>
                <li>Het bevorderen van een transparante en zorgvuldige behandeling van klachten;</li>
                <li>Het herstellen van de relatie met de cliënt, indien mogelijk;</li>
                <li>Het verbeteren van de kwaliteit van de dienstverlening.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Indienen van een klacht</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <div>
                  <h3 className="font-medium mb-2">1. Schriftelijke indiening</h3>
                  <p>Een klacht dient schriftelijk te worden ingediend, bij voorkeur per e-mail of via het klachtenformulier op de website van HBM Juristen. De klacht kan worden gericht aan <a href="mailto:info@hbmjuristen.nl" className="text-primary hover:underline">info@hbmjuristen.nl</a> of per post naar ons kantooradres.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2. Inhoud klacht</h3>
                  <p className="mb-2">De klacht dient ten minste de volgende gegevens te bevatten:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Naam en contactgegevens van de klager;</li>
                    <li>Omschrijving van de klacht en de gebeurtenissen die aanleiding hebben gegeven tot de klacht;</li>
                    <li>Eventuele eerdere correspondentie met betrekking tot het onderwerp van de klacht;</li>
                    <li>De gewenste oplossing of reactie van HBM Juristen.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Ontvangstbevestiging</h2>
              <p className="text-lg text-foreground leading-relaxed">Na ontvangst van de klacht ontvangt de klager binnen vijf (5) werkdagen een schriftelijke ontvangstbevestiging van HBM Juristen. Hierin wordt de verdere procedure toegelicht en wordt vermeld wie de klacht zal behandelen.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Behandeling van de klacht</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <div>
                  <h3 className="font-medium mb-2">1. Onderzoek</h3>
                  <p>De klachtenfunctionaris onderzoekt de klacht zorgvuldig. Dit kan inhouden dat relevante dossiers worden geraadpleegd, betrokken medewerkers worden gehoord, en dat de klager eventueel aanvullende informatie wordt gevraagd.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2. Termijn</h3>
                  <p>De klacht wordt binnen vier (4) weken na ontvangst afgehandeld. Indien deze termijn niet haalbaar is, wordt de klager schriftelijk geïnformeerd over de reden en de verwachte afhandeltermijn.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3. Beslissing en terugkoppeling</h3>
                  <p>De klachtenfunctionaris neemt een besluit over de gegrondheid van de klacht en welke acties, indien van toepassing, worden ondernomen. De klager ontvangt hiervan schriftelijk bericht met een motivering van de beslissing.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Beroep</h2>
              <p className="text-lg text-foreground leading-relaxed">Indien de klager het niet eens is met de beslissing, kan hij/zij binnen twee (2) weken na ontvangst van de beslissing in beroep gaan. Het beroep wordt behandeld door een onafhankelijke, niet bij de klacht betrokken jurist van HBM Juristen. De klager ontvangt binnen vier (4) weken na indiening van het beroep een definitieve uitspraak.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Vertrouwelijkheid</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen behandelt alle klachten strikt vertrouwelijk. Gegevens met betrekking tot de klacht worden alleen gedeeld met de direct betrokkenen en worden zorgvuldig opgeslagen conform de geldende privacywetgeving.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Registratie en analyse van klachten</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen houdt een klachtenregister bij waarin alle ontvangen klachten en de uitkomsten van de behandeling worden geregistreerd. Dit register wordt periodiek geanalyseerd om verbeterpunten in de dienstverlening te signaleren en de kwaliteit van de dienstverlening te waarborgen.</p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Slotbepalingen</h2>
              <p className="text-lg text-foreground leading-relaxed">Deze klachtenprocedure treedt in werking op 1 februari 2026 en wordt periodiek herzien. HBM Juristen behoudt zich het recht voor om wijzigingen aan te brengen in deze procedure.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Klachtenprocedure;
