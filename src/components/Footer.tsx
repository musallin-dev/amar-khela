import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Gamepad2
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Screenshots', href: '#screenshots' },
        { name: 'Download', href: '#download' },
        { name: 'Pricing', href: '#pricing' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Terms', href: '#terms' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press', href: '#press' }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mr-4 flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">{t('appName')}</h3>
                <p className="text-orange-400 text-sm font-medium">{t('tagline')}</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              Bangladesh's premier Free Fire gaming platform. Join thousands of players earning real rewards through competitive gaming.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 text-orange-400 mr-3" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 text-orange-400 mr-3" />
                <span>support@amarkhela.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Gaming?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Download Amar Khela now and join the ultimate Free Fire gaming experience in Bangladesh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-700/50 border-2 border-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-orange-500/50 transition-all duration-300"
              >
                Coming Soon to iOS
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 ${social.color} transition-colors duration-300 border border-slate-700 hover:border-orange-500/30`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm mb-4 md:mb-0"
            >
              © 2024 Amar Khela. All rights reserved. Made with ❤️ in Bangladesh.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm text-slate-400"
            >
              <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile padding for bottom navigation */}
      <div className="h-20 md:h-0" />
    </footer>
  );
};

export default Footer;