import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useLanguage, languages } from '../hooks/useLanguage';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'features', href: '#features' },
    { key: 'screenshots', href: '#screenshots' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl mr-3 flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg">AK</span>
            </div>
            <span className="text-white font-bold text-xl">{t('appName')}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-white/80 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {t(item.key)}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center text-white/80 hover:text-white transition-colors duration-200"
              >
                <Globe className="w-5 h-5 mr-2" />
                {language.nativeName}
              </motion.button>
              
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 bg-slate-800 rounded-lg shadow-xl border border-orange-500/20 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                        language.code === lang.code
                          ? 'bg-orange-500 text-white'
                          : 'text-white/80 hover:bg-slate-700'
                      }`}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,107,53,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold flex items-center shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('downloadNow')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-orange-500/20"
        >
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white/80 hover:text-orange-400 transition-colors duration-200 font-medium py-2"
              >
                {t(item.key)}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="border-t border-orange-500/20 pt-4">
              <p className="text-white/60 text-sm mb-2">Language / ভাষা</p>
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                      language.code === lang.code
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-800 text-white/80 hover:bg-slate-700'
                    }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Download Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('downloadNow')}
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;