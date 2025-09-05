import React from 'react';
import { Instagram as InstagramIcon, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const Instagram = () => {
  const { config } = useConfig();

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        base: 'red-900',
        solid: 'red-900',
        icons: ['🎺', '🌹', '🥃', '🎵']
      }
    : {
        base: 'sunset-base',
        gradient: 'from-sunset-base via-sunset-light to-sunset-accent',
        icons: ['🌴', '🌺', '🥥', '🍹']
      };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} font-semibold text-sm uppercase tracking-wider`}>Suivez-nous</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Sur
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>Instagram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières créations et l'ambiance unique de {config.restaurant.name}
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {config.instagram_posts.map((post, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={post.image} 
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  {/* Top - Instagram Icon */}
                  <div className="flex justify-end">
                    <InstagramIcon className="h-6 w-6" />
                  </div>
                  
                  {/* Bottom - Stats and Caption */}
                  <div>
                    <p className="text-sm mb-3 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-5 w-5" />
                          <span className="text-sm font-medium">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">{post.comments}</span>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-3xl p-12 max-w-3xl mx-auto text-white relative overflow-hidden`}>
            {/* Background selon le thème */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-white text-5xl transform rotate-12">{themeColors.icons[0]}</div>
              <div className="absolute top-8 right-12 text-white text-4xl transform -rotate-12">{themeColors.icons[1]}</div>
              <div className="absolute bottom-6 left-16 text-white text-3xl">{themeColors.icons[2]}</div>
              <div className="absolute bottom-8 right-8 text-white text-4xl transform rotate-45">{themeColors.icons[3]}</div>
            </div>
            <div className="relative z-10">
            <InstagramIcon className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl font-light mb-4">{config.social?.instagram || '@restaurant'}</h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Suivez-nous pour ne rien manquer de nos dernières créations culinaires 
              et de l'ambiance {config.theme === 'cubain' ? 'cubaine authentique' : 'tropicale unique'} de notre restaurant !
            </p>
            <a 
              href={config.social.instagram_url || "#"}
              target={config.social.instagram_url ? "_blank" : "_self"}
              rel={config.social.instagram_url ? "noopener noreferrer" : ""}
              className={`inline-block bg-white hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg ${config.theme === 'cubain' ? 'text-red-900' : ''}`} 
              style={config.theme !== 'cubain' ? { color: config.theme_colors[config.theme].primary } : {}}
            >
                  Suivre sur insta
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;