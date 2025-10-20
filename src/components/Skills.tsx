import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';
import LogoLoop from './bit/LogoLoop';
import ScrollReveal from './bit/ScrollReveal';
import ShinyText from './bit/ShinyText';

const Skills: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Git',
    'React', 'Next.js', 'Tailwind CSS', 'React Context', 'Redux', 'Zustand',
    'Node.js', 'Express', 'Bun', 'SQL', 'MongoDB', 'Mongoose', 'Drizzle', 'Axios'
  ];

  const skillCategories = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    state: ['React Context', 'Redux', 'Zustand'],
    backend: ['Node.js', 'Express', 'Bun', 'SQL', 'MongoDB', 'Mongoose', 'Drizzle'],
    tools: ['Git', 'Axios']
  };

  return (
    <section id="skills" className={`py-20 bg-gradient-to-br from-slate-50 to-gray-100 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrollReveal>
            {translations.skillsTitle[language]}
          </ScrollReveal>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <h3 className={`text-lg font-semibold text-gray-800 mb-4 capitalize ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {category === 'frontend' && (language === 'fa' ? 'فرانت‌اند' : 'Frontend')}
                {category === 'state' && (language === 'fa' ? 'مدیریت وضعیت' : 'State Management')}
                {category === 'backend' && (language === 'fa' ? 'بک‌اند' : 'Backend')}
                {category === 'tools' && (language === 'fa' ? 'ابزارها' : 'Tools')}
              </h3>

              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LogoLoop for skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <ShinyText
              text={language === 'fa' ? 'تکنولوژی‌های مورد استفاده' : 'Technologies I Use'}
              className={`text-2xl font-bold ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}
            />
          </div>
          <LogoLoop
            logos={skills.map(skill => ({ node: skill }))}
            speed={80}
            width="100%"
            logoHeight={32}
            gap={24}
            pauseOnHover={true}
            className="py-8"
          />
        </motion.div>
      </div>
      
    </section>
  );
};

export default Skills;