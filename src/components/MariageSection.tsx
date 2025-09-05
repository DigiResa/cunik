import React from 'react';
import { Heart, Crown, Sparkles, Camera } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import ImageCarousel from './ImageCarousel';

const MariageSection = () => {
  const { config } = useConfig();
  
  // Images pour la galerie mariage
  const mariageData = config.evenementiel?.mariage || {
    title: 'Votre Jour J Parfait',
    subtitle: 'Un mariage sur mesure',
    description: 'Créez des souvenirs éternels dans notre cadre d\'exception',
    content: 'Coordination complète de votre mariage dans un cadre d\'exception.',
    content2: 'Service premium, menu gastronomique et décoration sur mesure.',
    cta_button: 'Planifier mon mariage',
    cta_title: 'Prêt pour le grand jour ?',
    cta_description: 'Notre équipe vous accompagne pour un mariage parfait'
  };
  const mariageImages = mariageData.images?.filter(Boolean) || [
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section id="mariage" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Mariage</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {mariageData.title?.split(' ').slice(0, -1).join(' ') || 'Votre Jour J'}
            <span className="block font-bold text-red-900">{mariageData.title?.split(' ').slice(-1) || 'Parfait'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {mariageData.description || 'Créez des souvenirs éternels dans notre cadre d\'exception'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Galerie d'images */}
          <div className="relative">
            <ImageCarousel
              images={mariageImages}
              alt="Mariage au C Unik"
              className="relative overflow-hidden rounded-3xl shadow-2xl group h-96"
              imageClassName="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              overlayClassName="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              badge={
                <div className="absolute top-6 left-6 bg-red-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  💍 Mariage d'exception
                </div>
              }
              interval={5000}
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-900 mb-1">80</div>
                <div className="text-sm text-gray-600">Invités max</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{mariageData.subtitle || 'Un mariage sur mesure'}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {mariageData.content && <p>{mariageData.content}</p>}
                {mariageData.content2 && <p>{mariageData.content2}</p>}
              </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {(mariageData.features || [
                { title: "Coordination", desc: "Organisation complète" },
                { title: "Décoration", desc: "Sur mesure" },
                { title: "Moments", desc: "Souvenirs éternels" },
                { title: "Excellence", desc: "Service premium" }
              ]).map((service, index) => {
                const icons = [Heart, Sparkles, Camera, Crown];
                const IconComponent = icons[index] || Heart;
                return (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border">
                  <IconComponent className="h-8 w-8 text-red-900 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                  <p className="text-xs text-gray-600">{service.desc}</p>
                </div>
              )})}
            </div>

            <button className="bg-red-900 hover:bg-red-950 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#contact" className="block">{mariageData.cta_button || 'Planifier mon mariage'}</a>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MariageSection;