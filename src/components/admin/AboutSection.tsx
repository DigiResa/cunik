import React from 'react';
import { Info } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';
import ImageField from './ImageField';

interface AboutSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ config, updateConfig }) => {
  const handleAboutChange = (field: keyof SiteConfig['about'], value: string) => {
    updateConfig({
      ...config,
      about: { ...config.about, [field]: value }
    });
  };

  const handleFeatureChange = (index: number, field: keyof SiteConfig['features'][0], value: string) => {
    const newFeatures = [...config.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    updateConfig({
      ...config,
      features: newFeatures
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center space-x-3 mb-6">
        <Info className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">ℹ️ Section À Propos</h2>
      </div>

      <div className="space-y-6">
        {/* Titre et sous-titre */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal</label>
            <input
              type="text"
              value={config.about.title}
              onChange={(e) => handleAboutChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre</label>
            <input
              type="text"
              value={config.about.subtitle}
              onChange={(e) => handleAboutChange('subtitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Description principale */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description principale</label>
          <textarea
            value={config.about.description}
            onChange={(e) => handleAboutChange('description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Section Service au Comptoir */}
        <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">☕ Section Service au Comptoir</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
              <input
                type="text"
                value={config.about.service_title || 'Service au Comptoir'}
                onChange={(e) => handleAboutChange('service_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
              <textarea
                value={config.about.service_content || ''}
                onChange={(e) => handleAboutChange('service_content', e.target.value)}
                rows={4}
                placeholder="👉 Service au comptoir : commandez directement au bar..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section Expérience C Unik */}
        <div className="border border-green-200 rounded-xl p-6 bg-green-50">
          <h3 className="text-lg font-semibold text-green-800 mb-4">🌴 Section L'Expérience C Unik</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
              <input
                type="text"
                value={config.about.experience_title || 'L\'Expérience C\'Unik'}
                onChange={(e) => handleAboutChange('experience_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contenu principal</label>
              <textarea
                value={config.about.experience_content || ''}
                onChange={(e) => handleAboutChange('experience_content', e.target.value)}
                rows={3}
                placeholder="Entre amis, en famille ou en duo..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phrase de conclusion (en gras)</label>
              <textarea
                value={config.about.experience_highlight || ''}
                onChange={(e) => handleAboutChange('experience_highlight', e.target.value)}
                rows={2}
                placeholder="Venez vivre l'expérience C Unik Caraïbes..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section Côté Cuisine */}
        <div className="border border-orange-200 rounded-xl p-6 bg-orange-50">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">👨‍🍳 Section Côté Cuisine</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
              <input
                type="text"
                value={config.about.cuisine_title || 'Côté Cuisine'}
                onChange={(e) => handleAboutChange('cuisine_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
              <textarea
                value={config.about.cuisine_content || ''}
                onChange={(e) => handleAboutChange('cuisine_content', e.target.value)}
                rows={4}
                placeholder="👨‍🍳 Côté cuisine, notre équipe revisite l'esprit caribéen..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section Ambiance & Cadre */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">✨ Section Ambiance & Cadre (finale)</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
              <input
                type="text"
                value={config.about.ambiance_title || 'Ambiance & Cadre'}
                onChange={(e) => handleAboutChange('ambiance_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description ambiance</label>
              <textarea
                value={config.about.ambiance_content || ''}
                onChange={(e) => handleAboutChange('ambiance_content', e.target.value)}
                rows={3}
                placeholder="Une terrasse aux allures de plage, des lumières tamisées..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre expérience</label>
              <textarea
                value={config.about.ambiance_subtitle || ''}
                onChange={(e) => handleAboutChange('ambiance_subtitle', e.target.value)}
                rows={2}
                placeholder="Entre amis, en famille ou en duo, vivez une expérience..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Conclusion finale</label>
              <textarea
                value={config.about.ambiance_conclusion || ''}
                onChange={(e) => handleAboutChange('ambiance_conclusion', e.target.value)}
                rows={2}
                placeholder="Venez découvrir C Unik Caraïbes, un moment hors du temps..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Images de la section À propos</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ImageField
              label="Image 1"
              value={config.about.image}
              onChange={(value) => handleAboutChange('image', value)}
              placeholder="URL de la première image"
            />
            <ImageField
              label="Image 2"
              value={config.about.image2 || ''}
              onChange={(value) => handleAboutChange('image2', value)}
              placeholder="URL de la deuxième image"
            />
            <ImageField
              label="Image 3"
              value={config.about.image3 || ''}
              onChange={(value) => handleAboutChange('image3', value)}
              placeholder="URL de la troisième image"
            />
          </div>
        </div>

        {/* Caractéristiques */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Caractéristiques du restaurant</h3>
          <div className="space-y-4">
            {config.features.map((feature, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-700">Caractéristique #{index + 1}</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={feature.description}
                      onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;