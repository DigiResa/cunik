import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import restaurantData from '../data/restaurant.json';
import socialData from '../data/social.json';
import heroData from '../data/hero.json';
import aboutData from '../data/about.json';
import eventsData from '../data/events.json';
import instagramData from '../data/instagram.json';
import reservationData from '../data/reservation.json';
import navigationData from '../data/navigation.json';
import themesData from '../data/themes.json';
import wineCigarData from '../data/wine-cigar.json';
import partnerData from '../data/partner.json';
import evenementielData from '../data/evenementiel.json';

// Types pour la configuration
export interface SiteConfig {
  restaurant: {
    name: string;
    tagline: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    rating: string;
    reviews: string;
    experience_years: string;
    capacity: string;
    logo: string;
  };
  hours: {
    open_days: string;
    lunch: string;
    dinner: string;
    closed: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    subdescription: string;
    image: string;
    cta_primary: string;
    cta_secondary: string;
    stats: {
      capacity_label: string;
      privatizable_label: string;
      privatizable_value: string;
      experience_label: string;
    };
  };
  about: {
    title: string;
    title_highlight: string;
    subtitle: string;
    description: string;
    content_title: string;
    content_title_highlight: string;
    content_paragraph1: string;
    content_paragraph2: string;
    location_title: string;
    location_description: string;
    location_hours: string;
    image: string;
    chef_quote: string;
    chef_signature: string;
    experience_years_label: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  events: {
    title: string;
    title_highlight: string;
    subtitle: string;
    description: string;
    capacity_title: string;
    capacity_title_highlight: string;
    capacity_description: string;
    capacity_standing: string;
    capacity_seated: string;
    cta_button: string;
    contact_title: string;
    contact_description: string;
    contact_phone_button: string;
    contact_message_button: string;
    types: Array<{
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      button: string;
    }>;
  };
  instagram: {
    title: string;
    title_highlight: string;
    subtitle: string;
    description: string;
    cta_title: string;
    cta_description: string;
    cta_button: string;
  };
  instagram_posts: Array<{
    image: string;
    caption: string;
    likes: number;
    comments: number;
  }>;
  reservation: {
    title: string;
    title_highlight: string;
    subtitle: string;
    description: string;
    iframe_title: string;
    iframe_subtitle: string;
    info_title: string;
    rating_text: string;
    rating_source: string;
    hours_title: string;
    address_title: string;
    phone_title: string;
    capacity_title: string;
    capacity_description: string;
    capacity_privatization: string;
    phone_booking_title: string;
    phone_booking_description: string;
    tip_title: string;
    tip_description: string;
  };
  footer: {
    contact_title: string;
    hours_title: string;
    reservation_text: string;
    copyright: string;
    legal_link: string;
    privacy_link: string;
  };
  header: {
    nav_home: string;
    nav_menu: string;
    nav_events: string;
    nav_guide: string;
    nav_contact: string;
    reservation_button: string;
  };
  theme: string;
  theme_colors: {
    caraibes: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    cubain: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    evenementiel: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
  };
  sections: {
    loader: boolean;
    hero: boolean;
    about: boolean;
    events: boolean;
    privatization: boolean;
    wine: boolean;
    cigar: boolean;
    partner: boolean;
    instagram: boolean;
    reservation: boolean;
    widget: boolean;
    evjf: boolean;
    mariage: boolean;
    anniversaire: boolean;
    seminaire: boolean;
    obseques: boolean;
    sur_mesure: boolean;
  };
  wine: {
    title: string;
    title_highlight: string;
    subtitle: string;
    description: string;
    content_title: string;
    content_title_highlight: string;
    content_paragraph1: string;
    content_paragraph2: string;
    image1: string;
    image2: string;
    image3: string;
    cta_button: string;
    cta_link: string;
  };
  cigar: {
    title: string;
    title_highlight: string;
    subtitle: string;
    description: string;
    content_title: string;
    content_title_highlight: string;
    content_paragraph1: string;
    content_paragraph2: string;
    image1: string;
    image2: string;
    image3: string;
    cta_button: string;
    cta_link: string;
  };
  dev_mode: boolean;
  evenementiel?: {
    overview?: {
      title?: string;
      description?: string;
    };
    contact?: {
      title?: string;
      description?: string;
    };
    evjf?: {
      title?: string;
      subtitle?: string;
      description?: string;
      content?: string;
      content_secondary?: string;
      images?: string[];
      features?: Array<{
        title?: string;
        description?: string;
      }>;
      stats?: Array<{
        value?: string;
        label?: string;
      }>;
      cta?: {
        title?: string;
        description?: string;
        button_text?: string;
      };
    };
    mariages?: {
      title?: string;
      subtitle?: string;
      description?: string;
      content?: string;
      content_secondary?: string;
      images?: string[];
      features?: Array<{
        title?: string;
        description?: string;
      }>;
      stats?: Array<{
        value?: string;
        label?: string;
      }>;
      cta?: {
        title?: string;
        description?: string;
        button_text?: string;
      };
    };
    anniversaires?: {
      title?: string;
      subtitle?: string;
      description?: string;
      content?: string;
      content_secondary?: string;
      images?: string[];
      features?: Array<{
        title?: string;
        description?: string;
      }>;
      stats?: Array<{
        value?: string;
        label?: string;
      }>;
      cta?: {
        title?: string;
        description?: string;
        button_text?: string;
      };
    };
    seminaires?: {
      title?: string;
      subtitle?: string;
      description?: string;
      content?: string;
      content_secondary?: string;
      images?: string[];
      features?: Array<{
        title?: string;
        description?: string;
      }>;
      stats?: Array<{
        value?: string;
        label?: string;
      }>;
      cta?: {
        title?: string;
        description?: string;
        button_text?: string;
      };
    };
    obseques?: {
      title?: string;
      subtitle?: string;
      description?: string;
      content?: string;
      content_secondary?: string;
      images?: string[];
      features?: Array<{
        title?: string;
        description?: string;
      }>;
      stats?: Array<{
        value?: string;
        label?: string;
      }>;
      cta?: {
        title?: string;
        description?: string;
        button_text?: string;
      };
    };
    sur_mesure?: {
      title: string;
      subtitle: string;
      description: string;
      username: string;
      posts: Array<{
        image: string;
        caption: string;
        link: string;
      }>;
      stats?: Array<{
        value?: string;
        label?: string;
      }>;
      cta?: {
        title?: string;
        description?: string;
        button_text?: string;
      };
    };
  };
}

// Contexte de configuration
const ConfigContext = createContext<{
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
} | undefined>(undefined);

// Provider de configuration
export const ConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    // Combiner toutes les données des fichiers JSON séparés
    const defaultConfig = {
      ...restaurantData,
      ...socialData,
      ...heroData,
      ...aboutData,
      ...eventsData,
      ...instagramData,
      ...reservationData,
      ...navigationData,
      ...themesData,
      ...wineCigarData,
      ...partnerData,
      ...evenementielData
    };

    // Charger la configuration depuis localStorage si elle existe
    try {
      const savedConfig = localStorage.getItem('siteConfig');
      if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig);
        // Merger avec la config par défaut pour s'assurer que toutes les propriétés existent
        return { ...defaultConfig, ...parsedConfig };
      }
    } catch (error) {
      console.error('Erreur lors du chargement de la configuration:', error);
    }
    return defaultConfig as SiteConfig;
  });

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig(prev => ({
      ...prev,
      ...newConfig
    }));
    // Sauvegarder automatiquement dans localStorage
    localStorage.setItem('siteConfig', JSON.stringify({
      ...config,
      ...newConfig
    }));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

// Hook pour utiliser la configuration
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};