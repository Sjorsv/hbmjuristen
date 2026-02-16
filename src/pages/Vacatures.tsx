import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, Briefcase, GraduationCap, Clock, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { vacatures } from '@/data/vacatures';
import headerMeetingRoom from '@/assets/header-meeting-room.jpg';

const Vacatures = () => {
  return (
    <Layout>
      <section className="container-editorial">
        <div className="pt-8 pb-6">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground"
            >
              Vacatures
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Wij zijn altijd op zoek naar talent dat ons team versterkt. 
              Bekijk onze openstaande vacatures of neem contact met ons op voor mogelijkheden.
            </motion.p>
          </div>
        </div>
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
            src={headerMeetingRoom} 
            alt="Vergaderruimte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </motion.div>
      </div>

      {/* Vacatures */}
      <section className="container-editorial py-10 md:py-14">
        <div className="space-y-8">
          {vacatures.map((vacature, index) => (
            <motion.div
              key={vacature.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-section-grey rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-serif text-foreground mb-2">{vacature.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {vacature.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {vacature.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {vacature.hours}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {vacature.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Wat wij vragen:</h3>
                <ul className="space-y-2">
                  {vacature.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild className="gap-2">
                  <Link to={`/vacatures/${vacature.slug}`}>
                    Bekijk vacature
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="cta" asChild className="gap-2">
                  <a href={`mailto:info@hbmjuristen.nl?subject=Sollicitatie: ${vacature.title}`}>
                    <Mail className="w-4 h-4" />
                    Solliciteer per e-mail
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stage sectie */}
      <section className="container-editorial pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-section-grey rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Stage lopen bij HBM Juristen?</h2>
          </div>

          <div className="space-y-4 text-foreground leading-relaxed mb-6">
            <p>
              Stagiairs kunnen het gehele jaar door solliciteren. Wij selecteren kandidaten op kwaliteiten, ervaring en professionele houding. Een stage omvat een gestructureerd programma met professionele begeleiding door de praktijkopleider, aangevuld met zowel theoretische als praktische werkzaamheden en de uitvoering van door de onderwijsinstelling opgelegde stageopdrachten.
            </p>
            <p>
              Sollicitaties kunnen uitsluitend per e-mail worden ingediend, voorzien van curriculum vitae (CV) en motivatiebrief. Wij beoordelen aanmeldingen zorgvuldig en nemen contact op wanneer u wordt uitgenodigd voor een kennismaking.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="cta" asChild className="gap-2">
              <a href="mailto:info@hbmjuristen.nl?subject=Stagesollicitatie">
                <Mail className="w-4 h-4" />
                Solliciteer voor een stage
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link to="/youth-legal-development-program">
                Youth Legal Development Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Vacatures;
