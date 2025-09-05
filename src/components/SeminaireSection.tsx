import React from 'react';
import { Briefcase, Users, Presentation, Coffee } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import ImageCarousel from './ImageCarousel';

const SeminaireSection = () => {
  const { config } = useConfig();
  
  // Images pour la galerie séminaire
  const seminaireData = config.evenementiel?.seminaire || {
    title: 'Événements d\'Entreprise',
    subtitle: 'Votre événement professionnel',
    description: 'Séminaires, formations et repas d\'affaires dans un cadre professionnel',
    content: 'Équipements audiovisuels, espace modulable et parking privé.',
    content2: 'Service dédié pour vos événements d\'entreprise.',
    stat1_value: '80',
    stat1_label: 'Participants max',
    stat2_value: 'WiFi',
    stat2_label: 'Haut débit',
    cta_button: 'Organiser mon séminaire',
    cta_title: 'Planifions votre événement',
    cta_description: 'Notre équipe commerciale vous accompagne dans votre projet'
  };
  const seminaireImages = seminaireData.images?.filter(Boolean) || [
    "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section id="seminaire" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Séminaire</span>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
            {seminaireData.title?.split(' ').slice(0, -1).join(' ') || 'Événements'}
            <span className="block font-bold text-red-900">{seminaireData.title?.split(' ').slice(-1) || 'd\'Entreprise'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {seminaireData.description || 'Séminaires, formations et repas d\'affaires dans un cadre professionnel'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-blue-50 rounded-3xl p-8 mb-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{seminaireData.subtitle || 'Votre événement professionnel'}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {seminaireData.content && <p>{seminaireData.content}</p>}
                {seminaireData.content2 && <p>{seminaireData.content2}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-blue-200">
                <div className="text-2xl font-bold text-red-900 mb-1">{seminaireData.stat1_value || '80'}</div>
                <div className="text-sm text-gray-600">{seminaireData.stat1_label || 'Participants max'}</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-blue-200">
                <div className="text-2xl font-bold text-red-900 mb-1">{seminaireData.stat2_value || 'WiFi'}</div>
                <div className="text-sm text-gray-600">{seminaireData.stat2_label || 'Haut débit'}</div>
              </div>
            </div>

            <button className="bg-red-900 hover:bg-red-950 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#contact" className="block">{seminaireData.cta_button || 'Organiser mon séminaire'}</a>
            </button>
          </div>

          {/* Galerie d'images */}
          <div className="order-1 lg:order-2">
            <ImageCarousel
              images={seminaireImages}
              alt="Séminaire au C Unik"
              className="relative overflow-hidden rounded-3xl shadow-2xl group h-80"
              imageClassName="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              overlayClassName="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              badge={
                <div className="absolute top-6 left-6 bg-red-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  💼 Séminaire professionnel
                </div>
              }
              interval={5500}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {(seminaireData.features || [
                { title: "Équipements AV", desc: "Vidéoprojecteur, son" },
                { title: "Espace modulable", desc: "Configuration sur mesure" },
                { title: "Pauses café", desc: "Service inclus" },
                { title: "Parking privé", desc: "Places réservées" }
              ]).map((feature, index) => {
                const icons = [Presentation, Users, Coffee, Briefcase];
                const IconComponent = icons[index] || Briefcase;
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

            {/* Types d'événements */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-red-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Types d'événements</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Séminaires",
                  "Formations",
                  "Réunions",
                  "Conférences",
                  "Team building",
                  "Repas d'affaires",
                  "Soirées entreprise",
                  "Lancements produit"
                ].map((type, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-900 rounded-full mr-3"></div>
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA professionnel */}
        <div className="mt-16 text-center">
          <div className="bg-red-900 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-4">{seminaireData.cta_title || 'Planifions votre événement'}</h3>
            <p className="text-xl opacity-90 mb-8">
              {seminaireData.cta_description || 'Notre équipe commerciale vous accompagne dans votre projet'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${config.restaurant.phone.replace(/\s/g, '')}`}
                className="bg-white text-red-900 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg inline-block"
              >
                📞 {config.restaurant.phone}
              </a>
              <a 
                href="#contact"
                className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
              >
                Devis personnalisé
              </a>
              <a 
                href="#contact"
                className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
              >
                Devis personnalisé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminaireSection;