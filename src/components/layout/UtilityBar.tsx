import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Linkedin, MessageCircle, Instagram, Facebook, ChevronDown } from 'lucide-react';

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
  </svg>
);

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

const languages = [
  { code: 'NL', name: 'Nederlands' },
  { code: 'EN', name: 'English' },
  { code: 'AR', name: 'العربية' },
];

const UtilityBar = () => {
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            {/* Language dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-primary-light transition-colors"
              >
                {renderFlag(currentLang.code)}
                <span className="font-medium text-sm">{currentLang.code}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOpen && (
                <div className="absolute top-full right-0 mt-1 bg-background rounded-lg shadow-lg z-50 min-w-[150px] py-1 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        currentLang.code === lang.code
                          ? 'text-primary font-medium'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {renderFlag(lang.code)}
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
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
