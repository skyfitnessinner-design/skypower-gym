import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GALLERY_IMAGES } from "../../constants";

export default function GallerySlider() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<any>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const openImage = (img: any) => {
    setActive(img);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setActive(null);
  };

  const pick = (id: string) => GALLERY_IMAGES.find((img) => img.id === id);
  // Type for a single gallery image entry
  type GalleryImage = (typeof GALLERY_IMAGES)[number];

  // Pick images by id and filter out missing entries with a type guard
  const images = [
    pick("gym-2"),
    pick("gym-3"),
    pick("gym-4"),
    pick("gym-6"),
  ].filter((x): x is GalleryImage => Boolean(x));

  const largeImg = images[0] || GALLERY_IMAGES[0];
  const tallImg = images[1] || GALLERY_IMAGES[1];
  const bottomLeftImg = images[2] || GALLERY_IMAGES[2];
  const bottomRightImg = images[3] || GALLERY_IMAGES[3];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#0d0d0d] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Грид Контейнер */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:auto-rows-[380px]">
          {/* 1. Текстова част (Горе вляво) */}
          <div className="flex flex-col justify-center p-4 lg:p-0">
            <span className="text-[#c59d5f] uppercase tracking-widest text-sm font-semibold mb-4">
              {t("gallery.label", "Галерия")}
            </span>
            {/* Заглавието е направено по-малко: text-3xl за мобилни, text-4xl за десктоп */}
            <h1 className="text-3xl md:text-4xl font-serif leading-tight">
              {t("gallery.title", "Нашият фитнес център")}{" "}
              <span className="text-white block mt-2">
                {t("gallery.highlight", "Моменти")}
              </span>
            </h1>
          </div>

          {/* 2. Горна Средна Снимка */}
          <div
            className="relative h-[300px] lg:h-full rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
            onClick={() => openImage(largeImg)}
          >
            <img
              src={largeImg.src}
              alt={largeImg.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* 3. Дълга Снимка (Вдясно - заема 2 реда на десктоп) */}
          <div
            className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden cursor-pointer group shadow-xl lg:row-span-2"
            onClick={() => openImage(tallImg)}
          >
            <img
              src={tallImg.src}
              alt={tallImg.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* 4. Долна Лява Снимка */}
          <div
            className="relative h-[300px] lg:h-full rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
            onClick={() => openImage(bottomLeftImg)}
          >
            <img
              src={bottomLeftImg.src}
              alt={bottomLeftImg.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* 5. Долна Средна Снимка */}
          <div
            className="relative h-[300px] lg:h-full rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
            onClick={() => openImage(bottomRightImg)}
          >
            <img
              src={bottomRightImg.src}
              alt={bottomRightImg.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
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
            <div className="mt-6 text-center text-white">
              <div className="text-xl font-medium tracking-wide">
                {(active as any).caption_bg}
              </div>
              <div className="text-sm text-gray-400 mt-2 uppercase tracking-widest">
                {(active as any).caption_en}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
