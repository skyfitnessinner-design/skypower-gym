import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2">
            Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase italic mb-4">
            {t("pricing.title")}{" "}
            <span className="text-blue-600 dark:text-cyan-400">Membership</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {(t("pricing.plans", { returnObjects: true }) as any[]).map(
            (plan, index) => (
              <div
                key={plan.name}
                className={
                  index === 3
                    ? "p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-center shadow-lg border border-blue-400/30 transform scale-105"
                    : "p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm"
                }
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`text-xs font-bold uppercase mb-2 ${
                    index === 3 ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {plan.name}
                </div>
                <div
                  className={`text-3xl font-black ${
                    index === 3
                      ? "text-white"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.price}
                  <span className="text-lg">{plan.currency}</span>
                </div>
                <div
                  className={`text-xs mt-2 ${index === 3 ? "text-blue-100" : "text-slate-500"}`}
                >
                  {plan.period}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold uppercase mb-6 text-blue-600 dark:text-cyan-400">
              Daily Pass
            </h3>
            <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
              <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                <span>12 visits</span>{" "}
                <strong className="text-xl">27 BGN</strong>
              </li>
              <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                <span>16 visits</span>{" "}
                <strong className="text-xl">29 BGN</strong>
              </li>
              <li className="flex justify-between items-center pb-1">
                <span>Unlimited</span>{" "}
                <strong className="text-xl">32 BGN</strong>
              </li>
            </ul>
          </div>

          <div
            className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold uppercase mb-6 text-blue-600 dark:text-cyan-400">
              Long-term Cards
            </h3>
            <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
              <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                <span>30 visits</span>{" "}
                <strong className="text-xl">90 BGN</strong>
              </li>
              <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                <span>6 months</span>{" "}
                <strong className="text-xl">170 BGN</strong>
              </li>
              <li className="flex justify-between items-center pb-1">
                <span>12 months</span>{" "}
                <strong className="text-xl">320 BGN</strong>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-bold uppercase mb-8 text-center text-slate-900 dark:text-white">
            Nutrition & Training Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-sm">Nutrition Plan - Women</span>{" "}
                  <strong>30 BGN</strong>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-sm">Training Program - Women</span>{" "}
                  <strong>30 BGN</strong>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="text-sm text-blue-600 dark:text-cyan-400 font-bold">
                    Complete Program - Women
                  </span>{" "}
                  <strong className="text-lg">50 BGN</strong>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-sm">Nutrition Plan - Men</span>{" "}
                  <strong>30 BGN</strong>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-sm">Training Program - Men</span>{" "}
                  <strong>30 BGN</strong>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="text-sm text-blue-600 dark:text-cyan-400 font-bold">
                    Complete Program - Men
                  </span>{" "}
                  <strong className="text-lg">55 BGN</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          data-aos="fade-up"
        >
          <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-bold text-blue-600 dark:text-cyan-400">
              💪 Personal Training:
            </span>{" "}
            Custom programs. Ask at reception.
          </div>
          <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-bold text-green-600 dark:text-green-400">
              ✔️ MultiSport:
            </span>{" "}
            Unlimited usage with MultiSport card.
          </div>
        </div>
      </div>
    </section>
  );
}
