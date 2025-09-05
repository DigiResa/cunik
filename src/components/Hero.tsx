import React from 'react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const Hero = () => {
  const { config } = useConfig();
  
  const openReservationWidget = () => {
    if (config.theme === 'evenementiel') {
      // Rediriger vers la section contact pour l'événementiel
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('digiresa-iframe-container')?.classList.add('show');
    }
  };

  // Utiliser les couleurs personnalisées du thème
  const currentTheme = config.theme_colors[config.theme];
  const icons = config.theme === 'cubain' || config.theme === 'evenementiel' ? 
                (config.theme === 'evenementiel' ? ['🎉', '💍', '🥂', '🎊', '🎈', '🎭'] : ['🎺', '🌹', '🥃', '🎵', '🍹', '🇨🇺']) : 
                ['🌴', '🌺', '🥥', '🌊', '🍹', '🦩'];

  // Sélectionner les textes selon le thème
  const heroTexts = {
    title: config.theme === 'cubain' || config.theme === 'evenementiel' ? 
           (config.theme === 'evenementiel' ? config.hero.title_evenementiel : config.hero.title_cubain) : 
           config.hero.title_caraibes,
    subtitle: config.theme === 'cubain' || config.theme === 'evenementiel' ? 
              (config.theme === 'evenementiel' ? config.hero.subtitle_evenementiel : config.hero.subtitle_cubain) : 
              config.hero.subtitle_caraibes,
    description: config.theme === 'cubain' || config.theme === 'evenementiel' ? 
                 (config.theme === 'evenementiel' ? config.hero.description_evenementiel : config.hero.description_cubain) : 
                 config.hero.description_caraibes,
    subdescription: config.theme === 'cubain' || config.theme === 'evenementiel' ? 
                    (config.theme === 'evenementiel' ? config.hero.subdescription_evenementiel : config.hero.subdescription_cubain) : 
                    config.hero.subdescription_caraibes
  };
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={config.theme === 'cubain' || config.theme === 'evenementiel' ? 
               (config.theme === 'evenementiel' ? config.hero.image_evenementiel : config.hero.image_cubain) : 
               config.hero.image_caraibes}
          alt={config.restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        {/* Illustrations overlay selon le thème */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-white text-6xl transform rotate-12">{icons[0]}</div>
          <div className="absolute top-20 right-20 text-white text-4xl transform -rotate-12">{icons[1]}</div>
          <div className="absolute bottom-32 left-16 text-white text-5xl transform rotate-45">{icons[2]}</div>
          <div className="absolute bottom-20 right-32 text-white text-3xl">{icons[3]}</div>
          <div className="absolute top-1/2 left-1/4 text-white text-4xl transform -rotate-45">{icons[4]}</div>
          <div className="absolute top-1/3 right-1/3 text-white text-3xl transform rotate-12">{icons[5]}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            {heroTexts.title}
            <span 
              className={`block font-bold ${
                config.theme === 'cubain' || config.theme === 'evenementiel'
                  ? 'text-amber-400' 
                  : 'bg-gradient-to-r from-sunset-accent to-sunset-light bg-clip-text text-transparent'
              }`}
            >{heroTexts.subtitle}</span>
          </h1>

          {config.theme === 'evenementiel' ? (
            <div className="mb-8">
              <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-4">
                <span className="text-amber-400 font-semibold">C Unik</span> est un lieu unique, un espace entièrement dédié à l'organisation de vos événements.
              </p>
              <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
                {heroTexts.description}
                <span className="block mt-2">{heroTexts.subdescription}</span>
              </p>
            </div>
          ) : (
            <p className="text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              {heroTexts.description}
              <span className="block mt-2">{heroTexts.subdescription}</span>
            </p>
          )}

         
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href={config.theme === 'evenementiel' ? '#evjf' : '#restaurant'} 
              className={`group text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl ${
                config.theme === 'cubain' || config.theme === 'evenementiel'
                  ? 'bg-red-900 hover:bg-red-950' 
                  : 'bg-gradient-to-r from-sunset-base to-sunset-accent hover:from-sunset-dark hover:to-sunset-base'
              }`}
            >
              <span>{config.theme === 'evenementiel' ? 'Découvrir nos services' : config.hero.cta_primary}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={openReservationWidget}
              className={`backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-xl ${
                config.theme === 'caraibes' 
                  ? 'bg-sunset-accent/20 hover:bg-sunset-accent/30 border-sunset-accent/50 hover:border-sunset-accent' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {config.theme === 'evenementiel' ? 'Demander un devis' : config.hero.cta_secondary}
            </button>
          </div>

          {/* Info Cards */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;