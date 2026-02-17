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
  'rechtsbijstandsstelsel': {
    slug: 'rechtsbijstandsstelsel',
    type: 'blog',
    category: 'Bestuursrecht',
    title: 'Toegang tot het recht onder druk – waarom herijking van het rechtsbijstandsstelsel noodzakelijk is',
    excerpt: 'De toegang tot het recht staat in Nederland al geruime tijd onder spanning. Burgers met complexe juridische problemen vinden niet tijdig betaalbare en deskundige ondersteuning.',
    date: '28 januari 2025',
    author: 'HBM Juristen',
    readTime: '4 min leestijd',
    image: insight1,
    content: [
      'De toegang tot het recht staat in Nederland al geruime tijd onder spanning. In de dagelijkse praktijk wordt zichtbaar wat cijfers slechts gedeeltelijk tonen: burgers met complexe juridische problemen vinden niet tijdig betaalbare en deskundige ondersteuning. De vraag naar inhoudelijke rechtsbijstand groeit, terwijl het stelsel van gesubsidieerde rechtsbijstand slechts een beperkt deel van de rechtszoekenden bereikt.',
      'Op grond van de Wet op de rechtsbijstand kunnen uitsluitend advocaten – en in specifieke gevallen mediators – aanspraak maken op publieke financiering. Dat systeem is historisch verklaarbaar. Het beroep van advocaat kent een beschermde titel, verplichte beroepsopleiding, tuchtrecht en toezicht door de Nederlandse orde van advocaten en de Raad voor Rechtsbijstand.',
      '## De praktijk van 2026 is echter breder',
      'Gespecialiseerde juristenpraktijken behandelen inmiddels structureel complexe zaken binnen onder meer het bestuursrecht, vreemdelingenrecht, arbeidsrecht en civiel recht. Zij voeren bezwaar- en beroepsprocedures, stellen processtukken op, begeleiden cliënten bij zittingen en dragen bij aan inhoudelijke rechtsontwikkeling. De kwaliteit van deze werkzaamheden is in veel gevallen gelijkwaardig aan die van traditionele sociale advocatuur. Toch ontbreekt iedere structurele mogelijkheid om – waar maatschappelijke nood evident is – een beroep te doen op publieke middelen.',
      '## Een wezenlijke spanning tussen systeem en realiteit',
      'Dat leidt tot een wezenlijke spanning tussen systeem en realiteit.',
      'Heeft u vragen over dit onderwerp of uw specifieke situatie? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.',
    ],
  },
  'drie-formele-trajecten': {
    slug: 'drie-formele-trajecten',
    type: 'blog',
    category: 'Nieuws',
    title: 'Drie formele trajecten met het ministerie',
    excerpt: 'HBM Juristen heeft deze problematiek rechtstreeks onder de aandacht gebracht bij het ministerie van Justitie en Veiligheid.',
    date: '15 januari 2025',
    author: 'HBM Juristen',
    readTime: '4 min leestijd',
    image: insight2,
    content: [
      'HBM Juristen heeft deze problematiek niet louter publiekelijk aangekaart, maar ook rechtstreeks onder de aandacht gebracht bij het ministerie van Justitie en Veiligheid.',
      'In de afgelopen periode hebben drie formele correspondentie- en overlegtrajecten plaatsgevonden:',
      'Een eerste inhoudelijke briefwisseling over de exclusieve toegang van advocaten tot gesubsidieerde rechtsbijstand, waarin is bepleit om kwaliteitscriteria centraal te stellen in plaats van uitsluitend titelgebonden toegang.',
      'Een vervolgreactie waarin concreet is voorgesteld om te onderzoeken of gecertificeerde juristen onder strikte kwaliteitsvoorwaarden binnen het bestaande stelsel kunnen opereren.',
      'Een nadere schriftelijke uitwisseling naar aanleiding van de reactie van het ministerie, waarin is benadrukt dat de maatschappelijke behoefte aan betaalbare juridische bijstand structureel groter is dan het huidige stelsel kan dragen.',
      '## Reactie van het ministerie',
      'In de beantwoording heeft het ministerie bevestigd dat de toegang tot het recht voortdurende aandacht heeft en dat er onderzoek loopt naar alternatieve organisatievormen binnen de juridische sector. Tegelijkertijd is aangegeven dat het te ver zou voeren om de volledige groep juristen onder een nieuw wettelijk kader te brengen.',
      'Die reactie verdient respect, maar vraagt ook om verdere verdieping. Het debat is immers geen principieel beroepsdebat, maar een systeemvraagstuk.',
      'Heeft u vragen over dit onderwerp? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.',
    ],
  },
  'effectieve-toegang-recht': {
    slug: 'effectieve-toegang-recht',
    type: 'blog',
    category: 'Nieuws',
    title: 'De kern: effectieve toegang tot het recht',
    excerpt: 'Artikel 6 EVRM verplicht staten tot effectieve toegang tot de rechter.',
    date: '8 januari 2025',
    author: 'HBM Juristen',
    readTime: '3 min leestijd',
    image: insight3,
    content: [
      'Artikel 6 EVRM verplicht staten tot effectieve toegang tot de rechter. Die verplichting ziet niet uitsluitend op het bestaan van procedures, maar op daadwerkelijke bereikbaarheid van juridische bijstand wanneer dat noodzakelijk is voor een eerlijk proces.',
      'Het Europees Hof voor de Rechten van de Mens heeft herhaaldelijk benadrukt dat rechtsbescherming praktisch en reëel moet zijn.',
      'Wanneer burgers geen toevoeging krijgen, maar ook geen commerciële tarieven kunnen dragen, ontstaat een grijs gebied waarin rechtsbescherming feitelijk onbereikbaar wordt. Juist in dat gebied opereren gespecialiseerde juristenpraktijken, vaak tegen sterk gereduceerde tarieven of met aanzienlijke onbetaalde inzet.',
      'Dat model is maatschappelijk betrokken, maar economisch kwetsbaar.',
      'Heeft u vragen over dit onderwerp? Neem dan gerust contact met ons op voor een vrijblijvend gesprek.',
    ],
  },
};

const relatedPosts = [
  {
    title: 'Drie formele trajecten met het ministerie',
    category: 'Nieuws',
    date: '15 januari 2025',
    image: insight2,
    href: '/blog/drie-formele-trajecten',
  },
  {
    title: 'De kern: effectieve toegang tot het recht',
    category: 'Nieuws',
    date: '8 januari 2025',
    image: insight3,
    href: '/blog/effectieve-toegang-recht',
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
              to={post.type === 'pers' ? '/pers' : '/blog'}
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
