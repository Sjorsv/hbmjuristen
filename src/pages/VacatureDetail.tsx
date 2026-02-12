import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, Phone, Briefcase, Clock, MapPin, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { vacatures } from '@/data/vacatures';

const VacatureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const vacature = vacatures.find((v) => v.slug === slug);

  if (!vacature) {
    return <Navigate to="/vacatures" replace />;
  }

  const otherVacatures = vacatures.filter((v) => v.slug !== slug);

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
              to="/vacatures"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar vacatures
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4"
          >
            {vacature.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 text-sm text-muted-foreground"
          >
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
          </motion.div>
        </div>
      </section>

      <section className="container-editorial section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-[620px] mx-auto space-y-10"
        >
          <div>
            <h2 className="text-xl font-serif text-foreground mb-4">Over de functie</h2>
            <p className="text-foreground leading-relaxed">{vacature.description}</p>
          </div>

          {vacature.responsibilities && vacature.responsibilities.length > 0 && (
            <div>
              <h2 className="text-xl font-serif text-foreground mb-4">Wat ga je doen?</h2>
              <ul className="space-y-3">
                {vacature.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-xl font-serif text-foreground mb-4">Wat vragen wij?</h2>
            <ul className="space-y-3">
              {vacature.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {vacature.benefits && vacature.benefits.length > 0 && (
            <div>
              <h2 className="text-xl font-serif text-foreground mb-4">Wat bieden wij?</h2>
              <ul className="space-y-3">
                {vacature.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Herken jij jezelf in dit profiel? Stuur dan je CV en motivatiebrief naar ons op 
              of neem contact op voor meer informatie.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild className="gap-2">
                <a href={`mailto:info@hbmjuristen.nl?subject=Sollicitatie: ${vacature.title}`}>
                  <Mail className="w-4 h-4" />
                  Solliciteer per e-mail
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link to="/contact">
                  <Phone className="w-4 h-4" />
                  Neem contact op
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Other vacatures */}
      {otherVacatures.length > 0 && (
        <section className="bg-section-grey">
          <div className="container-editorial section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
                Bekijk andere vacatures
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherVacatures.map((v, index) => (
                  <motion.div
                    key={v.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/vacatures/${v.slug}`}
                      className="group block h-full bg-background rounded-2xl p-6 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                            {v.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                            <span>{v.type}</span>
                            <span>{v.location}</span>
                            <span>{v.hours}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link to="/vacatures" className="arrow-link">
                  Bekijk alle vacatures
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default VacatureDetail;
