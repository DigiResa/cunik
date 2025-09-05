import React from 'react';
import { Users } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';

interface PrivatizationSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const PrivatizationSection: React.FC<PrivatizationSectionProps> = ({ config, updateConfig }) => {
  const handleEventsChange = (field: keyof SiteConfig['events'], value: string) => {
    updateConfig({
      ...config,
      events: { ...config.events, [field]: value }
    });
  };

  const handleEventTypeChange = (index: number, field: string, value: string | string[]) => {
    const newTypes = [...config.events.types];
    newTypes[index] = { ...newTypes[index], [field]: value };
    updateConfig({
      ...config,
      events: { ...config.events, types: newTypes }
    });
  };

  const handleFeatureChange = (typeIndex: number, featureIndex: number, value: string) => {
    const newTypes = [...config.events.types];
    const newFeatures = [...newTypes[typeIndex].features];
    newFeatures[featureIndex] = value;
    newTypes[typeIndex] = { ...newTypes[typeIndex], features: newFeatures };
    updateConfig({
      ...config,
      events: { ...config.events, types: newTypes }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Users className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">👥 Section Privatisation</h2>
      </div>

      <div className="space-y-6">
        {/* Titre et description */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
            <input
              type="text"
              value={config.events.title}
              onChange={(e) => handleEventsChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Titre en surbrillance</label>
            <input
              type="text"
              value={config.events.title_highlight}
              onChange={(e) => handleEventsChange('title_highlight', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={config.events.description}
            onChange={(e) => handleEventsChange('description', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Section capacité */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Section Capacité</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre capacité</label>
              <input
                type="text"
                value={config.events.capacity_title}
                onChange={(e) => handleEventsChange('capacity_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre capacité (surbrillance)</label>
              <input
                type="text"
                value={config.events.capacity_title_highlight}
                onChange={(e) => handleEventsChange('capacity_title_highlight', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description capacité</label>
            <textarea
              value={config.events.capacity_description}
              onChange={(e) => handleEventsChange('capacity_description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Types d'événements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Types d'événements</h3>
          <div className="space-y-6">
            {config.events.types.map((eventType, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium text-gray-700 mb-4">Type #{index + 1}</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                    <input
                      type="text"
                      value={eventType.title}
                      onChange={(e) => handleEventTypeChange(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre</label>
                    <input
                      type="text"
                      value={eventType.subtitle}
                      onChange={(e) => handleEventTypeChange(index, 'subtitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={eventType.description}
                    onChange={(e) => handleEventTypeChange(index, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Caractéristiques</label>
                  <div className="grid grid-cols-2 gap-2">
                    {eventType.features.map((feature, featureIndex) => (
                      <input
                        key={featureIndex}
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, featureIndex, e.target.value)}
                        className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Images de la section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Images de la section privatisation</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image 1</label>
              <input
                type="url"
                value={config.events.image1 || ''}
                onChange={(e) => handleEventsChange('image1', e.target.value)}
                placeholder="URL de la première image"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image 2</label>
              <input
                type="url"
                value={config.events.image2 || ''}
                onChange={(e) => handleEventsChange('image2', e.target.value)}
                placeholder="URL de la deuxième image"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image 3</label>
              <input
                type="url"
                value={config.events.image3 || ''}
                onChange={(e) => handleEventsChange('image3', e.target.value)}
                placeholder="URL de la troisième image"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Section contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Section Contact</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Titre contact</label>
              <input
                type="text"
                value={config.events.contact_title}
                onChange={(e) => handleEventsChange('contact_title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description contact</label>
              <input
                type="text"
                value={config.events.contact_description}
                onChange={(e) => handleEventsChange('contact_description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatizationSection;