import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Phone, MapPin, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import teamImage from '@/assets/team-working.jpg';

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        {/* Back link and Title above image */}
        <div className="container-editorial pt-8 pb-6">
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
            Wie zijn wij
          </motion.h1>
        </div>
        
        {/* Hero image */}
        <div className="container-editorial">
          <motion.div 
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <img 
              src={teamImage} 
              alt="HBM Juristen team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen is een bevlogen en doelgerichte juristenkantoor waar u terecht kunt voor juridisch advies en rechtsbijstand. U kunt bij ons terecht voor zaken als ontslag of een bijstandskwestie, verkeersrecht, vreemdelingenzaken, letselschade, huur- en woonrecht of consumentenzaken. Particulieren, ondernemers en zzp'ers weten ons te vinden dankzij onze parate kennis en flexibele samenwerking.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Wij zijn een hecht en loyaal team met een enorme gedrevenheid voor het juridische vak. De kennis en snelheid waarmee wij dagelijks werken zijn indrukwekkend. Wij combineren expertise en praktijkervaring om uw juridische zaak zo goed mogelijk te verdedigen. Bij ons wordt niet vrolijk geschermd met ideeën waar de oplossing geen plaats heeft. Wij staan aan uw kant en denken in oplossingen, ongeacht de situatie. Dat doen wij gedurfd, helder en met een no-nonsense mentaliteit.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen is lid van de Nederlandse Juristen Vereniging (NJV) en Vereniging voor Arbeidsrecht (VvA) en actief in Nederland, België en Marokko.
            </p>

            <div className="flex items-center gap-2 text-lg text-foreground">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Goed bereikbaar: centraal gelegen in het centrum van Amsterdam.</span>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild className="gap-2">
                <Link to="/contact">
                  <Phone className="w-4 h-4" />
                  Neem contact op
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link to="/over-ons/team">
                  <Users className="w-4 h-4" />
                  Ontmoet ons team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-section-grey">
        <div className="container-editorial section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Meer over HBM Juristen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                to="/over-ons/team"
                className="group block h-full bg-background rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      Ons team
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Maak kennis met onze ervaren juristen
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/rechtsgebieden"
                className="group block h-full bg-background rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      Rechtsgebieden
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bekijk onze expertise en specialisaties
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/contact"
                className="group block h-full bg-background rounded-2xl p-6 hover:bg-section-grey-darker transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      Contact
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Neem vrijblijvend contact met ons op
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
