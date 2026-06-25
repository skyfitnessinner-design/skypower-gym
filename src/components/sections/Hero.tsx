import { useTranslation } from "react-i18next";
import { HERO_IMAGE } from "../../constants";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-8 z-10" data-aos="fade-right">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-400 font-bold text-sm uppercase tracking-wider">
          ⚡ {t("hero.subtitle")}
        </div>
        <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] uppercase italic">
          {t("hero.title")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            {t("hero.cta")}
          </span>
          <br />
          {t("hero.title").split(" ").pop()}.
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-lg border-l-4 border-blue-600 pl-4">
          {t("about.description1")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#pricing"
            className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1"
          >
            {t("pricing.title")} →
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 w-full relative" data-aos="fade-left">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-slate-800">
          <img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </div>
        <div
          className="absolute -bottom-6 -left-6 lg:-left-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 border border-slate-100 dark:border-slate-700"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="text-4xl font-black text-blue-600 dark:text-cyan-400">
            SkyPower
          </div>
          <div className="text-sm font-bold text-slate-500 uppercase">
            {t("contact.city")}
          </div>
        </div>
      </div>
    </section>
  );
}
