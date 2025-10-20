import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import StarBorder from './bit/StarBorder';
import ScrollReveal from './bit/ScrollReveal';

const Contact: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: language === 'fa' ? 'ایمیل' : 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: language === 'fa' ? 'تلفن' : 'Phone',
      value: '+98 123 456 7890',
      href: 'tel:+981234567890',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      label: language === 'fa' ? 'واتس‌اپ' : 'WhatsApp',
      value: language === 'fa' ? 'پیام دهید' : 'Send Message',
      href: 'https://wa.me/981234567890',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className={`py-20 bg-gradient-to-br from-slate-900 to-slate-800 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrollReveal>
            {translations.contactTitle[language]}
          </ScrollReveal>
          <p className={`text-gray-400 text-lg mt-4 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
            {language === 'fa' ? 'آماده همکاری هستیم' : 'Ready to collaborate'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className={`text-lg text-gray-300 mb-8 leading-relaxed ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
              {translations.contactText[language]}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <StarBorder
                    as="a"
                    href={method.href}
                    color={`rgb(255 255 255 / 0.1)`}
                    speed="3s"
                    className="block w-full"
                  >
                    <div className="p-6 text-center">
                      <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${method.color} mb-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className={`text-lg font-semibold text-white mb-2 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {method.label}
                      </h3>
                      <p className={`text-gray-400 text-sm ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                        {method.value}
                      </p>
                    </div>
                  </StarBorder>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative z-10">
                <Send className="h-16 w-16 mx-auto mb-6 text-white/80" />
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                  {language === 'fa' ? 'بیایید پروژه شما را شروع کنیم!' : 'Let\'s Start Your Project!'}
                </h3>
                <p className={`text-white/90 mb-8 max-w-2xl mx-auto text-lg ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                  {language === 'fa'
                    ? 'هر ایده‌ای دارید، من می‌توانم آن را به واقعیت تبدیل کنم. همین امروز شروع کنیم!'
                    : 'Whatever your idea is, I can bring it to life. Let\'s start today!'
                  }
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <StarBorder
                    as="a"
                    href="mailto:contact@example.com"
                    color="rgba(255,255,255,0.3)"
                    speed="4s"
                  >
                    <span className={`flex items-center space-x-2 rtl:space-x-reverse font-medium ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                      <Mail className="h-5 w-5" />
                      <span>{language === 'fa' ? 'ارسال ایمیل' : 'Send Email'}</span>
                    </span>
                  </StarBorder>

                  <StarBorder
                    as="a"
                    href="https://wa.me/981234567890"
                    color="rgba(255,255,255,0.3)"
                    speed="4s"
                  >
                    <span className={`flex items-center space-x-2 rtl:space-x-reverse font-medium ${language === 'fa' ? 'font-estedad' : 'font-inter'}`}>
                      <MessageCircle className="h-5 w-5" />
                      <span>{language === 'fa' ? 'چت کنیم' : 'Let\'s Chat'}</span>
                    </span>
                  </StarBorder>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;