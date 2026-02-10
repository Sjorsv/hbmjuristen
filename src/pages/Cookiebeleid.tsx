import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Cookiebeleid = () => {
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
          Cookiebeleid
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
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Deze cookiebeleid geeft inzicht in het gebruik van cookies en vergelijkbare technieken op deze website. Het doel is u duidelijk te informeren over welke gegevens worden verzameld, met welk doel dit gebeurt en welke rechten u hierbij heeft. Het gebruik van cookies vindt plaats binnen de kaders van de Algemene Verordening Gegevensbescherming (AVG), de Telecommunicatiewet en de ePrivacy-richtlijn zoals toegepast in recente Europese handhavingsrichtsnoeren.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Gebruik van cookies</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Op deze website worden functionele, analytische en – uitsluitend indien vooraf toegestaan – marketingcookies gebruikt. Cookies zijn kleine bestanden die bij het bezoek aan de website op uw apparaat worden opgeslagen. Vergelijkbare technieken zoals scripts en pixels worden op dezelfde wijze behandeld. Cookies worden nooit gebruikt om zonder toestemming persoonsgegevens te verwerken voor marketingdoeleinden.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Types cookies</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functionele cookies</h3>
                  <p className="text-lg text-foreground leading-relaxed">Deze cookies zijn noodzakelijk om de website correct te laten functioneren, bijvoorbeeld voor taalinstellingen, sessiebeheer, formulierbeveiliging en toegankelijkheid. Deze cookies worden altijd geplaatst, omdat de website zonder deze technieken niet correct werkt.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytische cookies</h3>
                  <p className="text-lg text-foreground leading-relaxed">Met analytische cookies wordt gemeten hoe bezoekers de website gebruiken, zoals het aantal bezochte pagina's, klikgedrag en foutmeldingen. Deze gegevens worden verwerkt op basis van geanonimiseerde en geaggregeerde statistieken. Analytische cookies worden alleen geplaatst als deze geen of beperkte gevolgen hebben voor de persoonlijke levenssfeer, conform de geldende richtsnoeren van Europese toezichthouders.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing- en trackingcookies</h3>
                  <p className="text-lg text-foreground leading-relaxed">Deze cookies volgen uw gedrag over verschillende websites en apparaten, met als doel gericht advertenties te tonen of bezoekersprofielen op te bouwen. Deze cookies worden uitsluitend geplaatst nadat u hiervoor expliciet toestemming heeft gegeven via de cookiebanner. Bij weigering worden deze cookies niet geactiveerd.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Toestemming</h2>
              <p className="text-lg text-foreground leading-relaxed">Bij het eerste bezoek aan deze website krijgt u een cookiebanner te zien waarin u een keuze kunt maken voor het toestaan of weigeren van niet-functionele cookies. Uw keuze wordt vastgelegd in een technisch noodzakelijke cookie, zodat de website uw instellingen kan respecteren. U kunt uw toestemming altijd wijzigen via de cookie-instellingen op deze pagina.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Bewaartermijnen</h2>
              <p className="text-lg text-foreground leading-relaxed">De bewaartermijnen van cookies verschillen per type. Functionele cookies worden bewaard zolang dit noodzakelijk is voor de werking van de website. Analytische cookies worden bewaard conform de minimale termijnen die nodig zijn voor statistische analyse. Marketingcookies hebben kortere bewaartermijnen, afhankelijk van de aanbieders die deze cookies plaatsen. Er worden geen gegevens bewaard die langer nodig zijn dan toegestaan onder de AVG.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Inschakeling externe dienstverleners</h2>
              <p className="text-lg text-foreground leading-relaxed">Voor bepaalde functionaliteiten kunnen externe partijen worden ingezet, zoals analyse- of advertentiediensten. Indien deze partijen cookies plaatsen, gebeurt dit uitsluitend na toestemming. Voor deze partijen gelden afzonderlijke privacy- en cookieverklaringen van de betreffende aanbieders. De website maakt uitsluitend gebruik van dienstverleners die voldoen aan de vereisten van de AVG.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Uw rechten</h2>
              <p className="text-lg text-foreground leading-relaxed">U heeft het recht om toestemming voor cookies in te trekken, eerder geplaatste cookies te verwijderen via uw browserinstellingen en om bezwaar te maken tegen verwerkingen die plaatsvinden op basis van cookiegegevens. Daarnaast heeft u op grond van de AVG recht op inzage, correctie, verwijdering en overdraagbaarheid van uw persoonsgegevens, voor zover dit van toepassing is op cookie-gerelateerde gegevens.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Wijzigingen</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Deze cookieverklaring kan worden bijgewerkt wanneer wetgeving, richtlijnen of websitefunctionaliteiten wijzigen. De datum van de laatste aanpassing wordt hieronder vermeld. Het wordt aanbevolen deze verklaring periodiek te controleren.</p>
                <p className="text-muted-foreground">Laatste update: februari 2026.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>De inhoud van deze website is samengesteld met voortdurende aandacht voor zorgvuldigheid en actualiteit. Desondanks kan niet worden uitgesloten dat informatie onvolledig, verouderd of onjuist raakt door wijzigingen in wetgeving, jurisprudentie of beleidsregels. HBM Juristen aanvaardt geen enkele aansprakelijkheid voor schade, van welke aard ook, die voortvloeit uit het gebruik van of het vertrouwen op informatie op deze website. Het gebruik van de aangeboden informatie geschiedt volledig voor eigen risico.</p>
                <p>Deze website kan verwijzingen bevatten naar externe informatiebronnen die worden beheerd door derden. Voor de inhoud, juistheid, volledigheid of betrouwbaarheid van deze externe bronnen wordt geen verantwoordelijkheid of aansprakelijkheid aanvaard. Het volgen van hyperlinks naar websites van derden impliceert geen aanbeveling of goedkeuring daarvan.</p>
                <p>Alle intellectuele eigendomsrechten met betrekking tot de inhoud, vormgeving en structuur van deze website berusten uitsluitend bij HBM Juristen. Behoudens de wettelijke uitzonderingen uit de Auteurswet 1912 is het niet toegestaan om zonder voorafgaande schriftelijke toestemming van HBM Juristen enig materiaal van deze website te verveelvoudigen, te distribueren, openbaar te maken of anderszins te gebruiken.</p>
                <p>Indien u meent dat de website informatie bevat die onjuist of onvolledig is, verzoeken wij u dit aan ons te melden zodat een beoordeling kan plaatsvinden.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookiebeleid;
