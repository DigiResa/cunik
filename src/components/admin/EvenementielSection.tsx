import React from 'react';
import { PartyPopper, Plus, Trash2 } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';
import ImageField from './ImageField';

interface EvenementielSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const EvenementielSection: React.FC<EvenementielSectionProps> = ({ config, updateConfig }) => {
  const handleEvenementielChange = (section: string, field: string, value: string) => {
    updateConfig({
      ...config,
      evenementiel: {
        ...(config.evenementiel || {}),
        [section]: {
          ...(config.evenementiel?.[section] || {}),
          [field]: value
        }
      }
    });
  };

  const handleImageChange = (section: string, imageIndex: number, value: string) => {
    const currentSection = config.evenementiel?.[section] || {};
    const images = [...(currentSection.images || [])];
    
    // Étendre le tableau si nécessaire
    while (images.length <= imageIndex) {
      images.push('');
    }
    
    images[imageIndex] = value;
    
    updateConfig({
      ...config,
      evenementiel: {
        ...(config.evenementiel || {}),
        [section]: {
          ...currentSection,
          images
        }
      }
    });
  };

  const handleFeatureChange = (section: string, featureIndex: number, field: 'title' | 'desc', value: string) => {
    const currentSection = config.evenementiel?.[section] || {};
    const features = [...(currentSection.features || [])];
    
    // Étendre le tableau si nécessaire
    while (features.length <= featureIndex) {
      features.push({ title: '', desc: '' });
    }
    
    features[featureIndex] = { ...features[featureIndex], [field]: value };
    
    updateConfig({
      ...config,
      evenementiel: {
        ...(config.evenementiel || {}),
        [section]: {
          ...currentSection,
          features
        }
      }
    });
  };

  const sections = [
    {
      key: 'evjf',
      name: 'EVJF',
      emoji: '🎀',
      color: 'pink'
    },
    {
      key: 'mariage',
      name: 'Mariages',
      emoji: '💍',
      color: 'red'
    },
    {
      key: 'anniversaire',
      name: 'Anniversaires',
      emoji: '🎂',
      color: 'orange'
    },
    {
      key: 'seminaire',
      name: 'Séminaires',
      emoji: '💼',
      color: 'blue'
    },
    {
      key: 'obseques',
      name: 'Obsèques',
      emoji: '🕊️',
      color: 'gray'
    },
    {
      key: 'sur_mesure',
      name: 'Sur Mesure',
      emoji: '✨',
      color: 'purple'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center space-x-3 mb-6">
        <PartyPopper className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">🎉 Gestion Événementiel</h2>
      </div>

      <div className="space-y-12">
        {/* Section Overview */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-2xl">🎯</div>
            <h3 className="text-xl font-semibold text-gray-700">Vue d'ensemble des événements</h3>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal overview</label>
                <input
                  type="text"
                  value={config.evenementiel?.overview?.title || 'C Unik : la sécurité d\'un lieu unique'}
                  onChange={(e) => handleEvenementielChange('overview', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre overview</label>
                <input
                  type="text"
                  value={config.evenementiel?.overview?.subtitle || 'la liberté d\'un espace adaptable'}
                  onChange={(e) => handleEvenementielChange('overview', 'subtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description overview</label>
              <textarea
                value={config.evenementiel?.overview?.description || 'Parce que pour chaque évènements, C Unik offre un cadre élégant et modulable pour célébrer votre réception.'}
                onChange={(e) => handleEvenementielChange('overview', 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <div className="border border-green-200 rounded-xl p-6 bg-green-50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-2xl">📞</div>
            <h3 className="text-xl font-semibold text-gray-700">Section Contact Événementiel</h3>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre contact</label>
                <input
                  type="text"
                  value={config.evenementiel?.contact?.title || 'Planifions votre événement parfait'}
                  onChange={(e) => handleEvenementielChange('contact', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description contact</label>
                <input
                  type="text"
                  value={config.evenementiel?.contact?.description || 'Notre équipe vous accompagne dans la réalisation de tous vos projets événementiels'}
                  onChange={(e) => handleEvenementielChange('contact', 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sections individuelles */}
        {sections.map((section) => {
          const sectionData = config.evenementiel?.[section.key] || {};
          
          return (
            <div key={section.key} className={`border border-${section.color}-200 rounded-xl p-6 bg-${section.color}-50`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-2xl">{section.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-700">{section.name}</h3>
              </div>

              <div className="space-y-6">
                {/* Titre et description */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal</label>
                    <input
                      type="text"
                      value={sectionData.title || ''}
                      onChange={(e) => handleEvenementielChange(section.key, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre</label>
                    <input
                      type="text"
                      value={sectionData.subtitle || ''}
                      onChange={(e) => handleEvenementielChange(section.key, 'subtitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={sectionData.description || ''}
                    onChange={(e) => handleEvenementielChange(section.key, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Contenu détaillé */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contenu principal</label>
                    <textarea
                      value={sectionData.content || ''}
                      onChange={(e) => handleEvenementielChange(section.key, 'content', e.target.value)}
                      rows={4}
                      placeholder="Décrivez les services et avantages..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contenu secondaire</label>
                    <textarea
                      value={sectionData.content2 || ''}
                      onChange={(e) => handleEvenementielChange(section.key, 'content2', e.target.value)}
                      rows={4}
                      placeholder="Informations complémentaires..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Images */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Images de la galerie (5 images max)</h4>
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[0, 1, 2, 3, 4].map((imageIndex) => (
                      <ImageField
                        key={imageIndex}
                        label={`Image ${imageIndex + 1}`}
                        value={sectionData.images?.[imageIndex] || ''}
                        onChange={(value) => handleImageChange(section.key, imageIndex, value)}
                        placeholder={`URL image ${imageIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Caractéristiques */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Caractéristiques (4 éléments)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[0, 1, 2, 3].map((featureIndex) => (
                      <div key={featureIndex} className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Titre {featureIndex + 1}</label>
                          <input
                            type="text"
                            value={sectionData.features?.[featureIndex]?.title || ''}
                            onChange={(e) => handleFeatureChange(section.key, featureIndex, 'title', e.target.value)}
                            placeholder="Titre de la caractéristique"
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Description {featureIndex + 1}</label>
                          <input
                            type="text"
                            value={sectionData.features?.[featureIndex]?.desc || ''}
                            onChange={(e) => handleFeatureChange(section.key, featureIndex, 'desc', e.target.value)}
                            placeholder="Description courte"
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistiques */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Statistiques (2 éléments)</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Stat 1 - Valeur</label>
                        <input
                          type="text"
                          value={sectionData.stat1_value || ''}
                          onChange={(e) => handleEvenementielChange(section.key, 'stat1_value', e.target.value)}
                          placeholder="20"
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Stat 1 - Label</label>
                        <input
                          type="text"
                          value={sectionData.stat1_label || ''}
                          onChange={(e) => handleEvenementielChange(section.key, 'stat1_label', e.target.value)}
                          placeholder="Personnes max"
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Stat 2 - Valeur</label>
                        <input
                          type="text"
                          value={sectionData.stat2_value || ''}
                          onChange={(e) => handleEvenementielChange(section.key, 'stat2_value', e.target.value)}
                          placeholder="100%"
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Stat 2 - Label</label>
                        <input
                          type="text"
                          value={sectionData.stat2_label || ''}
                          onChange={(e) => handleEvenementielChange(section.key, 'stat2_label', e.target.value)}
                          placeholder="Privatisé"
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Call-to-Action</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Titre CTA</label>
                      <input
                        type="text"
                        value={sectionData.cta_title || ''}
                        onChange={(e) => handleEvenementielChange(section.key, 'cta_title', e.target.value)}
                        placeholder="Prêt à célébrer ?"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description CTA</label>
                      <input
                        type="text"
                        value={sectionData.cta_description || ''}
                        onChange={(e) => handleEvenementielChange(section.key, 'cta_description', e.target.value)}
                        placeholder="Contactez-nous pour organiser..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Texte bouton</label>
                      <input
                        type="text"
                        value={sectionData.cta_button || ''}
                        onChange={(e) => handleEvenementielChange(section.key, 'cta_button', e.target.value)}
                        placeholder="Organiser mon événement"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EvenementielSection;