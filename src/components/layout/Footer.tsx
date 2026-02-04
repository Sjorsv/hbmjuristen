import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.svg';

const footerLinks = {
  'Rechtsgebieden': [
    { name: 'Arbeidsrecht', href: '/rechtsgebieden/arbeidsrecht' },
    { name: 'Bestuursrecht', href: '/rechtsgebieden/bestuursrecht' },
    { name: 'Consumentenrecht', href: '/rechtsgebieden/consumentenrecht' },
    { name: 'Vreemdelingenrecht', href: '/rechtsgebieden/vreemdelingenrecht' },
    { name: 'Arbeids Mediation', href: '/rechtsgebieden/arbeids-mediation' },
    { name: 'Family Mediation', href: '/rechtsgebieden/family-mediation' },
    { name: 'China', href: '/rechtsgebieden/china' },
    { name: 'Marokko', href: '/rechtsgebieden/marokko' },
  ],
  'Over HBM': [
    { name: 'Wie zijn wij', href: '/over-ons' },
    { name: 'Ons team', href: '/over-ons/team' },
    { name: 'Werkwijze', href: '/werkwijze' },
    { name: 'Kosten', href: '/kosten' },
    { name: 'Vacatures', href: '/vacatures' },
  ],
  'Informatie': [
    { name: 'Blog', href: '/actualiteit' },
    { name: 'Klachtenprocedure', href: '/klachtenprocedure' },
    { name: 'Privacyverklaring', href: '/privacy' },
    { name: 'Geheimhouding', href: '/geheimhouding' },
    { name: 'Partner-Beleid', href: '/partner-beleid' },
    { name: 'Kostenbeleid', href: '/kostenbeleid' },
    { name: 'Tarieven', href: '/tarieven' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Artificial Intelligence', href: '/ai' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-section-grey-darker border-t border-border">
      {/* Main footer */}
      <div className="container-editorial section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="HBM Juristen - Juridisch advies & rechtsbijstand" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              HBM Juristen biedt deskundige juridische hulp aan particulieren en ondernemers. 
              Betrokken, resultaatgericht en altijd bereikbaar.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="tel:+31202157540" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>020-215 75 40</span>
              </a>
              <a 
                href="mailto:info@hbmjuristen.nl" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@hbmjuristen.nl</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Keizersgracht 391-A<br />1016 EJ Amsterdam</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/31202157540" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-light transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans font-semibold text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-editorial py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} HBM Juristen. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacyverklaring
              </Link>
              <Link to="/voorwaarden" className="hover:text-primary transition-colors">
                Algemene voorwaarden
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
