import { useTranslation } from "react-i18next";
import { PRICING_DATA } from "../../constants";

export default function Pricing() {
  const { t } = useTranslation();

  const mainPlans =
    (t("pricing.plans", { returnObjects: true }) as any[]) || [];
  const studentPlans =
    (t("pricing.studentPlans", { returnObjects: true }) as any[]) || [];
  const longTermPlans =
    (t("pricing.longTermPlans", { returnObjects: true }) as any[]) || [];
  const trainingPlans =
    (t("pricing.trainingPlans", { returnObjects: true }) as any[]) || [];
  const nutritionPlans =
    (t("pricing.nutritionPlans", { returnObjects: true }) as any[]) || [];

  return (
    <section
      id="pricing"
      className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2">
            {t("pricing.subtitle")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase italic mb-4">
            {t("pricing.title")}{" "}
            <span className="text-blue-600 dark:text-cyan-400">
              {t("pricing.membership")}
            </span>
          </h2>
        </div>

        {/* 1. Главни Месечни Карти */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {mainPlans.map((plan, index) => {
            const price = PRICING_DATA.mainCards[index];
            return (
              <div
                key={plan.id || index}
                className={
                  index === 4
                    ? "p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-center shadow-lg border border-blue-400/30 transform scale-105 col-span-2 md:col-span-1"
                    : "p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm flex flex-col justify-center"
                }
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`text-xs font-bold uppercase mb-2 ${index === 4 ? "text-blue-100" : "text-slate-500"}`}
                >
                  {plan.name}
                </div>
                <div
                  className={`text-xl lg:text-2xl font-black ${index === 4 ? "text-white" : "text-slate-900 dark:text-white"}`}
                >
                  {price?.eur} €{" "}
                  <span className="font-normal opacity-50 mx-1">|</span>{" "}
                  {price?.bgn.toFixed(2)}
                  <span className="text-sm font-normal ml-1">
                    {t("pricing.currency")}
                  </span>
                </div>
                <div
                  className={`text-xs mt-2 ${index === 4 ? "text-blue-100" : "text-slate-500"}`}
                >
                  {plan.period}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Ученически и Дългосрочни карти */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ученически */}
          <div
            className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold uppercase mb-6 text-blue-600 dark:text-cyan-400">
              {t("pricing.studentTitle")}
            </h3>
            <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
              {studentPlans.map((plan, index) => {
                const price = PRICING_DATA.studentCards[index];
                return (
                  <li
                    key={plan.id || index}
                    className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3 last:border-0 last:pb-0"
                  >
                    <span>{plan.name}</span>
                    <strong className="text-lg">
                      {price?.eur} €{" "}
                      <span className="font-normal opacity-50 mx-1">|</span>{" "}
                      {price?.bgn.toFixed(2)} {t("pricing.currency")}
                    </strong>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Дългосрочни */}
          <div
            className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold uppercase mb-6 text-blue-600 dark:text-cyan-400">
              {t("pricing.longTermTitle")}
            </h3>
            <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
              {longTermPlans.map((plan, index) => {
                const price = PRICING_DATA.longTermCards[index];
                return (
                  <li
                    key={plan.id || index}
                    className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3 last:border-0 last:pb-0"
                  >
                    <span>{plan.name}</span>
                    <strong className="text-lg">
                      {price?.eur} €{" "}
                      <span className="font-normal opacity-50 mx-1">|</span>{" "}
                      {price?.bgn.toFixed(2)} {t("pricing.currency")}
                    </strong>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 3. Програми и режими */}
        <div
          className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-bold uppercase mb-8 text-center text-slate-900 dark:text-white">
            {t("pricing.programsTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase mb-4 text-slate-400">
                {t("pricing.trainingTitle")}
              </h4>
              <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
                {trainingPlans.map((plan, index) => {
                  const price = PRICING_DATA.trainingPrograms[index];
                  return (
                    <li
                      key={plan.id || index}
                      className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm">{plan.name}</span>
                      <strong className="text-base sm:text-lg">
                        {price?.eur} €{" "}
                        <span className="font-normal opacity-50 mx-1">|</span>{" "}
                        {price?.bgn.toFixed(2)} {t("pricing.currency")}
                      </strong>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase mb-4 text-slate-400">
                {t("pricing.nutritionTitle")}
              </h4>
              <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
                {nutritionPlans.map((plan, index) => {
                  const price = PRICING_DATA.nutritionPrograms[index];
                  return (
                    <li
                      key={plan.id || index}
                      className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm">{plan.name}</span>
                      <strong className="text-base sm:text-lg">
                        {price?.eur} €{" "}
                        <span className="font-normal opacity-50 mx-1">|</span>{" "}
                        {price?.bgn.toFixed(2)} {t("pricing.currency")}
                      </strong>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Специална карта (За двама) */}
        <div className="mb-8 text-center" data-aos="fade-up">
          <div className="inline-block p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300">
            <span>{t("pricing.specialCard")}: </span>
            <strong className="text-lg text-blue-600 dark:text-cyan-400 ml-2">
              {PRICING_DATA.specialCard.eur} €{" "}
              <span className="font-normal text-slate-400 mx-1">|</span>{" "}
              {PRICING_DATA.specialCard.bgn.toFixed(2)} {t("pricing.currency")}
            </strong>
          </div>
        </div>

        {/* Информационни панели долу */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          data-aos="fade-up"
        >
          <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 text-sm text-slate-600 dark:text-slate-400">
            {t("pricing.instructorText")}
          </div>
          <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 text-sm text-slate-600 dark:text-slate-400">
            {t("pricing.multisportText")}
          </div>
        </div>
      </div>
    </section>
  );
}
