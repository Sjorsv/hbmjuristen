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
                Onze missie
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                HBM Juristen staat naast u met deskundig juridisch advies en effectieve rechtsbijstand. 
                Wij maken het recht toegankelijk voor iedereen die onze hulp nodig heeft — 
                van particulieren tot ondernemers en zzp'ers. Met parate kennis, flexibiliteit 
                en een persoonlijke aanpak zorgen wij ervoor dat uw belangen worden beschermd.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                Onze visie
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Wij geloven dat juridische ondersteuning gedurfd, helder en oplossingsgericht moet zijn. 
                Bij HBM Juristen wordt niet geschermd met loze ideeën — wij denken in concrete oplossingen 
                en staan aan uw kant, ongeacht de situatie. Onze visie is een juridische praktijk waar 
                expertise en menselijkheid hand in hand gaan, met een no-nonsense mentaliteit die resultaat oplevert.
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
