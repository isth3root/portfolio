import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';
import FallingText from './bit/FallingText';
import StarBorder from './bit/StarBorder';
import RotatingText from './bit/RotatingText';
import SplitText from './bit/SplitText';

const Hero: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background with gradient and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-white font-bold">
              <FallingText
                text={translations.name[language]}
                highlightWords={['محمدامین', 'Mohamad', 'Amin', 'Seyedi']}
                trigger="auto"
                backgroundColor="transparent"
                fontSize="4rem"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <RotatingText
              texts={['Backend', 'Frontend', 'Fullstack']}
              className={`text-xl md:text-2xl text-purple-200 ${language === 'fa' ? 'font-estedad' : 'font-inter'} font-light`}
              rotationInterval={3000}
              staggerDuration={50}
            />
            <span className={`text-xl md:text-2xl text-purple-200 ml-2 ${language === 'fa' ? 'font-estedad' : 'font-inter'} font-light`}>
              {language === 'fa' ? 'توسعه‌دهنده' : 'Developer'}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <SplitText
              text={translations.heroSubtitle[language]}
              tag="p"
              className={`text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}
              delay={30}
              duration={0.8}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <StarBorder
              as="a"
              href="#contact"
              color="#a855f7"
              speed="4s"
              className="group"
            >
              <span className={`text-white font-medium ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {translations.contactButton[language]}
              </span>
            </StarBorder>

            <StarBorder
              as="a"
              href="#projects"
              color="#6366f1"
              speed="4s"
              className="group"
            >
              <span className={`text-white font-medium ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {language === 'fa' ? 'مشاهده پروژه‌ها' : 'View Projects'}
              </span>
            </StarBorder>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;