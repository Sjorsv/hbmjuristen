import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const practiceAreas = {
  'Arbeid & Bestuur': [
    { name: 'Arbeidsrecht', description: 'Advies en bijstand bij arbeidsgeschillen', href: '/rechtsgebieden/arbeidsrecht' },
    { name: 'Bestuursrecht', description: 'Bezwaar en beroep tegen overheidsbesluiten', href: '/rechtsgebieden/bestuursrecht' },
    { name: 'Sociale zekerheidsrecht', description: 'Uitkeringen en toeslagen', href: '/rechtsgebieden/sociale-zekerheidsrecht' },
  ],
  'Privaatrecht': [
    { name: 'Consumentenrecht', description: 'Bescherming bij consumentengeschillen', href: '/rechtsgebieden/consumentenrecht' },
    { name: 'Huurrecht', description: 'Huurgeschillen en woningrecht', href: '/rechtsgebieden/huurrecht' },
    { name: 'Verbintenissenrecht', description: 'Contracten en overeenkomsten', href: '/rechtsgebieden/verbintenissenrecht' },
    { name: 'Personen- en familierecht', description: 'Echtscheiding en familiezaken', href: '/rechtsgebieden/personen-familierecht' },
  ],
  'Overig': [
    { name: 'Vreemdelingenrecht', description: 'Verblijfsvergunningen en asiel', href: '/rechtsgebieden/vreemdelingenrecht' },
    { name: 'Wegenverkeersrecht & letselschade', description: 'Verkeersovertredingen en schade', href: '/rechtsgebieden/wegenverkeersrecht' },
  ],
  'Internationaal': [
    { name: 'Marokko', description: 'Juridische zaken in Marokko', href: '/rechtsgebieden/marokko' },
    { name: 'België', description: 'Grensoverschrijdend advies', href: '/rechtsgebieden/belgie' },
  ],
};

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-foreground/10 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-background shadow-large z-50 border-t border-border"
          >
            <div className="container-editorial py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(practiceAreas).map(([category, areas]) => (
                  <div key={category}>
                    <h3 className="font-sans text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {areas.map((area) => (
                        <li key={area.name}>
                          <Link
                            to={area.href}
                            onClick={onClose}
                            className="group block"
                          >
                            <span className="font-sans font-medium text-foreground group-hover:text-primary transition-colors">
                              {area.name}
                            </span>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {area.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Footer link */}
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/rechtsgebieden"
                  onClick={onClose}
                  className="arrow-link"
                >
                  Bekijk alle rechtsgebieden
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
