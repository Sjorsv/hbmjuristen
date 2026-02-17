import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import insight1 from '@/assets/insight-1.jpg';
import insight2 from '@/assets/insight-2.jpg';
import insight3 from '@/assets/insight-3.jpg';
import headerMorocco from '@/assets/header-morocco.jpg';

type CategoryType = 'all' | 'arbeidsrecht' | 'nieuws' | 'bestuursrecht' | 'consumentenrecht' | 'vreemdelingenrecht';

interface Article {
  id: string;
  category: string;
  categorySlug: CategoryType;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

const articles: Article[] = [
  {
    id: '0',
    category: 'Nieuws',
    categorySlug: 'nieuws',
    title: 'Bezoek Universiteit Utrecht (Ad Informandum) aan HBM Juristen in Marokko',
    excerpt: 'In april 2024 heeft HBM Juristen studenten van Ad Informandum, verbonden aan de Universiteit Utrecht, ontvangen in Marokko in het kader van hun studiereis.',
    date: '12 april 2024',
    image: headerMorocco,
    href: '/blog/bezoek-universiteit-utrecht',
  },
  {
    id: '1',
    category: 'Bestuursrecht',
    categorySlug: 'bestuursrecht',
    title: 'Toegang tot het recht onder druk – waarom herijking van het rechtsbijstandsstelsel noodzakelijk is',
    excerpt: 'De toegang tot het recht staat in Nederland al geruime tijd onder spanning. Burgers met complexe juridische problemen vinden niet tijdig betaalbare en deskundige ondersteuning.',
    date: '28 januari 2025',
    image: insight1,
    href: '/blog/rechtsbijstandsstelsel',
  },
  {
    id: '2',
    category: 'Nieuws',
    categorySlug: 'nieuws',
    title: 'Drie formele trajecten met het ministerie',
    excerpt: 'HBM Juristen heeft deze problematiek rechtstreeks onder de aandacht gebracht bij het ministerie van Justitie en Veiligheid.',
    date: '15 januari 2025',
    image: insight2,
    href: '/blog/drie-formele-trajecten',
  },
  {
    id: '3',
    category: 'Nieuws',
    categorySlug: 'nieuws',
    title: 'De kern: effectieve toegang tot het recht',
    excerpt: 'Artikel 6 EVRM verplicht staten tot effectieve toegang tot de rechter. Die verplichting ziet niet uitsluitend op het bestaan van procedures.',
    date: '8 januari 2025',
    image: insight3,
    href: '/blog/effectieve-toegang-recht',
  },
  {
    id: '5',
    category: 'Bestuursrecht',
    categorySlug: 'bestuursrecht',
    title: 'Bezwaar maken tegen een besluit van de gemeente',
    excerpt: 'Stap voor stap uitleg over het bezwaarprocedure bij overheidsbesluiten.',
    date: '2 januari 2025',
    image: insight2,
    href: '/blog/bezwaar-gemeente',
  },
  {
    id: '7',
    category: 'Vreemdelingenrecht',
    categorySlug: 'vreemdelingenrecht',
    title: 'Nieuwe regels voor gezinshereniging in 2025',
    excerpt: 'Belangrijke updates voor aanvragen van verblijfsvergunningen.',
    date: '15 december 2024',
    image: insight1,
    href: '/blog/gezinshereniging-2025',
  },
  {
    id: '8',
    category: 'Consumentenrecht',
    categorySlug: 'consumentenrecht',
    title: 'Uw rechten bij online aankopen',
    excerpt: 'Wat u moet weten over retourneren en garantie bij webwinkels.',
    date: '10 december 2024',
    image: insight2,
    href: '/blog/online-aankopen-rechten',
  },
];

const categoryFilters: { value: CategoryType; label: string }[] = [
  { value: 'all', label: 'Alle categorieën' },
  { value: 'arbeidsrecht', label: 'Arbeidsrecht' },
  { value: 'nieuws', label: 'Nieuws' },
  { value: 'bestuursrecht', label: 'Bestuursrecht' },
  { value: 'consumentenrecht', label: 'Consumentenrecht' },
  { value: 'vreemdelingenrecht', label: 'Vreemdelingenrecht' },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredArticles = articles.filter((article) => {
    return activeCategory === 'all' || article.categorySlug === activeCategory;
  });

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
              Blogs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Blijf op de hoogte van de laatste juridische ontwikkelingen en 
              inzichten van onze juristen. Ontdek artikelen over diverse 
              rechtsgebieden en actuele zaken.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-editorial py-6 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveCategory(filter.value)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === filter.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-section-grey text-foreground hover:bg-section-grey-darker'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          {filteredArticles.length} {filteredArticles.length === 1 ? 'artikel' : 'artikelen'} gevonden
        </motion.p>
      </section>

      {/* Articles grid */}
      <section className="container-editorial py-10 md:py-14">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
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
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
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
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              Geen artikelen gevonden met de huidige filters.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-4 text-primary hover:underline"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </section>
    </Layout>
  );
};

export default Blog;
