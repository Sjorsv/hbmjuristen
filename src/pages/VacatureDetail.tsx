import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, Briefcase, Clock, MapPin, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { vacatures } from '@/data/vacatures';

const VacatureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const vacature = vacatures.find((v) => v.slug === slug);

  if (!vacature) {
    return <Navigate to="/vacatures" replace />;
  }

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
            className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8"
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

      <section className="container-editorial pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-serif text-foreground mb-4">Over de functie</h2>
              <p className="text-foreground leading-relaxed">{vacature.description}</p>
            </motion.div>

            {vacature.responsibilities && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-serif text-foreground mb-4">Wat ga je doen?</h2>
                <ul className="space-y-3">
                  {vacature.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-serif text-foreground mb-4">Wat vragen wij?</h2>
              <ul className="space-y-3">
                {vacature.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {vacature.benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-serif text-foreground mb-4">Wat bieden wij?</h2>
                <ul className="space-y-3">
                  {vacature.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-section-grey rounded-2xl p-6 sticky top-28 space-y-6">
              <h3 className="text-lg font-serif text-foreground">Interesse?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Herken jij jezelf in dit profiel? Stuur dan je CV en motivatiebrief naar ons op.
              </p>
              <div className="space-y-3">
                <Button variant="cta" asChild className="w-full gap-2">
                  <a href={`mailto:info@hbmjuristen.nl?subject=Sollicitatie: ${vacature.title}`}>
                    <Mail className="w-4 h-4" />
                    Solliciteer per e-mail
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full gap-2">
                  <Link to="/contact">
                    Neem contact op
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default VacatureDetail;
