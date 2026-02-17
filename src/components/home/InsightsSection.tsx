import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import insight1 from '@/assets/insight-1.jpg';
import insight2 from '@/assets/insight-2.jpg';
import insight3 from '@/assets/insight-3.jpg';
import headerMorocco from '@/assets/header-morocco.jpg';

const insights = [
  {
    category: 'Nieuws',
    title: 'Bezoek Universiteit Utrecht (Ad Informandum) aan HBM Juristen in Marokko',
    date: '12 april 2024',
    image: headerMorocco,
    href: '/blog/bezoek-universiteit-utrecht',
  },
  {
    category: 'Bestuursrecht',
    title: 'Toegang tot het recht onder druk – waarom herijking van het rechtsbijstandsstelsel noodzakelijk is',
    date: '28 januari 2025',
    image: insight1,
    href: '/blog/rechtsbijstandsstelsel',
  },
  {
    category: 'Nieuws',
    title: 'Drie formele trajecten met het ministerie',
    date: '15 januari 2025',
    image: insight2,
    href: '/blog/drie-formele-trajecten',
  },
];

const InsightsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Blogs
          </h2>
          <Link
            to="/blog"
            className="arrow-link"
          >
            Meer blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={insight.href}
                className="group block"
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <time className="text-sm text-muted-foreground">
                    {insight.date}
                  </time>
                  <h3 className="text-lg font-serif font-medium text-foreground mt-2 group-hover:text-primary transition-colors leading-snug">
                    {insight.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
