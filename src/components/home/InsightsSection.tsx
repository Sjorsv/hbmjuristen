import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import insight1 from '@/assets/insight-1.jpg';
import insight2 from '@/assets/insight-2.jpg';
import insight3 from '@/assets/insight-3.jpg';

const insights = [
  {
    category: 'Arbeidsrecht',
    title: 'Nieuwe wetgeving rondom het ontslagrecht in 2025',
    date: '28 januari 2025',
    image: insight1,
    href: '/blog/ontslagrecht-2025',
  },
  {
    category: 'Nieuws',
    title: 'Hoge Raad verduidelijkt regels voor transitievergoeding',
    date: '15 januari 2025',
    image: insight2,
    href: '/blog/transitievergoeding',
  },
  {
    category: 'Nieuws',
    title: 'Wijzigingen in het huurrecht: wat betekent dit voor verhuurders?',
    date: '8 januari 2025',
    image: insight3,
    href: '/blog/huurrecht-wijzigingen',
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
            Inzichten & actualiteit
          </h2>
          <Link
            to="/blog"
            className="arrow-link"
          >
            Meer artikelen
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
