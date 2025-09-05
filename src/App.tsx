import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Instagram from './components/Instagram';
import Reservation from './components/Reservation';
import OurEvents from './components/OurEvents';
import Footer from './components/Footer';
import DigiResaWidget from './components/DigiResaWidget';
import WineSection from './components/WineSection';
import CigarSection from './components/CigarSection';
import PartnerSection from './components/PartnerSection';
import EventsSection from './components/EventsSection';
import SocialFloatingButtons from './components/SocialFloatingButtons';
import EVJFSection from './components/EVJFSection';
import MariageSection from './components/MariageSection';
import ObsequesSection from './components/ObsequesSection';
import AnniversaireSection from './components/AnniversaireSection';
import SeminaireSection from './components/SeminaireSection';
import CelebrationsSection from './components/CelebrationsSection';
import DevThemeSwitcher from './components/DevThemeSwitcher';
import FullMenu from './components/FullMenu';
import ContactSection from './components/ContactSection';
import EventsOverview from './components/EventsOverview';
import CustomEventsSection from './components/CustomEventsSection';
import Admin from './pages/Admin';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { useConfig } from './hooks/useConfig';

function HomePage() {
  const { config } = useConfig();
  
  return (
    <>
      {config.sections.hero && <Hero />}
      {config.theme === 'evenementiel' ? (
        // Sections spécifiques au thème événementiel
        <>
          <EventsOverview />
          <EVJFSection />
          <MariageSection />
          <AnniversaireSection />
          <CelebrationsSection />
          <SeminaireSection />
          <ObsequesSection />
          <CustomEventsSection />
        </>
      ) : (
        // Sections pour les autres thèmes (Caraïbes et Cubain)
        <>
          {config.sections.about && <About />}
          {config.sections.events && <OurEvents />}
          {config.sections.privatization && <Events />}
          {config.sections.wine && <WineSection />}
          {config.sections.cigar && <CigarSection />}
          {config.sections.partner && <PartnerSection />}
          {config.sections.instagram && <Instagram />}
          {config.sections.reservation && <Reservation />}
        </>
      )}
      {config.theme === 'evenementiel' && <ContactSection />}
    </>
  );
}

function App() {
  const { config } = useConfig();
  const [isLoading, setIsLoading] = React.useState(() => {
    // Vérifier si le loader a déjà été affiché dans cette session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    return config.sections.loader && !hasSeenLoader;
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Marquer que le loader a été vu dans cette session
    sessionStorage.setItem('hasSeenLoader', 'true');
  };
  
  // Mettre à jour le favicon selon le thème
  React.useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    const appleIcon = document.getElementById('apple-icon') as HTMLLinkElement;
    
    if (favicon && appleIcon) {
      const logoUrl = config.theme === 'cubain' ? config.restaurant.logo_cubain : 
                      config.theme === 'evenementiel' ? config.restaurant.logo_evenementiel : 
                      config.restaurant.logo_caraibes;
      favicon.href = logoUrl;
      appleIcon.href = logoUrl;
    }
  }, [config.theme, config.restaurant.logo_caraibes, config.restaurant.logo_cubain]);

  // Mettre à jour l'état du loader selon la configuration
  React.useEffect(() => {
    // Ne réactiver le loader que si il n'a pas encore été vu dans cette session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    setIsLoading(config.sections.loader && !hasSeenLoader);
  }, [config.sections.loader]);

  // Afficher le loader pendant le chargement
  if (isLoading && config.sections.loader) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<PageWithLayout><HomePage /></PageWithLayout>} />
          <Route path="/carte" element={<PageWithLayout><FullMenu /></PageWithLayout>} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

function PageWithLayout({ children }: { children: React.ReactNode }) {
  const { config } = useConfig();
  
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SocialFloatingButtons />
      <DevThemeSwitcher />
      {config.sections.widget && config.theme !== 'evenementiel' && <DigiResaWidget />}
    </>
  );
}

export default App;