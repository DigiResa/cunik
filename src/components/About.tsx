import React from 'react';
import { ChefHat, Heart, Users, Award, Clock, MapPin, Coffee, Utensils, Music, Palmtree } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

// Composant pour la rotation des images
interface RotatingImagesProps {
  images: string[];
  restaurantName: string;
  experienceYears: string;
  themeColors: any;
  theme: string;
}

const RotatingImages: React.FC<RotatingImagesProps> = ({ 
  images, 
  restaurantName, 
  experienceYears, 
  themeColors, 
  theme 
}) => {
  const [currentLayout, setCurrentLayout] = React.useState(0);
  
  // Rotation toutes les 5 secondes
  React.useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentLayout(prev => (prev + 1) % images.length);
    }, 5000);
     
    return () => clearInterval(interval);
  }, [images.length]);
  
  if (images.length === 0) {
    return (
      <div className="space-y-4">
        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">Aucune image disponible</span>
        </div>
      </div>
    );
  }
  
  if (images.length === 1) {
    return (
      <div className="space-y-4">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={images[0]}
            alt={`Intérieur du restaurant ${restaurantName}`}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.base}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            ✨ {experienceYears} ans d'expérience
          </div>
        </div>
      </div>
    );
  }
  
  // Déterminer quelle image est principale et lesquelles sont secondaires
  const mainImageIndex = currentLayout % images.length;
  const secondaryImages = images.filter((_, index) => index !== mainImageIndex);
  
  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-1000">
        <img 
          key={`main-${mainImageIndex}`}
          src={images[mainImageIndex]}
          alt={`Intérieur du restaurant ${restaurantName}`}
          className="w-full h-64 object-cover transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.base}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          ✨ {experienceYears} ans d'expérience
        </div>
      </div>
      
      {/* Images secondaires */}
      {secondaryImages.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {secondaryImages.slice(0, 3).map((image, index) => (
            <div 
              key={`secondary-${currentLayout}-${index}`}
              className="relative overflow-hidden rounded-xl shadow-md group transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:-translate-y-1" 
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img 
                src={image}
                alt={`${index === 0 ? 'Ambiance' : index === 1 ? 'Terrasse' : 'Cuisine'} ${restaurantName}`}
                className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-xs font-semibold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {index === 0 ? 'Ambiance' : index === 1 ? 'Terrasse' : 'Cuisine'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const About = () => {
  const { config } = useConfig();
  
  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        accent: 'amber-400',
        base: 'red-900',
        solid: 'red-900',
        icons: ['🎺', '🌹', '🥃']
      }
    : {
        accent: 'sunset-accent',
        base: 'sunset-base',
        gradient: 'from-sunset-base to-sunset-light',
        icons: ['🌴', '🌺', '🥭']
      };

  return (
    <section id="restaurant" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>{config.about.subtitle}</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {config.about.title.split(' ').slice(0, -1).join(' ')}
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent`}`}>{config.about.title.split(' ').slice(-1)}</span>
          </h2>
          <div className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-4">{config.about.description}</p>
          </div>
        </div>

        {/* 3 sections côte à côte */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Section Service au Comptoir */}
          <div className={`${config.theme === 'cubain' ? 'bg-red-50 border border-red-200' : `bg-${themeColors.base}/10 border border-${themeColors.base}/20`} rounded-2xl p-6 relative overflow-hidden h-full flex flex-col`}>
            {/* Background icons */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute top-4 right-4 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} text-6xl transform rotate-12`}>☕</div>
              <div className={`absolute bottom-4 left-4 ${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} text-4xl transform -rotate-12`}>🍹</div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} w-12 h-12 rounded-2xl flex items-center justify-center`}>
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{config.about.service_title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                {config.about.service_content}
              </p>
            </div>
          </div>

          {/* Section Expérience */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden h-full flex flex-col">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute top-4 right-4 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} text-6xl transform rotate-12`}>🌴</div>
              <div className={`absolute bottom-4 left-4 ${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} text-4xl transform -rotate-12`}>🎵</div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} w-12 h-12 rounded-2xl flex items-center justify-center`}>
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{config.about.experience_title}</h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm flex-1">
                <p className="flex-1">{config.about.experience_content}</p>
                <p className={`font-medium ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>
                  {config.about.experience_highlight}
                </p>
              </div>
            </div>
          </div>

          {/* Section Cuisine */}
          <div className={`${config.theme === 'cubain' ? 'bg-amber-50 border border-amber-200' : `bg-${themeColors.accent}/10 border border-${themeColors.accent}/20`} rounded-2xl p-6 relative overflow-hidden h-full flex flex-col`}>
            {/* Background icons */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute top-4 right-4 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} text-6xl transform rotate-12`}>👨‍🍳</div>
              <div className={`absolute bottom-4 left-4 ${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} text-4xl transform -rotate-12`}>🍤</div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} w-12 h-12 rounded-2xl flex items-center justify-center`}>
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{config.about.cuisine_title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                {config.about.cuisine_content}
              </p>
            </div>
          </div>
        </div>

        {/* Section Adresse en bas */}
        <div className={`${config.theme === 'cubain' ? 'bg-red-50 border border-red-200' : `bg-${themeColors.base}/10 border border-${themeColors.base}/20`} rounded-2xl p-6 max-w-3xl mx-auto mb-16`}>
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className={`h-6 w-6 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`} />
            <h4 className="text-lg font-semibold text-gray-900">Au cœur de Nîmes</h4>
          </div>
          <p className="text-gray-600 mb-4">
            Idéalement situé à {config.restaurant.address}, notre restaurant vous accueille 
            dans un cadre exceptionnel.
          </p>
          <div className={`flex items-center space-x-2 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} font-medium`}>
            <Clock className="h-4 w-4" />
            <span className="text-sm">Ouvert {config.hours.open_days.toLowerCase()}</span>
          </div>
        </div>

        {/* Ambiance & Cadre - Section mise en avant */}
        <div className="text-center">
          <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-3xl p-12 text-white max-w-5xl mx-auto relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-white text-6xl transform rotate-12">🌴</div>
              <div className="absolute top-8 right-12 text-white text-5xl transform -rotate-12">🌅</div>
              <div className="absolute bottom-6 left-16 text-white text-4xl">🍹</div>
              <div className="absolute bottom-8 right-8 text-white text-5xl transform rotate-45">🎵</div>
              <div className="absolute top-1/2 left-1/4 text-white text-4xl transform -rotate-45">🌺</div>
              <div className="absolute top-1/3 right-1/4 text-white text-3xl transform rotate-12">☀️</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="text-4xl">✨</div>
                <h3 className="text-3xl font-light">{config.about.ambiance_title}</h3>
                <div className="text-4xl">✨</div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>{config.about.ambiance_content}</p>
                <p>{config.about.ambiance_subtitle}</p>
                <p className="text-2xl font-light text-amber-200 mt-8">
                  {config.about.ambiance_conclusion}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  { icon: '🏖️', title: 'Terrasse plage', desc: 'Allures de bord de mer' },
                  { icon: '🌅', title: 'Coucher de soleil', desc: 'Lumières tamisées' },
                  { icon: '🎨', title: 'Décor coloré', desc: 'Inspiration Caraïbes' },
                  { icon: '🎶', title: 'Playlist festive', desc: 'Ambiance tropicale' }
                ].map((highlight, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{highlight.icon}</div>
                    <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                    <p className="text-sm text-white/80">{highlight.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;