import React from 'react';
import { Heart, Users, Home, Gift } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import ImageCarousel from './ImageCarousel';

const CelebrationsSection = () => {
  const { config } = useConfig();
  
  // Images pour la galerie célébrations
  const celebrationsData = config.evenementiel?.sur_mesure || {
    title: 'Célébrations Personnalisées',
    subtitle: 'Un lieu à la hauteur de l\'émotion partagée',
    description: 'Baptême, communion, repas de famille ou fête de fin d\'année dans un cadre chaleureux',
    content: 'Un baptême, une communion, un repas de famille ou une fête de fin d\'année méritent un lieu à la hauteur de l\'émotion partagée.',
    content2: 'Sous les voûtes, autour d\'une grande tablée ou sur la terrasse, chaque moment se vit dans une atmosphère intime et respectueuse.',
    cta_button: 'Organiser ma célébration',
    cta_title: 'Prêt à célébrer ?',
    cta_description: 'Contactez-nous pour organiser votre célébration familiale'
  };
  
  const celebrationsImages = celebrationsData.images?.filter(Boolean) || [
    "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section id="celebrations" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Célébrations</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {celebrationsData.title?.split(' ').slice(0, -1).join(' ') || 'Célébrations'}
            <span className="block font-bold text-red-900">{celebrationsData.title?.split(' ').slice(-1) || 'Personnalisées'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {celebrationsData.description || 'Baptême, communion, repas de famille ou fête de fin d\'année dans un cadre chaleureux'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{celebrationsData.subtitle || 'Un lieu à la hauteur de l\'émotion partagée'}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {celebrationsData.content && <p>{celebrationsData.content}</p>}
                {celebrationsData.content2 && <p>{celebrationsData.content2}</p>}
              </div>
            </div>

            {/* Types de célébrations */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: "Baptême", desc: "Cérémonie familiale", icon: "👶" },
                { title: "Communion", desc: "Moment spirituel", icon: "🕊️" },
                { title: "Repas famille", desc: "Retrouvailles", icon: "👨‍👩‍👧‍👦" },
                { title: "Fête fin d'année", desc: "Célébration collective", icon: "🎊" }
              ].map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-200">
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{type.title}</h4>
                  <p className="text-xs text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>

            <button className="bg-red-900 hover:bg-red-950 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#contact" className="block">{celebrationsData.cta_button || 'Organiser ma célébration'}</a>
            </button>
          </div>

          {/* Galerie d'images */}
          <div className="order-1 lg:order-2">
            <ImageCarousel
              images={celebrationsImages}
              alt="Célébrations au C Unik"
              className="relative overflow-hidden rounded-3xl shadow-2xl group h-80"
              imageClassName="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              overlayClassName="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              badge={
                <div className="absolute top-6 left-6 bg-red-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  🎉 Célébrations familiales
                </div>
              }
              interval={5000}
            />
          </div>
        </div>

        {/* Espaces disponibles */}
        <div className="mt-16">
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {[
                { title: "Voûtes en pierre", desc: "Cadre historique", icon: Home },
                { title: "Terrasse estivale", desc: "Douceur extérieure", icon: Users },
                { title: "Ambiance cosy", desc: "Intimité garantie", icon: Heart }
              ].map((space, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-red-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <space.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{space.title}</h4>
                  <p className="text-gray-600 text-sm">{space.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-red-900 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{celebrationsData.cta_title || 'Prêt à célébrer ?'}</h3>
              <p className="text-lg opacity-90 mb-6">
                {celebrationsData.cta_description || 'Contactez-nous pour organiser votre célébration familiale'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${config.restaurant.phone_commercial || config.restaurant.phone}`}
                  className="bg-white text-red-900 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold transition-colors inline-block"
                >
                  📞 {config.restaurant.phone_commercial || config.restaurant.phone}
                </a>
                <a 
                  href="#contact"
                  className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationsSection;