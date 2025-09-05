import React from 'react';
import { Instagram } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';

interface InstagramSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const InstagramSection: React.FC<InstagramSectionProps> = ({ config, updateConfig }) => {
  const handleInstagramChange = (field: keyof SiteConfig['instagram'], value: string) => {
    updateConfig({
      ...config,
      instagram: { ...config.instagram, [field]: value }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center space-x-3 mb-6">
        <Instagram className="h-6 w-6 text-pink-600" />
        <h2 className="text-2xl font-bold text-gray-800">📸 Section Instagram</h2>
      </div>

      <div className="space-y-6">
        {/* Titre et sous-titre */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
            <input
              type="text"
              value={config.instagram.title}
              onChange={(e) => handleInstagramChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre en surbrillance</label>
            <input
              type="text"
              value={config.instagram.title_highlight}
              onChange={(e) => handleInstagramChange('title_highlight', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre</label>
          <input
            type="text"
            value={config.instagram.subtitle}
            onChange={(e) => handleInstagramChange('subtitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={config.instagram.description}
            onChange={(e) => handleInstagramChange('description', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Section CTA */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Call-to-Action</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre CTA</label>
              <input
                type="text"
                value={config.instagram.cta_title}
                onChange={(e) => handleInstagramChange('cta_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bouton CTA</label>
              <input
                type="text"
                value={config.instagram.cta_button}
                onChange={(e) => handleInstagramChange('cta_button', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description CTA</label>
            <textarea
              value={config.instagram.cta_description}
              onChange={(e) => handleInstagramChange('cta_description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;