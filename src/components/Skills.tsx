import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { translations } from '../utils/translations'
import ScrollReveal from './bit/ScrollReveal'

import { Code, Database, AppWindow, GitMerge, BrainCircuit } from 'lucide-react'

const Skills: React.FC = () => {
  const { language, isRTL } = useLanguage()

  const skillCategories = {
    frontend: {
      icon: AppWindow,
      title: language === 'fa' ? 'فرانت‌اند' : 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    state: {
      icon: BrainCircuit,
      title: language === 'fa' ? 'مدیریت وضعیت' : 'State Management',
      skills: ['React Context', 'Redux', 'Zustand']
    },
    backend: {
      icon: Database,
      title: language === 'fa' ? 'بک‌اند' : 'Backend',
      skills: ['Node.js', 'Express', 'Bun', 'SQL', 'MongoDB', 'Mongoose', 'Drizzle']
    },
    tools: {
      icon: GitMerge,
      title: language === 'fa' ? 'ابزارها' : 'Tools',
      skills: ['Git', 'Axios']
    }
  }

  return (
    <section
      id="skills"
      className={`py-20 bg-gradient-to-br from-slate-50 to-gray-100 ${isRTL ? 'rtl' : 'ltr'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrollReveal>{translations.skillsTitle[language]}</ScrollReveal>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.values(skillCategories).map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-purple-600" />
                <h3
                  className={`text-xl font-semibold text-gray-800 ml-3 ${language === 'fa' ? 'font-estedad' : 'font-inter'
                    }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + index * 0.1
                    }}
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
      </div>
    </section>
  )
}

export default Skills
