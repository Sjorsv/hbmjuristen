import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Target, Eye, Heart, Scale } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import buildingImage from '@/assets/building-exterior.jpg';

const values = [
  {
    icon: Scale,
    title: 'Gedurfd & helder',
    description: 'Wij schermen niet met loze ideeën. Wij bieden concrete oplossingen met een no-nonsense mentaliteit.',
  },
  {
    icon: Heart,
    title: 'Betrokken & loyaal',
    description: 'Wij zijn een hecht team dat naast u staat, ongeacht de situatie of complexiteit van uw zaak.',
  },
  {
    icon: Target,
    title: 'Resultaatgericht',
    description: 'Onze expertise en praktijkervaring zetten wij in om uw juridische zaak zo goed mogelijk te verdedigen.',
  },
  {
    icon: Eye,
    title: 'Toegankelijk',
    description: 'Particulieren, ondernemers en zzp\'ers weten ons te vinden dankzij onze parate kennis en flexibele samenwerking.',
  },
];

const MissionVision = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="container-editorial pt-8 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link 
            to="/over-ons" 
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
          Missie & Visie
        </motion.h1>
      </section>

      {/* Hero image */}
      <div className="container-editorial">
        <motion.div 
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
        >
          <img 
            src={buildingImage} 
            alt="HBM Juristen kantoor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </motion.div>
      </div>

      {/* Mission Section */}
      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                Onze Missie
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                HBM Juristen streeft ernaar de toonaangevende juridische partner te zijn voor cliënten wereldwijd. Onze missie is het bieden van hoogwaardige, grensoverschrijdende juridische dienstverlening, gebaseerd op diepgaande kennis van zowel het Nederlandse als Marokkaanse recht. Wij zetten ons in om complexe juridische vraagstukken op te lossen, rechtvaardigheid te bevorderen en juridische zekerheid te bieden aan onze cliënten. Met een onwankelbare toewijding aan kwaliteit en toegankelijkheid, streven wij ernaar het vertrouwen in juridische instellingen te versterken en een positieve maatschappelijke impact te realiseren.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                Onze Visie
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                HBM Juristen wil zich profileren als een juridische praktijk die grenzen overstijgt, zowel geografisch als inhoudelijk. Wij zien het als onze plicht en ambitie om ons te onderscheiden door innovatie, expertise en daadkracht. Onze visie is om een baken van vertrouwen te zijn in een steeds complexer wordende wereld, waar grensoverschrijdende juridische vraagstukken eerder regel dan uitzondering zijn. Door onze unieke specialisatie en voortdurende focus op klanttevredenheid, streven wij ernaar de standaard te bepalen in de juridische sector, met kantoren die stevig verankerd zijn in Amsterdam, Shanghai en Casablanca. HBM Juristen is niet alleen een juridische dienstverlener, maar een strategische partner voor wie zekerheid en succes nastreeft in een wereld waar rechtvaardigheid altijd centraal staat.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Als lid van de Nederlandse Juristen Vereniging (NJV) en Vereniging voor Arbeidsrecht (VvA) 
                waarborgen wij de hoogste kwaliteitsstandaarden. Wij zijn actief in Nederland, België en Marokko.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-section-grey">
        <div className="container-editorial section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Onze kernwaarden
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-editorial section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Maak kennis met ons team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Achter onze missie en visie staat een hecht team van ervaren en betrokken juristen. 
            Ontdek wie er voor u klaarstaat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/over-ons/team">
                Ontmoet ons team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Neem contact op
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default MissionVision;
