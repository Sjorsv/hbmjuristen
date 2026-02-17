import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Maria Bakker',
    initials: 'MB',
    text: 'HBM Juristen reageren ontzettend snel, denken heel fijn mee met onze situatie en kwamen met zeer solide juridische argumenten.',
    rating: 5,
  },
  {
    name: 'Chaima El Harchioui',
    initials: 'CE',
    text: 'Ik ben zeer goed bijgestaan door HBM Juristen. De jurist was bevlogen en vastberaden om het beste resultaat te behalen voor mij. Ik ben zeer tevreden met de uitkomst, die mijn verwachtingen hebben overtroffen. Ik raad HBM Juristen aan!',
    rating: 5,
  },
  {
    name: 'Assia Deboun',
    initials: 'AD',
    text: 'HBM Juristen heeft mijn ontslagzaak gewonnen, maar belangrijker nog: ze gaven me mijn zelfvertrouwen terug. De jurist begreep mij en gaf mij kracht om deze spannende zaak met succes door te zetten. Fijne is dat ik nog altijd kan bellen voor kosteloos advies.',
    rating: 5,
  },
  {
    name: 'Tenichia Vyent',
    initials: 'TV',
    text: 'Opnieuw heb ik de diensten van HBM mbt een zaak nodig gehad en ik ben weer super snel geholpen. Alle afspraken komt hij netjes na. Als ik 10 sterren kon geven had ik dit gedaan!! Ik raad iedereen aan om in zee te gaan met dit kantoor!',
    rating: 5,
  },
  {
    name: 'Maarten Poleij',
    initials: 'MP',
    text: 'Ik dank de heer Hamich voor zijn inzet en bemiddeling met de IND, ook ben ik tevreden over het resultaat hiervan. Ik kan HBM juristen daarom aanbevelen en zal een eventuele volgende keer zeker weer een beroep op hen doen.',
    rating: 5,
  },
  {
    name: 'Shirley Lie A Tjam',
    initials: 'SL',
    text: 'Waar ik de hoop had opgegeven ben ik door jullie uitstekend geholpen. Heel veel dank',
    rating: 5,
  },
  {
    name: 'Jovanca Lapé',
    initials: 'JL',
    text: 'Mijn ervaring was goed. Kreeg snel hulp van een medewerker goeie informatie en advies mijn dank is groot.',
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={review.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background rounded-2xl p-8 shadow-soft h-full">
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
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                          {review.initials}
                        </AvatarFallback>
                      </Avatar>
                      <p className="font-medium text-foreground">
                        {review.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>

        {/* Trust indicators */}
        {/* <motion.div
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
            <p className="text-3xl font-serif font-bold text-primary">9.850+</p>
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default ReviewsSection;
