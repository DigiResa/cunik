import React from 'react';
import { Layout } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';

interface HeaderFooterSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const HeaderFooterSection: React.FC<HeaderFooterSectionProps> = ({ config, updateConfig }) => {
  const handleHeaderChange = (field: keyof SiteConfig['header'], value: string) => {
    updateConfig({
      ...config,
      header: { ...config.header, [field]: value }
    });
  };

  const handleFooterChange = (field: keyof SiteConfig['footer'], value: string) => {
    updateConfig({
      ...config,
      footer: { ...config.footer, [field]: value }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Layout className="h-6 w-6 text-gray-600" />
        <h2 className="text-2xl font-bold text-gray-800">🔗 Header & Footer</h2>
      </div>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Navigation Header</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">L'Esprit C Unik</label>
              <input
                type="text"
                value={config.header.nav_home}
                onChange={(e) => handleHeaderChange('nav_home', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Événements</label>
              <input
                type="text"
                value={config.header.nav_events}
                onChange={(e) => handleHeaderChange('nav_events', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Privatisation</label>
              <input
                type="text"
                value={config.header.nav_privatization}
                onChange={(e) => handleHeaderChange('nav_privatization', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Carte</label>
              <input
                type="text"
                value={config.header.nav_menu}
                onChange={(e) => handleHeaderChange('nav_menu', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
              <input
                type="text"
                value={config.header.nav_contact}
                onChange={(e) => handleHeaderChange('nav_contact', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bouton réservation</label>
            <input
              type="text"
              value={config.header.reservation_button}
              onChange={(e) => handleHeaderChange('reservation_button', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Footer */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Footer</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre Contact</label>
              <input
                type="text"
                value={config.footer.contact_title}
                onChange={(e) => handleFooterChange('contact_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre Horaires</label>
              <input
                type="text"
                value={config.footer.hours_title}
                onChange={(e) => handleFooterChange('hours_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Texte réservation</label>
              <input
                type="text"
                value={config.footer.reservation_text}
                onChange={(e) => handleFooterChange('reservation_text', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Copyright</label>
              <input
                type="text"
                value={config.footer.copyright}
                onChange={(e) => handleFooterChange('copyright', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lien mentions légales</label>
              <input
                type="text"
                value={config.footer.legal_link}
                onChange={(e) => handleFooterChange('legal_link', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lien confidentialité</label>
              <input
                type="text"
                value={config.footer.privacy_link}
                onChange={(e) => handleFooterChange('privacy_link', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFooterSection;