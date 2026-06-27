import { useTranslation } from "react-i18next";
import { ABOUT_IMAGE } from "../../constants";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-950 border-t border-b border-slate-100 dark:border-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Текстова част */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm">
              {t("about.label")}
            </div>

            <h2 className="text-4xl lg:text-5xl font-black uppercase italic">
              {t("about.title")}{" "}
              <span className="text-blue-600 dark:text-cyan-400">
                {t("about.highlight")}
              </span>
            </h2>

            {/* Контейнер за четирите абзаца */}
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
                {t("about.description1")}
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {t("about.description2")}
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {t("about.description3")}
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {t("about.description4")}
              </p>
            </div>
          </div>

          {/* Снимка */}
          <div className="relative" data-aos="fade-left">
            <img
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt}
              className="rounded-[2.5rem] shadow-xl w-full h-[550px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
