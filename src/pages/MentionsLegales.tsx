import React from 'react';
import { ArrowLeft, Building, Mail, Phone, Globe } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const MentionsLegales = () => {
  const { config } = useConfig();

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: 'red-900',
        secondary: 'amber-400',
        solid: 'red-900'
      }
    : {
        primary: 'sunset-base',
        secondary: 'sunset-accent',
        gradient: 'from-sunset-base to-sunset-accent'
      };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="/"
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Retour au site</span>
            </a>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light">
            Mentions
            <span className="block font-bold">Légales</span>
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          
          {/* Éditeur du site */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6 flex items-center`}>
              <Building className="h-6 w-6 mr-3" />
              Éditeur du site
            </h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Raison sociale :</strong> {config.restaurant.name}</p>
              <p><strong>Adresse :</strong> {config.restaurant.address}</p>
              <p><strong>Téléphone :</strong> {config.restaurant.phone}</p>
              <p><strong>Email :</strong> {config.restaurant.email}</p>
            </div>
          </section>

          {/* Hébergement et développement */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6 flex items-center`}>
              <Globe className="h-6 w-6 mr-3" />
              Hébergement et développement
            </h2>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="space-y-4 text-gray-700">
                <p><strong>Site réalisé par :</strong></p>
                <div className="ml-4 space-y-2">
                  <p><strong>SAS DigiResa</strong></p>
                  <p>Société par Actions Simplifiée</p>
                  <p><strong>Siège social :</strong> France</p>
                  <p><strong>Activité :</strong> Développement de solutions digitales pour la restauration</p>
                  <p><strong>Services :</strong> Création de sites web, systèmes de réservation en ligne, solutions digitales</p>
                </div>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6`}>
              Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6`}>
              Protection des données personnelles
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au 
                Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
                de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : {config.restaurant.email}
              </p>
              <p>
                Les données collectées via notre système de réservation sont traitées par DigiResa dans 
                le cadre de la gestion des réservations et de la relation client.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6`}>
              Cookies
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                Les cookies sont de petits fichiers texte stockés sur votre ordinateur par votre navigateur web.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
                le fonctionnement de certaines fonctionnalités du site, notamment le système de réservation.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6`}>
              Limitation de responsabilité
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                ou des lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de 
                bien vouloir le signaler par email à {config.restaurant.email}.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-2xl p-8 text-white`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Mail className="h-6 w-6 mr-3" />
              Contact
            </h2>
            <div className="space-y-3">
              <p>Pour toute question concernant ces mentions légales :</p>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>{config.restaurant.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>{config.restaurant.email}</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;