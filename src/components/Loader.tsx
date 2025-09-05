import React, { useEffect, useState } from 'react';
import { useConfig } from '../hooks/useConfig';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const { config } = useConfig();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: '#7f1d1d', // red-900
        secondary: '#f59e0b', // amber-500
        accent: '#d97706', // amber-600
        gradient: 'from-red-900 via-red-800 to-red-900',
        icons: ['🇨🇺', '🎺', '🌹', '🥃', '🎵', '🍷']
      }
    : {
        primary: '#b45d6e', // sunset-base
        secondary: '#f4a261', // sunset-accent
        accent: '#d4849a', // sunset-light
        gradient: 'from-sunset-base via-sunset-light to-sunset-accent',
        icons: ['🌴', '🌺', '🥥', '🌊', '🍹', '🦩']
      };

  useEffect(() => {
    // Progression linéaire sur exactement 3 secondes
    const totalDuration = 3000; // 3 secondes
    const intervalTime = 30; // Mise à jour toutes les 30ms
    const increment = 100 / (totalDuration / intervalTime);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(interval);
          // Transition de sortie immédiate après 3 secondes
          setIsVisible(false);
          // Attendre la fin de l'animation avant de signaler la fin
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className={`w-full h-full bg-gradient-to-br ${themeColors.gradient} transition-all duration-800 opacity-0 scale-110`}></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background avec dégradé thématique */}
      <div className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradient} transition-all duration-1000`}>
        {/* Animations de fond selon le thème */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cercles animés */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
            style={{ 
              background: `radial-gradient(circle, ${themeColors.secondary}40, transparent)`,
              top: '10%',
              left: '10%',
              animationDelay: '0s',
              animationDuration: '3s'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 rounded-full opacity-30 animate-pulse"
            style={{ 
              background: `radial-gradient(circle, ${themeColors.accent}40, transparent)`,
              bottom: '20%',
              right: '15%',
              animationDelay: '1s',
              animationDuration: '4s'
            }}
          ></div>
          <div 
            className="absolute w-48 h-48 rounded-full opacity-25 animate-pulse"
            style={{ 
              background: `radial-gradient(circle, ${themeColors.primary}40, transparent)`,
              top: '60%',
              left: '70%',
              animationDelay: '2s',
              animationDuration: '3.5s'
            }}
          ></div>

          {/* Icônes flottantes selon le thème */}
          {themeColors.icons.map((icon, index) => (
            <div
              key={index}
              className="absolute text-white/20 animate-float"
              style={{
                fontSize: `${3 + (index % 3)}rem`,
                top: `${15 + (index * 12)}%`,
                left: `${10 + (index * 15)}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${4 + (index % 2)}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center">
        {/* Logo avec animations */}
        <div className="mb-8">
          <div className="relative">
            {/* Cercle de fond animé */}
            <div 
              className="absolute inset-0 w-40 h-40 mx-auto rounded-full animate-spin"
              style={{
                background: `conic-gradient(from 0deg, ${themeColors.primary}, ${themeColors.secondary}, ${themeColors.accent}, ${themeColors.primary})`,
                animationDuration: '3s'
              }}
            ></div>
            
            {/* Cercle intérieur */}
            <div className="relative w-40 h-40 mx-auto bg-white rounded-full border-4 border-white shadow-2xl flex items-center justify-center animate-pulse">
              {/* Logo */}
              <img 
                src={config.theme === 'cubain' ? config.restaurant.logo_cubain : config.restaurant.logo_caraibes}
                alt={`${config.restaurant.name} Logo`}
                className="h-20 w-auto animate-sway"
                style={{ animationDuration: '4s' }}
              />
            </div>
          </div>
        </div>

        {/* Titre animé */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-2 animate-fade-in">
            Bienvenue au
          </h1>
          <h2 
            className="text-3xl lg:text-4xl font-bold animate-fade-in"
            style={{ 
              color: config.theme === 'cubain' ? themeColors.secondary : 'white',
              animationDelay: '0.5s'
            }}
          >
            {config.restaurant.name}
          </h2>
        </div>

        {/* Barre de progression */}
        <div className="w-80 mx-auto mb-6">
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(to right, ${themeColors.secondary}, ${themeColors.accent})`
              }}
            ></div>
          </div>
        </div>

        {/* Message de chargement */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                backgroundColor: themeColors.secondary,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;