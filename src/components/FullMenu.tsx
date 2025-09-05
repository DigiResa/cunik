import React, { useState } from 'react';
import { Star, Clock, Leaf, Flame, Wine, Coffee, Sun, ChefHat, Filter } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';

const FullMenu = () => {
  const { config } = useConfig();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  // Charger les données du menu depuis localStorage (créées dans l'admin)
  const [menuData] = useState(() => {
    const defaultMenuData = {
      categories: [],
     
    };

    try {
      const savedMenu = localStorage.getItem('menuData');
      if (savedMenu) {
        const parsedMenu = JSON.parse(savedMenu);
        // Merge with defaults to ensure all properties exist and are arrays
        return {
          categories: Array.isArray(parsedMenu.categories) ? parsedMenu.categories : defaultMenuData.categories,
          drinks: {
            cocktails: {
              title: parsedMenu.drinks?.cocktails?.title || defaultMenuData.drinks.cocktails.title,
              subtitle: parsedMenu.drinks?.cocktails?.subtitle || defaultMenuData.drinks.cocktails.subtitle,
              items: Array.isArray(parsedMenu.drinks?.cocktails?.items) ? parsedMenu.drinks.cocktails.items : defaultMenuData.drinks.cocktails.items
            }
          },
          summer_specials: {
            title: parsedMenu.summer_specials?.title || defaultMenuData.summer_specials.title,
            subtitle: parsedMenu.summer_specials?.subtitle || defaultMenuData.summer_specials.subtitle,
            description: parsedMenu.summer_specials?.description || defaultMenuData.summer_specials.description,
            items: Array.isArray(parsedMenu.summer_specials?.items) ? parsedMenu.summer_specials.items : defaultMenuData.summer_specials.items
          }
        };
      }
    } catch (error) {
      console.error('Erreur lors du chargement du menu:', error);
    }
    
    return defaultMenuData;
  });

  // Définir les couleurs selon le thème
  const themeColors = config.theme === 'cubain' 
    ? {
        primary: 'cuban-red',
        secondary: 'cuban-yellow',
        gradient: 'from-cuban-red to-cuban-yellow',
        gradientReverse: 'from-cuban-yellow to-cuban-red',
        accent: 'cuban-yellow'
      }
    : {
        primary: 'sunset-base',
        secondary: 'sunset-accent', 
        gradient: 'from-sunset-base to-sunset-accent',
        gradientReverse: 'from-sunset-accent to-sunset-base',
        accent: 'amber-500'
      };

  const categories = [
    { id: 'all', name: 'Tout voir', icon: ChefHat },
    // Générer les catégories dynamiquement depuis les données de l'admin
    ...menuData.categories.map(category => ({
      id: category.id,
      name: category.title,
      icon: Star
    }))
  
  ];

  const renderMenuItem = (item: any, categoryType: string = 'food') => (
    <div key={item.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${config.theme === 'cubain' ? 'from-red-900/10 to-yellow-800/10' : 'from-amber-50 to-orange-50'} rounded-full -translate-y-16 translate-x-16 opacity-50`}></div>
      
      <div className="relative z-10">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.popular && (
            <div className={`bg-${themeColors.accent}/20 text-${themeColors.primary} px-3 py-1 rounded-full text-xs font-semibold flex items-center`}>
              <Star className="h-3 w-3 mr-1 fill-current" />
              Populaire
            </div>
          )}
          {item.vegetarian && (
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Leaf className="h-3 w-3 mr-1" />
              Végé
            </div>
          )}
          {item.spicy && (
            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Flame className="h-3 w-3 mr-1" />
              Épicé
            </div>
          )}
          {item.seasonal && (
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Sun className="h-3 w-3 mr-1" />
              Saison
            </div>
          )}
          {categoryType === 'drink' && item.alcohol && (
            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
              {item.strength || 'Alcoolisé'}
            </div>
          )}
        </div>

        {/* Title and Price */}
        <div className="flex justify-between items-start mb-4">
          <h4 className={`text-xl font-bold text-gray-900 group-hover:text-${themeColors.primary} transition-colors flex-1 pr-4`}>
            {item.name}
          </h4>
          <span className={`text-2xl font-bold text-${themeColors.primary} flex-shrink-0`}>{item.price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
          {item.description}
        </p>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {item.prepTime && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{item.prepTime}</span>
              </div>
            )}
            {item.origin && (
              <div className="flex items-center">
                <span className={`w-2 h-2 bg-${themeColors.accent} rounded-full mr-2`}></span>
                <span>{item.origin}</span>
              </div>
            )}
          </div>
          
          <button className={`bg-${themeColors.primary} hover:bg-${themeColors.primary}-dark text-white px-4 py-2 rounded-full text-xs font-medium transition-colors opacity-0 group-hover:opacity-100`}>
            Commander
          </button>
        </div>

        {/* Allergens */}
        {item.allergens && item.allergens.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Allergènes: {item.allergens.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderDrinkCategory = (categoryKey: string, category: any) => (
    <div key={categoryKey} className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-light text-gray-900 mb-2">{category.title}</h3>
        <p className="text-amber-600 font-medium">{category.subtitle}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item: any) => renderMenuItem(item, 'drink'))}
      </div>
    </div>
  );

  const getFilteredContent = () => {
    if (activeCategory === 'all') {
      return (
        <>
          {/* Food Categories from Admin */}
          {menuData.categories.length > 0 ? menuData.categories.map((category) => (
            <div key={category.id} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-gray-900 mb-2">{category.title}</h3>
                <p className="text-amber-600 font-medium mb-4">{category.subtitle}</p>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              {category.items && category.items.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item) => renderMenuItem(item))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <div className="text-4xl mb-4">🍽️</div>
                  <p className="text-gray-600">Aucun plat dans cette catégorie</p>
                </div>
              )}
            </div>
          )) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Menu en cours de création</h3>
              <p className="text-gray-600 mb-8">Notre chef prépare de délicieuses surprises pour vous !</p>
              <p className="text-sm text-gray-500">Les plats seront bientôt disponibles via l'interface d'administration.</p>
            </div>
          )}

          {/* Summer Specials */}
          {menuData.summer_specials.items && menuData.summer_specials.items.length > 0 && (
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-gray-900 mb-2">{menuData.summer_specials.title}</h3>
                <p className="text-amber-600 font-medium mb-4">{menuData.summer_specials.subtitle}</p>
                <p className="text-gray-600 max-w-2xl mx-auto">{menuData.summer_specials.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.summer_specials.items.map((item) => renderMenuItem(item))}
              </div>
            </div>
          )}

          {/* Drinks */}
          {Object.entries(menuData.drinks).map(([key, category]) => 
            renderDrinkCategory(key, category)
          )}
        </>
      );
    }

    if (activeCategory === 'summer') {
      if (!menuData.summer_specials.items || menuData.summer_specials.items.length === 0) {
        return (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">☀️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Carte d'été en préparation</h3>
            <p className="text-gray-600">Nos spécialités estivales arrivent bientôt !</p>
          </div>
        );
      }
      
      return (
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-2">{menuData.summer_specials.title}</h3>
            <p className="text-amber-600 font-medium mb-4">{menuData.summer_specials.subtitle}</p>
            <p className="text-gray-600 max-w-2xl mx-auto">{menuData.summer_specials.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.summer_specials.items.map((item) => renderMenuItem(item))}
          </div>
        </div>
      );
    }

    if (activeCategory === 'cocktails') {
      return Object.entries(menuData.drinks).map(([key, category]) => 
        renderDrinkCategory(key, category)
      );
    }

    // Specific food category
    const category = menuData.categories.find(cat => cat.id === activeCategory);
    if (category) {
      return (
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-2">{category.title}</h3>
            <p className="text-amber-600 font-medium mb-4">{category.subtitle}</p>
            <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
          </div>
          
          {category.items && category.items.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => renderMenuItem(item))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <div className="text-4xl mb-4">🍽️</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Catégorie en cours de création</h4>
              <p className="text-gray-600">Les plats de cette catégorie seront bientôt disponibles !</p>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`relative py-32 bg-gradient-to-r ${themeColors.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-light mb-6">
            Notre
            <span className="block font-bold">Carte Complète</span>
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Découvrez toutes nos spécialités caribéennes, cocktails tropicaux et créations de saison
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-8 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category.id
                        ? config.theme === 'cubain' 
                          ? 'bg-red-900 text-white shadow-lg'
                          : `bg-${themeColors.primary} text-white shadow-lg`
                        : config.theme === 'cubain'
                          ? 'text-gray-600 hover:text-red-900 hover:bg-red-50'
                          : `text-gray-600 hover:text-${themeColors.primary} hover:bg-${themeColors.primary}/10`
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-4 py-2 text-gray-600 ${config.theme === 'cubain' ? 'hover:text-red-900' : `hover:text-${themeColors.primary}`} transition-colors`}
            >
              <Filter className="h-5 w-5" />
              <span>Filtres</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {getFilteredContent()}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${config.theme === 'cubain' ? 'bg-red-900' : `bg-gradient-to-r ${themeColors.gradient}`}`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-light mb-6">
            Prêt à découvrir
            <span className="block font-bold">nos saveurs ?</span>
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Réservez votre table et laissez-vous transporter aux Caraïbes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`bg-white ${config.theme === 'cubain' ? 'text-red-900' : `text-${themeColors.primary}`} hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg`}>
              Réserver une table
            </button>
            <button className="border border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullMenu;