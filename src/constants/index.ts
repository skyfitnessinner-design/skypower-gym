// Pricing & Services
export const PRICING_DATA = {
  dailyPass: 5,
  student: 29,
  women: 35,
  men: 40,
  unlimited: 45,
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
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop",
    alt: "Gym Interior 1",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: "gym-2",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
    alt: "Gym Interior 2",
    colSpan: "md:col-span-2",
    rowSpan: "",
  },
  {
    id: "gym-3",
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    alt: "Gym Interior 3",
    colSpan: "",
    rowSpan: "",
  },
  {
    id: "gym-4",
    src: "https://images.unsplash.com/photo-1594737625788-a93d5e9ce000?q=80&w=1471&auto=format&fit=crop",
    alt: "Gym Interior 4",
    colSpan: "",
    rowSpan: "",
  },
] as const;

export const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
  alt: "Трениращ човек",
} as const;

export const ABOUT_IMAGE = {
  src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop",
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
