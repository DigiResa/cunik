import React, { useState, useEffect } from 'react';
import { ChefHat, Plus, Trash2, Save } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  popular: boolean;
  vegetarian: boolean;
  spicy: boolean;
  seasonal: boolean;
  allergens: string[];
  prepTime: string;
  origin: string;
  alcohol: boolean;
  strength: string;
}

interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: MenuItem[];
}

interface MenuData {
  categories: MenuCategory[];
  drinks: {
    cocktails: {
      title: string;
      subtitle: string;
      items: MenuItem[];
    };
  };
  summer_specials: {
    title: string;
    subtitle: string;
    description: string;
    items: MenuItem[];
  };
}

const MenuSection: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuData>({
    categories: [],
   
   
  });

  useEffect(() => {
    const savedMenu = localStorage.getItem('menuData');
    if (savedMenu) {
      try {
        setMenuData(JSON.parse(savedMenu));
      } catch (error) {
        console.error('Erreur lors du chargement du menu:', error);
      }
    }
  }, []);

  const saveMenu = () => {
    localStorage.setItem('menuData', JSON.stringify(menuData));
    alert('Menu sauvegardé avec succès !');
  };

  const addCategory = () => {
    const newCategory: MenuCategory = {
      id: Date.now().toString(),
      title: '',
      subtitle: '',
      description: '',
      items: []
    };
    setMenuData({
      ...menuData,
      categories: [...menuData.categories, newCategory]
    });
  };

  const removeCategory = (categoryId: string) => {
    setMenuData({
      ...menuData,
      categories: menuData.categories.filter(cat => cat.id !== categoryId)
    });
  };

  const updateCategory = (categoryId: string, field: keyof MenuCategory, value: string) => {
    setMenuData({
      ...menuData,
      categories: menuData.categories.map(cat =>
        cat.id === categoryId ? { ...cat, [field]: value } : cat
      )
    });
  };

  const addMenuItem = (categoryId: string) => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: '',
      description: '',
      price: '',
      popular: false,
      vegetarian: false,
      spicy: false,
      seasonal: false,
      allergens: [],
      prepTime: '',
      origin: '',
      alcohol: false,
      strength: ''
    };

    setMenuData({
      ...menuData,
      categories: menuData.categories.map(cat =>
        cat.id === categoryId 
          ? { ...cat, items: [...cat.items, newItem] }
          : cat
      )
    });
  };

  const removeMenuItem = (categoryId: string, itemId: string) => {
    setMenuData({
      ...menuData,
      categories: menuData.categories.map(cat =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter(item => item.id !== itemId) }
          : cat
      )
    });
  };

  const updateMenuItem = (categoryId: string, itemId: string, field: keyof MenuItem, value: any) => {
    setMenuData({
      ...menuData,
      categories: menuData.categories.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map(item =>
                item.id === itemId ? { ...item, [field]: value } : item
              )
            }
          : cat
      )
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <ChefHat className="h-6 w-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-gray-800">🍽️ Menu & Carte</h2>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={addCategory}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Ajouter une catégorie</span>
          </button>
          <button
            onClick={saveMenu}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Sauvegarder</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {menuData.categories.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <ChefHat className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Aucune catégorie créée</p>
            <p className="text-sm text-gray-500">Cliquez sur "Ajouter une catégorie" pour commencer</p>
          </div>
        ) : (
          menuData.categories.map((category) => (
            <div key={category.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.title || 'Nouvelle catégorie'}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => addMenuItem(category.id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Plat</span>
                  </button>
                  <button
                    onClick={() => removeCategory(category.id)}
                    className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Category Info */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                  <input
                    type="text"
                    value={category.title}
                    onChange={(e) => updateCategory(category.id, 'title', e.target.value)}
                    placeholder="Nom de la catégorie"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sous-titre</label>
                  <input
                    type="text"
                    value={category.subtitle}
                    onChange={(e) => updateCategory(category.id, 'subtitle', e.target.value)}
                    placeholder="Sous-titre"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <input
                    type="text"
                    value={category.description}
                    onChange={(e) => updateCategory(category.id, 'description', e.target.value)}
                    placeholder="Description courte"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-700">{item.name || 'Nouveau plat'}</h4>
                      <button
                        onClick={() => removeMenuItem(category.id, item.id)}
                        className="text-red-600 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Nom du plat</label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => updateMenuItem(category.id, item.id, 'name', e.target.value)}
                            placeholder="Nom du plat"
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                          <textarea
                            value={item.description}
                            onChange={(e) => updateMenuItem(category.id, item.id, 'description', e.target.value)}
                            rows={2}
                            placeholder="Description du plat..."
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Prix</label>
                            <input
                              type="text"
                              value={item.price}
                              onChange={(e) => updateMenuItem(category.id, item.id, 'price', e.target.value)}
                              placeholder="15€"
                              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Temps de préparation</label>
                            <input
                              type="text"
                              value={item.prepTime}
                              onChange={(e) => updateMenuItem(category.id, item.id, 'prepTime', e.target.value)}
                              placeholder="15-20 min"
                              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-2">Caractéristiques</label>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={item.popular}
                                onChange={(e) => updateMenuItem(category.id, item.id, 'popular', e.target.checked)}
                                className="mr-1"
                              />
                              Populaire
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={item.vegetarian}
                                onChange={(e) => updateMenuItem(category.id, item.id, 'vegetarian', e.target.checked)}
                                className="mr-1"
                              />
                              Végétarien
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={item.spicy}
                                onChange={(e) => updateMenuItem(category.id, item.id, 'spicy', e.target.checked)}
                                className="mr-1"
                              />
                              Épicé
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={item.seasonal}
                                onChange={(e) => updateMenuItem(category.id, item.id, 'seasonal', e.target.checked)}
                                className="mr-1"
                              />
                              Saisonnier
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Allergènes</label>
                          <input
                            type="text"
                            value={item.allergens.join(', ')}
                            onChange={(e) => updateMenuItem(category.id, item.id, 'allergens', e.target.value.split(', ').filter(a => a.trim()))}
                            placeholder="gluten, lait, œufs"
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Origine</label>
                          <input
                            type="text"
                            value={item.origin}
                            onChange={(e) => updateMenuItem(category.id, item.id, 'origin', e.target.value)}
                            placeholder="Martinique, Cuba..."
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuSection;