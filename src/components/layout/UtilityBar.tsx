import { useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

// SVG Flag components
const FlagNL = () => (
  <svg viewBox="0 0 24 16" className="w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0">
    <rect width="24" height="5.33" fill="#AE1C28" />
    <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
    <rect y="10.67" width="24" height="5.33" fill="#21468B" />
  </svg>
);

const FlagGB = () => (
  <svg viewBox="0 0 24 16" className="w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0">
    <rect width="24" height="16" fill="#012169" />
    <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.5" />
    <path d="M12,0 V16 M0,8 H24" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="2.5" />
  </svg>
);

const FlagSA = () => (
  <svg viewBox="0 0 24 16" className="w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0">
    <rect width="24" height="16" fill="#006C35" />
    <text x="12" y="7" fill="#FFFFFF" fontSize="3" textAnchor="middle" fontFamily="serif">لا إله إلا الله</text>
    <rect x="4" y="10" width="16" height="1.5" rx="0.5" fill="#FFFFFF" />
  </svg>
);

const languages = [
  { code: 'NL', name: 'Nederlands' },
  { code: 'EN', name: 'English' },
  { code: 'AR', name: 'العربية' },
];

const UtilityBar = () => {
  const [currentLang, setCurrentLang] = useState('NL');

  const renderFlag = (code: string) => {
    switch (code) {
      case 'NL':
        return <FlagNL />;
      case 'EN':
        return <FlagGB />;
      case 'AR':
        return <FlagSA />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-editorial">
        <div className="flex items-center justify-between py-2 text-sm">
          {/* Contact info */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+31202157540" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>020-215 75 40</span>
            </a>
            <a 
              href="mailto:info@hbmjuristen.nl" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@hbmjuristen.nl</span>
            </a>
          </div>
          
          {/* Language & social */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Language flags inline */}
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`p-1 rounded transition-opacity ${
                    currentLang === lang.code
                      ? 'opacity-100 ring-1 ring-primary-foreground/50'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={lang.name}
                  title={lang.name}
                >
                  {renderFlag(lang.code)}
                </button>
              ))}
            </div>
            
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/31202157540" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
