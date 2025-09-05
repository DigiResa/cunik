import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const Header = () => {
  const { config } = useConfig();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openReservationWidget = () => {
    if (config.theme === 'evenementiel') {
      // Rediriger vers la section contact pour l'événementiel
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('digiresa-iframe-container')?.classList.add('show');
    }
  };

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        solid: 'bg-red-900',
        solidScrolled: 'bg-red-950',
        accent: 'amber-400',
        base: 'red-900'
      }
    : config.theme === 'evenementiel'
    ? {
        solid: 'bg-red-900',
        solidScrolled: 'bg-red-950',
        accent: 'amber-400',
        base: 'red-900'
      }
    : {
        gradient: 'from-sunset-dark via-sunset-base to-sunset-light',
        gradientScrolled: 'from-sunset-dark via-sunset-base to-sunset-light',
        accent: 'sunset-yellow',
        base: 'sunset-base'
      };

  const leftNavItems = [
    ...(config.theme === 'evenementiel' ? [
      { name: 'EVJF', href: '#evjf' },
      { name: 'MARIAGES', href: '#mariage' },
      { name: 'ANNIVERSAIRES', href: '#anniversaire' },
      { name: 'CÉLÉBRATIONS', href: '#celebrations' }
    ] : [
      { name: "L'ESPRIT C UNIK", href: '#restaurant' },
      { name: 'CARTE', href: '/carte' },
      { name: 'ÉVÉNEMENTS', href: '#evenements' }
    ])
  ];

  const rightNavItems = [
    ...(config.theme === 'evenementiel' ? [
      { name: 'SÉMINAIRES', href: '#seminaire' },
      { name: 'OBSÈQUES', href: '#obseques' }
    ] : [
      { name: 'PRIVATISATION', href: '#privatisation' },
      { name: 'CONTACT', href: '#contact' }
    ])
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
          ? config.theme === 'cubain' || config.theme === 'evenementiel'
          ? `${themeColors.solidScrolled} backdrop-blur-xl shadow-lg` 
          : `bg-gradient-to-r ${themeColors.gradientScrolled} backdrop-blur-xl shadow-lg`
        : config.theme === 'cubain' || config.theme === 'evenementiel'
          ? `${themeColors.solid}/90 backdrop-blur-sm`
          : `bg-gradient-to-r ${themeColors.gradient}/80 backdrop-blur-sm`
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 relative">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {leftNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className={`text-white ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'hover:text-amber-400' : `hover:text-${themeColors.accent}`} text-sm font-semibold tracking-widest transition-all duration-300 relative group uppercase`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-amber-400' : `bg-${themeColors.accent}`} transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
          </nav>

          {/* Logo Central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
            {/* Cercle élégant avec effets */}
            <div className="relative">
              {/* Cercle principal avec dégradé élégant */}
              <div className={`absolute w-40 h-40 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-900' : 'bg-gradient-to-br from-sunset-orange to-sunset-pink'} rounded-full shadow-2xl animate-sunset-glow opacity-90`}></div>
              
              {/* Cercle intérieur avec bordure dorée */}
              <div className={`relative w-40 h-40 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-950' : 'bg-white'} rounded-full border-4 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'border-amber-400' : `border-${themeColors.accent}`} shadow-inner flex items-center justify-center hover:scale-105 transition-transform duration-300`}>
                {/* Effet de brillance */}
                <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                
                {/* Logo */}
                <div className="relative z-10">
                  <a href="/">
                    <img 
                      src={config.theme === 'cubain' || config.theme === 'evenementiel' ? config.restaurant.logo_cubain : config.restaurant.logo_caraibes}
                      alt="C Unik Logo"
                      className="h-24 w-auto  drop-shadow-lg animate-sway"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation + Contact */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {rightNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className={`text-white ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'hover:text-amber-400' : `hover:text-${themeColors.accent}`} text-sm font-semibold tracking-widest transition-all duration-300 relative group uppercase`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-amber-400' : `bg-${themeColors.accent}`} transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
            
            {/* Reservation Button */}
            {config.theme === 'evenementiel' ? (
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <span className="tracking-wider">DEMANDE D'INFOS</span>
              </button>
            ) : (
              <button 
                onClick={openReservationWidget}
                className="flex items-center space-x-2 text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <span className="tracking-wider">RÉSERVER</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-900/98' : 'bg-gradient-to-br from-sunset-base/98 via-sunset-light/98 to-sunset-accent/98'} backdrop-blur-xl border-t ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'border-amber-400/30' : `border-${themeColors.accent}/30`} shadow-2xl`}>
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-white ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'hover:text-amber-400' : `hover:text-${themeColors.accent}`} text-sm font-semibold py-3 px-4 transition-colors uppercase tracking-wider`}
              >
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Contact Section */}
            <div className="pt-4 border-t border-white/20">
              {/* CTA Button selon le thème */}
              <button 
                onClick={openReservationWidget}
                className={`w-full ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-amber-400 hover:bg-amber-500 text-red-900' : 'bg-gradient-to-r from-sunset-accent to-sunset-base hover:from-sunset-base hover:to-sunset-dark text-white'} px-6 py-5 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl text-lg uppercase tracking-wide border border-white/20`}
              >
                {config.theme === 'evenementiel' ? '📋 DEMANDE D\'INFORMATION' : '🍽️ RÉSERVER UNE TABLE'}
              </button>
              
              {/* Phone Number */}
              <a
                href={`tel:${config.restaurant.phone.replace(/\s/g, '')}`}
                className={`flex items-center justify-center space-x-3 text-white text-base font-semibold mt-4 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'bg-red-800/50' : 'bg-white/20'} backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg`}
              >
                <Phone className={`h-5 w-5 ${config.theme === 'cubain' || config.theme === 'evenementiel' ? 'text-amber-400' : `text-${themeColors.accent}`}`} />
                <span>{config.restaurant.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;