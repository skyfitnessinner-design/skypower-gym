import heroImg from "../assets/slider/IMG_0114.jpeg";
import aboutImg from "../assets/slider/IMG_0102.jpeg";
import gymImage1 from "../assets/slider/sdIunC.jpeg";
import gymImage2 from "../assets/slider/IMG_0100.jpeg";
import gymImage3 from "../assets/slider/IMG_0099.jpeg";
import gymImage4 from "../assets/slider/IMG_0098.jpeg";

// Pricing & Services
export const PRICING_DATA = {
  mainCards: [
    { eur: 5, bgn: 9.78 },
    { eur: 29, bgn: 56.72 },
    { eur: 35, bgn: 68.45 },
    { eur: 40, bgn: 78.23 },
    { eur: 45, bgn: 88.01 },
  ],
  studentCards: [
    { eur: 27, bgn: 52.81 },
    { eur: 29, bgn: 56.42 },
    { eur: 33, bgn: 64.54 },
  ],
  longTermCards: [
    { eur: 115, bgn: 224.92 },
    { eur: 220, bgn: 430.28 },
    { eur: 210, bgn: 410.72 },
    { eur: 400, bgn: 782.33 },
  ],
  trainingPrograms: [
    { eur: 25, bgn: 48.9 },
    { eur: 30, bgn: 60.63 },
    { eur: 35, bgn: 68.45 },
  ],
  nutritionPrograms: [
    { eur: 30, bgn: 60.63 },
    { eur: 55, bgn: 107.57 },
  ],
  specialCard: { eur: 60, bgn: 117.35 },
} as const;

export const ZONES = [
  {
    id: "free-weights",
    icon: "🏋️‍♂️",
  },
  {
    id: "cardio",
    icon: "🏃‍♀️",
  },
  {
    id: "plate-loaded",
    icon: "⚙️",
  },
] as const;

// Image URLs
export const GALLERY_IMAGES = [
  {
    id: "gym-1",
    src: gymImage4,
    alt: "Gym Interior 1",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: "gym-2",
    src: gymImage2,
    alt: "Gym Interior 2",
    colSpan: "md:col-span-2",
    rowSpan: "",
  },
  {
    id: "gym-3",
    src: gymImage3,
    alt: "Gym Interior 3",
    colSpan: "",
    rowSpan: "",
  },
  {
    id: "gym-4",
    src: gymImage1,
    alt: "Gym Interior 4",
    colSpan: "",
    rowSpan: "",
  },
] as const;

export const HERO_IMAGE = {
  src: heroImg,
  alt: "Трениращ човек",
} as const;

export const ABOUT_IMAGE = {
  src: aboutImg,
  alt: "Интериор",
} as const;

// Company Info
export const COMPANY_INFO = {
  name: "SkyPower",
  fullName: "SkyPower Fitness Centre",
  phone: "+359 899 448 300",
  email: "info@skypower.bg",
  location: {
    name: 'ТЦ "ЯВОР", ж.к. Младост 1, ет. 3',
    city: "Варна, 9020 България",
  },
  workingHours: [
    { day: "Понеделник - Петък", hours: "06:30 - 21:30" },
    { day: "Събота", hours: "08:00 - 20:00" },
    { day: "Неделя", hours: "08:00 - 20:00" },
  ],
} as const;

// Navigation Links
export const NAVIGATION_LINKS = [
  { href: "#about", label: "about" },
  { href: "#services", label: "zones" },
  { href: "#gallery", label: "gallery" },
  { href: "#pricing", label: "pricing" },
] as const;

// Animation Settings
export const AOS_CONFIG = {
  once: true,
  offset: 80,
  duration: 800,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  DARK_MODE: "gym-dark-mode",
} as const;
