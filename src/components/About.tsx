import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import ScrollFloat from './bit/ScrollFloat';
import TrueFocus from './bit/TrueFocus';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // ✅ Always call hooks first (to respect hook order)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // ✅ Then mark client-side after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const highlights = [
    {
      icon: Code,
      title: language === 'fa' ? 'توسعه‌دهنده فول‌استک' : 'Full-Stack Developer',
      desc: language === 'fa' ? 'تخصص در React، Node.js و پایگاه داده' : 'Expertise in React, Node.js and databases',
    },
    {
      icon: Palette,
      title: language === 'fa' ? 'طراحی UI/UX' : 'UI/UX Design',
      desc: language === 'fa' ? 'ایجاد تجربه‌های کاربری جذاب' : 'Creating engaging user experiences',
    },
    {
      icon: Zap,
      title: language === 'fa' ? 'عملکرد بالا' : 'High Performance',
      desc: language === 'fa' ? 'بهینه‌سازی برای سرعت و کارایی' : 'Optimized for speed and efficiency',
    },
    {
      icon: Users,
      title: language === 'fa' ? 'کار گروهی' : 'Team Collaboration',
      desc: language === 'fa' ? 'تجربه همکاری در تیم‌های حرفه‌ای' : 'Experience in professional team collaboration',
    },
  ];

  const timelineItems = [
    {
      year: '2020',
      title: language === 'fa' ? 'شروع توسعه وب' : 'Start Web Development',
      desc: language === 'fa' ? 'HTML، CSS و JavaScript' : 'HTML, CSS, JS',
    },
    {
      year: '2023',
      title: language === 'fa' ? 'بوت‌کمپ فرانت‌اند کوئرا' : 'Quera Frontend Bootcamp',
      desc: language === 'fa' ? 'React، Context، Redux، Git' : 'React, Context, Redux, Git',
    },
    {
      year: '2024',
      title: 'H3x3d',
      desc: 'Framer Motion, Jest, Tailwind, GSAP',
    },
    {
      year: '2025',
      title: 'Bimerz.ir',
      desc: 'RadixUI, Axios, Moment, Rechart, Express, Sonner, Helmet',
    },
  ];

  return (
    <section id="about" className={`py-20 bg-gradient-to-br from-white to-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold">
            {language === 'fa' ? 'درباره من' : 'About Me'}
          </h2>
        </motion.div>

        {/* Highlights */}
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
                {language === 'fa'
                  ? 'من یک توسعه‌دهنده وب با ۵ سال تجربه هستم که عاشق ایجاد تجربه‌های کاربری عالی و راه‌حل‌های دیجیتال خلاقانه هستم. تخصص من در فناوری‌های مدرن وب از جمله React، Next.js، و Node.js است.'
                  : 'I’m a web developer with 5 years of experience, passionate about creating delightful user experiences and modern digital solutions. My expertise includes React, Next.js, and Node.js.'}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className={`text-2xl font-bold text-blue-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>5+</div>
                  <div className={`text-sm text-gray-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                    {language === 'fa' ? 'سال تجربه' : 'Years Experience'}
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className={`text-2xl font-bold text-purple-600 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>10+</div>
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

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <ScrollFloat>
              <h2 className={`text-3xl font-bold text-gray-900 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                {language === 'fa' ? 'سفر حرفه‌ای من' : 'My Professional Journey'}
              </h2>
            </ScrollFloat>
            <div className="mt-4">
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
          </div>

          {/* ✅ Scroll-linked timeline */}
          <div ref={timelineRef} className="max-w-4xl mx-auto relative">
            {isClient && (
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
                style={{ height: lineHeight }}
              />
            )}

            {/* Timeline cards */}
            <div className="space-y-20">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`
        flex items-center relative
        ${index % 2 !== 0 ? 'flex-row-reverse' : ''}
        md:flex-row
        flex-col md:space-y-0 space-y-6
      `}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ amount: 0.4 }}
                >
                  {/* ✅ Card */}
                  <motion.div
                    className={`
          md:w-1/2 w-full
          ${index % 2 === 0
                        ? isRTL
                          ? 'md:text-right md:pr-8'
                          : 'md:text-left md:pl-8'
                        : isRTL
                          ? 'md:text-left md:pl-8'
                          : 'md:text-right md:pr-8'}
          text-center md:text-inherit
        `}
                    whileInView={{ scale: 1.08, transition: { duration: 0.6 } }}
                    viewport={{ amount: 0.5 }}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <h4
                        className={`text-lg font-semibold text-gray-900 ${language === 'fa' ? 'font-estedad' : 'font-inter'
                          }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-gray-600 text-sm ${language === 'fa' ? 'font-estedad' : 'font-inter'
                          }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* ✅ Dot and Year */}
                  <div className="flex flex-col items-center mx-4 md:mx-4 relative">
                    <motion.div
                      className={`${index === 0 ? 'h-8' : 'h-5'
                        } w-5 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10`}
                    />
                    <span
                      className={`text-sm text-gray-500 mt-1 ${language === 'fa' ? 'font-estedad' : 'font-inter'
                        }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* ✅ Spacer for desktop only */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
