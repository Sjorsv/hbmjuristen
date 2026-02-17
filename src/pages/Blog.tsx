import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import insight1 from '@/assets/insight-1.jpg';
import insight2 from '@/assets/insight-2.jpg';
import insight3 from '@/assets/insight-3.jpg';
import headerMorocco from '@/assets/header-morocco.jpg';

// Categories removed

interface Article {
  id: string;
  category?: string;
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
    title: 'Bezoek Universiteit Utrecht (Ad Informandum) aan HBM Juristen in Marokko',
    excerpt: 'In april 2024 heeft HBM Juristen studenten van Ad Informandum, verbonden aan de Universiteit Utrecht, ontvangen in Marokko in het kader van hun studiereis.',
    date: '12 april 2024',
    image: headerMorocco,
    href: '/blog/bezoek-universiteit-utrecht',
  },
  {
    id: '1',
    category: 'Bestuursrecht',
    
    title: 'Toegang tot het recht onder druk – waarom herijking van het rechtsbijstandsstelsel noodzakelijk is',
    excerpt: 'De toegang tot het recht staat in Nederland al geruime tijd onder spanning. Burgers met complexe juridische problemen vinden niet tijdig betaalbare en deskundige ondersteuning.',
    date: '28 januari 2025',
    image: insight1,
    href: '/blog/rechtsbijstandsstelsel',
  },
  {
    id: '2',
    category: 'Nieuws',
    title: 'Drie formele trajecten met het ministerie',
    excerpt: 'HBM Juristen heeft deze problematiek rechtstreeks onder de aandacht gebracht bij het ministerie van Justitie en Veiligheid.',
    date: '15 januari 2025',
    image: insight2,
    href: '/blog/drie-formele-trajecten',
  },
  {
    id: '3',
    category: 'Nieuws',
    
    title: 'De kern: effectieve toegang tot het recht',
    excerpt: 'Artikel 6 EVRM verplicht staten tot effectieve toegang tot de rechter. Die verplichting ziet niet uitsluitend op het bestaan van procedures.',
    date: '8 januari 2025',
    image: insight3,
    href: '/blog/effectieve-toegang-recht',
  },
  {
    id: '5',
    category: 'Arbeidsrecht',
    
    title: 'Arbeidsrecht: schijnzelfstandigheid, platformarbeid en handhaving',
    excerpt: 'Het Nederlandse arbeidsrecht bevindt zich in een herijkingsfase. De handhaving op schijnzelfstandigheid is sinds 2025 aanzienlijk aangescherpt.',
    date: '2 januari 2025',
    image: insight2,
    href: '/blog/schijnzelfstandigheid-handhaving',
  },
  {
    id: '7',
    category: 'Vreemdelingenrecht',
    title: 'De Moudawana in ontwikkeling — actuele hervormingen en juridische betekenis',
    excerpt: 'De Marokkaanse Moudawana, het familierechtelijk wetboek van het Koninkrijk Marokko, blijft in beweging sinds de fundamentele hervorming van 2004.',
    date: '15 december 2024',
    image: insight1,
    href: '/blog/moudawana-hervormingen',
  },
  {
    id: '8',
    category: 'Civiel recht',
    
    title: 'Mediation in Nederland: tussen praktijk en aankomende wetgeving',
    excerpt: 'Mediation is in Nederland al jaren een vaste waarde binnen de rechtspraktijk, maar opmerkelijk genoeg zonder eigen, zelfstandige wettelijke regeling.',
    date: '10 december 2024',
    image: insight2,
    href: '/blog/mediation-nederland',
  },
  {
    id: '9',
    category: 'Ondernemingsrecht',
    
    title: 'De handelssector in Marokko: juridische aandachtspunten voor buitenlandse ondernemers',
    excerpt: 'Marokko positioneert zich nadrukkelijk als economische brug tussen Europa en Afrika. Toetreding tot de Marokkaanse markt vereist een gedegen begrip van het lokale handels- en ondernemingsrecht.',
    date: '1 december 2024',
    image: insight1,
    href: '/blog/handelssector-marokko',
  },
  {
    id: '10',
    category: 'Vreemdelingenrecht',
    
    title: 'Vreemdelingenrecht in Nederland: IND-rapporten, vertragingen en rechtsbescherming in 2026',
    excerpt: 'De IND kampt structureel met lange wachttijden en een groeiende werkvoorraad, wat directe gevolgen heeft voor asielzoekers, familie- en migratieprocedures.',
    date: '20 november 2024',
    image: insight3,
    href: '/blog/vreemdelingenrecht-ind-2026',
  },
];

const Blog = () => {
  const filteredArticles = articles;

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
        ) : null}
      </section>
    </Layout>
  );
};

export default Blog;
