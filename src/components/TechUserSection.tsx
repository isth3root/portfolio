import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Git", "React", "Next.js", "Tailwind CSS",
  "React Context", "Redux", "Zustand", "Node.js", "Express", "Bun",
  "SQL", "MongoDB", "Mongoose", "Drizzle", "Axios"
]

const TechUserSection: React.FC = () => {
  const { lang } = useLanguage()

  return (
    <motion.section
      id="tech"
      className="py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {lang === "fa" ? "برای علاقه‌مندان به فناوری" : "For Tech Enthusiasts"}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-8">
            {lang === "fa"
              ? "به عنوان یک توسعه‌دهنده با ۵ سال تجربه، من پایه‌ای قوی در ساخت برنامه‌های وب مدرن و مقیاس‌پذیر دارم. در اینجا نگاهی به فناوری‌هایی که با آن‌ها کار می‌کنم، می‌اندازیم."
              : "As a developer with 5 years of experience, I have a strong foundation in building modern, scalable web applications. Here's a look at the technologies I work with."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-800 rounded-full text-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default TechUserSection
