import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div data-aos="fade-up">
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-tighter italic mb-4">
            Sky
            <span className="text-white">Power</span>
          </div>
          <p className="font-medium text-sm leading-relaxed">
            {t("about.description1")}
          </p>
        </div>
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
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">
            Find Us
          </h4>
          <ul className="space-y-3 text-sm font-medium mb-6">
            <li className="flex items-center gap-3">
              📍
              <span className="text-white">
                {t("contact.address")} <br /> {t("contact.city")}
              </span>
            </li>
            <li className="flex items-center gap-3">
              📞
              <span className="text-white">{t("contact.phone")}</span>
            </li>
            <li className="flex items-center gap-3">
              ✉️
              <span className="text-white">{t("contact.email")}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs font-medium text-slate-600 uppercase tracking-wider border-t border-slate-900 pt-8">
        {t("contact.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
