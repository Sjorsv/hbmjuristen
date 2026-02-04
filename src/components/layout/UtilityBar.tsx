import { Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';

const UtilityBar = () => {
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
            {/* Language switch */}
            <div className="flex items-center gap-1 text-sm">
              <button className="px-1.5 py-0.5 font-medium hover:opacity-80 transition-opacity">
                NL
              </button>
              <span className="opacity-50">/</span>
              <button className="px-1.5 py-0.5 opacity-70 hover:opacity-100 transition-opacity">
                EN
              </button>
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
