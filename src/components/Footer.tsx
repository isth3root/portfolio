import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';

const Footer: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <footer className={`bg-gray-900 text-white py-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={`text-gray-400 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
            © 2024 {translations.name[language]}. {language === 'fa' ? 'تمامی حقوق محفوظ است.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;