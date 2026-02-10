import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Clock, CreditCard, HandCoins } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Tarieven = () => {
  return (
    <Layout>
      <section className="container-editorial">
        <div className="pt-8 pb-6">
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
            Tarieven
          </motion.h1>
        </div>
      </section>

      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto space-y-12">
          {/* Uurtarief */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-serif text-foreground">Uurtarief</h2>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              Wij verrichten onze werkzaamheden tegen een afgesproken uurtarief. U betaalt hierbij (telkens) een voorschot en er wordt gedeclareerd op basis van het uurtarief.
            </p>
          </motion.div>

          {/* Vaste prijsafspraak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-serif text-foreground">Een vaste prijsafspraak</h2>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              Tevens bestaat er in sommige gevallen de mogelijkheid tot het maken van een vaste prijsafspraak. U betaalt een vast totaalbedrag voor alle overeengekomen werkzaamheden.
            </p>
          </motion.div>

          {/* Bijzondere bijstand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <HandCoins className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-serif text-foreground">Bijzondere bijstand</h2>
            </div>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Indien uw inkomen en vermogen dat toelaat dan kunt u via uw gemeente de kosten (gedeeltelijk) terugvragen. Wij kunnen u helpen met deze aanvraag. Voor meer informatie over de bijzondere bijstand en voorwaarden kunt u terecht bij uw gemeente.
              </p>
              <p>
                Onder voorbehoud van acceptatie kunt u bij ons ook gespreid betalen.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-4 border-t border-border"
          >
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Interesse in onze juridische diensten? Neem gerust contact met ons op.
            </p>
            <Button variant="cta" size="lg" asChild className="gap-2">
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Neem contact op
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarieven;
