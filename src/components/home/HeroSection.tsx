import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-office.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero image */}
      <div className="relative h-[70vh] min-h-[500px] max-h-[800px]">
        <img
          src={heroImage}
          alt="HBM Juristen kantoor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-background" />
      </div>

      {/* Content overlay */}
      <div className="container-editorial relative -mt-48 pb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            HBM Juristen.{' '}
            <span className="text-primary">Juridisch advies</span> en rechtsbijstand.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Deskundig, betrokken en resultaatgericht – in Nederland en daarbuiten.
          </p>

          {/* Search component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative bg-background rounded-xl shadow-large border border-border">
              <div className="flex items-center px-5 py-4">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Zoek op rechtsgebied of onderwerp"
                  className="flex-1 ml-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
                />
                <button className="hidden sm:flex bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors">
                  Zoeken
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
