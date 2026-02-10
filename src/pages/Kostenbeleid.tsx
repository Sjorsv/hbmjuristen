import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Kostenbeleid = () => {
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
          Kostenbeleid
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
              <h2 className="text-xl font-semibold text-foreground mb-4">Algemeen</h2>
              <p className="text-lg text-foreground leading-relaxed">Dit betaalbeleid geldt voor alle cliënten van HBM Juristen en beschrijft de mogelijkheden en voorwaarden met betrekking tot betaling voor de juridische diensten die door ons kantoor worden verleend. Het is ons doel om transparantie en duidelijkheid te bieden omtrent de betalingsverplichtingen, zodat cliënten voorafgaand aan en tijdens het traject inzicht hebben in de financiële afspraken en verplichtingen.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Betaalopties</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Er zijn verschillende betaalmogelijkheden beschikbaar, afhankelijk van de omstandigheden van de cliënt en de specifieke afspraken met het kantoor. In alle gevallen geldt dat een aanbetaling verplicht is.</p>
              </div>

              <div className="space-y-8 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1.1 Voorschotbasis</h3>
                  <p className="text-lg text-foreground leading-relaxed">In de meeste zaken wordt gewerkt op voorschotbasis. Bij aanvang van de zaak betaalt de cliënt een voorschot, gebaseerd op een inschatting van de te verrichten werkzaamheden en bijbehorende kosten. Dit voorschot wordt verrekend met de uiteindelijke kosten van de zaak. Indien het voorschot is uitgeput en verdere werkzaamheden nodig zijn, wordt de cliënt geïnformeerd en wordt een nieuw voorschot gevraagd.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1.2 Bijzondere Bijstand van de Gemeente</h3>
                  <p className="text-lg text-foreground leading-relaxed">Indien de cliënt recht heeft op bijzondere bijstand van de gemeente voor de juridische kosten, kan dit een mogelijkheid zijn om de kosten (gedeeltelijk) te dekken. De cliënt is verantwoordelijk voor het aanvragen van bijzondere bijstand. Zolang er geen bevestiging is van de gemeente dat bijzondere bijstand is toegekend, blijft de cliënt verantwoordelijk voor de betaling van het voorschot en eventuele verdere kosten.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1.3 Vooruitbetaling</h3>
                  <p className="text-lg text-foreground leading-relaxed">De cliënt heeft de mogelijkheid om het volledige geschatte bedrag voor de juridische diensten in één keer vooruit te betalen. In dit geval worden er geen verdere betalingsverzoeken gedaan, tenzij blijkt dat het initiële bedrag moet worden aangepast vanwege onvoorziene extra werkzaamheden. Vooruitbetaling biedt de cliënt de zekerheid dat alle kosten vooraf zijn voldaan.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1.4 Betaling in termijnen onder voorbehoud van akkoord</h3>
                  <p className="text-lg text-foreground leading-relaxed">In bepaalde gevallen is het mogelijk om in termijnen te betalen, onder voorbehoud van schriftelijke goedkeuring door het kantoor. Hierbij wordt een betalingsschema opgesteld, waarbij het totale bedrag in meerdere afgesproken termijnen wordt voldaan. De aanbetaling blijft echter een verplichting en maakt deel uit van de eerste termijn.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Aanbetaling</h2>
              <p className="text-lg text-foreground leading-relaxed">Voor iedere zaak geldt dat de cliënt verplicht is om een aanbetaling te doen. De hoogte van de aanbetaling wordt bepaald op basis van de complexiteit van de zaak en de verwachte kosten. De aanbetaling wordt in mindering gebracht op de totale kosten van de juridische dienstverlening.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Verantwoordelijkheden en consequenties bij niet-betaling</h2>
              <p className="text-lg text-foreground leading-relaxed">Het is de verantwoordelijkheid van de cliënt om zich aan de afgesproken betalingsvoorwaarden te houden. Indien de cliënt niet tijdig aan de betalingsverplichting voldoet, behoudt het kantoor zich het recht voor om verdere werkzaamheden op te schorten totdat aan de betalingsverplichting is voldaan. Dit kan tot gevolg hebben dat termijnen of afspraken in de zaak vertraging oplopen.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Slotbepaling</h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>Dit beleid kan door HBM Juristen worden gewijzigd of aangepast. Wij raden cliënten aan om bij aanvang van de zaak altijd de meest actuele versie van ons betaalbeleid in te zien.</p>
                <p>Door het aangaan van een overeenkomst met HBM Juristen verklaart de cliënt akkoord te gaan met de bepalingen in dit betaalbeleid en verbindt hij zich ertoe de afgesproken betalingen na te komen volgens de hierboven vermelde voorwaarden.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Kostenbeleid;
