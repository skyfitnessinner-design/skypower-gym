import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { GALLERY_IMAGES } from "../../constants";

export default function GallerySlider() {
  const { t } = useTranslation();
  type GalleryImage = (typeof GALLERY_IMAGES)[number];

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const openImage = (img: GalleryImage) => {
    setActive(img);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setActive(null);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#0d0d0d] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[#c59d5f] uppercase tracking-widest text-sm font-semibold">
              {t("gallery.label", "Галерия")}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-serif leading-tight">
              {t("gallery.title", "Нашият фитнес център")}
            </h1>
          </div>
          <span className="text-sm text-white/50">
            {GALLERY_IMAGES.length} снимки
          </span>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          className="gallery-swiper !pb-12"
        >
          {GALLERY_IMAGES.map((image) => (
            <SwiperSlide key={image.id}>
              <button
                type="button"
                className="group relative block h-[600px] w-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-xl"
                onClick={() => openImage(image)}
                aria-label={`Отвори ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Модал (Lightbox) */}
      {isOpen && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="close"
              className="absolute -top-12 right-0 text-white hover:text-[#c59d5f] transition-colors p-2 text-2xl"
            >
              ✕
            </button>
            <img
              src={active.src}
              alt={active.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
