import React from 'react';
import { Sparkles, Lightbulb, Palette, Users, Calendar, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import ImageCarousel from './ImageCarousel';

const CustomEventsSection = () => {
  const { config } = useConfig();
  
  // Images pour la galerie événements sur mesure
  const surMesureData = config.evenementiel?.sur_mesure || {
    title: 'Événements sur mesure',
    subtitle: 'Créativité sans limite',
    description: 'Chaque événement est unique. Nous créons des expériences personnalisées qui dépassent vos attentes',
    content: 'Conception unique adaptée à vos souhaits et contraintes.',
    content2: 'Flexibilité totale et accompagnement complet de A à Z.',
    cta_title: 'Prêt à créer votre événement unique ?',
    cta_description: 'Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé'
  };
  const customEventsImages = surMesureData.images?.filter(Boolean) || [
    "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const customEventTypes = [
    {
      icon: Lightbulb,
      title: 'Événements Créatifs',
      description: 'Ateliers culinaires, dégustations thématiques, soirées à thème',
      examples: ['Atelier cocktails', 'Soirée dégustation', 'Cours de cuisine créole'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Événements Communautaires',
      description: 'Associations, clubs, groupes d\'amis, réunions familiales',
      examples: ['Réunion d\'association', 'Cousinade', 'Retrouvailles d\'anciens'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Star,
      title: 'Événements Exceptionnels',
      description: 'Lancements, inaugurations, célébrations spéciales',
      examples: ['Lancement produit', 'Inauguration', 'Remise de prix'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Événements Artistiques',
      description: 'Expositions, vernissages, soirées culturelles',
      examples: ['Vernissage', 'Concert privé', 'Soirée poésie'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Échange & Conception',
      description: 'Nous écoutons vos idées et concevons ensemble votre événement unique',
      icon: Lightbulb
    },
    {
      step: '02',
      title: 'Planification Détaillée',
      description: 'Nous établissons un planning précis et coordonnons tous les prestataires',
      icon: Calendar
    },
    {
      step: '03',
      title: 'Réalisation Parfaite',
      description: 'Notre équipe s\'occupe de tout le jour J pour un événement sans stress',
      icon: Star
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="evenements-sur-mesure" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Galerie d'images en header */}
          <div className="mb-12">
            <ImageCarousel
              images={customEventsImages}
              alt="Événements sur mesure au C Unik"
              className="relative overflow-hidden rounded-3xl shadow-2xl group max-w-4xl mx-auto h-64"
              imageClassName="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              overlayClassName="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              badge={
                <div className="absolute top-6 left-6 bg-red-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  ✨ Événements sur mesure
                </div>
              }
              interval={3500}
            />
          </div>
          
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Sur Mesure</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            Vos événements
            <span className="block font-bold text-red-900">sur mesure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chaque événement est unique. Nous créons des expériences personnalisées qui dépassent vos attentes
          </p>
        </div>

        {/* Custom Event Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {customEventTypes.map((eventType, index) => (
            <div key={index} className="group text-center">
              <div className="bg-red-900 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <eventType.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-900 transition-colors">
                {eventType.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {eventType.description}
              </p>
              <div className="space-y-2">
                {eventType.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center justify-center text-xs text-gray-500">
                    <div className="w-1 h-1 bg-amber-400 rounded-full mr-2"></div>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Notre
              <span className="block font-bold text-red-900">processus créatif</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De l'idée à la réalisation, nous vous accompagnons à chaque étape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-red-900 to-amber-400 transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="bg-red-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-amber-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="h-8 w-8 text-red-900" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-red-900 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-red-900 rounded-3xl p-12 text-white mb-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 text-white text-6xl transform rotate-12">✨</div>
            <div className="absolute top-8 right-12 text-white text-5xl transform -rotate-12">🎨</div>
            <div className="absolute bottom-6 left-16 text-white text-4xl">🎯</div>
            <div className="absolute bottom-8 right-8 text-white text-5xl transform rotate-45">💫</div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-light mb-6">
              Pourquoi choisir
              <span className="block font-bold text-amber-400">C Unik Événementiel ?</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {[
                { icon: '🏆', title: '15 ans', subtitle: 'd\'expérience' },
                { icon: '🎯', title: '100%', subtitle: 'sur mesure' },
                { icon: '👥', title: 'Équipe', subtitle: 'dédiée' },
                { icon: '📍', title: 'Cadre', subtitle: 'unique' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-amber-400">{stat.title}</div>
                  <div className="text-white/80">{stat.subtitle}</div>
                </div>
              ))}
            </div>

            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Avec 15 ans d'expérience dans l'événementiel, nous transformons vos rêves en réalité. 
              Chaque détail compte, chaque moment est pensé pour créer des souvenirs inoubliables.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="h-8 w-8 text-red-900" />
              <h3 className="text-3xl font-light text-gray-900">
                Prêt à créer
                <span className="block font-bold text-red-900">votre événement unique ?</span>
              </h3>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-red-900 hover:bg-red-950 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <Phone className="h-5 w-5" />
                <span>Discutons de votre projet</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-red-900 hover:bg-red-900 hover:text-white text-red-900 px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Mail className="h-5 w-5" />
                <span>Devis personnalisé</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomEventsSection;