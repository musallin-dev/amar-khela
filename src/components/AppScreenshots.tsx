import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const AppScreenshots: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Mock screenshots data - in a real app, these would be actual screenshots
  const screenshots = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Home Screen',
      caption: 'Dashboard with live tournaments and earnings'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Tournament Screen',
      caption: 'Browse and join exciting tournaments'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Leaderboard',
      caption: 'Real-time rankings and statistics'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Wallet Screen',
      caption: 'Secure wallet with instant withdrawals'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
      alt: 'Profile Screen',
      caption: 'Customize your gaming profile'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, screenshots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {t('screenshotsTitle')}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('screenshotsSubtitle')}
          </p>
        </motion.div>

        {/* Screenshots Slider */}
        <div className="relative">
          {/* Main Slider Container */}
          <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
            {/* Phone Frame Container */}
            <div className="relative w-80 md:w-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="relative"
                >
                  {/* Phone Frame */}
                  <div className="relative w-full h-[600px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl mx-auto">
                    {/* Screen */}
                    <div className="w-full h-full bg-slate-800 rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="bg-slate-900 h-8 flex items-center justify-between px-6 text-white text-xs relative z-10">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm" />
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-full bg-green-400 rounded-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Screenshot Image */}
                      <div className="relative h-full">
                        <img
                          src={screenshots[currentSlide].url}
                          alt={screenshots[currentSlide].alt}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay with gaming UI elements */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20">
                          {/* Mock UI elements */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-4">
                              <h3 className="text-white font-bold text-lg mb-2">
                                {screenshots[currentSlide].alt}
                              </h3>
                              <p className="text-slate-300 text-sm">
                                {screenshots[currentSlide].caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-[4rem] -z-10 blur-2xl" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-orange-500/30 rounded-full flex items-center justify-center text-white hover:bg-orange-500/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-orange-500/30 rounded-full flex items-center justify-center text-white hover:bg-orange-500/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center space-x-3 mt-8">
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-orange-500 shadow-lg shadow-orange-500/50'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center text-sm px-3 py-1 rounded-full transition-colors duration-300 ${
                isAutoPlaying 
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                  : 'bg-slate-700/50 text-slate-400 border border-slate-600/30'
              }`}
            >
              <Play className={`w-3 h-3 mr-1 ${isAutoPlaying ? '' : 'opacity-50'}`} />
              {isAutoPlaying ? 'Auto-playing' : 'Play'}
            </motion.button>
          </div>
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('downloadApp')}
          </h3>
          <p className="text-slate-300 mb-8 max-w-md mx-auto">
            {t('availableOn')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
            >
              📱 Download for Android
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-orange-500/50 transition-all duration-300"
            >
              🍎 {t('comingSoon')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppScreenshots;