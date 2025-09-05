import React from 'react';
import { Home } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';
import ImageField from './ImageField';

interface HeroSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ config, updateConfig }) => {
  const handleHeroChange = (field: keyof SiteConfig['hero'], value: string) => {
    updateConfig({
      ...config,
      hero: { ...config.hero, [field]: value }
    });
  };

  const handleStatsChange = (field: keyof SiteConfig['hero']['stats'], value: string) => {
    updateConfig({
      ...config,
      hero: {
        ...config.hero,
        stats: { ...config.hero.stats, [field]: value }
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden w-full">
      <div className="flex items-center space-x-3 mb-6">
        <Home className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">🏠 Section Hero</h2>
      </div>

      <div className="space-y-6 w-full overflow-hidden">
        {/* Textes par thème */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Textes par thème</h3>
          
          {/* Thème Caraïbes */}
          <div className="border border-blue-200 rounded-xl p-6 mb-6 bg-blue-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-blue-800">🌴 Thème Caraïbes</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal</label>
                <input
                  type="text"
                  value={config.hero.title_caraibes}
                  onChange={(e) => handleHeroChange('title_caraibes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre (en gras)</label>
                <input
                  type="text"
                  value={config.hero.subtitle_caraibes}
                  onChange={(e) => handleHeroChange('subtitle_caraibes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description principale</label>
                <textarea
                  value={config.hero.description_caraibes}
                  onChange={(e) => handleHeroChange('description_caraibes', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sous-description</label>
                <textarea
                  value={config.hero.subdescription_caraibes}
                  onChange={(e) => handleHeroChange('subdescription_caraibes', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>
          
          {/* Thème Cubain */}
          <div className="border border-red-200 rounded-xl p-6 bg-red-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-4 h-4 bg-red-800 rounded-full"></div>
              <h4 className="text-lg font-semibold text-red-800">🥃 Thème Cubain</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal</label>
                <input
                  type="text"
                  value={config.hero.title_cubain}
                  onChange={(e) => handleHeroChange('title_cubain', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre (en gras)</label>
                <input
                  type="text"
                  value={config.hero.subtitle_cubain}
                  onChange={(e) => handleHeroChange('subtitle_cubain', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description principale</label>
                <textarea
                  value={config.hero.description_cubain}
                  onChange={(e) => handleHeroChange('description_cubain', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sous-description</label>
                <textarea
                  value={config.hero.subdescription_cubain}
                  onChange={(e) => handleHeroChange('subdescription_cubain', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Boutons CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bouton principal</label>
            <input
              type="text"
              value={config.hero.cta_primary}
              onChange={(e) => handleHeroChange('cta_primary', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bouton secondaire</label>
            <input
              type="text"
              value={config.hero.cta_secondary}
              onChange={(e) => handleHeroChange('cta_secondary', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-full"
            />
          </div>
        </div>

        {/* Image */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Images de fond par thème</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ImageField
              label="Image Caraïbes"
              value={config.hero.image_caraibes}
              onChange={(value) => handleHeroChange('image_caraibes', value)}
              placeholder="URL de l'image pour le thème Caraïbes"
            />
            <ImageField
              label="Image Cubain"
              value={config.hero.image_cubain}
              onChange={(value) => handleHeroChange('image_cubain', value)}
              placeholder="URL de l'image pour le thème Cubain"
            />
            <ImageField
              label="Image Événementiel"
              value={config.hero.image_evenementiel}
              onChange={(value) => handleHeroChange('image_evenementiel', value)}
              placeholder="URL de l'image pour le thème Événementiel"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            L'image affichée dépend du thème sélectionné dans la section Apparence
          </p>
        </div>

        {/* Statistiques */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Statistiques (si utilisées)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Label capacité</label>
              <input
                type="text"
                value={config.hero.stats?.capacity_label || ''}
                onChange={(e) => handleStatsChange('capacity_label', e.target.value)}
                placeholder="Couverts"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Label expérience</label>
              <input
                type="text"
                value={config.hero.stats?.experience_label || ''}
                onChange={(e) => handleStatsChange('experience_label', e.target.value)}
                placeholder="Ans d'expérience"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;