import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "./components/Header"
import TechUserSection from "./components/TechUserSection"
import NonTechUserSection from "./components/NonTechUserSection"
import ProjectsSection from "./components/ProjectsSection"
import SmoothScroll from "./components/SmoothScroll"
import { useLanguage } from "./contexts/LanguageContext"

const App: React.FC = () => {
  const { lang } = useLanguage()

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {lang === "fa"
            ? "محمدامین سیدی - توسعه‌دهنده وب"
            : "Mohamad Amin Seyedi - Web Developer"}
        </title>
      </Helmet>
      <div
        className={`bg-gray-900 text-white min-h-screen flex flex-col ${
          lang === "fa" ? "font-persian" : "font-sans"
        }`}
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        <SmoothScroll />
        <Header />
        <main className="flex-grow">
          <TechUserSection />
          <NonTechUserSection />
          <ProjectsSection />
        </main>
        <footer className="p-4 bg-gray-800 text-center">
          <p>&copy; 2024 Mohamad Amin Seyedi</p>
        </footer>
      </div>
    </HelmetProvider>
  )
}

export default App
