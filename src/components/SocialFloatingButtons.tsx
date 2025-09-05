import React, { useState } from 'react';
import { Instagram, Facebook, X } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const SocialFloatingButtons = () => {
  const { config } = useConfig();
  const [isExpanded, setIsExpanded] = useState(false);

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: '#7f1d1d', // red-900
        secondary: '#f59e0b', // amber-500
        gradient: 'from-red-900 to-red-800'
      }
    : {
        primary: '#b45d6e', // sunset-base
        secondary: '#f4a261', // sunset-accent
        gradient: 'from-sunset-base to-sunset-accent'
      };

  // Ne pas afficher si pas d'URLs configurées
  if (!config.social.instagram_url && !config.social.facebook_url) {
    return null;
  }

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
      {/* Bouton principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 ${
          config.theme === 'cubain' 
            ? 'bg-red-900 hover:bg-red-950' 
            : `bg-gradient-to-br ${themeColors.gradient} hover:opacity-90`
        }`}
        style={{ 
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)' 
        }}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white transition-transform duration-300" />
        ) : (
          <div className="flex items-center space-x-1">
            <Instagram className="w-4 h-4 text-white" />
            <Facebook className="w-4 h-4 text-white" />
          </div>
        )}
      </button>

      {/* Boutons sociaux */}
      <div className={`absolute left-0 transition-all duration-500 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* Instagram */}
        {config.social.instagram_url && (
          <a
            href={config.social.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-2xl group"
            style={{ 
              animationDelay: '0.1s',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)' 
            }}
          >
            <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
          </a>
        )}

        {/* Facebook */}
        {config.social.facebook_url && (
          <a
            href={config.social.facebook_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-2xl group"
            style={{ 
              animationDelay: '0.2s',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)' 
            }}
          >
            <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
          </a>
        )}
      </div>

      {/* Tooltip */}
      {!isExpanded && (
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Suivez-nous !
        </div>
      )}
    </div>
  );
};

export default SocialFloatingButtons;