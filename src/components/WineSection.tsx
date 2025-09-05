import React from 'react';
import { Wine, Award, Leaf, Heart } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

// Composant pour la rotation des images de vins
interface RotatingWineImagesProps {
  images: string[];
  restaurantName: string;
  themeColors: any;
  theme: string;
}

const RotatingWineImages: React.FC<RotatingWineImagesProps> = ({ 
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
            alt={`Cave à vins ${restaurantName}`}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.primary}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            🍷 Cave d'exception
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
          key={`main-wine-${mainImageIndex}`}
          src={images[mainImageIndex]}
          alt={`Cave à vins ${restaurantName}`}
          className="w-full h-80 object-cover transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.primary}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          🍷 Cave d'exception
        </div>
      </div>
      
      {/* Images secondaires */}
      {secondaryImages.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {secondaryImages.slice(0, 2).map((image, index) => (
            <div 
              key={`secondary-wine-${currentLayout}-${index}`}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-float" 
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img 
                src={image}
                alt={`${index === 0 ? 'Sélection de vins' : 'Dégustation'} ${restaurantName}`}
                className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-sm font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {index === 0 ? 'Sélection premium' : 'Dégustation'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const WineSection = () => {
  const { config } = useConfig();
  
  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: 'red-900',
        secondary: 'amber-400',
        solid: 'red-900',
        accent: 'amber-400',
        icons: ['🍷', '🍇', '🏆']
      }
    : {
        primary: 'sunset-base',
        secondary: 'sunset-accent',
        gradient: 'from-sunset-base to-sunset-accent',
        accent: 'sunset-accent',
        icons: ['🍷', '🍇', '🏆']
      };

  const wineFeatures = [
    {
      icon: Wine,
      title: "Sélection Caves 41",
      description: "Partenariat exclusif avec des vignerons passionnés du Languedoc et du Roussillon"
    },
    {
      icon: Award,
      title: "Grands Vins Reconnus",
      description: "Cuvées primées nationalement et internationalement, mais aussi pépites confidentielles"
    },
    {
      icon: Leaf,
      title: "Label Bio",
      description: "La majorité de notre sélection respecte l'environnement avec le label bio"
    },
    {
      icon: Heart,
      title: "Recommandés les Yeux Fermés",
      description: "Chaque vin est choisi avec amour et passion par notre équipe"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>Cave à Vins</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Les Grands
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>Vins Régionaux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Au C Unik, le vin est l'objet de toutes les attentions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Sélection Exclusive</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nous avons sélectionné, pour vous, avec <strong className={`text-${themeColors.primary}`}>Caves 41</strong>, 
                    auprès des vignerons, des vins du <strong>Languedoc et du Roussillon</strong>.
                  </p>
                  <p>
                    Plus que ça, des <strong className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>Grands vins !</strong>
                  </p>
                  <p>
                    Certains reconnus <strong>nationalement et internationalement</strong> tandis que d'autres 
                    plus confidentiels, mais travaillés avec un tel amour, que nous les recommandons 
                    <strong className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}> les yeux fermés</strong>.
                  </p>
                  <div className={`${config.theme === 'cubain' ? 'bg-amber-100' : `bg-${themeColors.accent}/20`} rounded-2xl p-4 mt-6`}>
                    <p className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} font-semibold text-center`}>
                      🌿 Cerise sur le gâteau, la majorité de nos vins ont le label bio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className={`${config.theme === 'cubain' ? 'bg-red-900 hover:bg-red-950' : `bg-gradient-to-r ${themeColors.gradient} hover:opacity-90`} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}>
              Découvrir notre carte des vins
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <RotatingWineImages 
              images={[
                config.wine.image1 || "./CK-HD-30-scaled.jpg",
                config.wine.image2,
                config.wine.image3
              ].filter(Boolean)}
              restaurantName={config.restaurant.name}
              themeColors={themeColors}
              theme={config.theme}
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className={`text-3xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-1`}>100+</div>
                <div className="text-sm text-gray-600">Références</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wineFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-3xl p-12 text-white max-w-4xl mx-auto relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-white text-5xl transform rotate-12">🍷</div>
              <div className="absolute top-8 right-12 text-white text-4xl transform -rotate-12">🍇</div>
              <div className="absolute bottom-6 left-16 text-white text-3xl">🏆</div>
              <div className="absolute bottom-8 right-8 text-white text-4xl transform rotate-45">🌿</div>
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl font-light opacity-50 mb-4">"</div>
              <blockquote className="text-2xl font-light leading-relaxed mb-6">
                Chaque bouteille raconte une histoire, chaque gorgée révèle la passion du vigneron. 
                Laissez-nous vous guider dans cette découverte œnologique exceptionnelle.
              </blockquote>
              <cite className="text-lg opacity-90">— L'équipe C Unik, passionnés de grands vins</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineSection;