import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Werkwijze = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-section-grey section-padding">
        <div className="container-editorial">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Ga terug
          </Link>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-4xl">
            Werkwijze
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-[620px] mx-auto">
            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Uiteraard leveren wij gedegen werk af, maar naast juridische kwaliteit is ook het onderhouden van een persoonlijke relatie met cliënten voor HBM Juristen van groot belang.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bovendien kijken wij met een praktische blik naar de zaken die u ons voorlegt. Wat is vanuit zakelijk oogpunt verstandig? Ons plan van aanpak komt tot stand door onderlinge afstemming waarbij onze juristen uw wensen voor ogen houden en onze kennis en expertise voor u wordt ingezet om maximaal resultaat te behalen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Werkwijze;
