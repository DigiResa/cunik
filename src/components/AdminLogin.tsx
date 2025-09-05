import React, { useState, useRef, useEffect } from 'react';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const { config } = useConfig();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mot de passe secret depuis localStorage ou par défaut
  const getSecretPassword = () => {
    return localStorage.getItem('adminSecretPassword') || 'admin1';
  };

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: 'cuban-red',
        secondary: 'cuban-yellow',
        gradient: 'from-cuban-red to-cuban-yellow',
        icons: ['🇨🇺', '🎺', '🌹']
      }
    : {
        primary: 'sunset-base',
        secondary: 'sunset-accent',
        gradient: 'from-sunset-base to-sunset-accent',
        icons: ['🌴', '🌺', '🍹']
      };

  useEffect(() => {
    // Focus sur l'input au chargement
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (value: string) => {
    // Ne garder que les lettres et chiffres, max 6 caractères
    const cleanValue = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6);
    setPassword(cleanValue);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length !== 6) {
      setError('Le mot de passe doit contenir exactement 6 caractères');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    if (password === getSecretPassword()) {
      onLogin();
    } else {
      setError('Mot de passe incorrect');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      // Effacer le mot de passe après une erreur
      setTimeout(() => {
        setPassword('');
        inputRef.current?.focus();
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-white text-8xl transform rotate-12">{themeColors.icons[0]}</div>
        <div className="absolute top-40 right-32 text-white text-6xl transform -rotate-12">{themeColors.icons[1]}</div>
        <div className="absolute bottom-32 left-32 text-white text-7xl transform rotate-45">{themeColors.icons[2]}</div>
        <div className="absolute bottom-20 right-20 text-white text-5xl">{themeColors.icons[0]}</div>
        <div className="absolute top-1/2 left-1/4 text-white text-6xl transform -rotate-45">{themeColors.icons[1]}</div>
        <div className="absolute top-1/3 right-1/3 text-white text-4xl transform rotate-12">{themeColors.icons[2]}</div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${themeColors.gradient} rounded-full mb-6 shadow-2xl`}>
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-light text-white mb-4">
            Accès
            <span className={`block font-bold bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent`}>Administration</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Saisissez le mot de passe (6 caractères)
          </p>
        </div>

        {/* Password Input */}
        <div className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 ${isShaking ? 'animate-pulse' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Lock className={`h-6 w-6 text-${themeColors.secondary}`} />
              <span className="text-white font-semibold">Mot de passe</span>
            </div>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {/* Password Input */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`w-full h-16 text-center text-2xl font-bold bg-white/20 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 text-white placeholder-gray-400 focus:outline-none focus:border-${themeColors.secondary} focus:bg-white/30 focus:scale-105 ${
                  password ? `border-${themeColors.secondary} bg-white/30` : 'border-gray-600'
                } ${error ? 'border-red-500 bg-red-500/20' : ''}`}
                maxLength={6}
                placeholder="••••••"
                autoComplete="off"
              />
              {/* Indicator */}
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                password ? `bg-${themeColors.secondary}` : 'bg-gray-600'
              }`}></div>
            </div>
          </form>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progression</span>
              <span>{password.length}/6</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${themeColors.gradient} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${(password.length / 6) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={password.length !== 6}
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-6 ${
              password.length === 6
                ? `bg-gradient-to-r ${themeColors.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl`
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {password.length === 6 ? 'Se connecter' : `Saisissez ${6 - password.length} caractère(s) de plus`}
          </button>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-medium">{error}</span>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Saisissez le mot de passe de 6 caractères (lettres et chiffres)
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <span>• Lettres et chiffres acceptés</span>
              <span>• Appuyez sur Entrée pour valider</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Retour au site
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;