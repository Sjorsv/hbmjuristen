export interface Vacature {
  slug: string;
  title: string;
  type: string;
  location: string;
  hours: string;
  description: string;
  requirements: string[];
  responsibilities?: string[];
  benefits?: string[];
}

export const vacatures: Vacature[] = [
  {
    slug: 'jurist-civiel-recht',
    title: 'Jurist Civiel Recht',
    type: 'Vast dienstverband',
    location: 'Amsterdam',
    hours: '32–40 uur per week',
    description: 'Wij zoeken een gedreven jurist met ervaring in het civiele recht om ons team te versterken. Je werkt zelfstandig aan dossiers en adviseert cliënten over uiteenlopende civielrechtelijke kwesties.',
    requirements: [
      'Afgeronde WO-opleiding Rechtsgeleerdheid',
      'Minimaal 2 jaar werkervaring in het civiele recht',
      'Uitstekende beheersing van de Nederlandse taal in woord en geschrift',
      'Proactieve en oplossingsgerichte werkhouding',
    ],
    responsibilities: [
      'Zelfstandig beheren en behandelen van civielrechtelijke dossiers',
      'Adviseren van cliënten over contracten, aansprakelijkheid en geschillen',
      'Opstellen van juridische documenten en processtukken',
      'Bijdragen aan de verdere ontwikkeling van de civielrechtelijke praktijk',
    ],
    benefits: [
      'Werken in een dynamisch en groeiend juridisch team',
      'Ruimte voor professionele ontwikkeling en opleidingen',
      'Competitief salaris en secundaire arbeidsvoorwaarden',
      'Prettige werksfeer in het centrum van Amsterdam',
    ],
  },
  {
    slug: 'jurist-vreemdelingenrecht',
    title: 'Jurist Vreemdelingenrecht',
    type: 'Vast dienstverband',
    location: 'Amsterdam',
    hours: '32–40 uur per week',
    description: 'Voor onze groeiende praktijk in het vreemdelingenrecht zijn wij op zoek naar een ervaren jurist die cliënten bijstaat in asiel- en migratiezaken.',
    requirements: [
      'Afgeronde WO-opleiding Rechtsgeleerdheid',
      'Aantoonbare kennis van het vreemdelingenrecht',
      'Ervaring met het voeren van procedures bij de IND en rechtbank',
      'Beheersing van Engels en/of Frans is een pré',
    ],
    responsibilities: [
      'Bijstaan van cliënten in asiel-, reguliere en bewaringszaken',
      'Voeren van procedures bij de IND, rechtbank en Raad van State',
      'Opstellen van bezwaar- en beroepschriften',
      'Bijhouden van relevante jurisprudentie en wetgeving',
    ],
    benefits: [
      'Werken aan maatschappelijk relevante zaken',
      'Ruimte voor specialisatie en verdieping',
      'Competitief salaris en secundaire arbeidsvoorwaarden',
      'Collegiale en ondersteunende werkomgeving',
    ],
  },
  {
    slug: 'mediator-parttime',
    title: 'Mediator (Parttime)',
    type: 'Parttime',
    location: 'Amsterdam',
    hours: '16–24 uur per week',
    description: 'Wij zijn op zoek naar een gecertificeerd mediator voor familie- en arbeidsmediation. Je begeleidt partijen naar een duurzame oplossing in complexe geschillen.',
    requirements: [
      'MfN-registermediator of gelijkwaardige certificering',
      'Ervaring in familie- en/of arbeidsmediation',
      'Empathisch, neutraal en oplossingsgericht',
      'Beschikbaar voor minimaal 2 dagen per week',
    ],
    responsibilities: [
      'Begeleiden van mediationtrajecten in familie- en arbeidszaken',
      'Voeren van intake- en mediationgesprekken',
      'Opstellen van vaststellingsovereenkomsten',
      'Onderhouden van contact met betrokken partijen en hun advocaten',
    ],
    benefits: [
      'Flexibele werktijden en parttime mogelijkheden',
      'Werken binnen een multidisciplinair team',
      'Mogelijkheid tot verdere specialisatie',
      'Aangename werklocatie in Amsterdam',
    ],
  },
];
