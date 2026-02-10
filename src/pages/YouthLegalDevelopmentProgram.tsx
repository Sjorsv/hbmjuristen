import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const YouthLegalDevelopmentProgram = () => {
  return (
    <Layout>
      <section className="container-editorial">
        <div className="pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/vacatures" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Ga terug
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground"
          >
            Youth Legal Development Program
          </motion.h1>
        </div>
      </section>

      <section className="container-editorial py-10 md:py-14">
        <div className="max-w-[620px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen gelooft dat de toekomst van het recht wordt gevormd door jonge, excellente talenten met intellectuele scherpte, maatschappelijke betrokkenheid en een uitgesproken affiniteit met het juridische vak. Vanuit die overtuiging is het Youth Legal Development Program ontwikkeld: een zorgvuldig vormgegeven traject waarin talent, discipline en juridische ambitie samenkomen.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Onze missie is het identificeren, opleiden en begeleiden van uitzonderlijk presterende jongeren die zich willen ontwikkelen tot hoogwaardig juridisch professional binnen een internationale en professionele context. Het programma biedt deze jongeren niet alleen toegang tot kennis en praktijkervaring, maar ook tot een cultuur waarin kwaliteit, verantwoordelijkheid en rechtsstatelijke waarden centraal staan. HBM Juristen ziet het als haar verantwoordelijkheid om talent niet alleen te selecteren, maar ook duurzaam te vormen.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Onze visie is gericht op de lange termijn. Wij streven ernaar een nieuwe generatie juristen op te leiden die verder kijkt dan de grenzen van één rechtsstelsel of jurisdictie. Jongeren die deelnemen aan het Youth Legal Development Program worden uitgedaagd om kritisch te denken, juridisch te excelleren en zich bewust te zijn van de maatschappelijke impact van het recht. Door een combinatie van opleiding, praktijkervaring en intensieve begeleiding creëren wij professionals die niet alleen juridisch bekwaam zijn, maar ook ethisch sterk en internationaal georiënteerd.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              HBM Juristen positioneert het Youth Legal Development Program als een selectief en veeleisend traject voor jongeren die bereid zijn te investeren in hun ontwikkeling en verantwoordelijkheid te nemen voor hun professionele toekomst. Excellentie is geen einddoel, maar een voortdurende standaard. Het programma vormt daarmee een brug tussen potentieel en praktijk, tussen ambitie en vakmanschap.
            </p>

            <p className="text-lg text-foreground leading-relaxed font-medium">
              Met dit programma investeert HBM Juristen bewust in de toekomst van het recht – door te investeren in mensen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-serif text-foreground mb-4">Aanmelding</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Geïnteresseerde kandidaten kunnen zich aanmelden voor het Youth Legal Development Program door een motivatiebrief en curriculum vitae in het Engels per e-mail te sturen. In de motivatiebrief wordt verwacht dat de kandidaat zijn of haar affiniteit met het recht, academische of professionele prestaties en motivatie voor deelname aan het programma duidelijk uiteenzet. Na ontvangst van de aanmelding volgt een zorgvuldige selectieprocedure bestaande uit meerdere beoordelingsmomenten. Alleen geselecteerde kandidaten worden benaderd voor de vervolgstappen.
            </p>

            <Button variant="cta" size="lg" asChild className="gap-2">
              <a href="mailto:info@hbmjuristen.nl?subject=Aanmelding Youth Legal Development Program">
                <Mail className="w-4 h-4" />
                Meld je aan per e-mail
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default YouthLegalDevelopmentProgram;
