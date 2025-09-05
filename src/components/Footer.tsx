import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const Footer = () => {
  const { config } = useConfig();
  
  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' || config.theme === 'evenementiel'
    ? {
        accent: 'amber-400',
        primary: 'red-900',
        secondary: 'amber-400',
        solid: 'red-900'
      }
    : {
        accent: 'sunset-accent',
        primary: 'sunset-base',
        secondary: 'sunset-accent',
        gradient: 'from-sunset-base to-sunset-accent'
      };

  return (
    <footer className={`${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-900' : 'bg-gradient-to-br from-sunset-dark via-sunset-base to-sunset-light'} text-white`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src={config.theme === 'cubain' || config.theme === 'evenementiel' ? config.restaurant.logo_cubain : config.restaurant.logo_caraibes}
              alt={`${config.restaurant.name} Logo`}
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
              {config.restaurant.tagline}. {config.restaurant.description}.
            </p>
            <div className="flex space-x-4">
              <a 
                href={config.social.instagram_url || "#"} 
                target={config.social.instagram_url ? "_blank" : "_self"}
                rel={config.social.instagram_url ? "noopener noreferrer" : ""}
                className={`bg-gray-800 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'hover:bg-amber-400' : `hover:bg-${themeColors.accent}`} p-3 rounded-full transition-colors duration-300`}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={config.social.facebook_url || "#"} 
                target={config.social.facebook_url ? "_blank" : "_self"}
                rel={config.social.facebook_url ? "noopener noreferrer" : ""}
                className={`bg-gray-800 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'hover:bg-amber-400' : `hover:bg-${themeColors.accent}`} p-3 rounded-full transition-colors duration-300`}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-xl font-semibold ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`} mb-6`}>{config.footer.contact_title}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className={`h-5 w-5 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`} mt-0.5 flex-shrink-0`} />
                <div className="text-gray-300">
                  <p>{config.restaurant.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`h-5 w-5 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`} flex-shrink-0`} />
                <p className="text-gray-300">{config.restaurant.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`} flex-shrink-0`} />
                <p className="text-gray-300">{config.restaurant.email}</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className={`text-xl font-semibold ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`} mb-6`}>
              {config.theme === 'evenementiel' ? 'Disponibilité' : config.footer.hours_title}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className={`h-5 w-5 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`} flex-shrink-0`} />
                <div className="text-gray-300">
                  {config.theme === 'evenementiel' ? (
                    <>
                      <p className="font-medium">7j/7 pour vos événements</p>
                      <p className="text-sm">Flexibilité horaire totale</p>
                      <p className="text-sm text-gray-400 mt-2">Adaptation à vos besoins</p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium">{config.hours.open_days}</p>
                      <p className="text-sm">{config.hours.lunch}</p>
                      <p className="text-sm">{config.hours.dinner}</p>
                      <p className="text-sm text-gray-400 mt-2">{config.hours.closed}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className={`mt-6 p-4 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-amber-400/20' : `bg-${themeColors.accent}/20`} rounded-xl`}>
              <p className={`text-sm text-center ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`}`}>
                {config.theme === 'evenementiel' ? 'Devis personnalisé gratuit' : config.footer.reservation_text}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`mt-12 pt-8 border-t ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'border-red-800' : 'border-white/20'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {config.footer.copyright.replace('{restaurant_name}', config.restaurant.name)}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/mentions-legales" className={`${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'hover:text-amber-400' : `hover:text-${themeColors.accent}`} transition-colors`}>{config.footer.legal_link}</a>
              <a href="/politique-confidentialite" className={`${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'hover:text-amber-400' : `hover:text-${themeColors.accent}`} transition-colors`}>{config.footer.privacy_link}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;