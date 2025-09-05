import React from 'react';
import { Users, Heart, Briefcase, Calendar, Clock, Star } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

// Composant pour la rotation des images d'événements
interface RotatingEventImagesProps {
  images: string[];
  restaurantName: string;
  themeColors: any;
  theme: string;
}

const RotatingEventImages: React.FC<RotatingEventImagesProps> = ({ 
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
      <div className="space-y-6">
        <div className="w-full h-80 bg-gray-200 rounded-3xl flex items-center justify-center">
          <span className="text-gray-500">Aucune image disponible</span>
        </div>
      </div>
    );
  }
  
  if (images.length === 1) {
    return (
      <div className="space-y-6">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img 
            src={images[0]}
            alt={`Espace privatisable ${restaurantName}`}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.base}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            🏢 Espace modulable
          </div>
        </div>
      </div>
    );
  }
  
  // Déterminer quelle image est principale et lesquelles sont secondaires
  const mainImageIndex = currentLayout % images.length;
  const secondaryImages = images.filter((_, index) => index !== mainImageIndex);
  
  return (
    <div className="space-y-6">
      {/* Image principale */}
      <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000">
        <img 
          key={`main-event-${mainImageIndex}`}
          src={images[mainImageIndex]}
          alt={`Espace privatisable ${restaurantName}`}
          className="w-full h-80 object-cover transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.base}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          🏢 Espace modulable
        </div>
      </div>
      
      {/* Images secondaires */}
      {secondaryImages.length > 0 && (
        <div className="grid grid-cols-2 gap-6">
          {secondaryImages.slice(0, 2).map((image, index) => (
            <div 
              key={`secondary-event-${currentLayout}-${index}`}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-float" 
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img 
                src={image}
                alt={`${index === 0 ? 'Configuration cocktail' : 'Configuration dîner'} ${restaurantName}`}
                className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-sm font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {index === 0 ? 'Configuration cocktail' : 'Configuration dîner'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Events = () => {
  const { config } = useConfig();

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        accent: 'amber-400',
        base: 'red-900',
        dark: 'red-950',
        solid: 'red-900',
        icons: ['🥃', '🎺', '🌟']
      }
    : {
        accent: 'sunset-accent',
        base: 'sunset-base',
        dark: 'sunset-dark',
        gradient: 'from-sunset-base to-sunset-accent',
        icons: ['🌴', '🌺', '🍹']
      };

  const eventTypes = [
    {
      icon: Briefcase,
      title: "Événements d'Entreprise",
      subtitle: "Séminaires & Réceptions",
      description: "Espace modulable jusqu'à 80 personnes avec équipements audiovisuels",
      features: ["Salon privé", "Menu personnalisé", "Service dédié", "Parking privé"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Mariages & Célébrations",
      subtitle: "Moments d'exception",
      description: "Créez des souvenirs inoubliables dans notre cadre tropical unique",
      features: ["Décoration sur mesure", "Menu gastronomique", "Coordination complète", "Terrasse privée"],
      color: config.theme === 'cubain' ? themeColors.solid : themeColors.gradient
    },
    {
      icon: Users,
      title: "Réceptions Privées",
      subtitle: "Anniversaires & Fêtes",
      description: "Privatisez notre espace pour vos événements personnels",
      features: ["Ambiance tropicale", "Cocktails signature", "Animation possible", "Service personnalisé"],
      color: config.theme === 'cubain' ? themeColors.solid : themeColors.gradient
    }
  ];

  return (
    <section id="privatisation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>Privatisation</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Vos événements
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>d'exception</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Privatisez {config.restaurant.name} pour créer des moments inoubliables dans un cadre {config.theme === 'cubain' ? 'cubain authentique' : 'tropical unique'}
          </p>
        </div>

        {/* Event Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${event.color}`} p-8 h-full text-white relative`}>
                {/* Pattern selon le thème */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-white text-4xl transform rotate-12">{themeColors.icons[0]}</div>
                  <div className="absolute bottom-4 left-4 text-white text-3xl transform -rotate-12">{themeColors.icons[1]}</div>
                  <div className="absolute top-1/2 left-1/2 text-white text-2xl">{themeColors.icons[2]}</div>
                </div>

                <div className="relative z-10">
                  <event.icon className="h-12 w-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-lg opacity-90 mb-6">{event.subtitle}</p>
                  <p className="opacity-80 mb-8 leading-relaxed">{event.description}</p>

                  <ul className="space-y-3 mb-8">
                    {event.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Star className="h-4 w-4 mr-3 fill-current" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-white text-gray-800 hover:bg-gray-50 py-3 px-6 rounded-full font-semibold transition-colors">
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capacity & Info */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Un espace
                <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>entièrement modulable</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre restaurant peut accueillir jusqu'à 80 personnes en configuration cocktail 
                ou 60 personnes en dîner assis. L'espace peut être entièrement privatisé selon vos besoins.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mb-2`}>80</div>
                  <div className="text-sm text-gray-600">Personnes debout</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mb-2`}>60</div>
                  <div className="text-sm text-gray-600">Personnes assises</div>
                </div>
              </div>

              <button className={`${config.theme === 'cubain' ? 'bg-red-900 hover:bg-red-950' : `bg-${themeColors.base} hover:bg-${themeColors.dark}`} text-white px-8 py-3 rounded-full font-semibold transition-colors`}>
                Planifier votre événement
              </button>
            </div>

            <RotatingEventImages 
              images={[
                config.events.image1 || config.about.image,
                config.events.image2,
                config.events.image3
              ].filter(Boolean)}
              restaurantName={config.restaurant.name}
              themeColors={themeColors}
              theme={config.theme}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-3xl p-12 text-white`}>
            <h3 className="text-3xl font-light mb-4">Prêt à organiser votre événement ?</h3>
            <p className="text-xl opacity-90 mb-8">Contactez-nous pour discuter de votre projet</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;