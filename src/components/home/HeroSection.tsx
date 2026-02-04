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
          <p className="text-lg md:text-xl text-foreground font-sans">
            Deskundig, betrokken en resultaatgericht
          </p>
        </motion.div>
      </div>

      {/* Hero image */}
      <div className="container-editorial pb-16">
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
      </div>
    </section>
  );
};

export default HeroSection;
