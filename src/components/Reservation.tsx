import React from 'react';
import { Phone, MapPin, Star, Clock, Calendar, Users } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const Reservation = () => {
  const { config } = useConfig();
  
  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        accent: 'amber-400',
        base: 'red-900',
        solid: 'red-900'
      }
    : {
        accent: 'sunset-accent',
        base: 'sunset-base',
        gradient: 'from-sunset-base to-sunset-accent'
      };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>Réservation</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Réservez votre
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>table</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Garantissez-vous une place dans l'ambiance {config.theme === 'cubain' ? 'cubaine authentique' : 'tropicale unique'} de {config.restaurant.name}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Reservation Iframe */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} p-6 text-white`}>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-8 w-8" />
                    <div>
                      <h3 className="text-2xl font-light">Réservation en ligne</h3>
                      <p className="opacity-90">Choisissez votre créneau idéal</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <iframe
                    src="https://app.digiresa.com/reserver/cunik?q=website"
                   className="w-full h-[970px] border-0 rounded-2xl"
                    title={`Réservation ${config.restaurant.name}`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="space-y-8 h-full">
              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex-1">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Informations</h3>
                
                {/* Rating */}
                <div className={`${config.theme === 'cubain' ? 'bg-red-50' : `bg-${themeColors.base}/10`} rounded-2xl p-6 mb-8`}>
                  <div className="flex items-center space-x-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 fill-current ${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`}`} />
                    ))}
                    <span className="font-semibold text-gray-800 ml-2">{config.restaurant.rating}/5</span>
                  </div>
                  <p className="text-sm text-gray-600">"Meilleur restaurant {config.theme === 'cubain' ? 'cubain' : 'tropical'} de Nîmes"</p>
                  <p className="text-xs text-gray-500 mt-1">{config.restaurant.reviews} avis Google</p>
                </div>
                
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className={`h-6 w-6 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Horaires</h4>
                      <p className="text-gray-600 mb-1">{config.hours.open_days}</p>
                      <p className="text-sm text-gray-500">{config.hours.lunch} / {config.hours.dinner}</p>
                      <p className="text-xs text-gray-400 mt-1">{config.hours.closed}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className={`h-6 w-6 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                      <p className="text-gray-600">{config.restaurant.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className={`h-6 w-6 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Téléphone</h4>
                      <a 
                        href={`tel:${config.restaurant.phone.replace(/\s/g, '')}`} 
                        className={`${config.theme === 'cubain' ? 'text-red-900 hover:text-red-950' : `text-${themeColors.base} hover:text-${themeColors.base}`} font-semibold transition-colors`}
                      >
                        {config.restaurant.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Users className={`h-6 w-6 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Capacité</h4>
                      <p className="text-gray-600">Jusqu'à {config.restaurant.capacity} personnes</p>
                      <p className="text-sm text-gray-500">Privatisation possible</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Booking */}
              <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-br ${themeColors.gradient}`} rounded-3xl p-8 text-white`}>
                <h3 className="text-xl font-semibold mb-4">Réservation par téléphone</h3>
                <p className="opacity-90 mb-6 leading-relaxed">
                  Vous préférez réserver par téléphone ? Notre équipe est à votre disposition pour vous conseiller.
                </p>
                <a 
                  href={`tel:${config.restaurant.phone.replace(/\s/g, '')}`}
                  className={`inline-flex items-center space-x-2 bg-white hover:bg-gray-50 px-6 py-3 rounded-full font-semibold transition-colors shadow-lg ${config.theme === 'cubain' ? 'text-red-900' : ''}`} style={config.theme !== 'cubain' ? { color: config.theme_colors[config.theme].primary } : {}}
                >
                  <Phone className="h-5 w-5" />
                  <span>{config.restaurant.phone}</span>
                </a>
              </div>

              {/* Tip */}
              <div className={`${config.theme === 'cubain' ? 'bg-amber-50 border border-amber-200' : `bg-${themeColors.accent}/10 border border-${themeColors.accent}/20`} rounded-2xl p-6`}>
                <h4 className={`font-semibold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`} mb-2`}>💡 Conseil</h4>
                <p className={`text-sm ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.base}`}`}>
                  Réservez 48h à l'avance pour garantir votre table dans notre ambiance {config.theme === 'cubain' ? 'cubaine authentique' : 'tropicale unique'} !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;