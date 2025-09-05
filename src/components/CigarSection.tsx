import React from 'react';
import { Flame, Star, Award, Users } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

// Composant pour la rotation des images de cigares
interface RotatingCigarImagesProps {
  images: string[];
  restaurantName: string;
  themeColors: any;
  theme: string;
}

const RotatingCigarImages: React.FC<RotatingCigarImagesProps> = ({ 
  images, 
  restaurantName, 
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
        <div className="w-full h-80 bg-gray-200 rounded-3xl flex items-center justify-center">
          <span className="text-gray-500">Aucune image disponible</span>
        </div>
      </div>
    );
  }
  
  if (images.length === 1) {
    return (
      <div className="space-y-4">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img 
            src={images[0]}
            alt={`Fumoir et cigares ${restaurantName}`}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.primary}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            🚬 Fumoir climatisé
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
      <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000">
        <img 
          key={`main-cigar-${mainImageIndex}`}
          src={images[mainImageIndex]}
          alt={`Fumoir et cigares ${restaurantName}`}
          className="w-full h-80 object-cover transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.primary}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          🚬 Fumoir climatisé
        </div>
      </div>
      
      {/* Images secondaires */}
      {secondaryImages.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {secondaryImages.slice(0, 2).map((image, index) => (
            <div 
              key={`secondary-cigar-${currentLayout}-${index}`}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-float" 
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img 
                src={image}
                alt={`${index === 0 ? 'Sélection de cigares' : 'Cave climatisée'} ${restaurantName}`}
                className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-sm font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {index === 0 ? 'Sélection cubaine' : 'Cave climatisée'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CigarSection = () => {
  const { config } = useConfig();
  
  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: 'red-900',
        secondary: 'amber-400',
        solid: 'red-900',
        accent: 'amber-400',
        icons: ['🚬', '🇨🇺', '🏆']
      }
    : {
        primary: 'sunset-base',
        secondary: 'sunset-accent',
        gradient: 'from-sunset-base to-sunset-accent',
        accent: 'sunset-accent',
        icons: ['🚬', '🌿', '⭐']
      };

  const cigarFeatures = [
    {
      icon: Award,
      title: "Cigares Cubains",
      description: "Sélection authentique des meilleures manufactures de Cuba"
    },
    {
      icon: Star,
      title: "27 Références",
      description: "Une cave exceptionnelle pour tous les goûts et toutes les occasions"
    },
    {
      icon: Flame,
      title: "Arômes Complexes",
      description: "Corsés, légers, épicés, aériens... le même plaisir que le vin"
    },
    {
      icon: Users,
      title: "Tous Niveaux",
      description: "Que vous soyez habitué ou amateur, nous vous guidons"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>Fumoir</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Notre fumoir &
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>Nos Cigares</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Les aficionados comparent souvent le cigare au vin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <RotatingCigarImages 
              images={[
                config.cigar.image1 || "./Cave-à-Cigares-2.jpg",
                config.cigar.image2,
                config.cigar.image3
              ].filter(Boolean)}
              restaurantName={config.restaurant.name}
              themeColors={themeColors}
              theme={config.theme}
            />
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className={`text-3xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-1`}>27</div>
                <div className="text-sm text-gray-600">Références</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className={`${config.theme === 'cubain' ? 'bg-red-50' : `bg-${themeColors.primary}/10`} rounded-3xl p-8 mb-8 relative overflow-hidden`}>
              {/* Background icons */}
              <div className="absolute inset-0 opacity-5">
                <div className={`absolute top-4 right-4 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} text-6xl transform rotate-12`}>{themeColors.icons[0]}</div>
                <div className={`absolute bottom-4 left-4 ${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} text-4xl transform -rotate-12`}>{themeColors.icons[1]}</div>
                <div className={`absolute top-1/2 left-1/2 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} text-3xl`}>{themeColors.icons[2]}</div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">L'Art du Cigare</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>Corsés, légers, épicés, aériens…</strong> 
                    le même plaisir des arômes.
                  </p>
                  <p>
                    <strong>Habitués ou amateurs</strong>, découvrez nos <strong className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>cigares cubains</strong> 
                    parmi les <strong>27 références</strong> de notre cave.
                  </p>
                  <div className={`${config.theme === 'cubain' ? 'bg-amber-100' : `bg-${themeColors.accent}/20`} rounded-2xl p-4 mt-6`}>
                    <p className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} font-semibold text-center`}>
                      🇨🇺 Authentiques cigares de Cuba dans notre fumoir climatisé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-1`}>100%</div>
                <div className="text-sm text-gray-600">Cubains</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-1`}>Premium</div>
                <div className="text-sm text-gray-600">Qualité</div>
              </div>
            </div>

            <button className={`${config.theme === 'cubain' ? 'bg-red-900 hover:bg-red-950' : `bg-gradient-to-r ${themeColors.gradient} hover:opacity-90`} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}>
              Découvrir notre sélection
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cigarFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            Cigare & Vin :
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>Une Passion Commune</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className={`w-20 h-20 ${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-3xl">🍷</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Le Vin</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Terroir et millésime</li>
                <li>• Arômes complexes</li>
                <li>• Dégustation ritualisée</li>
                <li>• Accord mets et vins</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className={`w-20 h-20 ${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-3xl">🚬</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Le Cigare</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Origine et manufacture</li>
                <li>• Palette aromatique</li>
                <li>• Rituel de dégustation</li>
                <li>• Accord cigare et spiritueux</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-3xl p-12 text-white max-w-4xl mx-auto relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-white text-5xl transform rotate-12">🚬</div>
              <div className="absolute top-8 right-12 text-white text-4xl transform -rotate-12">🇨🇺</div>
              <div className="absolute bottom-6 left-16 text-white text-3xl">🏆</div>
              <div className="absolute bottom-8 right-8 text-white text-4xl transform rotate-45">⭐</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-light mb-4">Découvrez l'art du cigare cubain</h3>
              <p className="text-xl opacity-90 mb-8">
                Dans notre fumoir climatisé, savourez un moment d'exception
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`bg-white hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg ${config.theme === 'cubain' ? 'text-red-900' : ''}`} style={config.theme !== 'cubain' ? { color: config.theme_colors[config.theme].primary } : {}}>
                  Réserver une table
                </button>
                <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Voir notre sélection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CigarSection;