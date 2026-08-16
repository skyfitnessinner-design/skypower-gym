import { useTranslation } from "react-i18next";
import { HERO_IMAGE } from "../../constants";

export default function Hero() {
  const { t } = useTranslation();

  const title = t("hero.title");
  const words = title.split(" ");
  const lastTwoWords = words.slice(-2).join(" ");
  const firstWords = words.slice(0, -2).join(" ");

  return (
    <section
      className="relative min-h-[720px] flex items-center"
      style={{
        backgroundImage: `url(${HERO_IMAGE.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Лек затъмняващ оверлей */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div
          className="pt-36 pb-24 lg:pt-56 lg:pb-40 max-w-xl"
          data-aos="fade-up"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/30 text-white font-bold text-sm uppercase tracking-wider">
            ⚡ {t("hero.subtitle")}
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight uppercase italic text-white mt-6">
            {firstWords}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {lastTwoWords}
            </span>
          </h1>

          <p className="text-xl text-white/90 font-medium border-l-4 border-blue-500 pl-4 mt-4">
            {t("zones.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#pricing"
              className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#gallery"
              className="text-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:-translate-y-1"
            >
              {t("header.nav.gallery")} ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
