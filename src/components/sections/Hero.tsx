import { useTranslation } from "react-i18next";
import { HERO_IMAGE } from "../../constants";

export default function Hero() {
  const { t } = useTranslation();

  const title = t("hero.title"); // "Постигни своите фитнес цели"
  const words = title.split(" ");
  const lastTwoWords = words.slice(-2).join(" ");
  const firstWords = words.slice(0, -2).join(" ");

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Лява колона - Текст */}
      <div className="lg:w-1/2 space-y-8 z-10 max-w-xl" data-aos="fade-right">
        {/* Бадж */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-400 font-bold text-sm uppercase tracking-wider">
          ⚡ {t("hero.subtitle")}
        </div>

        {/* Заглавие */}
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight uppercase italic">
          {firstWords}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            {lastTwoWords}
          </span>
        </h1>

        {/* Кратко описание (използваме zones.subtitle, защото пасва идеално) */}
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium border-l-4 border-blue-600 pl-4">
          {t("zones.subtitle")}
        </p>

        {/* Бутони */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#pricing"
            className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#gallery"
            className="text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:-translate-y-1"
          >
            {t("header.nav.gallery")} ↓
          </a>
        </div>
      </div>

      {/* Дясна колона - Снимка */}
      <div className="lg:w-1/2 w-full relative" data-aos="fade-left">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-slate-800">
          <img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 transition duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </div>

        {/* Плаващ бадж (Контакти/Локация) */}
        <div
          className="absolute -bottom-6 -left-6 lg:-left-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 border border-slate-100 dark:border-slate-700"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">
            SkyPower
          </div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
            {t("contact.city")}
          </div>
        </div>
      </div>
    </section>
  );
}
