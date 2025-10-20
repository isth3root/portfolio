import React from "react"
import { useLanguage } from "../contexts/LanguageContext"

const Header: React.FC = () => {
  const { lang, toggleLang } = useLanguage()

  return (
    <header className="p-4 bg-gray-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        {lang === "fa" ? "محمدامین سیدی" : "Mohamad Amin Seyedi"}
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#tech" className="hover:text-gray-400">
              {lang === "fa" ? "برای متخصصان" : "For Tech Users"}
            </a>
          </li>
          <li>
            <a href="#non-tech" className="hover:text-gray-400">
              {lang === "fa" ? "برای دیگران" : "For Non-Tech Users"}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              {lang === "fa" ? "پروژه ها" : "Projects"}
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleLang}
        className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600"
      >
        {lang === "fa" ? "EN" : "FA"}
      </button>
    </header>
  )
}

export default Header
