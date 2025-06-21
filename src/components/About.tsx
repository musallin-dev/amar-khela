import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, BarChart3, Zap, Shield, Users, Trophy, Gamepad2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('support247'),
      description: t('support247Desc'),
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-400'
    },
    {
      icon: DollarSign,
      title: t('funEasy'),
      description: t('funEasyDesc'),
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-400'
    },
    {
      icon: BarChart3,
      title: t('realtime'),
      description: t('realtimeDesc'),
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-400'
    },
    {
      icon: Zap,
      title: t('fastWithdraw'),
      description: t('fastWithdrawDesc'),
      color: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-400'
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Players' },
    { icon: Trophy, value: '1,000+', label: 'Tournaments' },
    { icon: DollarSign, value: '৳10L+', label: 'Total Payouts' },
    { icon: Gamepad2, value: '24/7', label: 'Gaming Support' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
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
              {t('aboutTitle')}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:border-orange-500/30 transition-all duration-300">
                {/* Icon with 3D effect */}
                <motion.div
                  whileHover={{ 
                    rotateY: 15,
                    rotateX: 15,
                  }}
                  className="relative mb-6"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg relative`}>
                    <feature.icon className={`w-8 h-8 text-white`} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">100% Safe & Secure</h3>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Your data and earnings are protected with bank-level security. Licensed and regulated gaming platform with transparent policies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-slate-700/50 rounded-full px-4 py-2 text-sm text-slate-300">
                🔒 SSL Encrypted
              </div>
              <div className="bg-slate-700/50 rounded-full px-4 py-2 text-sm text-slate-300">
                🏆 Licensed Platform
              </div>
              <div className="bg-slate-700/50 rounded-full px-4 py-2 text-sm text-slate-300">
                💰 Instant Payouts
              </div>
              <div className="bg-slate-700/50 rounded-full px-4 py-2 text-sm text-slate-300">
                📱 Mobile Optimized
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;