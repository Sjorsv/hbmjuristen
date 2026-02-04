import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import buildingImage from '@/assets/building-exterior.jpg';

const AboutSection = () => {
  return (
    <section className="section-padding bg-section-grey">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img
                src={buildingImage}
                alt="HBM Juristen kantoor"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Onze cliënten succesvol maken
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bij HBM Juristen staat uw belang centraal. Wij combineren jarenlange 
                juridische expertise met een persoonlijke aanpak. Onze advocaten 
                nemen de tijd om uw situatie te begrijpen en werken samen met u aan 
                de beste oplossing.
              </p>
              <p>
                Of het nu gaat om arbeidsrecht, familierecht of bestuursrecht – 
                wij staan klaar met heldere adviezen en effectieve rechtsbijstand. 
                Onze expertise strekt zich uit van Nederland tot Marokko en België.
              </p>
              <p>
                Wij geloven in transparantie over kosten en een heldere communicatie 
                gedurende het gehele traject. Zo weet u altijd waar u aan toe bent.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/over-ons"
                className="arrow-link text-lg"
              >
                Lees meer over ons
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
