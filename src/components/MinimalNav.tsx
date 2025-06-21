import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Gamepad2 } from 'lucide-react';
import { useLanguage, languages } from '../hooks/useLanguage';

const MinimalNav: React.FC = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl mr-3 flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-xl">{t('appName')}</span>
              <div className="text-orange-400 text-xs font-medium">{t('tagline')}</div>
            </div>
          </motion.div>

          {/* Language Switcher */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center bg-slate-800/50 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 text-white/80 hover:text-white hover:border-orange-500/50 transition-all duration-300"
            >
              <Globe className="w-4 h-4 mr-2" />
              <span className="font-medium">{language.nativeName}</span>
            </motion.button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-xl border border-orange-500/20 overflow-hidden min-w-[140px]"
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ backgroundColor: 'rgba(255, 107, 53, 0.1)' }}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                        language.code === lang.code
                          ? 'bg-orange-500/20 text-orange-400 font-medium'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{lang.code === 'bn' ? '🇧🇩' : '🇺🇸'}</span>
                        {lang.nativeName}
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default MinimalNav;