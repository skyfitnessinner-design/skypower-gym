import { useTranslation } from "react-i18next";
import logoImg from "../../assets/logo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 transition-colors duration-500">
      {/* Използваме auto за логото, за да бъде възможно най-близо до останалите колони */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[auto,1fr,1fr] gap-8 lg:gap-16 mb-12">
        {/* Лого колона */}
        <div data-aos="fade-up" className="flex items-start">
          <img
            src={logoImg}
            alt="SkyPower Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Работно време */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">
            {t("contact.workingHours")}
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            {(t("contact.hours", { returnObjects: true }) as any[]).map(
              (schedule, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b border-slate-900 pb-2"
                >
                  <span>{schedule.day}</span>
                  <span className="text-white font-bold">{schedule.time}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Find Us */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">
            Find Us
          </h4>
          <ul className="space-y-3 text-sm font-medium mb-6">
            <li className="flex items-start gap-3">
              <span className="mt-0.5">📍</span>
              <a
                href={t("contact.mapLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                {t("contact.address")} <br /> {t("contact.city")}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <a
                href={`tel:${t("contact.phone").replace(/[^0-9+]/g, "")}`}
                className="text-white hover:text-blue-400 transition"
              >
                {t("contact.phone")}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <a
                href={`mailto:${t("contact.email")}`}
                className="text-white hover:text-blue-400 transition"
              >
                {t("contact.email")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs font-medium text-slate-600 uppercase tracking-wider border-t border-slate-900 pt-8">
        {t("contact.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
