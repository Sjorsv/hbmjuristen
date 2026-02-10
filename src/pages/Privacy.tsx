import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Privacy = () => {
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
          Privacyverklaring HBM Juristen
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
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>Deze privacyverklaring (2026) beschrijft hoe HBM Juristen persoonsgegevens verwerkt in het kader van haar juridische dienstverlening, websitegebruik en communicatie met cliënten en derden. De verklaring is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG), de Uitvoeringswet AVG (UAVG) en relevante sectorale normen voor juridische beroepsuitoefening.</p>
              <p>HBM Juristen verwerkt persoonsgegevens uitsluitend voor duidelijk omschreven en gerechtvaardigde doeleinden. Gegevens worden niet langer bewaard dan noodzakelijk en uitsluitend gedeeld wanneer dit wettelijk verplicht is of functioneel is voor de uitvoering van onze werkzaamheden, waaronder samenwerking met buitenlandse advocaten die onder het recht van hun eigen jurisdictie opereren.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Verwerkingsverantwoordelijke</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen treedt op als verwerkingsverantwoordelijke voor de persoonsgegevens die via onze website, online formulieren, e-mail, telefoon of bij het uitvoeren van opdrachten worden verstrekt.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Categorieën persoonsgegevens</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Afhankelijk van het doel kunnen onder meer de volgende gegevens worden verwerkt:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identificatiegegevens zoals naam, geboortedatum en contactgegevens.</li>
                  <li>Dossiergegevens, waaronder juridische stukken, verklaringen, bewijsstukken en communicatie.</li>
                  <li>Financiële gegevens voor facturatie en betalingen.</li>
                  <li>Technische gegevens bij websitebezoek, zoals IP-adres en cookies die noodzakelijk zijn voor functionaliteit, beveiliging en statistiek.</li>
                  <li>Gevoelige gegevens (bijvoorbeeld strafrechtelijke informatie of medische gegevens) uitsluitend wanneer dit noodzakelijk is voor het betreffende dossier en voor zover toegestaan onder de AVG.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Doeleinden van verwerking</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Persoonsgegevens worden verwerkt voor:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Het beoordelen, aannemen en uitvoeren van juridische opdrachten.</li>
                  <li>Het opstellen en beheren van dossiers, inclusief communicatie met overheidsinstanties en wederpartijen.</li>
                  <li>Het voldoen aan wettelijke verplichtingen, zoals bewaarplichten en verificatie-eisen.</li>
                  <li>Beveiliging en optimalisatie van de website.</li>
                  <li>Interne kwaliteitscontrole en dossieradministratie.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Rechtsgrondslagen</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>HBM Juristen verwerkt persoonsgegevens op basis van:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>De uitvoering van een overeenkomst tot juridische dienstverlening.</li>
                  <li>Het voldoen aan een wettelijke verplichting.</li>
                  <li>Een gerechtvaardigd belang, zoals fraudepreventie of interne beveiliging.</li>
                  <li>Uitdrukkelijke toestemming, indien vereist voor specifieke verwerkingen.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Delen van gegevens</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Gegevens worden uitsluitend gedeeld met derden indien dit noodzakelijk is voor het dossier, bijvoorbeeld:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Overheidsinstanties, rechtbanken en uitvoerende diensten.</li>
                  <li>Externe deskundigen, vertalers of notarissen.</li>
                  <li>Buitenlandse advocaten of partners die onafhankelijk opereren onder het recht van hun eigen land en die hun eigen beroepsverantwoordelijkheid dragen.</li>
                </ul>
                <p>In alle gevallen worden passende waarborgen getroffen om de bescherming van persoonsgegevens te waarborgen.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Doorgifte buiten de EU</h2>
              <p className="text-lg text-foreground leading-relaxed">Indien gegevens worden gedeeld met partners in landen buiten de EU, gebeurt dit uitsluitend onder de voorwaarden van hoofdstuk V AVG. Waar nodig worden passende aanvullende maatregelen getroffen, zoals modelcontractbepalingen of versleutelde gegevensoverdracht.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. AI en Databeveiliging</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen maakt gebruik van een afgeschermde zakelijke AI-omgeving voor interne werkzaamheden binnen de organisatie. Binnen deze beveiligde infrastructuur kan vertrouwelijke informatie worden verwerkt, met toepassing van versleuteling tijdens opslag en verzending, naleving van de AVG en andere toepasselijke privacywetgeving en onder waarborgen dat bedrijfsgegevens niet worden gebruikt voor trainingsdoeleinden. De AI-omgeving voldoet aan internationaal erkende beveiligings- en auditnormen, waaronder CSA STAR van de Cloud Security Alliance en SOC 2 Type 2. Toegang is ingericht via role-based access control en wordt ondersteund door continue monitoring en auditlogging. Alle output die door de AI-omgeving wordt gegenereerd, wordt beoordeeld, gecontroleerd en waar nodig aangepast door een bevoegde professional.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Bewaartermijnen</h2>
              <p className="text-lg text-foreground leading-relaxed">Dossiers worden bewaard conform de geldende wettelijke termijnen en de eisen van professionele beroepsnormen. In beginsel hanteert HBM Juristen een bewaartermijn van minimaal vijf en maximaal tien jaar na sluiting van het dossier, tenzij een langere bewaartermijn wettelijk vereist is.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Beveiliging</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen neemt passende organisatorische en technische maatregelen om persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies of misbruik, waaronder versleuteling, toegangsbeheer en beveiligde communicatiekanalen.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Cookiegebruik</h2>
              <p className="text-lg text-foreground leading-relaxed">Op onze website worden uitsluitend functionele en beperkte analytische cookies gebruikt. Bij het inzetten van optionele cookies wordt vooraf toestemming gevraagd conform de geldende regelgeving. Een afzonderlijke cookieverklaring is beschikbaar via de website.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Uw rechten</h2>
              <p className="text-lg text-foreground leading-relaxed">Betrokkenen hebben het recht op inzage, rectificatie, verwijdering, beperking, overdraagbaarheid van gegevens en bezwaar tegen verwerking. Verzoeken kunnen worden ingediend via het contactformulier op de website of via de officiële contactgegevens van HBM Juristen. Wij reageren binnen de wettelijke termijn.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Klachten</h2>
              <p className="text-lg text-foreground leading-relaxed">Indien u van mening bent dat HBM Juristen uw persoonsgegevens onjuist verwerkt, kunt u een klacht indienen bij de Autoriteit Persoonsgegevens. Wij verzoeken u echter eerst contact met ons op te nemen zodat wij uw klacht kunnen beoordelen en indien nodig herstellen.</p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">12. Wijzigingen in deze privacyverklaring</h2>
              <p className="text-lg text-foreground leading-relaxed">HBM Juristen kan deze verklaring aanpassen wanneer regelgeving of interne processen daarom vragen. De meest recente versie is altijd te vinden op onze website.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
