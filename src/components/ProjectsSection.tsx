import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

const projects = [
  {
    name: "h3x3d",
    description: {
      en: "An e-commerce platform for 3D printed items.",
      fa: "یک پلتفرم تجارت الکترونیک برای اقلام چاپ سه‌بعدی.",
    },
    link: "#", // Replace with actual link
  },
  {
    name: "bimerz",
    description: {
      en: "An insurance website.",
      fa: "یک وب‌سایت بیمه.",
    },
    link: "https://bimerz.ir",
  },
]

const ProjectsSection: React.FC = () => {
  const { lang } = useLanguage()

  return (
    <motion.section
      id="projects"
      className="py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {lang === "fa" ? "پروژه های من" : "My Projects"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="bg-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              <p className="text-lg mb-4">{project.description[lang]}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 font-semibold hover:text-blue-500"
              >
                {lang === "fa" ? "مشاهده پروژه" : "View Project"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
