import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NAVIGATION_LINKS, STORAGE_KEYS } from "../../constants";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    return stored !== null ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "bg" ? "en" : "bg";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-tighter italic">
          Sky
          <span className="text-slate-900 dark:text-white">Power</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wide text-slate-900 dark:text-white">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              {t(`header.nav.${link.label.toLowerCase()}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:scale-110 transition shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 font-bold text-sm"
            title={i18n.language === "bg" ? "English" : "Български"}
            aria-label={
              i18n.language === "bg"
                ? "Switch to English"
                : "Превключи на български"
            }
          >
            {i18n.language === "bg" ? "EN" : "BG"}
          </button>
          <button
            onClick={toggleDarkMode}
            aria-label={
              isDarkMode ? t("header.lightMode") : t("header.darkMode")
            }
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:scale-110 transition shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            title={isDarkMode ? t("header.lightMode") : t("header.darkMode")}
          >
            <span className="text-lg" aria-hidden="true">
              {isDarkMode ? "☀️" : "🌙"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
