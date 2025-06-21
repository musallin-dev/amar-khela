import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './hooks/useLanguage';

// Components
import SplashScreen from './components/SplashScreen';
import MinimalNav from './components/MinimalNav';
import Hero from './components/Hero';
import About from './components/About';
import AppScreenshots from './components/AppScreenshots';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Prevent scroll during splash screen
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" onComplete={handleSplashComplete} />
          ) : (
            <div key="main">
              <MinimalNav />
              <main className="pt-16">
                <Hero />
                <About />
                <AppScreenshots />
              </main>
            </div>
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;