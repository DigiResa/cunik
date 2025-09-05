import React from 'react';
import { Heart, Users, Sparkles, Calendar } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import ImageCarousel from './ImageCarousel';

const EVJFSection = () => {
  const { config } = useConfig();
  
  // Images pour la galerie EVJF
  const evjfData = config.evenementiel?.evjf || {
    title: 'Enterrement de Vie de Jeune Fille',
    subtitle: 'Une soirée inoubliable',
    description: 'Célébrez entre amies dans une ambiance unique et festive',
    content: 'Organisez un EVJF mémorable dans notre espace entièrement privatisé.',
    content2: 'Animations personnalisées, cocktails signature et décoration thématique.',
    stat1_value: '20',
    stat1_label: 'Personnes max',
    stat2_value: '100%',
    stat2_label: 'Privatisé',
    cta_button: 'Organiser mon EVJF',
    cta_title: 'Prête à célébrer ?',
    cta_description: 'Contactez-nous pour organiser l\'EVJF parfait'
  };
  const evjfImages = evjfData.images?.filter(Boolean) || [
    "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section id="evjf" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">EVJF</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {evjfData.title?.split(' ').slice(0, -3).join(' ') || 'Enterrement de Vie'}
            <span className="block font-bold text-red-900">{evjfData.title?.split(' ').slice(-3).join(' ') || 'de Jeune Fille'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {evjfData.description || 'Célébrez entre amies dans une ambiance unique et festive'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-red-50 rounded-3xl p-8 mb-8 border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{evjfData.subtitle || 'Une soirée inoubliable'}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {evjfData.content && <p>{evjfData.content}</p>}
                {evjfData.content2 && <p>{evjfData.content2}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border">
                <div className="text-2xl font-bold text-red-900 mb-1">{evjfData.stat1_value || '20'}</div>
                <div className="text-sm text-gray-600">{evjfData.stat1_label || 'Personnes max'}</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border">
                <div className="text-2xl font-bold text-red-900 mb-1">{evjfData.stat2_value || '100%'}</div>
                <div className="text-sm text-gray-600">{evjfData.stat2_label || 'Privatisé'}</div>
              </div>
            </div>

            <button className="bg-red-900 hover:bg-red-950 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#contact" className="block">{evjfData.cta_button || 'Organiser mon EVJF'}</a>
            </button>
          </div>

          {/* Galerie d'images */}
          <div className="order-1 lg:order-2">
            <ImageCarousel
              images={evjfImages}
              alt="EVJF au C Unik"
              className="relative overflow-hidden rounded-3xl shadow-2xl group h-80"
              imageClassName="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              overlayClassName="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              badge={
                <div className="absolute top-6 left-6 bg-red-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  🎀 EVJF d'exception
                </div>
              }
              interval={4000}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {(evjfData.features || [
                { title: "Ambiance festive", desc: "Décoration rose et dorée" },
                { title: "Groupe privé", desc: "Espace entièrement à vous" },
                { title: "Animations", desc: "Jeux et surprises" },
                { title: "Sur mesure", desc: "Planning personnalisé" }
              ]).map((feature, index) => {
                const icons = [Heart, Users, Sparkles, Calendar];
                const IconComponent = icons[index] || Heart;
                return (
                <div key={index} className="text-center group">
                  <div className="bg-red-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              )})}
            </div>

            {/* CTA Card */}
            <div className="bg-red-900 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{evjfData.cta_title || 'Prête à célébrer ?'}</h3>
              <p className="text-lg opacity-90 mb-6">
                {evjfData.cta_description || 'Contactez-nous pour organiser l\'EVJF parfait'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${config.restaurant.phone.replace(/\s/g, '')}`}
                  className="bg-white text-red-900 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold transition-colors inline-block"
                >
                  📞 {config.restaurant.phone}
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

export default EVJFSection;