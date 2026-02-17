import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import teamElabadi from '@/assets/team-elabadi.jpg';
import teamAkbib from '@/assets/team-akbib.jpg';
import teamElkhaili from '@/assets/team-elkhaili.jpg';
import teamZaki from '@/assets/team-zaki.jpg';
import teamHamich from '@/assets/team-hamich.jpg';
import teamReus from '@/assets/team-reus.jpg';

const teamMembers = [
  {
    name: 'J. Akbib',
    role: 'Partner-advocaat',
    image: teamAkbib,
    bio: [
      'Mevrouw Akbib is advocaat in Marokko en gespecialiseerd op douane-regelgeving in Marokko, een nichegebied waarin zij zich heeft onderscheiden als deskundige.',
      'Als voormalige professor in het privaatrecht heeft zij diepgaande kennis van de academische wereld en heeft zij een waardevolle bijdrage geleverd aan het juridisch onderwijs.',
      'Na haar academische carrière heeft advocate Akbib haar vaardigheden verder ontwikkeld als zelfstandig advocaat in Marokko, waar zij haar juridische diensten verleent aan cliënten door het hele land.',
      'Mevrouw Akbib is gespecialiseerd in de volgende rechtsgebieden: familierecht, commercieel recht en civiel recht.',
    ],
    languages: 'Arabisch, Frans en Engels',
  },
  {
    name: 'K. Hamich',
    role: 'Jurist | Arbeidsmediator | Familiemediator',
    image: teamHamich,
    bio: [
      'De heer K. Hamich is jurist en gecertificeerd familie- en arbeidsmediator, met ruime ervaring in scheidingsmediation en andere complexe familiaire vraagstukken. Zijn strategische benadering en adviserende rol worden breed gewaardeerd door cliënten.',
      'Voorafgaand aan zijn werkzaamheden bij HBM Juristen heeft hij binnen de publieke sector uitgebreide ervaring opgebouwd als senior jurist in zowel bestuursrecht als privaatrecht. Hij richt zich op realistische en duurzame oplossingen, waarbij conflictbemiddeling wordt ingezet als volwaardig alternatief of effectieve aanvulling op de traditionele rechtsgang.',
      'Door zijn zorgvuldige werkwijze, analytisch inzicht en professionele begeleiding is hij een betrouwbare partner voor ondernemingen en particulieren die behoefte hebben aan deskundige juridische ondersteuning. Daarnaast is hij gecertificeerd als interne auditor, beoordeelt hij periodiek o.a. op kwaliteitsbeheersing, controleert informatiebeveiligingsmaatregelen en onderzoekt arbeidsveiligheid en gezondheidsrisico\'s in lijn met de laatste ISO-normen.',
    ],
    languages: 'Nederlands, Arabisch, Chinees en Engels',
  },
  {
    name: 'W. Elabadi',
    role: 'Partner-advocaat',
    image: teamElabadi,
    bio: [
      'Mevrouw Elabadi is advocate in Marokko en heeft ondernemingsrecht gestudeerd aan de Universiteit van Casablanca en rechten en financiën gestudeerd aan de École Supérieure de Commerce de Paris (ESCP) in Parijs.',
      'Verder heeft mevrouw Elabadi heeft een juridische specialisatie opgedaan aan de City Law School in Londen.',
      'Mevrouw Elabadi is gespecialiseerd in verschillende rechtsgebieden waaronder het ondernemingsrecht en financieel recht. Zij is werkzaam in heel Marokko met ruime internationale ervaring op het gebied procesvoering.',
    ],
    languages: 'Arabisch, Frans en Engels',
  },
  {
    name: 'A. El Khaili',
    role: 'Partner-advocaat',
    image: teamElkhaili,
    bio: [
      'De heer A. El Khaili is advocaat in Marokko (Noord-Afrika) en gespecialiseerd in het (islamitisch) familierecht, strafrecht, commercieel recht en vastgoed- en erfrecht.',
    ],
    languages: 'Arabisch, Frans en Engels',
  },
  {
    name: 'A. Zaki',
    role: 'Juriste en Klachtenfunctionaris',
    image: teamZaki,
    bio: [
      'Mevrouw A. Zaki is juriste en heeft een specialisatie in het bedrijfsrecht verworven aan zowel de Marokkaanse universiteit van Casablanca als aan de Franse universiteit van Nice.',
      'Mevrouw Zaki is als juriste gespecialiseerd in het privaatrecht, rechtswetenschappelijk onderzoek, vastgoedrecht en op het gebied van zakelijke aangelegenheden.',
    ],
    languages: 'Arabisch, Frans en Engels',
  },
  {
    name: 'M. Reus',
    role: 'Stagiaire',
    image: teamReus,
    bio: [
      'Mevrouw M. Reus is momenteel bezig met haar afstudeeronderzoek in Nederlands recht en Marokkaans recht bij HBM Juristen, waarna zij haar carrière wil voortzetten in de advocatuur.',
    ],
    languages: undefined,
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
              Ons <em className="italic">team</em>
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

      {/* Team members */}
      <section className="container-editorial py-10 md:py-14">
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start"
            >
              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl bg-section-grey">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent pt-20 pb-5 px-5">
                  <h3 className="text-lg font-serif font-medium text-primary-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-serif text-foreground">{member.name}</h2>
                  <p className="text-muted-foreground mt-1">{member.role}</p>
                </div>
                {member.bio.map((paragraph, i) => (
                  <p key={i} className="text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {member.languages && (
                  <p className="text-muted-foreground text-sm mt-4">
                    <span className="font-medium text-foreground">Talen:</span> {member.languages}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Team;
