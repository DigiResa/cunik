import React, { useState } from 'react';
import { ArrowLeft, Settings } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import AdminLogin from '../components/AdminLogin';
import AppearanceSection from '../components/admin/AppearanceSection';
import RestaurantInfoSection from '../components/admin/RestaurantInfoSection';
import SocialMediaSection from '../components/admin/SocialMediaSection';
import EventsSection from '../components/admin/EventsSection';
import MenuSection from '../components/admin/MenuSection';
import HeroSection from '../components/admin/HeroSection';
import AboutSection from '../components/admin/AboutSection';
import PrivatizationSection from '../components/admin/PrivatizationSection';
import InstagramSection from '../components/admin/InstagramSection';
import ReservationSection from '../components/admin/ReservationSection';
import HeaderFooterSection from '../components/admin/HeaderFooterSection';
import WineCigarSection from '../components/admin/WineCigarSection';
import PartnerSection from '../components/admin/PartnerSection';
import EvenementielSection from '../components/admin/EvenementielSection';

const Admin = () => {
  const { config, updateConfig } = useConfig();
  const [activeSection, setActiveSection] = useState('appearance');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Vérifier si l'utilisateur est déjà connecté
    return localStorage.getItem('adminAuthenticated') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('adminAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  // Si pas authentifié, afficher la page de login
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const sections = [
    { id: 'appearance', name: '🎨 Apparence', icon: '🎨' },
    { id: 'restaurant', name: '🏪 Restaurant', icon: '🏪' },
    { id: 'hero', name: '🏠 Hero', icon: '🏠' },
    { id: 'evenementiel', name: '🎉 Événementiel', icon: '🎉' },
    { id: 'about', name: 'ℹ️ À Propos', icon: 'ℹ️' },
    { id: 'privatization', name: '👥 Privatisation', icon: '👥' },
    { id: 'social', name: '📱 Réseaux sociaux', icon: '📱' },
    { id: 'instagram', name: '📸 Instagram', icon: '📸' },
    { id: 'partner', name: '🤝 Partenaire', icon: '🤝' },
    { id: 'reservation', name: '📅 Réservation', icon: '📅' },
    { id: 'events', name: '📅 Événements', icon: '📅' },
    { id: 'menu', name: '🍽️ Menu', icon: '🍽️' },
    { id: 'wine-cigar', name: '🍷 Vins & Cigares', icon: '🍷' },
    { id: 'header-footer', name: '🔗 Header/Footer', icon: '🔗' },
    { id: 'security', name: '🔐 Sécurité', icon: '🔐' }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'appearance':
        return <AppearanceSection config={config} updateConfig={updateConfig} />;
      case 'restaurant':
        return <RestaurantInfoSection config={config} updateConfig={updateConfig} />;
      case 'hero':
        return <HeroSection config={config} updateConfig={updateConfig} />;
      case 'evenementiel':
        return <EvenementielSection config={config} updateConfig={updateConfig} />;
      case 'about':
        return <AboutSection config={config} updateConfig={updateConfig} />;
      case 'privatization':
        return <PrivatizationSection config={config} updateConfig={updateConfig} />;
      case 'social':
        return <SocialMediaSection config={config} updateConfig={updateConfig} />;
      case 'instagram':
        return <InstagramSection config={config} updateConfig={updateConfig} />;
      case 'reservation':
        return <ReservationSection config={config} updateConfig={updateConfig} />;
      case 'partner':
        return <PartnerSection config={config} updateConfig={updateConfig} />;
      case 'events':
        return <EventsSection />;
      case 'menu':
        return <MenuSection />;
      case 'wine-cigar':
        return <WineCigarSection config={config} updateConfig={updateConfig} />;
      case 'header-footer':
        return <HeaderFooterSection config={config} updateConfig={updateConfig} />;
      case 'security':
        return <SecuritySection />;
      default:
        return <AppearanceSection config={config} updateConfig={updateConfig} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 lg:space-x-4">
              <a
                href="/"
                className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Retour au site</span>
                <span className="sm:hidden">Retour</span>
              </a>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Settings className="h-6 w-6 text-blue-600" />
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">
                  <span className="hidden sm:inline">Administration</span>
                  <span className="sm:hidden">Admin</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <button
                onClick={() => {
                  localStorage.setItem('siteConfig', JSON.stringify(config));
                  alert('Configuration sauvegardée avec succès !');
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-3 lg:px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1 lg:space-x-2 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                <span>💾</span>
                <span className="hidden sm:inline">Sauvegarder</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1 lg:space-x-2 text-sm lg:text-base"
              >
                <span>🚪</span>
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 lg:sticky lg:top-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Sections</h2>
              
              {/* Mobile: Horizontal scroll */}
              <div className="lg:hidden overflow-x-auto pb-2 mb-4">
                <div className="flex space-x-2 min-w-max">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 text-sm font-medium whitespace-nowrap ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Desktop: Vertical list */}
              <nav className="hidden lg:block space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium">{section.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant pour la section sécurité
const SecuritySection = () => {
  const [currentPassword, setCurrentPassword] = useState(() => {
    return localStorage.getItem('adminSecretPassword') || 'admin1';
  });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);

  const handleUpdatePassword = () => {
    if (newPassword.length !== 6) {
      alert('Le mot de passe doit contenir exactement 6 caractères');
      return;
    }
    if (!/^[a-zA-Z0-9]{6}$/.test(newPassword)) {
      alert('Le mot de passe ne doit contenir que des lettres et des chiffres');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    
    localStorage.setItem('adminSecretPassword', newPassword);
    setCurrentPassword(newPassword);
    setNewPassword('');
    setConfirmPassword('');
    alert('Mot de passe mis à jour avec succès !');
  };

  const handleResetPassword = () => {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser le mot de passe par défaut ?')) {
      localStorage.removeItem('adminSecretPassword');
      setCurrentPassword('admin1');
      setNewPassword('');
      setConfirmPassword('');
      alert('Mot de passe réinitialisé par défaut');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-6 w-6 text-red-600">🔐</div>
        <h2 className="text-2xl font-bold text-gray-800">🔐 Sécurité</h2>
      </div>

      <div className="space-y-8">
        {/* Mot de passe actuel */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Mot de passe actuel</h3>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type={showPasswords ? 'text' : 'password'}
                value={currentPassword}
                readOnly
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg font-mono text-2xl tracking-widest text-center"
              />
            </div>
            <button
              onClick={() => setShowPasswords(!showPasswords)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors"
            >
              {showPasswords ? '👁️‍🗨️' : '👁️'}
            </button>
          </div>
        </div>

        {/* Modifier le mot de passe */}
        <div className="border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Modifier le mot de passe</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nouveau mot de passe (6 caractères)
              </label>
              <input
                type={showPasswords ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6))}
                placeholder="admin1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono text-2xl tracking-widest text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmer le nouveau mot de passe
              </label>
              <input
                type={showPasswords ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6))}
                placeholder="admin1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono text-2xl tracking-widest text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleUpdatePassword}
                disabled={!newPassword || !confirmPassword || newPassword.length !== 6}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <span>🔄</span>
                <span>Mettre à jour</span>
              </button>
              <button
                onClick={handleResetPassword}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <span>🔄</span>
                <span>Mot de passe par défaut</span>
              </button>
            </div>
          </div>
        </div>

        {/* Informations */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">ℹ️ Informations importantes</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• Le mot de passe doit contenir exactement 6 caractères</li>
            <li>• Lettres (a-z, A-Z) et chiffres (0-9) autorisés</li>
            <li>• Le mot de passe est stocké localement dans votre navigateur</li>
            <li>• Notez bien votre nouveau mot de passe, il ne peut pas être récupéré</li>
            <li>• La déconnexion efface la session mais conserve le mot de passe</li>
          </ul>
        </div>

        {/* Actions de session */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Gestion de session</h3>
          <p className="text-red-700 mb-4">
            Vous restez connecté automatiquement. Utilisez le bouton de déconnexion pour sécuriser l'accès.
          </p>
          <button
            onClick={() => {
              localStorage.removeItem('adminAuthenticated');
              window.location.reload();
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
          >
            <span>🚪</span>
            <span>Se déconnecter maintenant</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;