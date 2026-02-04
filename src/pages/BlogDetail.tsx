import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import insight1 from '@/assets/insight-1.jpg';
import insight2 from '@/assets/insight-2.jpg';
import insight3 from '@/assets/insight-3.jpg';

interface BlogPost {
  slug: string;
  type: 'blog' | 'pers';
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'ontslagrecht-2025': {
    slug: 'ontslagrecht-2025',
    type: 'blog',
    category: 'Arbeidsrecht',
    title: 'Nieuwe wetgeving rondom het ontslagrecht in 2025',
    excerpt: 'De belangrijkste wijzigingen in het ontslagrecht die per 2025 van kracht worden.',
    date: '28 januari 2025',
    author: 'Hassan Bouchnafa',
    readTime: '5 min leestijd',
    image: insight1,
    content: [
      'Per 1 januari 2025 zijn er belangrijke wijzigingen doorgevoerd in het Nederlandse ontslagrecht. Deze veranderingen hebben gevolgen voor zowel werkgevers als werknemers. In dit artikel bespreken wij de belangrijkste punten waar u rekening mee moet houden.',
      '## Wijzigingen in de transitievergoeding',
      'De berekening van de transitievergoeding is aangepast. Werknemers hebben nu recht op een transitievergoeding vanaf de eerste werkdag, ongeacht de duur van het dienstverband. De hoogte van de vergoeding is vastgesteld op 1/3 maandsalaris per gewerkt jaar.',
      '## Strengere eisen aan de ontslaggronden',
      'De wetgever heeft de eisen aan de verschillende ontslaggronden aangescherpt. Met name bij ontslag wegens disfunctioneren moet de werkgever kunnen aantonen dat er een gedegen verbetertraject is doorlopen. Dit traject moet minimaal drie maanden duren en goed gedocumenteerd zijn.',
      '## Herplaatsingsverplichting',
      'De herplaatsingsverplichting is uitgebreid. Werkgevers moeten nu ook actief zoeken naar herplaatsingsmogelijkheden binnen het concern. Dit betekent dat ook vacatures bij zuster- en moederondernemingen moeten worden meegenomen in de afweging.',
      '## Wat betekent dit voor u?',
      'Als werkgever is het belangrijk om uw ontslagprocedures tegen het licht te houden. Zorg ervoor dat dossieropbouw tijdig en zorgvuldig plaatsvindt. Als werknemer is het goed om te weten dat uw rechtspositie op verschillende punten is versterkt.',
      '## Conclusie',
      'De wijzigingen in het ontslagrecht per 2025 zorgen voor een betere balans tussen de belangen van werkgevers en werknemers. Het is echter wel van belang dat beide partijen goed op de hoogte zijn van hun rechten en plichten.',
      'Heeft u vragen over de nieuwe wetgeving of uw specifieke situatie? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.',
    ],
  },
};

const relatedPosts = [
  {
    title: 'Hoge Raad verduidelijkt regels voor transitievergoeding',
    category: 'Nieuws',
    date: '15 januari 2025',
    image: insight2,
    href: '/actualiteit/transitievergoeding',
  },
  {
    title: 'Wijzigingen in het huurrecht: wat betekent dit voor verhuurders?',
    category: 'Nieuws',
    date: '8 januari 2025',
    image: insight3,
    href: '/actualiteit/huurrecht-wijzigingen',
  },
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container-editorial section-padding text-center">
          <h1 className="text-3xl font-serif mb-4">Artikel niet gevonden</h1>
          <p className="text-muted-foreground mb-8">Dit artikel bestaat niet of is verplaatst.</p>
          <Button asChild>
            <Link to="/actualiteit">Bekijk alle artikelen</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="container-editorial">
        <div className="pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/actualiteit" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar overzicht
            </Link>
          </motion.div>
          
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex gap-2 mb-4"
          >
            <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              post.type === 'pers' 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}>
              {post.type === 'pers' ? 'Pers' : 'Blog'}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground max-w-4xl"
          >
            {post.title}
          </motion.h1>
          
          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container-editorial pb-10">
        <motion.div 
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-serif text-foreground mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 bg-section-grey rounded-2xl"
          >
            <h3 className="text-xl font-serif text-foreground mb-3">
              Hulp nodig bij uw juridische vraag?
            </h3>
            <p className="text-muted-foreground mb-6">
              Onze juristen staan klaar om u te helpen. Neem contact op voor een vrijblijvend gesprek.
            </p>
            <Button variant="cta" size="lg">
              Neem contact op
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-section-grey">
        <div className="container-editorial section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Gerelateerde artikelen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={article.href}
                    className="group block"
                  >
                    <div className="relative rounded-2xl overflow-hidden mb-5">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div>
                      <time className="text-sm text-muted-foreground">
                        {article.date}
                      </time>
                      <h3 className="text-lg font-serif font-medium text-foreground mt-2 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/actualiteit" className="arrow-link">
                Bekijk alle artikelen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
