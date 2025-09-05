import React from 'react';
import { Gift, Cake, PartyPopper, Music } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import ImageCarousel from './ImageCarousel';

const AnniversaireSection = () => {
  const { config } = useConfig();
  
  // Images pour la galerie anniversaire
  const anniversaireData = config.evenementiel?.anniversaire || {
    title: 'Célébrations Personnalisées',
    subtitle: 'Une fête mémorable',
    description: 'Fêtez vos anniversaires dans une ambiance festive et chaleureuse',
    content: 'Anniversaires personnels, départs à la retraite, changements de service.',
    content2: 'Ambiance festive, menu adapté et service personnalisé.',
    cta_button: 'Organiser ma fête',
    cta_title: 'Prêt à célébrer ?',
    cta_description: 'Contactez-nous pour organiser votre anniversaire parfait'
  };
  const anniversaireImages = anniversaireData.images?.filter(Boolean) || [
    "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section id="anniversaire" className="py-24 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Anniversaire</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {anniversaireData.title?.split(' ').slice(0, -1).join(' ') || 'Célébrations'}
            <span className="block font-bold text-red-900">{anniversaireData.title?.split(' ').slice(-1) || 'Personnalisées'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {anniversaireData.description || 'Fêtez vos anniversaires dans une ambiance festive et chaleureuse'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Galerie d'images */}
          <div className="relative">
            <ImageCarousel
              images={anniversaireImages}
              alt="Anniversaire au C Unik"
              className="relative overflow-hidden rounded-3xl shadow-2xl group h-96"
              imageClassName="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              overlayClassName="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              badge={
                <div className="absolute top-6 left-6 bg-red-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  🎂 Anniversaire festif
                </div>
              }
              interval={4500}
            />
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl animate-bounce">
              <PartyPopper className="h-8 w-8 text-orange-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-xl animate-pulse">
              <Gift className="h-8 w-8 text-red-500" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{anniversaireData.subtitle || 'Une fête mémorable'}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {anniversaireData.content && <p>{anniversaireData.content}</p>}
                {anniversaireData.content2 && <p>{anniversaireData.content2}</p>}
              </div>
            </div>

            {/* Types d'anniversaires */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: "Anniversaire personnel", desc: "18, 30, 50 ans..." },
                { title: "Départ retraite", desc: "Célébration carrière" },
                { title: "Changement service", desc: "Nouvelle étape pro" },
                { title: "Anniversaire mariage", desc: "Noces d'or, argent..." }
              ].map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{type.title}</h4>
                  <p className="text-xs text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>

            <button className="bg-red-900 hover:bg-red-950 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#contact" className="block">{anniversaireData.cta_button || 'Organiser ma fête'}</a>
            </button>
          </div>
        </div>


        {/* CTA final */}
        <div className="mt-16 text-center">
          <div className="bg-red-900 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-4">{anniversaireData.cta_title || 'Prêt à célébrer ?'}</h3>
            <p className="text-xl opacity-90 mb-8">
              {anniversaireData.cta_description || 'Contactez-nous pour organiser votre anniversaire parfait'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-900 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
                <a href="#contact">📞 {config.restaurant.phone}</a>
              </button>
              <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                <a href="#contact">Demander un devis</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnniversaireSection;