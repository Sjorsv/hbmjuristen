import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const AlgemeneVoorwaarden = () => {
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
          Algemene Voorwaarden 2026
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
            {/* Artikel 1 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 1.</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>1.1. Deze algemene voorwaarden zijn van toepassing op iedere opdracht die wordt verleend aan HBM JURISTEN, daaronder mede begrepen vervolgopdrachten en/of gewijzigde of aanvullende opdrachten en alle overige werkzaamheden.</p>
                <p>1.2. Deze algemene voorwaarden zijn mede van toepassing ten aanzien van iedereen die bij HBM JURISTEN werkzaam is, in welke hoedanigheid dan ook, en ieder voor wiens handelen of nalaten HBM JURISTEN aansprakelijk is of kan zijn.</p>
                <p>1.3. De toepasselijkheid van enig ander algemene voorwaarden wordt hierbij uitdrukkelijk uitgesloten.</p>
                <p>1.4. De opdrachtbevestiging van HBM JURISTEN aan de opdrachtgever kan afwijken van deze algemene voorwaarden. In dat geval zijn de afwijkende afspraken van toepassing. De afwijkende afspraken laten deze algemene voorwaarden onverlet.</p>
              </div>
            </div>

            {/* Artikel 2 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 2.</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>2.1. De verstrekte opdrachten worden uitsluitend aanvaard door HBM JURISTEN, ook indien het de uitdrukkelijke of stilzwijgende bedoeling van de opdrachtgever is dat de opdracht door een bepaalde persoon zal worden uitgevoerd. De toepasselijkheid van de artikelen 7:404 BW, 7:407 lid 2 BW en 7:409 BW wordt hierbij uitdrukkelijk uitgesloten.</p>
                <p>2.2. HBM JURISTEN is vrij om te bepalen wie bij de uitvoering van de opdracht wordt ingeschakeld, tenzij met de opdrachtgever is afgesproken dat de opdracht door een bepaalde persoon zal worden uitgevoerd.</p>
                <p>2.3. HBM JURISTEN is gerechtigd bij de uitvoering van de opdracht derden in te schakelen. Zij zal waar mogelijk en in redelijkheid aangewezen in dat verband overleg plegen met de opdrachtgever. HBM JURISTEN is niet aansprakelijk voor tekortkomingen van deze derden, tenzij sprake is van opzet of grove schuld van HBM JURISTEN.</p>
                <p>2.4. Indien ingeschakelde derden hun aansprakelijkheid in verband met de uitvoering van een opdracht van de opdrachtgever willen beperken, gaat HBM JURISTEN ervan uit dat alle aan haar gegeven opdrachten van de opdrachtgever tevens de bevoegdheid inhouden om dergelijke aansprakelijkheidsbeperkingen namens de opdrachtgever te aanvaarden.</p>
                <p>2.5 De klant erkent en stemt ermee in dat hij/zij uitdrukkelijk afstand doet van het recht om de overeenkomst binnen de wettelijke bedenktermijn van 14 dagen te herroepen, zoals beschreven in de Wet koop op afstand artikel 6:230o van het Burgerlijk Wetboek.</p>
              </div>
            </div>

            {/* Artikel 3 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 3.</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>3.1. Het honorarium voor de opdracht zal voor aanvang van de werkzaamheden van HBM JURISTEN ter uitvoering van de opdracht worden vastgesteld, tenzij zich een spoedeisend geval voordoet in welk geval de prijsafspraak zo spoedig mogelijk zal worden gemaakt.</p>
                <p>3.2. HBM JURISTEN is gerechtigd een voorschot te vragen voor haar honorarium in verband met de uit te voeren opdracht en namens de opdrachtgever aan derden door te betalen gelden. De opdrachtgever dient het gevraagde voorschot te voldoen binnen de door HBM JURISTEN gegeven termijn bij gebreke waarvan HBM JURISTEN gerechtigd is de werkzaamheden niet aan te vangen dan wel op te schorten. HBM JURISTEN is niet aansprakelijk voor eventuele gevolgen die het niet of niet tijdig voldoen van het voorschot door de opdrachtgever teweegbrengt.</p>
                <p>3.3. HBM JURISTEN heeft het recht het door haar gehanteerde basis uurtarief en de door haar gehanteerde kostenvergoedingen te wijzigen. Indien de wijziging een verhoging van meer dan 10% inhoudt of wanneer de verhoging plaatsvindt binnen drie maanden na het aanvaarden van de opdracht door HBM JURISTEN, heeft de opdrachtgever het recht om de overeenkomst te ontbinden binnen 10 dagen na de eerste gewijzigde declaratie.</p>
              </div>
            </div>

            {/* Artikel 4 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 4.</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>4.1. De uitvoering van de verstrekte opdracht geschiedt uitsluitend ten behoeve van de opdrachtgever. Derden kunnen daaraan geen rechten ontlenen.</p>
                <p>4.2. Vorderingen tot betaling van schadevergoeding vervallen door verloop van een jaar na de dag waarop de opdrachtgever bekend werd met de schade en de mogelijke aansprakelijkheid van HBM JURISTEN voor die schade.</p>
              </div>
            </div>

            {/* Artikel 5 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 5.</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>5.1. De opdrachtgever vrijwaart HBM JURISTEN tegen vorderingen van derden die stellen schade te hebben geleden door of verband houdende met door HBM JURISTEN ten behoeve van de opdrachtgever verrichte werkzaamheden alsmede tegen de kosten van HBM JURISTEN in verband met het voeren van verweer tegen dergelijke vorderingen.</p>
                <p>5.2. Betaling van declaraties van HBM JURISTEN dient binnen 7 dagen aan HBM JURISTEN te worden voldaan, zonder opschorting of verrekening. Indien de betaling niet binnen de gegeven termijn is ontvangen is de opdrachtgever de wettelijke rente verschuldigd, ingeval de opdrachtgever een natuurlijke persoon is op grond van artikel 6:119 BW en ingeval de opdrachtgever een rechtspersoon is of een persoon die handelt in de uitoefening van een beroep of bedrijf op grond van artikel 6:119a BW. Daarnaast is de opdrachtgever alle door HBM JURISTEN in verband met de invordering gemaakte kosten verschuldigd. Alle gemaakte buitengerechtelijke incassokosten in verband met de invordering van declaraties komen voor rekening van de opdrachtgever.</p>
                <p>5.3. HBM JURISTEN is gerechtigd om betalingen die voor of van de opdrachtgever zijn ontvangen op de rekening van HBM JURISTEN te verrekenen met of aan te (doen) wenden ter betaling van hetgeen de opdrachtgever aan HBM JURISTEN verschuldigd is, tenzij de opdrachtgever daartegen onverwijld na aanvaarding van de opdracht door HBM JURISTEN schriftelijk bezwaar maakt.</p>
              </div>
            </div>

            {/* Artikel 6 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 6.</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Voor zover HBM JURISTEN in een dossier samenwerkt met buitenlandse advocaten of andere zelfstandige buitenlandse professionals, verrichten deze partijen hun werkzaamheden volledig zelfstandig en onder hun eigen naam, titel en verantwoordelijkheid, overeenkomstig het recht en de beroeps- en gedragsregels van het land waarin zij zijn gevestigd. HBM Juristen treedt in dergelijke gevallen uitsluitend op als coördinerend contactpunt en is niet aansprakelijk voor de inhoud, kwaliteit of uitvoering van de door deze buitenlandse professionals verrichte werkzaamheden.
              </p>
            </div>

            {/* Artikel 7 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 7.</h2>
              <p className="text-lg text-foreground leading-relaxed">
                HBM Juristen maakt gebruik van een beveiligde zakelijke AI-omgeving binnen haar bedrijfsvoering (marketing etc.). Eventueel gegenereerde output wordt altijd beoordeeld en waar nodig aangepast voor toepassing door een bevoegde professional. De verwerking van vertrouwelijke gegevens vindt uitsluitend plaats binnen een beveiligd kader dat voldoet aan relevante privacywetgeving en erkende beveiligingsnormen.
              </p>
            </div>

            {/* Artikel 8 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Artikel 8.</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>6.1. Op deze algemene voorwaarden en alle overeenkomsten tussen HBM JURISTEN en de opdrachtgever is Nederlands recht van toepassing.</p>
                <p>6.2. Het kantoor heeft een klachten- en geschillenregeling.</p>
                <p>6.3. Ten behoeve van een veilige en respectvolle omgeving, hanteert het kantoor een Zero Telorance beleid. Overtreding kan leiden tot beëindiging van de dienstverlening zonder restitutie zoals beschreven in het Zero Tolerance Beleid op de website.</p>
                <p>6.4. Eventuele geschillen zullen uitsluitend worden beslecht door de bevoegde rechter in het arrondissement Amsterdam.</p>
              </div>
            </div>

            {/* KvK & BTW */}
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground">
                KvK 80217974 • BTW-nr NL003409832B57
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AlgemeneVoorwaarden;
