import React from 'react';
import { Handshake } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';
import ImageField from './ImageField';

interface PartnerSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ config, updateConfig }) => {
  const handlePartnerChange = (field: keyof SiteConfig['partner'], value: string) => {
    updateConfig({
      ...config,
      partner: { ...config.partner, [field]: value }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center space-x-3 mb-6">
        <Handshake className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">🤝 Section Partenaire</h2>
      </div>

      <div className="space-y-6">
        {/* Titre et sous-titre */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal</label>
            <input
              type="text"
              value={config.partner.title}
              onChange={(e) => handlePartnerChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre en surbrillance</label>
            <input
              type="text"
              value={config.partner.title_highlight}
              onChange={(e) => handlePartnerChange('title_highlight', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre</label>
            <input
              type="text"
              value={config.partner.subtitle}
              onChange={(e) => handlePartnerChange('subtitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description principale</label>
            <textarea
              value={config.partner.description}
              onChange={(e) => handlePartnerChange('description', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Contenu détaillé */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre du contenu</label>
            <input
              type="text"
              value={config.partner.content_title}
              onChange={(e) => handlePartnerChange('content_title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre du contenu (surbrillance)</label>
            <input
              type="text"
              value={config.partner.content_title_highlight}
              onChange={(e) => handlePartnerChange('content_title_highlight', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Premier paragraphe</label>
          <textarea
            value={config.partner.content_paragraph1}
            onChange={(e) => handlePartnerChange('content_paragraph1', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Deuxième paragraphe</label>
          <textarea
            value={config.partner.content_paragraph2}
            onChange={(e) => handlePartnerChange('content_paragraph2', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Informations du partenaire */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Informations du partenaire</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom du partenaire</label>
              <input
                type="text"
                value={config.partner.partner_name}
                onChange={(e) => handlePartnerChange('partner_name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site web du partenaire (optionnel)</label>
              <input
                type="url"
                value={config.partner.partner_website || ''}
                onChange={(e) => handlePartnerChange('partner_website', e.target.value)}
                placeholder="https://www.partenaire.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description du partenaire</label>
            <textarea
              value={config.partner.partner_description}
              onChange={(e) => handlePartnerChange('partner_description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Call-to-Action</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Texte du bouton</label>
              <input
                type="text"
                value={config.partner.cta_button}
                onChange={(e) => handlePartnerChange('cta_button', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lien du bouton (optionnel)</label>
              <input
                type="url"
                value={config.partner.cta_link || ''}
                onChange={(e) => handlePartnerChange('cta_link', e.target.value)}
                placeholder="https://www.exemple.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Images de la section partenaire</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ImageField
              label="Image 1"
              value={config.partner.image1 || ''}
              onChange={(value) => handlePartnerChange('image1', value)}
              placeholder="URL de la première image"
            />
            <ImageField
              label="Image 2"
              value={config.partner.image2 || ''}
              onChange={(value) => handlePartnerChange('image2', value)}
              placeholder="URL de la deuxième image"
            />
            <ImageField
              label="Image 3"
              value={config.partner.image3 || ''}
              onChange={(value) => handlePartnerChange('image3', value)}
              placeholder="URL de la troisième image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;