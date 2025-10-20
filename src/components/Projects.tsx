import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';
import { ExternalLink, Code, Palette, Shield } from 'lucide-react';
import StarBorder from './bit/StarBorder';
import ScrollReveal from './bit/ScrollReveal';

const Projects: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const projects = [
    {
      titleKey: 'h3x3dTitle',
      descKey: 'h3x3dDesc',
      link: 'https://h3x3d.com',
      color: 'from-blue-500 to-purple-600',
      icon: Code,
      tech: ['React', 'Node.js', 'MongoDB', '3D Printing API']
    },
    {
      titleKey: 'bimerzTitle',
      descKey: 'bimerzDesc',
      link: 'https://bimerz.ir',
      color: 'from-green-500 to-teal-600',
      icon: Shield,
      tech: ['Next.js', 'TypeScript', 'Insurance APIs', 'Security']
    }
  ];

  return (
    <section id="projects" className={`py-20 bg-gradient-to-br from-slate-900 to-slate-800 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrollReveal>
            {translations.projectsTitle[language]}
          </ScrollReveal>
          <p className={`text-gray-400 text-lg mt-4 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
            {language === 'fa' ? 'پروژه‌های اخیر و برجسته من' : 'My recent and featured projects'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative bg-gradient-to-r ${project.color} rounded-2xl p-8 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/20 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className={`text-xl font-bold ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {translations[project.titleKey as keyof typeof translations][language]}
                      </h3>
                    </div>

                    <p className={`mb-6 text-white/90 leading-relaxed ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                      {translations[project.descKey as keyof typeof translations][language]}
                    </p>

                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold text-white/80 mb-2 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {language === 'fa' ? 'تکنولوژی‌ها:' : 'Technologies:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/20 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <StarBorder
                      as="a"
                      href={project.link}
                      color="rgba(255,255,255,0.3)"
                      speed="3s"
                      className="inline-block"
                    >
                      <span className={`flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        <span>{language === 'fa' ? 'مشاهده وب‌سایت' : 'View Website'}</span>
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </StarBorder>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <Palette className="h-12 w-12 mx-auto mb-4 text-white/80" />
            <h3 className={`text-2xl font-bold mb-4 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
              {language === 'fa' ? 'پروژه بعدی شما چیست؟' : 'What\'s Your Next Project?'}
            </h3>
            <p className={`text-white/90 mb-6 max-w-2xl mx-auto ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
              {language === 'fa'
                ? 'ایده یا پروژه‌ای دارید؟ بیایید آن را به واقعیت تبدیل کنیم!'
                : 'Have an idea or project? Let\'s bring it to life!'
              }
            </p>
            <StarBorder
              as="a"
              href="#contact"
              color="rgba(255,255,255,0.3)"
              speed="4s"
            >
              <span className={`font-medium ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {language === 'fa' ? 'شروع کنیم' : 'Let\'s Get Started'}
              </span>
            </StarBorder>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;