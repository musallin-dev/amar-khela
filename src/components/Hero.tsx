import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Star, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Stats badges */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 flex items-center"
              >
                <Users className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-white text-sm font-medium">50K+ Players</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 flex items-center"
              >
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-white text-sm font-medium">4.9 Rating</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {t('heroTitle').split(' ').slice(0, 2).join(' ')}
              </span>
              <br />
              <span className="text-white">
                {t('heroTitle').split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              {t('heroSubtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(255,107,53,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center shadow-xl"
              >
                <Download className="w-6 h-6 mr-3" />
                {t('downloadNow')}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-orange-500/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center hover:border-orange-500/60 transition-colors duration-300"
              >
                <Play className="w-6 h-6 mr-3" />
                Watch Trailer
              </motion.button>
            </motion.div>

            {/* Achievement badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">50K+</div>
                <div className="text-slate-400 text-sm">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">100+</div>
                <div className="text-slate-400 text-sm">Daily Tournaments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">৳10L+</div>
                <div className="text-slate-400 text-sm">Prize Pool</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-[600px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl"
                style={{
                  transform: 'perspective(1000px) rotateY(-15deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="bg-slate-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm" />
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-full bg-green-400 rounded-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* App Screenshot */}
                  <div className="relative h-full bg-gradient-to-br from-orange-500/20 to-blue-500/20">
                    {/* Mock UI elements */}
                    <div className="p-6">
                      <div className="bg-slate-800/50 rounded-2xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-orange-400 font-bold">৳2,500</div>
                            <div className="text-slate-400 text-sm">Today's Earnings</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-full rounded-full w-3/4" />
                        </div>
                      </div>
                      
                      {/* Tournament cards */}
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-slate-800/30 rounded-xl p-3 flex items-center">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg mr-3" />
                            <div className="flex-1">
                              <div className="text-white font-medium text-sm">Tournament {i}</div>
                              <div className="text-slate-400 text-xs">Entry: ৳{100 * i}</div>
                            </div>
                            <div className="text-orange-400 font-bold">৳{500 * i}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone details */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-[3.5rem] -z-10 blur-xl" />
              </motion.div>

              {/* Floating elements around phone */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center"
              >
                <Trophy className="w-10 h-10 text-orange-400" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center"
              >
                <Star className="w-8 h-8 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;