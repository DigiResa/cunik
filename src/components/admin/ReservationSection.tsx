import React from 'react';
import { Calendar } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';

interface ReservationSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const ReservationSection: React.FC<ReservationSectionProps> = ({ config, updateConfig }) => {
  const handleReservationChange = (field: keyof SiteConfig['reservation'], value: string) => {
    updateConfig({
      ...config,
      reservation: { ...config.reservation, [field]: value }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">📅 Section Réservation</h2>
      </div>

      <div className="space-y-6">
        {/* Titre principal */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
            <input
              type="text"
              value={config.reservation.title}
              onChange={(e) => handleReservationChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre en surbrillance</label>
            <input
              type="text"
              value={config.reservation.title_highlight}
              onChange={(e) => handleReservationChange('title_highlight', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={config.reservation.description}
            onChange={(e) => handleReservationChange('description', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Section iframe */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Widget de réservation</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre iframe</label>
              <input
                type="text"
                value={config.reservation.iframe_title}
                onChange={(e) => handleReservationChange('iframe_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre iframe</label>
              <input
                type="text"
                value={config.reservation.iframe_subtitle}
                onChange={(e) => handleReservationChange('iframe_subtitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Panel d'informations */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Panel d'informations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre info</label>
              <input
                type="text"
                value={config.reservation.info_title}
                onChange={(e) => handleReservationChange('info_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Texte évaluation</label>
              <input
                type="text"
                value={config.reservation.rating_text}
                onChange={(e) => handleReservationChange('rating_text', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Réservation par téléphone */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Réservation par téléphone</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre téléphone</label>
              <input
                type="text"
                value={config.reservation.phone_booking_title}
                onChange={(e) => handleReservationChange('phone_booking_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre conseil</label>
              <input
                type="text"
                value={config.reservation.tip_title}
                onChange={(e) => handleReservationChange('tip_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description téléphone</label>
            <textarea
              value={config.reservation.phone_booking_description}
              onChange={(e) => handleReservationChange('phone_booking_description', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description conseil</label>
            <textarea
              value={config.reservation.tip_description}
              onChange={(e) => handleReservationChange('tip_description', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;