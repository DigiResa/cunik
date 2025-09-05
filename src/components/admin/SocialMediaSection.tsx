import React from 'react';
import { Instagram, Trash2, Plus } from 'lucide-react';
import { SiteConfig } from '../../hooks/useConfig';
import ImageField from './ImageField';

interface SocialMediaSectionProps {
  config: SiteConfig;
  updateConfig: (config: SiteConfig) => void;
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ config, updateConfig }) => {
  const handleSocialChange = (field: keyof SiteConfig['social'], value: string) => {
    updateConfig({
      ...config,
      social: { ...config.social, [field]: value }
    });
  };

  const handlePostChange = (index: number, field: keyof SiteConfig['instagram_posts'][0], value: string | number) => {
    const newPosts = [...config.instagram_posts];
    newPosts[index] = { ...newPosts[index], [field]: value };
    updateConfig({
      ...config,
      instagram_posts: newPosts
    });
  };

  const addPost = () => {
    const newPost = {
      image: '',
      caption: '',
      likes: 0,
      comments: 0
    };
    updateConfig({
      ...config,
      instagram_posts: [...config.instagram_posts, newPost]
    });
  };

  const removePost = (index: number) => {
    const newPosts = config.instagram_posts.filter((_, i) => i !== index);
    updateConfig({
      ...config,
      instagram_posts: newPosts
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Instagram className="h-6 w-6 text-pink-600" />
        <h2 className="text-2xl font-bold text-gray-800">📱 Réseaux Sociaux</h2>
      </div>

      <div className="space-y-8">
        {/* Comptes sociaux */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
            <input
              type="text"
              value={config.social.instagram}
              onChange={(e) => handleSocialChange('instagram', e.target.value)}
              placeholder="@votre_compte"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
            <input
              type="text"
              value={config.social.facebook}
              onChange={(e) => handleSocialChange('facebook', e.target.value)}
              placeholder="Nom de votre page"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* URLs des réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Liens des réseaux sociaux</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL Instagram</label>
              <input
                type="url"
                value={config.social.instagram_url}
                onChange={(e) => handleSocialChange('instagram_url', e.target.value)}
                placeholder="https://www.instagram.com/votre_compte"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL Facebook</label>
              <input
                type="url"
                value={config.social.facebook_url}
                onChange={(e) => handleSocialChange('facebook_url', e.target.value)}
                placeholder="https://www.facebook.com/votre_page"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        {/* Posts Instagram */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Posts Instagram</h3>
            <button
              onClick={addPost}
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Ajouter un post</span>
            </button>
          </div>

          <div className="space-y-6">
            {config.instagram_posts.map((post, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-700">Post #{index + 1}</h4>
                  <button
                    onClick={() => removePost(index)}
                    className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <ImageField
                      label="Image du post"
                      value={post.image}
                      onChange={(value) => handlePostChange(index, 'image', value)}
                      placeholder="URL de l'image Instagram"
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Légende</label>
                      <textarea
                        value={post.caption}
                        onChange={(e) => handlePostChange(index, 'caption', e.target.value)}
                        rows={3}
                        placeholder="Légende du post..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Likes</label>
                      <input
                        type="number"
                        value={post.likes}
                        onChange={(e) => handlePostChange(index, 'likes', parseInt(e.target.value) || 0)}
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Commentaires</label>
                      <input
                        type="number"
                        value={post.comments}
                        onChange={(e) => handlePostChange(index, 'comments', parseInt(e.target.value) || 0)}
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;