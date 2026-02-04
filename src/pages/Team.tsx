import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const teamMembers = [
  {
    name: 'Hassan Bouchnafa',
    role: 'Oprichter & Jurist',
    expertise: 'Arbeidsrecht, Bestuursrecht',
    email: 'h.bouchnafa@hbmjuristen.nl',
    phone: '020-215 75 40',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Maria van den Berg',
    role: 'Senior Jurist',
    expertise: 'Vreemdelingenrecht, Familierecht',
    email: 'm.vandenberg@hbmjuristen.nl',
    phone: '020-215 75 41',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Ahmed El Mansouri',
    role: 'Jurist',
    expertise: 'Consumentenrecht, Huurrecht',
    email: 'a.elmansouri@hbmjuristen.nl',
    phone: '020-215 75 42',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Sophie de Groot',
    role: 'Jurist',
    expertise: 'Arbeidsrecht, Mediation',
    email: 's.degroot@hbmjuristen.nl',
    phone: '020-215 75 43',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Youssef Bakker',
    role: 'Junior Jurist',
    expertise: 'Bestuursrecht, Sociale zekerheid',
    email: 'y.bakker@hbmjuristen.nl',
    phone: '020-215 75 44',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Lisa Jansen',
    role: 'Mediator',
    expertise: 'Family Mediation, Arbeids Mediation',
    email: 'l.jansen@hbmjuristen.nl',
    phone: '020-215 75 45',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
  },
];

const Team = () => {
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
              to="/over-ons" 
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
              Ons team
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Bij HBM Juristen werkt een team van ervaren en betrokken juristen. 
              Wij combineren juridische expertise met persoonlijke aandacht voor 
              uw situatie. Maak kennis met onze professionals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="container-editorial py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-section-grey">
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-transparent pt-16 pb-5 px-5">
                  <h3 className="text-lg font-serif font-medium text-primary-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
              
              {/* Details below card */}
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  {member.expertise}
                </p>
                <div className="flex flex-col gap-1">
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {member.email}
                  </a>
                  <a 
                    href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Team;
