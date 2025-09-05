import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Database, Settings } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const PolitiqueConfidentialite = () => {
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
            Politique de
            <span className="block font-bold">Confidentialité</span>
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-2xl p-8 text-white mb-8`}>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Votre vie privée nous tient à cœur</h2>
              </div>
              <p className="text-lg opacity-90 leading-relaxed">
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                vos données personnelles lorsque vous utilisez notre site web et nos services de réservation.
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              <strong>Dernière mise à jour :</strong> Janvier 2025
            </p>
          </section>

          {/* Responsable du traitement */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6 flex items-center`}>
              <Users className="h-6 w-6 mr-3" />
              Responsable du traitement
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="space-y-3 text-gray-700">
                <p><strong>{config.restaurant.name}</strong></p>
                <p>Adresse : {config.restaurant.address}</p>
                <p>Email : {config.restaurant.email}</p>
                <p>Téléphone : {config.restaurant.phone}</p>
              </div>
            </div>
          </section>

          {/* Données collectées */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6 flex items-center`}>
              <Database className="h-6 w-6 mr-3" />
              Données que nous collectons
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📝 Données de réservation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nom et prénom</li>
                  <li>• Adresse email</li>
                  <li>• Numéro de téléphone</li>
                  <li>• Date et heure de réservation</li>
                  <li>• Nombre de personnes</li>
                  <li>• Préférences alimentaires ou demandes spéciales</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🌐 Données de navigation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Adresse IP</li>
                  <li>• Type de navigateur et version</li>
                  <li>• Pages visitées et temps passé</li>
                  <li>• Données de géolocalisation (si autorisée)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Utilisation des données */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6 flex items-center`}>
              <Eye className="h-6 w-6 mr-3" />
              Comment nous utilisons vos données
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">🍽️ Gestion des réservations</h3>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Confirmer votre réservation</li>
                  <li>• Vous contacter en cas de modification</li>
                  <li>• Préparer votre accueil</li>
                  <li>• Gérer les préférences alimentaires</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">📊 Amélioration du service</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Analyser la fréquentation</li>
                  <li>• Optimiser nos horaires</li>
                  <li>• Personnaliser votre expérience</li>
                  <li>• Améliorer notre site web</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Partenaire technique */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6`}>
              Partenaire technique
            </h2>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">SAS DigiResa</h3>
                  <p className="text-blue-600 text-sm">Partenaire technologique</p>
                </div>
              </div>
              <div className="space-y-3 text-blue-700">
                <p>
                  <strong>DigiResa</strong> est notre partenaire technologique qui développe et maintient :
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Le système de réservation en ligne</li>
                  <li>• La gestion des données clients</li>
                  <li>• L'infrastructure technique du site</li>
                  <li>• Les outils d'analyse et de reporting</li>
                </ul>
                <p className="text-sm">
                  DigiResa traite vos données en tant que sous-traitant, conformément au RGPD, 
                  et uniquement selon nos instructions.
                </p>
              </div>
            </div>
          </section>

          {/* Vos droits */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6 flex items-center`}>
              <Lock className="h-6 w-6 mr-3" />
              Vos droits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Droit d'accès", desc: "Connaître les données que nous avons sur vous" },
                { title: "Droit de rectification", desc: "Corriger vos informations personnelles" },
                { title: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                { title: "Droit à la portabilité", desc: "Récupérer vos données dans un format lisible" },
                { title: "Droit de limitation", desc: "Limiter l'utilisation de vos données" }
              ].map((right, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{right.title}</h3>
                  <p className="text-sm text-gray-600">{right.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800">
                <strong>Comment exercer vos droits :</strong> Contactez-nous à {config.restaurant.email} 
                avec une pièce d'identité pour vérification.
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6`}>
              Sécurité de vos données
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                protéger vos données personnelles contre :
              </p>
              <ul className="space-y-2 ml-6">
                <li>• L'accès non autorisé</li>
                <li>• La modification, divulgation ou destruction</li>
                <li>• La perte accidentelle</li>
                <li>• Les cyberattaques</li>
              </ul>
              <p>
                Nos serveurs sont sécurisés et les données sont chiffrées lors de leur transmission.
              </p>
            </div>
          </section>

          {/* Conservation */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} mb-6`}>
              Durée de conservation
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium">Données de réservation</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">3 ans</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium">Données de navigation</span>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">13 mois</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Données marketing (si consentement)</span>
                  <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">3 ans</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className={`${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`} rounded-2xl p-8 text-white`}>
            <h2 className="text-2xl font-bold mb-6">Des questions ?</h2>
            <div className="space-y-4">
              <p className="text-lg opacity-90">
                Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span>📧</span>
                  </div>
                  <span>{config.restaurant.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span>📞</span>
                  </div>
                  <span>{config.restaurant.phone}</span>
                </div>
              </div>
              <p className="text-sm opacity-75 mt-6">
                Vous pouvez également contacter la CNIL (Commission Nationale de l'Informatique et des Libertés) 
                si vous estimez que vos droits ne sont pas respectés.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;