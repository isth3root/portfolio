import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';
import ScrollFloat from './bit/ScrollFloat';
import ScrollReveal from './bit/ScrollReveal';
import TrueFocus from './bit/TrueFocus';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const highlights = [
    {
      icon: Code,
      title: language === 'fa' ? 'توسعه‌دهنده فول‌استک' : 'Full-Stack Developer',
      desc: language === 'fa' ? 'تخصص در React، Node.js و پایگاه داده' : 'Expertise in React, Node.js and databases'
    },
    {
      icon: Palette,
      title: language === 'fa' ? 'طراحی UI/UX' : 'UI/UX Design',
      desc: language === 'fa' ? 'ایجاد تجربه‌های کاربری جذاب' : 'Creating engaging user experiences'
    },
    {
      icon: Zap,
      title: language === 'fa' ? 'عملکرد بالا' : 'High Performance',
      desc: language === 'fa' ? 'بهینه‌سازی برای سرعت و کارایی' : 'Optimized for speed and efficiency'
    },
    {
      icon: Users,
      title: language === 'fa' ? 'کار گروهی' : 'Team Collaboration',
      desc: language === 'fa' ? 'تجربه همکاری در تیم‌های حرفه‌ای' : 'Experience in professional team collaboration'
    }
  ];

  return (
    <section id="about" className={`py-20 bg-gradient-to-br from-white to-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrollReveal>
            {translations.aboutTitle[language]}
          </ScrollReveal>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {language === 'fa' ? 'درباره من' : 'About Me'}
              </h3>
              <p className={`text-lg text-gray-700 leading-relaxed mb-6 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {translations.aboutText[language]}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className={`text-2xl font-bold text-blue-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>5+</div>
                  <div className={`text-sm text-gray-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                    {language === 'fa' ? 'سال تجربه' : 'Years Experience'}
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className={`text-2xl font-bold text-purple-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>50+</div>
                  <div className={`text-sm text-gray-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                    {language === 'fa' ? 'پروژه' : 'Projects'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3 rtl:ml-3 rtl:mr-0">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h4 className={`text-lg font-semibold text-gray-900 mb-2 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                    {highlight.title}
                  </h4>
                  <p className={`text-sm text-gray-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                    {highlight.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <ScrollFloat>
            {language === 'fa' ? 'سفر حرفه‌ای من' : 'My Professional Journey'}
          </ScrollFloat>

          <div className="mt-8">
            <TrueFocus
              sentence={language === 'fa' ? 'توسعه وب خلاقانه و مدرن' : 'Creative Modern Web Development'}
              manualMode={false}
              blurAmount={3}
              borderColor="rgb(168, 85, 247)"
              glowColor="rgba(168, 85, 247, 0.4)"
              animationDuration={0.8}
              pauseBetweenAnimations={2}
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-1/2 ${isRTL ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <h4 className={`text-lg font-semibold text-gray-900 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {language === 'fa' ? 'شروع برنامه‌نویسی' : 'Started Programming'}
                      </h4>
                      <p className={`text-gray-600 text-sm ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {language === 'fa' ? 'یادگیری HTML، CSS و JavaScript' : 'Learning HTML, CSS and JavaScript'}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className={`w-1/2 ${isRTL ? 'text-left pl-8' : 'text-right pr-8'}`}>
                    <span className={`text-sm text-gray-500 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>2020</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isRTL ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${isRTL ? 'text-left pl-8' : 'text-right pr-8'}`}>
                    <span className={`text-sm text-gray-500 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>2023</span>
                  </div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className={`w-1/2 ${isRTL ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <h4 className={`text-lg font-semibold text-gray-900 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {language === 'fa' ? 'توسعه‌دهنده فول‌استک' : 'Full-Stack Developer'}
                      </h4>
                      <p className={`text-gray-600 text-sm ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {language === 'fa' ? 'کار با React، Node.js و پروژه‌های حرفه‌ای' : 'Working with React, Node.js and professional projects'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;