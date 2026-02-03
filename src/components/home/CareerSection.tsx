import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import teamImage from '@/assets/team-working.jpg';

const CareerSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[500px] lg:h-[600px]">
        {/* Background image */}
        <img
          src={teamImage}
          alt="Team HBM Juristen"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

        {/* Content */}
        <div className="container-editorial relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6">
              Werken bij HBM Juristen
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
              Door het combineren van talent en verschillende perspectieven behalen 
              we betere resultaten. Geïnteresseerd? Ontdek of wij bij jou passen!
            </p>
            <Link
              to="/vacatures"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Bekijk vacatures
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
