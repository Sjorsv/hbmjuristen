import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Fatima Masjedi',
    text: 'Very happy with my experience with mr. Hamich from hbm juristen! He\'s always been attentive and fast when I needed help, no matter the time or place. He\'s highly reliable and I got great results every time. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Shreyasi Das',
    text: 'It was great having the conversation with Khalid V. It was a clear and concise interview, and all doubts were cleared. Looking forward to more!',
    rating: 5,
  },
  {
    name: 'Assia Deboun',
    text: 'HBM Juristen heeft mijn ontslagzaak gewonnen, maar belangrijker nog: ze gaven me mijn zelfvertrouwen terug. De jurist begreep mij en gaf mij kracht om deze…',
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-section-grey">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Wat onze cliënten zeggen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wij zijn trots op de relaties die we opbouwen met onze cliënten en de 
            resultaten die we samen behalen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-soft"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{review.text}"
              </blockquote>
              
              {/* Author */}
              <p className="font-medium text-foreground">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary">6+</p>
            <p className="text-sm text-muted-foreground mt-1">Jaar ervaring</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary">11330+</p>
            <p className="text-sm text-muted-foreground mt-1">Tevreden cliënten</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary">99%</p>
            <p className="text-sm text-muted-foreground mt-1">Aanbeveling</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary">4.9</p>
            <p className="text-sm text-muted-foreground mt-1">Google beoordeling</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
