import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  badge?: React.ReactNode;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt,
  className = '',
  imageClassName = '',
  overlayClassName = '',
  badge,
  interval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const validImages = images.filter(Boolean);

  useEffect(() => {
    if (validImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === validImages.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [validImages.length, interval]);

  if (validImages.length === 0) {
    return (
      <div className={className}>
        <div className={`bg-gray-200 flex items-center justify-center w-full rounded-3xl ${imageClassName.includes('h-') ? imageClassName : 'h-80'}`}>
          <span className="text-gray-500 text-lg">Aucune image disponible</span>
        </div>
        {overlayClassName && <div className={overlayClassName}></div>}
        {badge}
      </div>
    );
  }

  if (validImages.length === 1) {
    return (
      <div className={className}>
        <img 
          src={validImages[0]}
          alt={alt}
          className={imageClassName}
          onError={(e) => {
            console.log('Erreur image carousel:', validImages[0]);
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800';
          }}
        />
        {overlayClassName && <div className={overlayClassName}></div>}
        {badge}
      </div>
    );
  }

  return (
    <div className={className}>
      {validImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} ${index + 1}`}
          className={`${imageClassName} transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${index === 0 ? '' : 'absolute inset-0'}`}
          onError={(e) => {
            console.log('Erreur image carousel index', index, ':', image);
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800';
          }}
        />
      ))}
      {overlayClassName && <div className={overlayClassName}></div>}
      {badge}
      
      {/* Indicateurs */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {validImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;