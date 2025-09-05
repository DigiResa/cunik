import React from 'react';
import { Palette, Eye, EyeOff } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';
import ImageField from './ImageField';

interface AppearanceSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const AppearanceSection: React.FC<AppearanceSectionProps> = ({ config, updateConfig }) => {
  const handleThemeChange = (theme: 'caraibes' | 'cubain' | 'evenementiel') => {
    // Conserver toutes les données existantes, changer seulement le thème
    const newConfig = {
      ...config,
      theme,
      // Conserver explicitement les données importantes
      restaurant: { ...config.restaurant },
      hero: { ...config.hero },
      about: { ...config.about },
      events: { ...config.events },
      instagram: { ...config.instagram },
      reservation: { ...config.reservation },
      footer: { ...config.footer },
      header: { ...config.header },
      hours: { ...config.hours },
      social: { ...config.social },
      instagram_posts: [...config.instagram_posts],
      features: [...config.features],
      sections: { ...config.sections }
    };
    updateConfig(newConfig);
  };

  const handleLogoChange = (logoType: 'logo_caraibes' | 'logo_cubain', value: string) => {
    updateConfig({
      ...config,
      restaurant: { ...config.restaurant, [logoType]: value }
    });
  };

  const handleSectionToggle = (section: keyof SiteConfig['sections']) => {
    updateConfig({
      ...config,
      sections: { ...config.sections, [section]: !config.sections[section] }
    });
  };

  const handleColorChange = (theme: 'caraibes' | 'cubain' | 'evenementiel', colorKey: string, value: string) => {
    updateConfig({
      ...config,
      theme_colors: {
        ...config.theme_colors,
        [theme]: {
          ...config.theme_colors[theme],
          [colorKey]: value
        }
      }
    });
  };

  const sections = [
    { key: 'hero' as const, name: 'Section Hero', description: 'Bannière d\'accueil avec titre et image' },
    ...(config.theme === 'evenementiel' ? [
      // Sections spécifiques au thème événementiel
      { key: 'privatization' as const, name: 'Types d\'Événements', description: 'EVJF, mariages, obsèques, anniversaires, séminaires...' },
    ] : [
      // Sections pour les autres thèmes
      { key: 'about' as const, name: 'À Propos', description: 'Histoire et présentation du restaurant' },
      { key: 'events' as const, name: 'Nos Événements', description: 'Liste des événements programmés' },
      { key: 'privatization' as const, name: 'Privatisation', description: 'Offres de privatisation d\'espace' },
      { key: 'wine' as const, name: 'Cave à Vins', description: 'Présentation de la sélection de vins' },
      { key: 'cigar' as const, name: 'Fumoir & Cigares', description: 'Section cigares et fumoir' },
      { key: 'partner' as const, name: 'Partenaire', description: 'Mise en avant d\'un producteur ou partenaire' },
      { key: 'instagram' as const, name: 'Instagram', description: 'Galerie et lien vers Instagram' },
      { key: 'reservation' as const, name: 'Réservation', description: 'Widget de réservation en ligne' },
      { key: 'widget' as const, name: 'Widget Flottant', description: 'Bouton de réservation en bas à droite' },
    ]),
    { key: 'loader' as const, name: 'Loader d\'accueil', description: 'Animation de chargement au démarrage du site (3 secondes)' }
  ];

  const handleDevModeToggle = () => {
    updateConfig({
      ...config,
      dev_mode: !config.dev_mode
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden w-full">
      <div className="flex items-center space-x-3 mb-6">
        <Palette className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">🎨 Apparence & Sections</h2>
      </div>

      <div className="space-y-8 w-full overflow-hidden">
        {/* Sélection du thème */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Thème du site</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => handleThemeChange('caraibes')}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                config.theme === 'caraibes'
                  ? 'border-2 shadow-lg'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{
                borderColor: config.theme === 'caraibes' ? config.theme_colors.caraibes.primary : undefined,
                backgroundColor: config.theme === 'caraibes' ? `${config.theme_colors.caraibes.primary}10` : undefined
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: config.theme_colors.caraibes.primary }}
                ></div>
                <h4 className="font-semibold text-gray-800">Thème Caraïbes</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Ambiance tropicale avec des dégradés colorés et des couleurs chaudes ensoleillées</p>
              <div className="flex space-x-2 mt-3">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.caraibes.primary }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.caraibes.secondary }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.caraibes.accent }}></div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                ✨ Dégradés colorés • 🌴 Style tropical • 🌺 Couleurs vives
              </div>
            </div>

            <div
              onClick={() => handleThemeChange('cubain')}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                config.theme === 'cubain'
                  ? 'border-2 shadow-lg'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{
                borderColor: config.theme === 'cubain' ? config.theme_colors.cubain.primary : undefined,
                backgroundColor: config.theme === 'cubain' ? `${config.theme_colors.cubain.primary}10` : undefined
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: config.theme_colors.cubain.primary }}
                ></div>
                <h4 className="font-semibold text-gray-800">Thème Cubain</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Atmosphère lounge sophistiquée avec des couleurs unies bordeaux et or</p>
              <div className="flex space-x-2 mt-3">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.cubain.primary }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.cubain.secondary }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.cubain.accent }}></div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                🍷 Couleurs unies • 🎺 Style lounge • 🥃 Ambiance feutrée
              </div>
            </div>

            <div
              onClick={() => handleThemeChange('evenementiel')}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                config.theme === 'evenementiel'
                  ? 'border-2 shadow-lg'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{
                borderColor: config.theme === 'evenementiel' ? config.theme_colors.evenementiel.primary : undefined,
                backgroundColor: config.theme === 'evenementiel' ? `${config.theme_colors.evenementiel.primary}10` : undefined
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: config.theme_colors.evenementiel.primary }}
                ></div>
                <h4 className="font-semibold text-gray-800">Thème Événementiel</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Spécialisé dans l'organisation d'événements sur mesure</p>
              <div className="flex space-x-2 mt-3">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.evenementiel.primary }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.evenementiel.secondary }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: config.theme_colors.evenementiel.accent }}></div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                🎉 Événements • 💍 Mariages • 🎊 EVJF
              </div>
            </div>
          </div>
        </div>

        {/* Éditeur de couleurs */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Couleurs des thèmes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Thème Caraïbes */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: config.theme_colors.caraibes.primary }}
                ></div>
                Thème Caraïbes
              </h4>
              <div className="space-y-4">
                {Object.entries(config.theme_colors.caraibes).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-gray-700 w-20 capitalize">
                      {key === 'primary' ? 'Principal' : 
                       key === 'secondary' ? 'Secondaire' :
                       key === 'accent' ? 'Accent' :
                       key === 'light' ? 'Clair' : 'Foncé'}
                    </label>
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => handleColorChange('caraibes', key, e.target.value)}
                      className="w-12 h-8 rounded border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleColorChange('caraibes', key, e.target.value)}
                      className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                      placeholder="#000000"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Thème Cubain */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: config.theme_colors.cubain.primary }}
                ></div>
                Thème Cubain
              </h4>
              <div className="space-y-4">
                {Object.entries(config.theme_colors.cubain).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-gray-700 w-20 capitalize">
                      {key === 'primary' ? 'Principal' : 
                       key === 'secondary' ? 'Secondaire' :
                       key === 'accent' ? 'Accent' :
                       key === 'light' ? 'Clair' : 'Foncé'}
                    </label>
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => handleColorChange('cubain', key, e.target.value)}
                      className="w-12 h-8 rounded border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleColorChange('cubain', key, e.target.value)}
                      className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                      placeholder="#000000"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Thème Événementiel */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: config.theme_colors.evenementiel.primary }}
                ></div>
                Thème Événementiel
              </h4>
              <div className="space-y-4">
                {Object.entries(config.theme_colors.evenementiel).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-gray-700 w-20 capitalize">
                      {key === 'primary' ? 'Principal' : 
                       key === 'secondary' ? 'Secondaire' :
                       key === 'accent' ? 'Accent' :
                       key === 'light' ? 'Clair' : 'Foncé'}
                    </label>
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => handleColorChange('evenementiel', key, e.target.value)}
                      className="w-12 h-8 rounded border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleColorChange('evenementiel', key, e.target.value)}
                      className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                      placeholder="#000000"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logos par thème */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Logos par thème</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ImageField
                label="Logo Caraïbes"
                value={config.restaurant.logo_caraibes}
                onChange={(value) => handleLogoChange('logo_caraibes', value)}
                placeholder="URL du logo pour le thème Caraïbes"
              />
            </div>
            <div>
              <ImageField
                label="Logo Cubain"
                value={config.restaurant.logo_cubain}
                onChange={(value) => handleLogoChange('logo_cubain', value)}
                placeholder="URL du logo pour le thème Cubain"
              />
            </div>
          </div>
        </div>

        {/* Gestion des sections */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Sections du site</h3>
          <p className="text-sm text-gray-600 mb-6">Activez ou désactivez les sections qui apparaissent sur votre site</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section) => (
              <div
                key={section.key}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  config.sections[section.key]
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">{section.name}</h4>
                  <button
                    onClick={() => handleSectionToggle(section.key)}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      config.sections[section.key]
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-400 text-white hover:bg-gray-500'
                    }`}
                  >
                    {config.sections[section.key] ? (
                      <>
                        <Eye className="w-4 h-4" />
                        <span>Activée</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-4 h-4" />
                        <span>Désactivée</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mode Développement */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Mode Développement</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">DEV</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mode DEV</h4>
                  <p className="text-sm text-gray-600">Sélecteur de thème sur le site</p>
                </div>
              </div>
              <button
                onClick={handleDevModeToggle}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  config.dev_mode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-400 text-white hover:bg-gray-500'
                }`}
              >
                {config.dev_mode ? (
                  <>
                    <span>✓</span>
                    <span>Activé</span>
                  </>
                ) : (
                  <>
                    <span>○</span>
                    <span>Désactivé</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-sm text-blue-700">
              <p className="mb-2">
                <strong>Quand activé :</strong> Un bouton flottant apparaît en haut à droite du site permettant de changer le thème en temps réel.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Idéal pour tester les thèmes rapidement</li>
                <li>Visible uniquement quand le mode DEV est activé</li>
                <li>Changement instantané sans rechargement</li>
                <li>À désactiver en production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSection;