import React from 'react';
import { Star, Award, Users, ExternalLink } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

// Composant pour la rotation des images de partenaire
interface RotatingPartnerImagesProps {
  images: string[];
  partnerName: string;
  themeColors: any;
  theme: string;
}

const RotatingPartnerImages: React.FC<RotatingPartnerImagesProps> = ({ 
  images, 
  partnerName, 
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
            alt={`Partenaire ${partnerName}`}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.base}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            🤝 Partenaire privilégié
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
          key={`main-partner-${mainImageIndex}`}
          src={images[mainImageIndex]}
          alt={`Partenaire ${partnerName}`}
          className="w-full h-80 object-cover transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`absolute top-6 left-6 ${theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.base}`} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          🤝 Partenaire privilégié
        </div>
      </div>
      
      {/* Images secondaires */}
      {secondaryImages.length > 0 && (
        <div className="grid grid-cols-2 gap-6">
          {secondaryImages.slice(0, 2).map((image, index) => (
            <div 
              key={`secondary-partner-${currentLayout}-${index}`}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-float" 
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img 
                src={image}
                alt={`${index === 0 ? 'Collaboration' : 'Produits'} ${partnerName}`}
                className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-sm font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {index === 0 ? 'Collaboration' : 'Excellence'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PartnerSection = () => {
  const { config } = useConfig();
  
  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        accent: 'amber-400',
        base: 'red-900',
        solid: 'red-900',
        icons: ['🤝', '⭐', '🏆']
      }
    : {
        accent: 'sunset-accent',
        base: 'sunset-base',
        gradient: 'from-sunset-base to-sunset-light',
        icons: ['🤝', '🌟', '🎯']
      };

  const partnerFeatures = [
    {
      icon: Star,
      title: "Excellence",
      description: "Un partenaire reconnu pour son expertise et sa qualité exceptionnelle"
    },
    {
      icon: Award,
      title: "Authenticité",
      description: "Des valeurs partagées et un engagement commun vers l'excellence"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Une synergie parfaite pour offrir le meilleur à nos clients"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>{config.partner.subtitle}</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {config.partner.title}
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>{config.partner.title_highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {config.partner.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative space-y-6" key="partner-images">
            {/* Background selon le thème */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute top-4 left-4 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} text-8xl transform rotate-12`}>{themeColors.icons[0]}</div>
              <div className={`absolute bottom-8 right-8 ${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} text-6xl transform -rotate-12`}>{themeColors.icons[1]}</div>
              <div className={`absolute top-1/2 right-4 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} text-4xl`}>{themeColors.icons[2]}</div>
            </div>
            
            <RotatingPartnerImages 
              images={[
                config.partner.image1,
                config.partner.image2,
                config.partner.image3
              ].filter(Boolean)}
              partnerName={config.partner.partner_name}
              themeColors={themeColors}
              theme={config.theme}
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-pulse">
              <div className="text-center">
                <div className={`text-3xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mb-1`}>🤝</div>
                <div className="text-sm text-gray-600">Partenaire</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              {config.partner.content_title}
              <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>{config.partner.content_title_highlight}</span>
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {config.partner.content_paragraph1}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {config.partner.content_paragraph2}
            </p>

            {/* Partner Info */}
            <div className={`${config.theme === 'cubain' ? 'bg-red-50 border border-red-200' : `bg-${themeColors.base}/10 border border-${themeColors.base}/20`} rounded-2xl p-6 mb-8`}>
              <h4 className={`text-xl font-semibold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mb-3`}>
                {config.partner.partner_name}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {config.partner.partner_description}
              </p>
              {config.partner.partner_website && (
                <a 
                  href={config.partner.partner_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 ${config.theme === 'cubain' ? 'text-red-900 hover:text-red-950' : `text-${themeColors.base} hover:text-${themeColors.base}`} font-medium transition-colors`}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Visiter le site web</span>
                </a>
              )}
            </div>

            {/* CTA Button */}
            {config.partner.cta_button && (
              <div className="mb-8">
                {config.partner.cta_link ? (
                  <a 
                    href={config.partner.cta_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 ${config.theme === 'cubain' ? 'bg-red-900 hover:bg-red-950' : `bg-gradient-to-r ${themeColors.gradient} hover:opacity-90`} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <span>{config.partner.cta_button}</span>
                    <ExternalLink className="h-5 w-5" />
                  </a>
                ) : (
                  <button className={`${config.theme === 'cubain' ? 'bg-red-900 hover:bg-red-950' : `bg-gradient-to-r ${themeColors.gradient} hover:opacity-90`} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    {config.partner.cta_button}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {partnerFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-3xl p-12 text-white max-w-4xl mx-auto relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-white text-5xl transform rotate-12">🤝</div>
              <div className="absolute top-8 right-12 text-white text-4xl transform -rotate-12">⭐</div>
              <div className="absolute bottom-6 left-16 text-white text-3xl">🏆</div>
              <div className="absolute bottom-8 right-8 text-white text-4xl transform rotate-45">🌟</div>
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl font-light opacity-50 mb-4">"</div>
              <blockquote className="text-2xl font-light leading-relaxed mb-6">
                Ensemble, nous créons des expériences exceptionnelles qui reflètent nos valeurs communes d'excellence et d'authenticité.
              </blockquote>
              <cite className="text-lg opacity-90">— L'équipe {config.restaurant.name}</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;