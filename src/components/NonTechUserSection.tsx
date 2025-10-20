import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

const NonTechUserSection: React.FC = () => {
  const { lang } = useLanguage()

  return (
    <motion.section
      id="non-tech"
      className="py-20 px-4 bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {lang === "fa" ? "بیایید حضور آنلاین شما را بسازیم" : "Let's Build Your Online Presence"}
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            {lang === "fa"
              ? "در دنیای دیجیتال امروز، یک وب‌سایت برای هر کسب‌وکاری ضروری است. این ویترین مجازی شما، نمونه کارهای شما و ارتباط شما با مشتریان است. من در ایجاد وب‌سایت‌های زیبا، کاربردی و کاربرپسند که به رشد کسب‌وکارها کمک می‌کنند، تخصص دارم."
              : "In today's digital world, a website is essential for any business. It's your virtual storefront, your portfolio, and your connection to customers. I specialize in creating beautiful, functional, and user-friendly websites that help businesses grow."}
          </p>
          <p className="text-lg mb-8">
            {lang === "fa"
              ? "چه به یک صفحه فرود ساده، یک فروشگاه اینترنتی کامل یا یک برنامه وب سفارشی نیاز داشته باشید، من می‌توانم به شما کمک کنم تا دیدگاه خود را به واقعیت تبدیل کنید. من تمام جزئیات فنی را بر عهده می‌گیرم تا شما بتوانید روی کاری که بهترین انجام می‌دهید تمرکز کنید: اداره کسب‌ووکارتان."
              : "Whether you need a simple landing page, a full-featured e-commerce store, or a custom web application, I can help you bring your vision to life. I handle all the technical details, so you can focus on what you do best: running your business."}
          </p>
          <motion.a
            href="mailto:mohamad.a.seyedi00@gmail.com"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang === "fa" ? "تماس بگیرید" : "Get in Touch"}
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default NonTechUserSection
