import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NAVIGATION_LINKS, STORAGE_KEYS } from "../../constants";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    return stored !== null ? JSON.parse(stored) : true;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Заключване на скрола на body при отворено мобилно меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Почистване при демонтиране
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "bg" ? "en" : "bg";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative z-50">
        {/* Лого */}
        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-tighter italic">
          Sky
          <span className="text-slate-900 dark:text-white">Power</span>
        </div>

        {/* Десктоп навигация */}
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

        {/* Бутони за действия */}
        <div className="flex items-center space-x-3 sm:space-x-4">
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

          {/* Бургер бутон за мобилни устройства */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Овърлей за мобилното меню */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 
          bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg
          flex flex-col pt-28 pb-8 px-4
          overflow-y-auto
          transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-8"
          }`}
      >
        <nav className="flex flex-col items-center space-y-6 my-auto text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition-transform duration-300 transform hover:scale-105 py-2 w-full text-center"
            >
              {t(`header.nav.${link.label.toLowerCase()}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
