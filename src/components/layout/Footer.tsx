import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
import logoNjv from '@/assets/logo-njv.png';
import logoNmv from '@/assets/logo-nmv.png';
import logoBb from '@/assets/logo-bb.png';

const footerLinks = {
  'Rechtsgebieden': [
    { name: 'Arbeidsrecht', href: '/rechtsgebieden/arbeidsrecht' },
    { name: 'Bestuursrecht', href: '/rechtsgebieden/bestuursrecht' },
    { name: 'Consumentenrecht', href: '/rechtsgebieden/consumentenrecht' },
    { name: 'Vreemdelingenrecht', href: '/rechtsgebieden/vreemdelingenrecht' },
    { name: 'Arbeidsmediation', href: '/rechtsgebieden/arbeids-mediation' },
    { name: 'Familiemediation', href: '/rechtsgebieden/family-mediation' },
    { name: 'China', href: '/rechtsgebieden/china' },
    { name: 'Marokko', href: '/rechtsgebieden/marokko' },
  ],
  'Over HBM': [
    { name: 'Missie & Visie', href: '/over-ons/missie-visie' },
    { name: 'Wie zijn wij', href: '/over-ons' },
    { name: 'Ons team', href: '/over-ons/team' },
    { name: 'Werkwijze', href: '/werkwijze' },
    { name: 'Tarieven', href: '/tarieven' },
    { name: 'Vacatures', href: '/vacatures' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pers', href: '/pers' },
  ],
  'Informatie': [
    { name: 'Klachtenprocedure', href: '/klachtenprocedure' },
    { name: 'Privacyverklaring', href: '/privacy' },
    { name: 'Geheimhouding', href: '/geheimhouding' },
    { name: 'Partner-Beleid', href: '/partner-beleid' },
    { name: 'Kostenbeleid', href: '/kostenbeleid' },
    { name: 'Audit', href: '/audit' },
    { name: 'Acceptatiebeleid', href: '/acceptatiebeleid' },
    { name: 'E-mailbeleid', href: '/e-mailbeleid' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Artificial Intelligence', href: '/artificial-intelligence' },
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
              <a href="https://maps.google.com/?q=Singel+126-130+Amsterdam" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-foreground font-medium hover:text-primary hover:font-semibold transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Singel 126-130<br />1015 AE Amsterdam<br />Nederland</span>
              </a>
              <a href="https://maps.google.com/?q=Rue+Mozart+Bd+d'Anfa+Casablanca" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-foreground font-medium hover:text-primary hover:font-semibold transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rue Mozart et Bd d'Anfa<br />Casablanca 20250<br />Marokko</span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#1877F2' }}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#000000' }}
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: 'linear-gradient(45deg, #FFDC80, #F77737, #E1306C, #C13584, #833AB4)' }}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/31202157540" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
                      className="text-muted-foreground hover:text-primary hover:font-semibold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          {/* Membership logos & languages */}
          <div className="lg:col-span-5 mt-6 pt-6 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-4">HBM Juristen is lid van de NMv, NJV en SBB.</p>
                <div className="flex items-center gap-8">
                  <img src={logoNjv} alt="Nederlandse Juristen Vereniging" className="h-10 w-auto object-contain" />
                  <img src={logoNmv} alt="NMv" className="h-10 w-auto object-contain" />
                  <img src={logoBb} alt="SBB" className="h-10 w-auto object-contain" />
                </div>
              </div>
              <div className="flex items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">🇳🇱 Nederlands</span>
                <span className="inline-flex items-center gap-1.5">🇬🇧 English</span>
                <span className="inline-flex items-center gap-1.5">🇸🇦 العربية</span>
                <span className="inline-flex items-center gap-1.5">🇨🇳 中文</span>
              </div>
            </div>
          </div>
        </div>
      
      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-editorial py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} HBM Juristen. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary hover:font-semibold transition-colors">
                Privacyverklaring
              </Link>
              <Link to="/voorwaarden" className="hover:text-primary hover:font-semibold transition-colors">
                Algemene voorwaarden
              </Link>
              <Link to="/cookies" className="hover:text-primary hover:font-semibold transition-colors">
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
