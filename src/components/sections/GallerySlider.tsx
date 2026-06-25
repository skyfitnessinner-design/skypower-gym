import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { GALLERY_IMAGES } from "../../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const doubleImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

export default function GallerySlider() {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заглавие */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm mb-3">
            {t("gallery.label", "Галерия")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase italic">
            {t("gallery.title", "Нашите")}{" "}
            <span className="text-blue-600 dark:text-cyan-400">
              {t("gallery.highlight", "Моменти")}
            </span>
          </h2>
        </div>

        {/* Слайдър */}
        <div
          className="relative gallery-swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            // Настройки на 3D ефекта
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            className="pb-14 pt-4"
          >
            {doubleImages.map((image) => (
              <SwiperSlide key={image.id} className="w-full max-w-[500px]">
                <div className="overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-950">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
