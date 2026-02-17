import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import heroImage1 from '@/assets/hero-office.jpg';
import heroImage2 from '@/assets/hero-slide-2.jpg';
import heroImage3 from '@/assets/hero-slide-3.jpg';

const slides = [
  { src: heroImage1, alt: 'HBM Juristen kantoor' },
  { src: heroImage2, alt: 'HBM Juristen gebouw' },
  { src: heroImage3, alt: 'HBM Juristen architectuur' },
];

const INTERVAL = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

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
            Wij zijn <span className="text-primary font-bold">HBM</span>, een toonaangevend <em className="italic">juristenpraktijk</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground font-sans">
            Solutions start here.
          </p>
        </motion.div>
      </div>

      {/* Hero slideshow */}
      <div className="container-editorial pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
            {slides.map((slide, index) => (
              <motion.img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{ x: `${(index - current) * 100}%` }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
            ))}

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ga naar slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
