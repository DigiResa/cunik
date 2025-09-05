import React from 'react';
import { Heart, Users, Flower, Shield } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import ImageCarousel from './ImageCarousel';

const ObsequesSection = () => {
  const { config } = useConfig();
  
  // Images pour la galerie obsèques
  const obsequesData = config.evenementiel?.obseques || {
    title: 'Accompagnement Respectueux',
    subtitle: 'Un moment de recueillement',
    description: 'Un cadre approprié pour honorer la mémoire de vos proches',
    content: 'Service discret et respectueux pour vos repas de famille.',
    content2: 'Ambiance appropriée et équipe attentionnée.',
    stat1_value: '60',
    stat1_label: 'Personnes max',
    stat2_value: 'Privé',
    stat2_label: 'Espace recueilli',
    cta_button: 'Nous contacter',
    cta_title: 'Besoin d\'accompagnement ?',
    cta_description: 'Notre équipe est à votre disposition avec discrétion'
  };
  const obsequesImages = obsequesData.images?.filter(Boolean) || [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section id="obseques" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Obsèques</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {obsequesData.title?.split(' ').slice(0, -1).join(' ') || 'Accompagnement'}
            <span className="block font-bold text-gray-700">{obsequesData.title?.split(' ').slice(-1) || 'Respectueux'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {obsequesData.description || 'Un cadre approprié pour honorer la mémoire de vos proches'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-50 rounded-3xl p-8 mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{obsequesData.subtitle || 'Un moment de recueillement'}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {obsequesData.content && <p>{obsequesData.content}</p>}
                {obsequesData.content2 && <p>{obsequesData.content2}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-700 mb-1">{obsequesData.stat1_value || '60'}</div>
                <div className="text-sm text-gray-600">{obsequesData.stat1_label || 'Personnes max'}</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-700 mb-1">{obsequesData.stat2_value || 'Privé'}</div>
                <div className="text-sm text-gray-600">{obsequesData.stat2_label || 'Espace recueilli'}</div>
              </div>
            </div>

            <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#contact" className="block">{obsequesData.cta_button || 'Nous contacter'}</a>
            </button>
          </div>

          {/* Galerie d'images */}
          <div className="order-1 lg:order-2">
            <ImageCarousel
              images={obsequesImages}
              alt="Espace obsèques au C Unik"
              className="relative overflow-hidden rounded-3xl shadow-2xl group h-80"
              imageClassName="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              overlayClassName="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              badge={
                <div className="absolute top-6 left-6 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  🕊️ Accompagnement respectueux
                </div>
              }
              interval={6000}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {(obsequesData.features || [
                { title: "Discrétion", desc: "Service respectueux" },
                { title: "Famille", desc: "Espace privé" },
                { title: "Recueillement", desc: "Ambiance appropriée" },
                { title: "Accompagnement", desc: "Équipe attentionnée" }
              ]).map((feature, index) => {
                const icons = [Shield, Users, Flower, Heart];
                const IconComponent = icons[index] || Shield;
                return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-gray-600 to-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              )})}
            </div>

            {/* Services inclus */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Services inclus</h4>
              <ul className="space-y-3">
                {[
                  "Espace privatisé et calme",
                  "Menu traditionnel adapté",
                  "Service discret et attentionné",
                  "Ambiance respectueuse",
                  "Flexibilité horaire",
                  "Accompagnement personnalisé"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact discret */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{obsequesData.cta_title || 'Besoin d\'accompagnement ?'}</h3>
              <p className="text-lg opacity-90 mb-6">
                {obsequesData.cta_description || 'Notre équipe est à votre disposition avec discrétion'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${config.restaurant.phone.replace(/\s/g, '')}`}
                  className="bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold transition-colors inline-block"
                >
                  📞 {config.restaurant.phone}
                </a>
                <a 
                  href="#contact"
                  className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObsequesSection;