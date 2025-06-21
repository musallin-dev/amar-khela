import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Zap, Trophy, Target, Flame, Crown, Star, Shield } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Gaming icons for floating animation
  const gamingIcons = [
    { Icon: Gamepad2, color: 'text-orange-400', delay: 0 },
    { Icon: Trophy, color: 'text-yellow-400', delay: 0.2 },
    { Icon: Target, color: 'text-red-400', delay: 0.4 },
    { Icon: Flame, color: 'text-orange-500', delay: 0.6 },
    { Icon: Crown, color: 'text-yellow-500', delay: 0.8 },
    { Icon: Star, color: 'text-blue-400', delay: 1.0 },
    { Icon: Shield, color: 'text-green-400', delay: 1.2 },
    { Icon: Zap, color: 'text-purple-400', delay: 1.4 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => {
        const newTime = prev + 100;
        
        // Update phases based on time elapsed
        if (newTime >= 1000 && currentPhase < 1) setCurrentPhase(1);
        if (newTime >= 2000 && currentPhase < 2) setCurrentPhase(2);
        if (newTime >= 3000 && currentPhase < 3) setCurrentPhase(3);
        if (newTime >= 4000 && currentPhase < 4) setCurrentPhase(4);
        
        if (newTime >= 5000) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 5000;
        }
        return newTime;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete, currentPhase]);

  const loadingMessages = [
    'Initializing Gaming Engine...',
    'Loading Tournament Data...',
    'Connecting to Servers...',
    'Preparing Your Experience...',
    'Ready to Play!'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-orange-900 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Gaming Icons */}
      {gamingIcons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${15 + (index % 4) * 20}%`,
            top: `${20 + Math.floor(index / 4) * 25}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 0.6, 0.3],
            scale: [0, 1.2, 0.8],
            rotate: [0, 360, 720],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon className={`w-8 h-8 ${color} drop-shadow-lg`} />
        </motion.div>
      ))}

      <div className="text-center relative z-10">
        {/* Main Logo Container with Enhanced 3D Effects */}
        <motion.div
          initial={{ scale: 0, rotateY: -180, z: -1000 }}
          animate={{ scale: 1, rotateY: 0, z: 0 }}
          transition={{ 
            duration: 2, 
            type: "spring", 
            stiffness: 100,
            damping: 15
          }}
          className="relative mb-12"
        >
          <div className="w-40 h-40 mx-auto relative perspective-1000">
            {/* Outer Ring */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 border-4 border-orange-500/30 rounded-full"
            />
            
            {/* Middle Ring */}
            <motion.div
              animate={{ 
                rotate: [360, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-2 border-2 border-blue-500/40 rounded-full"
            />

            {/* Main Logo */}
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                rotateX: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-4 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden preserve-3d"
              style={{
                boxShadow: '0 0 60px rgba(255,107,53,0.6), inset 0 0 60px rgba(255,255,255,0.1)'
              }}
            >
              {/* Animated Gradient Overlay */}
              <motion.div 
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
                    'linear-gradient(225deg, transparent, rgba(255,255,255,0.3), transparent)',
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl"
              />
              
              {/* Floating Gaming Elements Inside Logo */}
              <motion.div
                animate={{ 
                  y: [-3, 3, -3],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-2 left-2"
              >
                <Gamepad2 className="w-5 h-5 text-white/70" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [3, -3, 3],
                  rotate: [0, -8, 8, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-2 right-2"
              >
                <Zap className="w-5 h-5 text-yellow-300" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [-2, 2, -2],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
              >
                <Trophy className="w-5 h-5 text-yellow-400" />
              </motion.div>
              
              {/* Main Logo Text with Enhanced Animation */}
              <motion.div
                initial={{ scale: 0, rotateZ: -180 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotateZ: 0,
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { delay: 0.5, duration: 1, ease: "backOut" }
                }}
                className="text-3xl font-black text-white relative z-10"
                style={{
                  textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3)'
                }}
              >
                AK
              </motion.div>
            </motion.div>

            {/* Pulsing Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-2xl"
            />
          </div>
        </motion.div>

        {/* Enhanced App Name with 3D Text Effect */}
        <motion.div
          initial={{ y: 100, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "backOut" }}
          className="mb-8"
        >
          <motion.h1
            animate={{
              textShadow: [
                '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(255,107,53,0.3)',
                '0 6px 12px rgba(0,0,0,0.6), 0 12px 24px rgba(255,107,53,0.5)',
                '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(255,107,53,0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl md:text-6xl font-black text-white mb-2"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #FF6B35 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #FF6B35 50%, #fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
              }}
            >
              আমার খেলা
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-2xl text-orange-200 font-bold tracking-wider"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Amar Khela
          </motion.p>
        </motion.div>

        {/* Spinning Loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="relative mx-auto mb-8 w-20 h-20"
        >
          {/* Outer spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-transparent border-t-orange-500 border-r-orange-400 rounded-full"
          />
          
          {/* Inner spinning ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-3 border-transparent border-t-blue-500 border-l-blue-400 rounded-full"
          />
          
          {/* Center dot */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg"
          />
          
          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-4 bg-orange-500/20 rounded-full blur-xl"
          />
        </motion.div>

        {/* Dynamic Loading Messages */}
        <motion.div
          key={currentPhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-orange-200 text-lg font-medium mb-2">
            {loadingMessages[currentPhase]}
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-slate-400 text-sm"
          >
            Bangladesh's #1 Free Fire Gaming Platform
          </motion.div>
        </motion.div>

        {/* Loading Dots Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center space-x-2 mt-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-orange-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Corner Gaming Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-16 h-16 border-2 border-orange-500/30 rounded-full flex items-center justify-center"
      >
        <Target className="w-8 h-8 text-orange-400" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-16 h-16 border-2 border-blue-500/30 rounded-full flex items-center justify-center"
      >
        <Crown className="w-8 h-8 text-blue-400" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-16 h-16 border-2 border-green-500/30 rounded-full flex items-center justify-center"
      >
        <Shield className="w-8 h-8 text-green-400" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [180, -180],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 right-10 w-16 h-16 border-2 border-purple-500/30 rounded-full flex items-center justify-center"
      >
        <Flame className="w-8 h-8 text-purple-400" />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;