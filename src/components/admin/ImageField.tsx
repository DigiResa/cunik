import React, { useState } from 'react';
import { Upload, Eye, EyeOff } from 'lucide-react';

interface ImageFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ImageField: React.FC<ImageFieldProps> = ({ label, value, onChange, placeholder }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [tempPreview, setTempPreview] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner un fichier image');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Le fichier est trop volumineux (max 5MB)');
      return;
    }

    setUploading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setTempPreview(result);
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2 w-full overflow-hidden">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-2 w-full overflow-hidden">
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "URL de l'image"}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0 max-w-full"
        />
        <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center space-x-2 transition-colors flex-shrink-0">
          {uploading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Upload className="w-4 h-4" />
          )}
          <span>{uploading ? 'Upload...' : 'Upload'}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
        {value && (
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors flex-shrink-0"
          >
            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showPreview ? 'Masquer' : 'Voir'}</span>
          </button>
        )}
      </div>
      {showPreview && (value || tempPreview) && (
        <div className="mt-2">
          <img
            src={tempPreview || value}
            alt="Prévisualisation"
            className="h-48 object-cover rounded-lg border border-gray-200 max-w-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400';
            }}
          />
        </div>
      )}
      {tempPreview && (
        <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 font-medium mb-2">
            📁 Image uploadée temporairement
          </p>
          <p className="text-xs text-yellow-700 mb-2">
            Pour sauvegarder définitivement cette image :
          </p>
          <ol className="text-xs text-yellow-700 list-decimal list-inside space-y-1">
            <li>Placez votre fichier image dans le dossier <code className="bg-yellow-100 px-1 rounded">public/</code> du projet</li>
            <li>Saisissez le chemin relatif (ex: <code className="bg-yellow-100 px-1 rounded">/mon-image.jpg</code>) dans le champ URL ci-dessus</li>
          </ol>
        </div>
      )}
      <p className="text-xs text-gray-500">
        Collez une URL d'image ou uploadez un fichier pour prévisualisation (max 5MB)
      </p>
    </div>
  );
};

export default ImageField;