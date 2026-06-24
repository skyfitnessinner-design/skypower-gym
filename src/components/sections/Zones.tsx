import { useTranslation } from "react-i18next";
import { ZONES } from "../../constants";

export default function Zones() {
  const { t } = useTranslation();
  const zonesData = t("zones.zones", { returnObjects: true }) as any[];

  return (
    <section
      id="services"
      className="py-24 bg-slate-100/50 dark:bg-slate-900 relative transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black uppercase italic">
            {t("zones.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Equipment
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 font-medium text-lg max-w-2xl mx-auto">
            {t("zones.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ZONES.map((zone, index) => {
            const zoneData = zonesData.find((z: any) => z.id === zone.id);
            return (
              <div
                key={zone.id}
                className="group relative bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 bg-blue-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                  {zone.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-3">
                  {zoneData?.title || zone.id}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed">
                  {zoneData?.desc || ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
