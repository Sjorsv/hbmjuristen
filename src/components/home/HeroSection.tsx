import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-office.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-secondary/30">
      {/* Text content - above image */}
      <div className="container-editorial pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl ml-auto text-right"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4 leading-tight">
            Wij zijn <span className="text-primary font-bold">HBM Juristen</span>, uw 
            <br className="hidden md:block" /> partner in juridisch advies
          </h1>
          <p className="text-lg md:text-xl text-primary">
            Deskundig, betrokken en resultaatgericht
          </p>
        </motion.div>
      </div>

      {/* Hero image with search bar overlay */}
      <div className="container-editorial">
        <div className="relative mb-16">
          {/* Image with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <motion.img
              src={heroImage}
              alt="HBM Juristen kantoor"
              className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Search bar - half overlapping image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-12 right-4 md:right-8 w-full max-w-md lg:max-w-lg"
          >
            <div className="bg-background rounded-xl shadow-large border border-border p-6">
              <p className="text-sm text-primary mb-3 font-medium">
                Zoek rechtsgebied, expertise of onderwerp
              </p>
              <div className="relative flex items-center border-b-2 border-primary/30 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  placeholder=""
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base py-2 pr-10"
                />
                <Search className="w-5 h-5 text-muted-foreground absolute right-0" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
