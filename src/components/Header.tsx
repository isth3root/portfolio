import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';
import { Menu, X } from 'lucide-react';
import StaggeredMenu from './bit/StaggeredMenu';

const Header: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { key: 'navHome', href: '#home' },
    { key: 'navAbout', href: '#about' },
    { key: 'navSkills', href: '#skills' },
    { key: 'navProjects', href: '#projects' },
    { key: 'navContact', href: '#contact' }
  ];

  const staggeredMenuItems = navItems.map(item => ({
    label: translations[item.key as keyof typeof translations][language],
    ariaLabel: translations[item.key as keyof typeof translations][language],
    link: item.href
  }));

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <h1 className={`text-xl font-bold text-white ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {translations.name[language]}
              </h1>
            </motion.div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}
                >
                  {translations[item.key as keyof typeof translations][language]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* STAGGERED MENU (mounted always, animated via open prop) */}
      <StaggeredMenu
        isFixed={true}
        position="right"
        colors={['#1e1e2e', '#312e81']}
        items={staggeredMenuItems.map(item => ({
          ...item,
          onClick: handleCloseMenu // custom field handled below
        }))}
        displaySocials={false}
        showHeader={false}
        open={isMenuOpen}
        onMenuClose={handleCloseMenu}
      />
    </>
  );
};

export default Header;
