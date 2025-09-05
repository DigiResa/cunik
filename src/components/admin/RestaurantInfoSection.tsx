import React from 'react';
import { Store } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';

interface RestaurantInfoSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const RestaurantInfoSection: React.FC<RestaurantInfoSectionProps> = ({ config, updateConfig }) => {
  const handleRestaurantChange = (field: keyof SiteConfig['restaurant'], value: string) => {
    updateConfig({
      ...config,
      restaurant: { ...config.restaurant, [field]: value }
    });
  };

  const handleHoursChange = (field: keyof SiteConfig['hours'], value: string) => {
    updateConfig({
      ...config,
      hours: { ...config.hours, [field]: value }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden w-full">
      <div className="flex items-center space-x-3 mb-6">
        <Store className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">🏪 Informations Restaurant</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full overflow-hidden">
        {/* Informations générales */}
        <div className="space-y-4 order-2 md:order-1 w-full overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Informations générales</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom du restaurant</label>
            <input
              type="text"
              value={config.restaurant.name}
              onChange={(e) => handleRestaurantChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0 max-w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slogan</label>
            <input
              type="text"
              value={config.restaurant.tagline}
              onChange={(e) => handleRestaurantChange('tagline', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0 max-w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={config.restaurant.description}
              onChange={(e) => handleRestaurantChange('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0 max-w-full resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
            <input
              type="text"
              value={config.restaurant.address}
              onChange={(e) => handleRestaurantChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0 max-w-full"
            />
          </div>
        </div>

        {/* Contact et horaires */}
        <div className="space-y-4 order-1 md:order-2 w-full overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact et horaires</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
            <input
              type="tel"
              value={config.restaurant.phone}
              onChange={(e) => handleRestaurantChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone commercial (événementiel)</label>
            <input
              type="tel"
              value="04 66 70 68 25"
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
            />
            <p className="text-xs text-gray-500 mt-1">Numéro dédié pour le thème événementiel</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={config.restaurant.email}
              onChange={(e) => handleRestaurantChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email commercial (événementiel)</label>
            <input
              type="email"
              value="commercial@hotels-nimes.fr"
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
            />
            <p className="text-xs text-gray-500 mt-1">Email dédié pour le thème événementiel</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Capacité maximale</label>
            <input
              type="text"
              value={config.restaurant.capacity}
              onChange={(e) => handleRestaurantChange('capacity', e.target.value)}
              placeholder="120"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Nombre maximum de personnes pour les événements</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Jours d'ouverture</label>
            <input
              type="text"
              value={config.hours.open_days}
              onChange={(e) => handleHoursChange('open_days', e.target.value)}
              placeholder="Ex: Mardi - Samedi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Déjeuner</label>
              <input
                type="text"
                value={config.hours.lunch}
                onChange={(e) => handleHoursChange('lunch', e.target.value)}
                placeholder="12h00 - 14h30"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dîner</label>
              <input
                type="text"
                value={config.hours.dinner}
                onChange={(e) => handleHoursChange('dinner', e.target.value)}
                placeholder="19h00 - 23h00"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Jours de fermeture</label>
            <input
              type="text"
              value={config.hours.closed}
              onChange={(e) => handleHoursChange('closed', e.target.value)}
              placeholder="Fermé dimanche et lundi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoSection;