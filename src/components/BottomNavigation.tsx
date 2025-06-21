import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Trophy, User, Settings, Download } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const BottomNavigation: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: t('home'), href: '#home' },
    { id: 'tournaments', icon: Trophy, label: 'Tournaments', href: '#features' },
    { id: 'download', icon: Download, label: 'Download', href: '#screenshots' },
    { id: 'profile', icon: User, label: 'Profile', href: '#about' },
    { id: 'settings', icon: Settings, label: 'Settings', href: '#contact' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveTab(item.id);
    // Smooth scroll to section
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden"
    >
      {/* Background with blur effect */}
      <div className="bg-slate-900/95 backdrop-blur-lg border-t border-orange-500/20">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavClick(item)}
                className={`relative flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
                  activeTab === item.id
                    ? 'text-orange-400'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                {/* Active indicator */}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-orange-500/10 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {/* Icon with animation */}
                <motion.div
                  animate={activeTab === item.id ? { scale: 1.1, y: -2 } : { scale: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                
                {/* Label */}
                <span className="text-xs font-medium mt-1 relative z-10">
                  {item.label}
                </span>
                
                {/* Active dot */}
                {activeTab === item.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 w-2 h-2 bg-orange-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Safe area padding for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-slate-900/95" />
    </motion.div>
  );
};

export default BottomNavigation;