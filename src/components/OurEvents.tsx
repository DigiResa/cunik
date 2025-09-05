import React from 'react';
import { Calendar, MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const OurEvents = () => {
  const { config } = useConfig();
  
  // Charger les événements depuis localStorage
  const [eventsData, setEventsData] = React.useState(() => {
    const defaultEventsData = {
      events: []
    };

    try {
      const savedEvents = localStorage.getItem('eventsData');
      if (savedEvents) {
        const parsedEvents = JSON.parse(savedEvents);
        return {
          events: Array.isArray(parsedEvents.events) ? parsedEvents.events : []
        };
      }
    } catch (error) {
      console.error('Erreur lors du chargement des événements:', error);
    }
    
    return defaultEventsData;
  });

  // Recharger les données quand le localStorage change
  React.useEffect(() => {
    const handleStorageChange = () => {
      try {
        const savedEvents = localStorage.getItem('eventsData');
        if (savedEvents) {
          const parsedEvents = JSON.parse(savedEvents);
          setEventsData({
            events: Array.isArray(parsedEvents.events) ? parsedEvents.events : []
          });
        }
      } catch (error) {
        console.error('Erreur lors du rechargement des événements:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: 'red-900',
        secondary: 'amber-400',
        solid: 'red-900',
        accent: 'amber-400'
      }
    : {
        primary: 'sunset-base',
        secondary: 'sunset-accent',
        gradient: 'from-sunset-base to-sunset-accent',
        accent: 'sunset-accent'
      };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.replace(':', 'h');
  };

  if (eventsData.events.length === 0) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">📅</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Événements à venir</h2>
            <p className="text-gray-600">Aucun événement programmé pour le moment.</p>
            <p className="text-sm text-gray-500 mt-2">Revenez bientôt pour découvrir nos prochaines animations !</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="evenements" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>Événements</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Nos
            <span className={`block font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>événements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos prochains événements et animations dans l'ambiance {config.theme === 'cubain' ? 'cubaine authentique' : 'tropicale unique'} de {config.restaurant.name}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eventsData.events.map((event, index) => (
            <div key={event.id || index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Event Image */}
              {event.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Event Type Badge */}
                  <div className={`absolute top-4 left-4 ${config.theme === 'cubain' ? 'bg-red-900' : `bg-${themeColors.primary}`} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {event.type}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Date */}
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className={`h-5 w-5 ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`} />
                  <span className={`${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} font-semibold text-sm`}>
                    {formatDate(event.date)}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${config.theme === 'cubain' ? 'group-hover:text-red-900' : `group-hover:text-${themeColors.primary}`} transition-colors`}>
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  {event.time && (
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{formatTime(event.time)}</span>
                    </div>
                  )}
                  
                  {event.location && (
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{event.location}</span>
                    </div>
                  )}
                  
                  {event.capacity && (
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Jusqu'à {event.capacity} personnes</span>
                    </div>
                  )}
                </div>

                {/* Price */}
                {event.price && (
                  <div className={`${config.theme === 'cubain' ? 'bg-red-50' : `bg-${themeColors.primary}/10`} rounded-2xl p-4 mb-6`}>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Tarif :</span>
                      <span className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`}`}>{event.price}</span>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                {event.reservationLink ? (
                  <a 
                    href={event.reservationLink}
                    target={event.reservationLink.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={event.reservationLink.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className={`w-full ${config.theme === 'cubain' ? 'bg-red-900 hover:bg-red-950' : `bg-gradient-to-r ${themeColors.gradient} hover:opacity-90`} text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                  >
                    <span>Réserver</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <button 
                    onClick={() => document.getElementById('digiresa-iframe-container')?.classList.add('show')}
                    className={`w-full ${config.theme === 'cubain' ? 'bg-red-900 hover:bg-red-950' : `bg-gradient-to-r ${themeColors.gradient} hover:opacity-90`} text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                  >
                    <span>Réserver</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default OurEvents;