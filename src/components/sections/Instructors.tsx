import { useTranslation } from "react-i18next";
// removed unused useEffect (debug only)
import manImg from "../../assets/slider/man.jpeg";
import womanImg from "../../assets/slider/woman.jpeg";

export default function Instructors() {
  const { t } = useTranslation();

  const team = [
    {
      name: t("instructors.kremena.name"),
      desc: t("instructors.kremena.desc"),
      phone: t("instructors.kremena.phone"),
      // Use local `woman` image for Kremena
      img: womanImg,
    },
    {
      name: t("instructors.petar.name"),
      desc: t("instructors.petar.desc"),
      phone: t("instructors.petar.phone"),
      // Use local `man` image for Petar
      img: manImg,
    },
  ];

  // Debug removed: logging images in development was here

  return (
    <section
      id="instructors"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-black uppercase italic">
            {t("instructors.label")}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("instructors.description")}
          </p>
        </div>

        <div className="space-y-16">
          {team.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Снимка */}
              <div className="w-full lg:w-1/2">
                <img
                  src={member.img}
                  alt={member.name}
                  className="instructors__img rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
                />
              </div>

              {/* Текст */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-black uppercase">{member.name}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.desc}
                </p>

                {/* Кликаем бутон за телефон */}
                <a
                  href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                  className="bg-blue-600 dark:bg-cyan-500 text-white font-bold py-3 px-6 rounded-full inline-block hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/20"
                >
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
