import { useTranslation } from "react-i18next";
import { GALLERY_IMAGES } from "../../constants";

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-100/50 dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2">
            Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase italic mb-4">
            {t("gallery.title")}{" "}
            <span className="text-blue-600 dark:text-cyan-400">Center</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[900px] md:h-[600px]">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              className={`${image.colSpan ?? ""} ${image.rowSpan ?? ""} rounded-3xl overflow-hidden relative group`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={image.src}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                alt={image.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
