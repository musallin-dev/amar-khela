import { useState, useEffect, createContext, useContext } from 'react';
import { Language, Translations } from '../types';

const translations: Translations = {
  en: {
    appName: 'Amar Khela',
    tagline: 'Bangladesh\'s Premier Free Fire Gaming Platform',
    heroTitle: 'Experience the Ultimate Free Fire Gaming Adventure',
    heroSubtitle: 'Join thousands of gamers in Bangladesh\'s most exciting Free Fire sports platform. Earn real rewards, compete in tournaments, and dominate the leaderboards!',
    downloadNow: 'Download Now',
    getStarted: 'Get Started',
    about: 'About',
    features: 'Features',
    screenshots: 'Screenshots',
    contact: 'Contact',
    home: 'Home',
    support247: '24/7 Support',
    support247Desc: 'Round-the-clock customer support in Bengali and English',
    funEasy: 'Fun & Easy to EARN',
    funEasyDesc: 'Simple gameplay mechanics with real earning opportunities',
    realtime: 'Realtime Statistics',
    realtimeDesc: 'Live tracking of your performance and earnings',
    fastWithdraw: 'Fast Withdrawal & Deposit',
    fastWithdrawDesc: 'Quick and secure transactions through bKash, Nagad, and more',
    aboutTitle: 'Why Choose Amar Khela?',
    aboutSubtitle: 'The most trusted Free Fire gaming platform in Bangladesh',
    screenshotsTitle: 'App Screenshots',
    screenshotsSubtitle: 'Take a look at our beautiful and intuitive interface',
    downloadApp: 'Download the App',
    availableOn: 'Available on Google Play Store',
    comingSoon: 'Coming Soon to iOS'
  },
  bn: {
    appName: 'আমার খেলা',
    tagline: 'বাংলাদেশের প্রিমিয়ার ফ্রি ফায়ার গেমিং প্ল্যাটফর্ম',
    heroTitle: 'চূড়ান্ত ফ্রি ফায়ার গেমিং অভিজ্ঞতা নিন',
    heroSubtitle: 'বাংলাদেশের সবচেয়ে রোমাঞ্চকর ফ্রি ফায়ার স্পোর্টস প্ল্যাটফর্মে হাজারো গেমারদের সাথে যোগ দিন। সত্যিকারের পুরস্কার অর্জন করুন, টুর্নামেন্টে প্রতিযোগিতা করুন এবং লিডারবোর্ডে আধিপত্য বিস্তার করুন!',
    downloadNow: 'এখনই ডাউনলোড করুন',
    getStarted: 'শুরু করুন',
    about: 'আমাদের সম্পর্কে',
    features: 'বৈশিষ্ট্য',
    screenshots: 'স্ক্রিনশট',
    contact: 'যোগাযোগ',
    home: 'হোম',
    support247: '২৪/৭ সাপোর্ট',
    support247Desc: 'বাংলা ও ইংরেজিতে ২৪ ঘন্টা গ্রাহক সেবা',
    funEasy: 'মজাদার ও সহজ আয়',
    funEasyDesc: 'সহজ গেমপ্লে এবং সত্যিকারের আয়ের সুযোগ',
    realtime: 'রিয়েল টাইম পরিসংখ্যান',
    realtimeDesc: 'আপনার পারফরমেন্স এবং আয়ের লাইভ ট্র্যাকিং',
    fastWithdraw: 'দ্রুত উত্তোলন ও জমা',
    fastWithdrawDesc: 'বিকাশ, নগদ এবং আরও অনেক মাধ্যমে দ্রুত ও নিরাপদ লেনদেন',
    aboutTitle: 'কেন আমার খেলা বেছে নিবেন?',
    aboutSubtitle: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত ফ্রি ফায়ার গেমিং প্ল্যাটফর্ম',
    screenshotsTitle: 'অ্যাপ স্ক্রিনশট',
    screenshotsSubtitle: 'আমাদের সুন্দর এবং স্বজ্ঞাত ইন্টারফেস দেখুন',
    downloadApp: 'অ্যাপ ডাউনলোড করুন',
    availableOn: 'গুগল প্লে স্টোরে উপলব্ধ',
    comingSoon: 'শীঘ্রই iOS এ আসছে'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' }
];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLang = localStorage.getItem('amarkhela-language');
    if (savedLang) {
      const lang = languages.find(l => l.code === savedLang);
      if (lang) setLanguage(lang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('amarkhela-language', lang.code);
  };

  const t = (key: string): string => {
    return translations[language.code][key] as string || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };