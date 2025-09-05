import React, { useState } from 'react';
import { Palette, Settings, X } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const DevThemeSwitcher = () => {
  const { config, updateConfig } = useConfig();
  const [isExpanded, setIsExpanded] = useState(false);

  // Ne pas afficher si le mode DEV n'est pas activé
  if (!config.dev_mode) {
    return null;
  }

  const handleThemeChange = (theme: 'caraibes' | 'cubain') => {
    updateConfig({
      ...config,
      theme
    });
    // Sauvegarder le thème dans localStorage pour persistance
    localStorage.setItem('siteConfig', JSON.stringify({
      ...config,
      theme
    }));
    setIsExpanded(false);
  };

  const themes = [
    {
      id: 'caraibes' as const,
      name: 'Caraïbes',
      emoji: '🌴',
      colors: config.theme_colors.caraibes,
      description: 'Tropical & coloré'
    },
    {
      id: 'cubain' as const,
      name: 'Cubain',
      emoji: '🥃',
      colors: config.theme_colors.cubain,
      description: 'Lounge & sophistiqué'
    },
    {
      id: 'evenementiel' as const,
      name: 'Événementiel',
      emoji: '🎉',
      colors: config.theme_colors.evenementiel,
      description: 'Spécialisé événements'
    }
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Bouton principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 ${
          config.theme === 'cubain' 
            ? 'bg-red-900 hover:bg-red-950' 
            : 'bg-gradient-to-br from-sunset-base to-sunset-accent hover:opacity-90'
        }`}
        style={{ 
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)' 
        }}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white transition-transform duration-300" />
        ) : (
          <div className="flex items-center space-x-1">
            <Palette className="w-5 h-5 text-white" />
            <Settings className="w-4 h-4 text-white" />
          </div>
        )}
      </button>

      {/* Panel de sélection */}
      <div className={`absolute top-16 right-0 transition-all duration-500 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 min-w-80">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">DEV</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Mode Développement</h3>
              <p className="text-xs text-gray-500">Sélecteur de thème</p>
            </div>
          </div>

          <div className="space-y-3">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  config.theme === theme.id
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{theme.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{theme.name}</h4>
                      <p className="text-xs text-gray-500">{theme.description}</p>
                    </div>
                  </div>
                  {config.theme === theme.id && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <div 
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: theme.colors.primary }}
                  ></div>
                  <div 
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: theme.colors.secondary }}
                  ></div>
                  <div 
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: theme.colors.accent }}
                  ></div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Thème actuel: <strong>{config.theme === 'cubain' ? 'Cubain' : 'Caraïbes'}</strong></span>
              <span>🔧 Mode DEV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {!isExpanded && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Mode DEV - Changer le thème
        </div>
      )}
    </div>
  );
};

export default DevThemeSwitcher;