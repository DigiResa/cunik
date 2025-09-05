import React from 'react';
import { Wine, Flame } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';
import ImageField from './ImageField';

interface WineCigarSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const WineCigarSection: React.FC<WineCigarSectionProps> = ({ config, updateConfig }) => {
  const handleWineChange = (field: keyof SiteConfig['wine'], value: string) => {
    updateConfig({
      ...config,
      wine: { ...config.wine, [field]: value }
    });
  };

  const handleCigarChange = (field: keyof SiteConfig['cigar'], value: string) => {
    updateConfig({
      ...config,
      cigar: { ...config.cigar, [field]: value }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center space-x-3 mb-6">
        <Wine className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">🍷 Sections Vins & Cigares</h2>
      </div>

      <div className="space-y-12">
        {/* Section Vins */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Wine className="h-5 w-5 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-700">Cave à Vins</h3>
          </div>

          <div className="space-y-6">
            {/* Titre et description */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                <input
                  type="text"
                  value={config.wine.title}
                  onChange={(e) => handleWineChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre en surbrillance</label>
                <input
                  type="text"
                  value={config.wine.title_highlight}
                  onChange={(e) => handleWineChange('title_highlight', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={config.wine.description}
                onChange={(e) => handleWineChange('description', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Images */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Images de la section vins</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <ImageField
                  label="Image 1"
                  value={config.wine.image1 || ''}
                  onChange={(value) => handleWineChange('image1', value)}
                  placeholder="URL de la première image"
                />
                <ImageField
                  label="Image 2"
                  value={config.wine.image2 || ''}
                  onChange={(value) => handleWineChange('image2', value)}
                  placeholder="URL de la deuxième image"
                />
                <ImageField
                  label="Image 3"
                  value={config.wine.image3 || ''}
                  onChange={(value) => handleWineChange('image3', value)}
                  placeholder="URL de la troisième image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Cigares */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center space-x-3 mb-6">
            <Flame className="h-5 w-5 text-orange-600" />
            <h3 className="text-xl font-semibold text-gray-700">Fumoir & Cigares</h3>
          </div>

          <div className="space-y-6">
            {/* Titre et description */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                <input
                  type="text"
                  value={config.cigar.title}
                  onChange={(e) => handleCigarChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre en surbrillance</label>
                <input
                  type="text"
                  value={config.cigar.title_highlight}
                  onChange={(e) => handleCigarChange('title_highlight', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={config.cigar.description}
                onChange={(e) => handleCigarChange('description', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Images */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Images de la section cigares</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <ImageField
                  label="Image 1"
                  value={config.cigar.image1 || ''}
                  onChange={(value) => handleCigarChange('image1', value)}
                  placeholder="URL de la première image"
                />
                <ImageField
                  label="Image 2"
                  value={config.cigar.image2 || ''}
                  onChange={(value) => handleCigarChange('image2', value)}
                  placeholder="URL de la deuxième image"
                />
                <ImageField
                  label="Image 3"
                  value={config.cigar.image3 || ''}
                  onChange={(value) => handleCigarChange('image3', value)}
                  placeholder="URL de la troisième image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineCigarSection;