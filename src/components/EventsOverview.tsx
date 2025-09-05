import React from 'react';
import { Heart, Crown, Gift, Briefcase, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const EventsOverview = () => {
  const { config } = useConfig();

  const eventTypes = [
    {
      id: 'evjf',
      icon: Heart,
      title: 'EVJF',
      subtitle: 'EVJF & EVG',
      description: 'Organisez un EVJF ou EVG mémorable dans notre espace entièrement privatisable',
      features: ['Espace privatisé', 'Animations sur mesure', 'Cocktails signature', 'Décoration thématique'],
      color: 'from-pink-500 to-pink-600',
      emoji: '🎀',
      href: '#evjf'
    },
    {
      id: 'mariage',
      icon: Crown,
      title: 'Mariages',
      subtitle: 'Votre jour J parfait',
      description: 'Coordination complète de votre mariage dans un cadre d\'exception',
      features: ['Coordination complète', 'Menu gastronomique', 'Service premium', 'Décoration sur mesure'],
      color: 'from-red-900 to-red-800',
      emoji: '💍',
      href: '#mariage'
    },
    {
      id: 'anniversaire',
      icon: Gift,
      title: 'Anniversaires',
      subtitle: 'Souffler ses bougies dans un lieu sécurisé',
      description: 'C Unik est l\'adresse idéale pour un anniversaire dans un cadre sûr et accueillant',
      features: ['Ambiance festive', 'Menu adapté', 'Animation possible', 'Service personnalisé'],
      color: 'from-orange-500 to-red-600',
      emoji: '🎂',
      href: '#anniversaire'
    },
    {
      id: 'seminaire',
      icon: Briefcase,
      title: 'Séminaires',
      subtitle: 'Un lieu pratique, professionnel et inspirant',
      description: 'Réunir vos équipes, présenter un projet ou organiser une conférence dans un cadre inspirant',
      features: ['Équipements audiovisuels', 'Menu professionnel', 'Service dédié', 'Parking privé'],
      color: 'from-blue-600 to-blue-700',
      emoji: '💼',
      href: '#seminaire'
    },
    {
      id: 'obseques',
      icon: Users,
      title: 'Obsèques',
      subtitle: 'Accompagnement respectueux',
      description: 'Un lieu empreint de dignité et de sérénité pour accompagner les familles',
      features: ['Ambiance respectueuse', 'Service discret', 'Menu traditionnel', 'Espace recueilli'],
      color: 'from-gray-600 to-gray-700',
      emoji: '🕊️',
      href: '#obseques'
    },
    {
      id: 'sur-mesure',
      icon: Sparkles,
      title: 'Sur Mesure',
      subtitle: 'Célébrations Personnalisées',
      description: 'Baptême, communion, repas de famille ou fête de fin d\'année dans un cadre chaleureux',
      features: ['Conception unique', 'Flexibilité totale', 'Créativité sans limite', 'Accompagnement complet'],
      color: 'from-purple-600 to-purple-700',
      emoji: '✨',
      href: '#evenements-sur-mesure'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Nos Services</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Tous vos
            <span className="block font-bold text-red-900">événements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De l'EVJF au séminaire d'entreprise, nous créons l'événement parfait pour chaque occasion
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <div key={event.id} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10 p-8">
                {/* Icon & Emoji */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-red-900 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl">{event.emoji}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-900 transition-colors">
                  {event.title}
                </h3>
                <p className="text-amber-600 font-medium mb-4">{event.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {event.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const element = document.querySelector(event.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-red-900 hover:bg-red-950 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105"
                >
                  <span>Voir les détails</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA vers événements sur mesure */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-3xl p-12 text-white max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-white text-5xl transform rotate-12">✨</div>
              <div className="absolute top-8 right-12 text-white text-4xl transform -rotate-12">🎨</div>
              <div className="absolute bottom-6 left-16 text-white text-3xl">🎯</div>
              <div className="absolute bottom-8 right-8 text-white text-4xl transform rotate-45">💫</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-light mb-4">
                Un événement unique ?
              </h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Nous créons des événements sur mesure qui sortent de l'ordinaire
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#evenements-sur-mesure');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-amber-400 hover:bg-amber-500 text-red-900 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto"
              >
                <Sparkles className="h-5 w-5" />
                <span>Découvrir nos événements sur mesure</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsOverview;