import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import insight1 from '@/assets/insight-1.jpg';
import insight2 from '@/assets/insight-2.jpg';
import insight3 from '@/assets/insight-3.jpg';

interface PressArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

const pressArticles: PressArticle[] = [
  {
    id: '1',
    title: 'Persverklaring - Vergismoord in Marokko',
    excerpt: 'HBM Juristen is door NAPNieuws benaderd met het verzoek een algemene juridische toelichting te geven naar aanleiding van berichtgeving over een strafzaak in Marrakech.',
    date: '4 februari 2023',
    image: insight1,
    href: '/pers/vergismoord-marokko',
  },
];

const Press = () => {
  return (
    <Layout>
      <section className="container-editorial">
        {/* Back link and header */}
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
              Pers
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Persberichten en media-aandacht over HBM Juristen. Ontdek onze 
              laatste nieuws en vermeldingen in de pers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="container-editorial py-10 md:py-14 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={article.href}
                className="group block"
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <time className="text-sm text-muted-foreground">
                    {article.date}
                  </time>
                  <h3 className="text-lg font-serif font-medium text-foreground mt-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Press;
