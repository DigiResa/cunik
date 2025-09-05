import React from 'react';
import { Users, Heart, Briefcase, Calendar, Clock, Star, PartyPopper, Gift, Cake, Briefcase as BriefcaseIcon } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const EventsSection = () => {
  const { config } = useConfig();

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' || config.theme === 'evenementiel'
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

  // Types d'événements selon le thème
  const getEventTypes = () => {
    if (config.theme === 'evenementiel') {
      return [
        {
          icon: Heart,
          title: "EVJF & Enterrements de Vie",
          subtitle: "Moments inoubliables",
          description: "Célébrez entre amis avec nos formules dédiées aux enterrements de vie",
          features: ["Espace privatisé", "Animations sur mesure", "Cocktails signature", "Décoration thématique"],
          color: "from-pink-500 to-pink-600"
        },
        {
          icon: Gift,
          title: "Mariages & Célébrations",
          subtitle: "Votre jour J parfait",
          description: "Créez des souvenirs éternels dans notre cadre d'exception",
          features: ["Coordination complète", "Menu gastronomique", "Service premium", "Décoration sur mesure"],
          color: themeColors.solid
        },
        {
          icon: Cake,
          title: "Anniversaires & Fêtes Privées",
          subtitle: "Célébrations personnalisées",
          description: "Anniversaires, départs à la retraite, changements de service",
          features: ["Ambiance festive", "Menu adapté", "Animation possible", "Service personnalisé"],
          color: themeColors.solid
        },
        {
          icon: BriefcaseIcon,
          title: "Événements d'Entreprise",
          subtitle: "Séminaires & Réceptions",
          description: "Séminaires, repas d'affaires et soirées festives d'entreprise",
          features: ["Équipements audiovisuels", "Menu professionnel", "Service dédié", "Parking privé"],
          color: "from-blue-500 to-blue-600"
        },
        {
          icon: PartyPopper,
          title: "Obsèques & Cérémonies",
          subtitle: "Accompagnement respectueux",
          description: "Repas de famille et réceptions dans un cadre approprié",
          features: ["Ambiance respectueuse", "Service discret", "Menu traditionnel", "Espace recueilli"],
          color: "from-gray-600 to-gray-700"
        }
      ];
    } else {
      return [
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
    }
  };

  const eventTypes = getEventTypes();

  return (
    <section id="privatisation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`} font-semibold text-sm uppercase tracking-wider`}>
            {config.theme === 'evenementiel' ? 'Événementiel' : 'Privatisation'}
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {config.theme === 'evenementiel' ? 'Vos événements' : 'Vos événements'}
            <span className={`block font-bold ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-red-900' : `text-${themeColors.base}`}`}>
              {config.theme === 'evenementiel' ? 'sur mesure' : 'd\'exception'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {config.theme === 'evenementiel' 
              ? `Votre partenaire privilégié pour tous vos événements privés et festifs dans un cadre d'exception`
              : `Privatisez ${config.restaurant.name} pour créer des moments inoubliables dans un cadre ${config.theme === 'cubain' ? 'cubain authentique' : 'tropical unique'}`
            }
          </p>
        </div>

        {/* Event Types */}
        <div className={`grid ${config.theme === 'evenementiel' ? 'lg:grid-cols-2 xl:grid-cols-3' : 'lg:grid-cols-3'} gap-8 mb-16`}>
          {eventTypes.map((event, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className={`${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-900' : `bg-gradient-to-br ${event.color}`} p-8 h-full text-white relative`}>
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
                <span className={`block font-bold ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-red-900' : `text-${themeColors.base}`}`}>entièrement modulable</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {config.theme === 'evenementiel' 
                  ? "Notre espace s'adapte à tous vos événements : EVJF, mariages, anniversaires, obsèques, séminaires d'entreprise et repas festifs. Configuration personnalisée selon vos besoins."
                  : "Notre restaurant peut accueillir jusqu'à 80 personnes en configuration cocktail ou 60 personnes en dîner assis. L'espace peut être entièrement privatisé selon vos besoins."
                }
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-red-900' : `text-${themeColors.base}`} mb-2`}>80</div>
                  <div className="text-sm text-gray-600">Personnes debout</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-red-900' : `text-${themeColors.base}`} mb-2`}>60</div>
                  <div className="text-sm text-gray-600">Personnes assises</div>
                </div>
              </div>

              <button className={`${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-900 hover:bg-red-950' : `bg-${themeColors.base} hover:bg-${themeColors.dark}`} text-white px-8 py-3 rounded-full font-semibold transition-colors`}>
                {config.theme === 'evenementiel' ? 'Planifier votre événement' : 'Planifier votre événement'}
              </button>
            </div>

            <div className="relative">
              <img 
                src={config.events.image1 || config.about.image}
                alt={`Espace événementiel ${config.restaurant.name}`}
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-red-900' : `text-${themeColors.base}`} mb-1`}>
                    {config.theme === 'evenementiel' ? '8+' : '100%'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {config.theme === 'evenementiel' ? 'Types d\'événements' : 'Privatisable'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className={`${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-3xl p-12 text-white`}>
            <h3 className="text-3xl font-light mb-4">
              {config.theme === 'evenementiel' ? 'Prêt à organiser votre événement ?' : 'Prêt à organiser votre événement ?'}
            </h3>
            <p className="text-xl opacity-90 mb-8">Contactez-nous pour discuter de votre projet</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
                📞 {config.restaurant.phone}
              </button>
              <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Envoyer un message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;