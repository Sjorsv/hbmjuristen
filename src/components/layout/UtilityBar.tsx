import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Linkedin, MessageCircle, Instagram, Facebook, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'NL', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'AR', name: 'العربية', flag: '🇸🇦' },
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
                <span className="text-base">{currentLang.flag}</span>
                <span className="font-medium">{currentLang.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOpen && (
                <div className="absolute top-full right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[140px] overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        currentLang.code === lang.code
                          ? 'bg-secondary text-primary font-medium'
                          : 'text-foreground hover:bg-secondary'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
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
